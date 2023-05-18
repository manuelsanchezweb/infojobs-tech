import { Job, Technology } from '@/types/types'
import React from 'react'

export const JobCard = ({ job }: { job: Job }) => {
  return (
    <li
      key={job.id}
      className="flex flex-col items-start justify-start gap-2 border border-primaryDark p-6 rounded-sm"
    >
      <h2 className="font-bold text-2xl">{job.title}</h2>
      <p className="text-gray-500">{job.company}</p>
      <p className="text-gray-500">{job.location}</p>
      <p className="text-gray-500">{job.description}</p>
      <div className="flex flex-col xs:flex-row sm:items-center xs:justify-between gap-4 w-full mt-6">
        <div className="flex items-center gap-2">
          {job.technologies.map((technology: Technology | string) => (
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              {technology}
            </span>
          ))}
        </div>
        <a
          title={`Ver más info sobre ${job.title}`}
          className="btn xs:self-end "
          target="_blank"
          rel="nofollow noopener"
          href={job.url}
        >
          Ver más info
        </a>
      </div>
    </li>
  )
}
