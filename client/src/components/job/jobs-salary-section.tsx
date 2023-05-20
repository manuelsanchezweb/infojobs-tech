import { calculateAverageSalariesByStack } from '@/functions/functions'
import { Card, Title, DonutChart } from '@tremor/react'
import { GraphColors, Job } from '@/types/types'
import React from 'react'
import {
  firstLetterUppercase,
  getTodayInSpanishFormat,
  valueFormatter,
} from '@/functions/utils'

const JobsSalarySection = ({ jobs }: { jobs: Job[] }) => {
  const averageSalariesByStack = calculateAverageSalariesByStack(jobs)
  const averageSalariesByStackArray = Object.entries(
    averageSalariesByStack
  ).map(([stack, avgSalary]) => {
    return { stack, avgSalary }
  })

  const getColorByIndex = (index: number) => {
    const colors = ['slate', 'violet', 'indigo', 'rose', 'cyan', 'amber']
    return colors[index]
  }

  return (
    <section className="w-full">
      <h2 className="self-start text-left font-bold text-3xl max-w-[900px] mb-8">
        Stacks mejor pagados en la actualidad
      </h2>

      <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 w-full my-6">
        {averageSalariesByStackArray.map((item, index) => (
          <li key={index}>
            <Card className="max-w-lg">
              <Title>{firstLetterUppercase(item.stack)}</Title>
              <DonutChart
                className="mt-6"
                data={[
                  {
                    stack: item.stack,
                    avgSalary: item.avgSalary,
                  },
                ]}
                category="avgSalary"
                index="stack"
                valueFormatter={valueFormatter}
                colors={[getColorByIndex(index) as GraphColors]}
              />
            </Card>
          </li>
        ))}
      </ul>

      <Card className="max-w-lg">
        <Title>Cifras actualizadas a {getTodayInSpanishFormat()}</Title>
        <DonutChart
          className="mt-6 text-sm"
          data={averageSalariesByStackArray}
          category="avgSalary"
          index="stack"
          valueFormatter={valueFormatter}
          colors={['slate', 'violet', 'indigo', 'rose', 'cyan', 'amber']}
        />
      </Card>
    </section>
  )
}

export default JobsSalarySection
