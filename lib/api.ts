import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

import { Project, Book, Failure, Learning, BrainEntry } from '../types'

const getContentDirectory = (type: string) =>
  join(process.cwd(), `data/${type}`)

export function getSlugs(dir: string) {
  const files = fs.readdirSync(dir).filter((file) => file.includes('.md'))
  return files
}

export function getContentBySlug(
  type: string,
  slug: string,
  fields: string[] = []
): Project | Book | Failure | Learning | BrainEntry {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(getContentDirectory(type), `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items: {
    [key: string]: string | (string | null)[]
  } = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }

    if (field === 'content') {
      items[field] = content
        // Replace all second brain links
        .replace(
          /\[\[(.*?)\]\]/g,
          (_, text) => `[${text}](/second-brain/${escape(text.toLowerCase())})`
        )
    }

    if (type === 'second-brain' && field === 'backlinks') {
      const slugs = getSlugs(getContentDirectory(type))
      items[field] = slugs
        .map((slug) => {
          const slugContent = getContentBySlug(type, slug, ['content'])
          const regexString = `\\[${realSlug}\\]`
          const regex = new RegExp(regexString, 'im')
          return slugContent.content.match(regex)
            ? slug.replace(/\.md$/, '')
            : null
        })
        .filter(Boolean)
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items as Project | Book | Failure | Learning | BrainEntry
}

export function getAllContent(type: string, fields: string[] = []) {
  let slugs = getSlugs(getContentDirectory(type))

  let content = slugs.map((slug) => getContentBySlug(type, slug, fields))

  // sort by date in descending order
  if (type !== 'second-brain') {
    content = content.sort((a, b) => {
      // @ts-ignore
      const aCreatedAt = new Date(a.date)
      // @ts-ignore
      const bCreatedAt = new Date(b.date)
      return bCreatedAt.getTime() - aCreatedAt.getTime()
    })
  }

  return content as (Project | Book | Failure | Learning | BrainEntry)[]
}
