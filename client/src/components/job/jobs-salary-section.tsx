import { calculateAverageSalariesByStack } from '@/functions/functions'
import { Card, Title, DonutChart } from '@tremor/react'
import { GraphColors, Job } from '@/types/types'
import React, { useEffect, useState } from 'react'
import {
  firstLetterUppercase,
  getTodayInSpanishFormat,
  valueFormatter,
} from '@/functions/utils'
import { getJobsData } from '@/api/getJobsData'

const JobsSalarySection = ({ title }: { title?: string }) => {
  const [jobs, setJobs] = useState<Job[] | null>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jobsData = await getJobsData()
        setJobs(jobsData)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

  if (!jobs) return

  const averageSalariesByStack = calculateAverageSalariesByStack(jobs)
  const averageSalariesByStackArray = Object.entries(averageSalariesByStack)
    .map(([stack, avgSalary]) => {
      return { stack, avgSalary }
    })
    .filter((item) => item.stack !== 'otro')

  const getColorByIndex = (index: number) => {
    const colors = ['slate', 'violet', 'indigo', 'rose', 'cyan', 'amber']
    return colors[index]
  }

  return (
    <section className="w-full container-wrapper">
      <h2 className="self-start text-left font-bold text-4xl max-w-[900px] mb-8">
        {title || 'Media de salario por stack'}
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

      <Card className="w-full">
        <Title>Comparativa de salarios a día {getTodayInSpanishFormat()}</Title>
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
