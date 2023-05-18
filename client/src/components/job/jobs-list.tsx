import { Job } from '@/types/types'
import React from 'react'

export const JobsList = ({ jobs }: { jobs: Job[] }) => {
  return (
    <ul className="flex flex-col gap-8">
      {jobs.map((job) => (
        <li className="flex flex-col items-start justify-start gap-2 border border-primaryDark p-6 rounded-sm">
          <h2 className="font-bold text-2xl">{job.title}</h2>
          <p className="text-gray-500">{job.company}</p>
          <p className="text-gray-500">{job.location}</p>
          <p className="text-gray-500">{job.description}</p>
          <a className="btn self-end mt-6" href="#">
            Ver más info
          </a>
        </li>
      ))}
    </ul>
  )
}
