import { getSkillsByStack } from '@/api/getSkillsByStack'
import NotFound from '@/app/not-found'
import { notFound } from 'next/navigation'

import HeroGeneral from '@/components/hero/hero-general'
import JobsSection from '@/components/job/jobs-section'
import { getTodayInSpanishFormat } from '@/functions/utils'
import { Stack } from '@/types/types'
import { ChartMonthTech } from '@/components/tremor/ChartMonthTech'
import { BarMostPopularSkills } from '@/components/tremor/BarMostPopularSkills'

const validStacks: Stack[] = [
  'frontend',
  'backend',
  'fullstack',
  'mobile',
  'devops',
  'data',
  'otro',
]
const isStackValid = (stack: string): stack is Stack => {
  return validStacks.includes(stack as Stack)
}

async function getStackData(stack: any) {
  if (!isStackValid(stack)) return notFound()

  try {
    const data = await getSkillsByStack({ stack })
    return data
  } catch (error) {
    console.log(error)
  }
}

export default async function Page({ params }: { params: { stack: any } }) {
  const skills = await getStackData(params.stack)

  return (
    <>
      <main className="flex flex-col items-center justify-center gap-12 pb-16">
        <HeroGeneral icon={params.stack} />

        <JobsSection
          title={`Últimas ofertas ${
            params.stack
          } a ${getTodayInSpanishFormat()}`}
          showFilters={false}
          stack={params.stack}
          numberOfJobsPerPage={9}
        />

        <BarMostPopularSkills
          title={`25 Skills más demandadas en ${params.stack}`}
          skills={skills}
        />

        <ChartMonthTech
          title="Tecnologías con más ofertas de trabajo"
          data={[
            {
              date: 'Enero 23',
              Python: 3892,
              React: 2318,
              JavaScript: 1756,
              Qwik: 1203,
              PHP: 603,
              Dart: 5000,
            },
            {
              date: 'Febrero 23',
              Python: 3789,
              React: 2810,
              JavaScript: 1789,
              Qwik: 2019,
              PHP: 1603,
              Dart: 5000,
            },
            {
              date: 'Marzo 23',
              Python: 3922,
              React: 1256,
              JavaScript: 1989,
              Qwik: 1876,
              PHP: 403,
              Dart: 3000,
            },
            {
              date: 'Abril 23',
              Python: 4000,
              React: 2156,
              JavaScript: 1210,
              Qwik: 2609,
              PHP: 2603,
              Dart: 5000,
            },
            {
              date: 'Mayo 23',
              Python: 3967,
              React: 2378,
              JavaScript: 356,
              Qwik: 3500,
              PHP: 4603,
              Dart: 5000,
            },
          ]}
        />
      </main>
    </>
  )
}