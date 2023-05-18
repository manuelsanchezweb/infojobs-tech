import { Job } from '@/types/types'
import fakeJobsData from '../../data/jobs.json' // the path to your fake JSON file

export async function getJobsData(): Promise<Job[]> {
  const url =
    process.env.NODE_ENV === 'production'
      ? 'https://infojobs-tech.vercel.app/api/jobs'
      : 'http://localhost:3000/api/jobs'

  try {
    const res = await fetch(url)
    const data = await res.json()
    const jobs = data.jobs

    return jobs
  } catch (error) {
    console.error(`Fetch failed: ${error}`)
    return fakeJobsData as Job[]
  }
}
