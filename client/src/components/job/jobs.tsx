'use client'

import React, { useEffect, useState } from 'react'
import { getJobsData } from '@/api/getJobsData'
import { Job } from '@/types/types'
// import { JobsSalarySection } from './jobs-salary-section'
import { wait } from '@/functions/utils'
import JobsSalarySection from './jobs-salary-section'
import JobsSection from './jobs-section'
import { Logo } from '../logo'
// import { getJobById } from '@/api/getJobById'

const Jobs = () => {
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  // const [selectedJob, setSelectedJob] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jobsData = await getJobsData()
        setJobs(jobsData)
        await wait(1.5)
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

  // useEffect(() => {
  //   const fetchJobId = async () => {
  //     try {
  //       const job = await getJobById()
  //       setSelectedJob(job)
  //       setLoading(false)
  //       console.log('Selected Job', selectedJob)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }

  //   fetchJobId()
  // }, [])

  if (loading)
    return (
      <div className="min-h-screen flex flex-col gap-8 fixed w-full m-auto justify-center items-center bg-white z-10 px-4">
        <Logo customClass="text-primary w-48 h-auto" />
        <p className="text-xl font-bold text-center max-w-[600px]">
          El sector IT en España es como un gran código en constante evolución.
          ¡Estás a un commit de ser parte de él!
        </p>
      </div>
    )

  return (
    <>
      <JobsSection jobs={jobs} />
      <JobsSalarySection jobs={jobs} />
    </>
  )
}

export default Jobs
