'use client'

import { filterJobsByStack } from '@/functions/functions'
import { Job, Stack } from '@/types/types'
import React, { useEffect, useMemo, useState } from 'react'
import { animate, stagger } from 'motion'
import JobsFilter from './jobs-filter'
import { JobsList } from './jobs-list'
import { getTodayInSpanishFormat } from '@/functions/utils'

const JobsSection = ({ jobs }: { jobs: Job[] }) => {
  const [selectedStack, setSelectedStack] = useState<Stack | null>(null)

  const filteredJobs = useMemo(() => {
    return selectedStack === null
      ? jobs
      : filterJobsByStack(jobs, selectedStack)
  }, [jobs, selectedStack])

  useEffect(() => {
    const li = document.querySelectorAll('.job-card')
    if (!li[0]) return

    animate(
      li,
      { opacity: [0, 1], scale: [0, 1] },
      { delay: stagger(0.1), easing: 'ease-in-out' }
    )
  }, [selectedStack, jobs])

  return (
    <section className="w-full">
      <h1 className="self-start text-left font-bold text-5xl max-w-[900px] mb-12">
        Últimas ofertas de trabajo tecnológicas a {getTodayInSpanishFormat()}
      </h1>
      <JobsFilter
        setSelectedStack={setSelectedStack}
        selectedStack={selectedStack}
        jobs={jobs}
      />
      <JobsList filteredJobs={filteredJobs} />
    </section>
  )
}

export default JobsSection
