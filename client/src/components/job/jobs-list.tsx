import { Job } from '@/types/types'
import React from 'react'
import { JobCard } from './job-card'
import { getTodayInSpanishFormat } from '@/functions/utils'

export const JobsList = ({ jobs }: { jobs: Job[] }) => {
  return (
    <>
      <h1 className="self-start text-left font-bold text-5xl max-w-[900px]">
        Últimas ofertas de trabajo tecnológicas a {getTodayInSpanishFormat()}
      </h1>
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
        {jobs.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </ul>
    </>
  )
}
