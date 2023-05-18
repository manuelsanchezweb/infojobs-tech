import { Job } from '@/types/types'
import React from 'react'
import { JobCard } from './job-card'
import { getJobsData } from '@/api/getJobsData'

export const JobsList = async () => {
  const jobs = await getJobsData()

  return (
    <ul className="flex flex-col gap-8">
      {jobs.map((job) => (
        <JobCard job={job} />
      ))}
    </ul>
  )
}
