import { Job } from '@/types/types'
import React from 'react'
import { JobCard } from './job-card'

export const JobsList = ({ jobs }: { jobs: Job[] }) => {
  return (
    <ul className="flex flex-col gap-8">
      {jobs.map((job) => (
        <JobCard job={job} />
      ))}
    </ul>
  )
}
