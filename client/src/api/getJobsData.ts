import { Job } from '@/types/types'

export async function getJobsData(): Promise<Job[]> {
  const url =
    process.env.NODE_ENV === 'production'
      ? 'https://infojobs-tech.vercel.app/api/jobs'
      : 'http://localhost:3000/api/jobs'

  const res = await fetch(url)
  const data = await res.json()
  const jobs = data.jobs

  return jobs
}
