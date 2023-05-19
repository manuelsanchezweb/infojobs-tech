import { Job } from '@/types/types'
import React from 'react'
import { JobCard } from './job-card'

export const JobsList = ({ jobs }: { jobs: Job[] }) => {
  return (
    <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
      {jobs.map((job, index) => (
        <JobCard key={index} job={job} />
      ))}
    </ul>
  )
}
