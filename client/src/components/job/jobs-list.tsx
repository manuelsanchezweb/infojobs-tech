import { Job } from '@/types/types'
import React, { useMemo } from 'react'
import { JobCard } from './job-card'
import usePagination from '@/hooks/usePagination'

const NUMBER_OF_JOBS_PER_PAGE = 6

export const JobsList = ({ filteredJobs }: { filteredJobs: Job[] }) => {
  const initialState = {
    currentPage: 1,
    pageSize: NUMBER_OF_JOBS_PER_PAGE,
    total: filteredJobs.length,
  }
  const [state, actions] = usePagination(initialState)

  const isPrevDisabled = state.currentPage === 1
  const isNextDisabled =
    state.currentPage === Math.ceil(filteredJobs.length / state.pageSize) ||
    filteredJobs.length === 0

  const sortedJobs = useMemo(() => {
    return [...filteredJobs].sort((a, b) => {
      // First sort by active status (inactive jobs go to the end)
      if (a.is_active !== b.is_active) {
        return b.is_active ? 1 : -1
      }

      // If both jobs have the same active status, sort by date
      // We assume that the created_at is in a format that can be used by Date
      const dateA = new Date(a.created_at)
      const dateB = new Date(b.created_at)
      return dateB.getTime() - dateA.getTime() // Sort in descending order
    })
  }, [filteredJobs])

  const displayedJobsPaginated = useMemo(() => {
    const start = (state.currentPage - 1) * state.pageSize
    const end = state.currentPage * state.pageSize
    return sortedJobs.slice(start, end)
  }, [sortedJobs, state.currentPage, state.pageSize])

  return (
    <>
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
        {displayedJobsPaginated.length > 0 ? (
          displayedJobsPaginated.map((job) => (
            <JobCard key={job.id} job={job} />
          ))
        ) : (
          <p>
            Por ahora no tenemos ofertas que se ajusten a esos criterios. Lo
            sentimos.
          </p>
        )}
      </ul>
      <div className="flex flex-col mt-12">
        <div className="flex justify-center gap-8">
          <button
            onClick={actions.prevPage}
            disabled={isPrevDisabled}
            className="disabled:text-gray-300 disabled:pointer-events-none"
          >
            Previous page
          </button>
          <button
            onClick={actions.nextPage}
            disabled={isNextDisabled}
            className="disabled:text-gray-300 disabled:pointer-events-none"
          >
            Next page
          </button>
        </div>
      </div>
    </>
  )
}
