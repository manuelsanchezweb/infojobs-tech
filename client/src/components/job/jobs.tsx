'use client'

import React, { useEffect, useState } from 'react'
import { getJobsData } from '@/api/getJobsData'
import { JobsList } from './jobs-list'
import JobsFilter from './jobs-filter'
import { Job, Stack } from '@/types/types'
import { animate, stagger } from 'motion'
import { filterJobsByStack } from '@/functions/functions'

export const Jobs = () => {
  const [jobs, setJobs] = useState<Job[]>([])
  const [selectedStack, setSelectedStack] = useState<Stack | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  let filteredJobs =
    selectedStack === null ? jobs : filterJobsByStack(jobs, selectedStack)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jobsData = await getJobsData()
        setJobs(jobsData)
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    const li = document.querySelectorAll('li')
    if (!li[0]) return

    animate(
      li,
      { opacity: [0, 1], scale: [0, 1] },
      { delay: stagger(0.1), easing: 'ease-in-out' }
    )
  }, [selectedStack, jobs])

  if (loading) return <p>Cargando...</p>

  return (
    <>
      <JobsFilter
        setSelectedStack={setSelectedStack}
        selectedStack={selectedStack}
        jobs={jobs}
      />
      <JobsList jobs={filteredJobs} />
    </>
  )
}
