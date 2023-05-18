import { getJobsData } from '@/api/getJobsData'
import { JobsList } from '@/components/job/jobs-list'
import { Logo } from '@/components/logo'
import { IconGithub } from '@/icons/github'

export default async function Home() {
  const jobs = await getJobsData()

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-12 p-4">
      <div className="flex flex-col items-end justify-end">
        <Logo customClass="text-primary" />
        <small className="font-bold italic text-2xl">Tech</small>
      </div>
      <JobsList jobs={jobs} />

      <a
        className="btn"
        href="https://github.com/manuelsanchezweb/infojobs-tech"
      >
        <IconGithub /> Ver repo
      </a>
    </main>
  )
}
