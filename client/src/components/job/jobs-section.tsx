'use client'

import { Job, Stack } from '@/types/types'
import React, { useEffect, useState } from 'react'
import JobsFilter from './jobs-filter'
import { JobsList } from './jobs-list'
import { getTodayInSpanishFormat, wait } from '@/functions/utils'
import { Logo } from '../logo'
import { getJobsData } from '@/api/getJobsData'

const JobsSection = ({
  showFilters,
  stack,
  title,
}: {
  showFilters?: boolean
  stack?: Stack
  title?: string
}) => {
  const [selectedStack, setSelectedStack] = useState<Stack | null>(
    stack || null
  )
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    document.body.classList.add('overflow-hidden')
    const fetchData = async () => {
      try {
        const jobsData = await getJobsData()
        setJobs(jobsData || [])
        await wait(0.5)
        setLoading(false)
      } catch (error) {
        console.log(error)
      }

      document.body.classList.remove('overflow-hidden')
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <div className="h-screen flex flex-col gap-8 fixed top-0 left-0 overflow-hidden overflow-y-hidden w-full m-auto justify-center items-center bg-white z-10 px-4">
        <Logo customClass="text-primary w-48 h-auto" />
        <p className="text-xl font-bold text-center max-w-[600px]">
          El sector IT en España es como un gran código en constante evolución.
          ¡Estás a un commit de ser parte de él!
        </p>
      </div>
    )
  }

  return (
    <section className="w-full container-wrapper">
      <h1 className="self-start text-left font-bold text-3xl md:text-5xl max-w-[900px] mb-12">
        {title ||
          `Últimas ofertas de trabajo tecnológicas a ${getTodayInSpanishFormat()}`}
      </h1>
      {showFilters && (
        <JobsFilter
          setSelectedStack={setSelectedStack}
          selectedStack={selectedStack}
          jobs={jobs}
        />
      )}
      <JobsList jobs={jobs} selectedStack={selectedStack} />
    </section>
  )
}

export default JobsSection
