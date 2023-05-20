import { calculateAverageSalariesByStack } from '@/functions/functions'
import { Card, Title, DonutChart } from '@tremor/react'
import { Job } from '@/types/types'
import React from 'react'
import {
  firstLetterUppercase,
  getTodayInSpanishFormat,
} from '@/functions/utils'

export const JobSalarySection = ({ jobs }: { jobs: Job[] }) => {
  const averageSalariesByStack = calculateAverageSalariesByStack(jobs)
  const averageSalariesByStackArray = Object.entries(
    averageSalariesByStack
  ).map(([stack, avgSalary]) => {
    return { stack, avgSalary }
  })

  const cities = [
    {
      name: 'New York',
      sales: 9800,
    },
    {
      name: 'London',
      sales: 4567,
    },
    {
      name: 'Hong Kong',
      sales: 3908,
    },
    {
      name: 'San Francisco',
      sales: 2400,
    },
    {
      name: 'Singapore',
      sales: 1908,
    },
    {
      name: 'Zurich',
      sales: 1398,
    },
  ]

  const valueFormatter = (number: number) =>
    `$ ${Intl.NumberFormat('us').format(number).toString()}`

  const getColorByIndex = (index: number) => {
    const colors = ['slate', 'violet', 'indigo', 'rose', 'cyan', 'amber']
    return colors[index]
  }

  return (
    <section className="w-full">
      <h2 className="self-start text-left font-bold text-3xl max-w-[900px] mb-8">
        ¿Qué stack tecnológico está mejor pagado?
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
                colors={[getColorByIndex(index) as any]}
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
