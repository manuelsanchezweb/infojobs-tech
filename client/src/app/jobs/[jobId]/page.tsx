'use client'

import { getJobById } from '@/api/getJobById'
import HeroGeneral from '@/components/hero/hero-general'
import { Logo } from '@/components/logo'
import { wait } from '@/functions/utils'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Page({ params }: { params: { jobId: string } }) {
  const [job, setJob] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(true)
  const staticJobId = '91b9529561425ba4e3f256c0feff5e'
  const router = useRouter()

  useEffect(() => {
    document.body.classList.add('overflow-hidden')
    const fetchData = async () => {
      try {
        const jobsData = await getJobById({ jobId: staticJobId })
        setJob(jobsData)
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
    <main className="flex flex-col items-center justify-center gap-12 pb-24">
      <HeroGeneral icon="qwik" />
      <h1 className="text-3xl md:text-5xl font-bold self-start container-wrapper">
        This is the id of the job offer: {params.jobId}
      </h1>
      <h2>
        Pero estamos prototipando, así que le hacemos fetch a uno que conocemos
        (see code)
      </h2>
      <div className="container-wrapper">
        <h3>{job.title}</h3>
        <p>{job.description}</p>
      </div>

      <div className="container-wrapper flex flex-col md:flex-row gap-2">
        <button className="btn" type="button" onClick={() => router.back()}>
          Volver a la página anterior
        </button>
        <button className="btn" type="button" onClick={() => router.push('/')}>
          Volver a main
        </button>
      </div>
    </main>
  )
}
