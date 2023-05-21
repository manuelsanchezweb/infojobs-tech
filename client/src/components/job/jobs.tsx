'use client'

import React from 'react'
import JobsSalarySection from './jobs-salary-section'
import JobsSection from './jobs-section'

const Jobs = () => {
  return (
    <>
      <JobsSection showFilters={true} />
      <JobsSalarySection />
    </>
  )
}

export default Jobs
