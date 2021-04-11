import { GetStaticProps, GetStaticPaths } from 'next'
import { format } from 'date-fns'
import { NextSeo } from 'next-seo'

import { Writing } from '../../types'

import markdownToHtml from '../../lib/markdownToHtml'
import { getContentBySlug, getAllContent } from '../../lib/api'

import withLayout from '../../components/withLayout'

function WordPage({ writing }: { writing: Writing }) {
  return (
    <>
      <NextSeo
        title={writing.title}
        description={writing.description}
        openGraph={{
          title: writing.title,
          description: writing.description,
        }}
      />

      <header>
        {writing?.heroImage && (
          <div className="px-10">
            <div
              className="mb-10 mx-auto h-64 sm:h-96 max-w-4xl bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url(${writing.heroImage})`,
              }}
            ></div>
          </div>
        )}

        <div className="mx-auto max-w-3xl px-10">
          <h1 className="text-4xl font-am">{writing.title}</h1>

          <div className="text-xs">
            written {format(new Date(writing.date), 'MMMM do, y')}
          </div>
        </div>
      </header>

      <article
        className="prose mx-auto max-w-3xl p-10"
        dangerouslySetInnerHTML={{ __html: writing.content }}
      />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const writing = getContentBySlug('words', params?.slug as string, [
    'title',
    'description',
    'date',
    'slug',
    'content',
    'tags',
    'heroImage',
  ])

  const content = await markdownToHtml(writing.content || '')

  return {
    props: {
      writing: {
        ...writing,
        content,
      },
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const words = getAllContent('words', ['slug']) as Writing[]

  return {
    paths: words.map((writing) => {
      return {
        params: {
          slug: writing.slug,
        },
      }
    }),
    fallback: false,
  }
}

export default withLayout(WordPage)
