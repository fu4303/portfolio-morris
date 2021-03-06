import { GetStaticProps, GetStaticPaths } from 'next'
import { format } from 'date-fns'
import { NextSeo } from 'next-seo'

import { Book } from '../../types'

import markdownToHtml from '../../lib/markdownToHtml'
import { getContentBySlug, getAllContent } from '../../lib/api'

import withLayout from '../../components/withLayout'
import BookRating from '../../components/BookRating'

function BookPage({ book }: { book: Book }) {
  return (
    <>
      <NextSeo
        title={book.title}
        description={book.description}
        openGraph={{
          title: book.title,
          description: book.description,
        }}
      />

      <header className="mx-auto max-w-3xl px-10">
        <h1 className="font-am text-4xl">{book.title}</h1>

        <h2 className="text-base">written by {book.author}</h2>

        <div className="text-xs space-x-2">
          <span>
            <BookRating rating={book.rating} />
          </span>

          <span>|</span>

          <span>
            finished reading on {format(new Date(book.readDate), 'MMMM do, y')}
          </span>
        </div>
      </header>

      <article
        className="prose mx-auto max-w-3xl p-10"
        dangerouslySetInnerHTML={{ __html: book.content }}
      />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const book = getContentBySlug('books', params?.slug as string, [
    'title',
    'description',
    'readDate',
    'slug',
    'content',
    'rating',
    'author',
  ])

  const content = await markdownToHtml(book.content || '')

  return {
    props: {
      book: {
        ...book,
        content,
      },
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const books = getAllContent('books', ['slug']) as Book[]

  return {
    paths: books.map((book) => {
      return {
        params: {
          slug: book.slug,
        },
      }
    }),
    fallback: false,
  }
}

export default withLayout(BookPage)
