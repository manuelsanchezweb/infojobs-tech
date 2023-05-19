import { Job, Technology } from '@/types/types'
import React from 'react'

export const JobCard = ({ job }: { job: Job }) => {
  return (
    <li
      key={job.id}
      className="flex flex-col items-start justify-start gap-2 border border-primaryDark p-5 rounded-sm"
    >
      <h2 className="font-bold text-xl max-w-[250px]">{job.title}</h2>
      <p className="text-gray-500 text-xs my-0">
        <strong>{job.company}</strong> / {job.location}
      </p>
      {job.min_salary && job.max_salary && (
        <p className="text-gray-500 text-xs my-0">
          <strong>Salario:</strong> {job.min_salary} - {job.max_salary}
        </p>
      )}

      <div className="flex flex-col pt-4 gap-4 w-full mt-auto">
        <div className="flex flex-wrap items-center gap-2 max-w-[250px]">
          {job.technologies.map((technology: Technology | string) => (
            <span className="flex bg-gray-200 rounded-full px-3 py-1 text-[8px] flex-nowrap font-semibold text-gray-700">
              {technology}
            </span>
          ))}
        </div>
        <a
          title={`Ver más info sobre ${job.title}`}
          className="btn text-xs"
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
