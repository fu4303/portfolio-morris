import { addWeeks, isPast } from 'date-fns'
import { NextSeo } from 'next-seo'
import Link from 'next/link'

import withLayout from '../components/withLayout'
import PageSummary from '../components/PageSummary'

function Life() {
  const lifeCalendar = []
  // Start the date on my birthday
  let prevDate = new Date('1990-05-06')

  // Create 88 rows for my 80 years
  for (let i = 0; i < 80; i++) {
    // Create a year
    const year = []

    // Fill my year with weeks
    for (let j = 0; j < 52; j++) {
      prevDate = addWeeks(new Date(prevDate), 1)
      year.push({ date: prevDate })
    }

    lifeCalendar.push(year)
  }

  return (
    <>
      <NextSeo
        title="💀"
        description="The rest of my life, visualized."
        openGraph={{
          title: '💀',
          description: 'The rest of my life, visualized.',
        }}
      />

      <header className="mx-auto max-w-3xl space-y-5">
        <h1 className="text-4xl font-am px-10">my life in weeks</h1>

        <PageSummary>
          <p>
            In Meditations{' '}
            <Link href="/second-brain/marcus-aurelius">
              <a>Marcus Aurelius</a>
            </Link>{' '}
            said,{' '}
            <span className="font-bold">
              "You could leave life right now. Let that determine what you do
              and say and think."
            </span>
          </p>

          <p>
            We often optimize our lives for money, fun, or output. We know we
            have limited time but it's hard to put it all in context. I've been
            trying to remind myself that my time is limited. I've{' '}
            <a href="/projects/social-media-death-clock">
              built projects around the idea
            </a>
            ,{' '}
            <a
              href="https://dailystoic.com/you-could-leave-life-right-now-let-that-determine-what-you-do-and-say-and-think/"
              target="_blank"
              rel="noopener noreferrer"
            >
              purchased a token as a reminder
            </a>
            , and I even have some tattoos related to the theme. But still, it's
            hard to visualize.
          </p>

          <p>
            This is a reminder for me to cherish the life I have. To do the
            things I want to do and be with the people I want to be with. To let
            go of the things that don't matter or aren't in my control.{' '}
            <a
              href="https://youtu.be/arj7oStGLkU"
              target="_blank"
              rel="noopener noreferrer"
            >
              It's a reminder of the things I am procrastinating on
            </a>
            .
          </p>

          <p>
            Each box below represents one week of my life. The amount of years
            are based on the{' '}
            <a
              href="https://en.wikipedia.org/wiki/List_of_countries_by_life_expectancy"
              target="_blank"
              rel="noopener noreferrer"
            >
              average life expectancy of a male living in Canada
            </a>
            . Everything that is filled out is in the past.
          </p>

          <p>Time to do something about those remaining blocks.</p>
        </PageSummary>
      </header>

      <main className="mx-auto max-w-3xl space-y-10 p-10">
        <div className="space-y-2 w-full pt-2">
          {lifeCalendar.map((year, i) => (
            <div key={year.toString()} className="grid gap-1 w-full relative">
              {i % 4 === 0 && (
                <div className="hidden sm:block absolute text-xs -mt-1 -ml-5 text-right w-4 text-gray-400">
                  {i}
                </div>
              )}
              {year.map((week) => (
                <div
                  key={week.date.toISOString()}
                  className={`h-1 w-1 sm:rounded-sm sm:h-2 sm:w-2 border border-gray-400 ${
                    isPast(week.date) ? 'bg-am-green-light border-none' : ''
                  }`}
                ></div>
              ))}
            </div>
          ))}
        </div>
      </main>

      <style jsx>{`
        .grid {
          grid-template-columns: repeat(52, minmax(0, 1fr));
        }
      `}</style>
    </>
  )
}

export default withLayout(Life)
