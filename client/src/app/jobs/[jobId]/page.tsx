import { getJobById } from '@/api/getJobById'
import HeroGeneral from '@/components/hero/hero-general'
import { Logo } from '@/components/logo'
import Footer from '@/components/footer/footer'
import Link from 'next/link'

async function getJobData(id: string) {
  try {
    const data = await getJobById({ jobId: id })
    return data
  } catch (error) {
    console.log(error)
  }
}

export default async function Page({ params }: { params: { jobId: string } }) {
  const job = await getJobData(params.jobId)

  if (!job) {
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
    <>
      <main className="flex flex-col items-center justify-center gap-12 pb-16">
        <HeroGeneral icon="qwik" />
        <div className="container-wrapper">
          <h1 className="text-3xl md:text-5xl font-bold self-start">
            This is the id of the job offer: {job.id}
          </h1>
          <h2>
            Pero estamos prototipando, así que le hacemos fetch a uno que
            conocemos:
          </h2>

          <br />
          <h3>{job?.title}</h3>
          <p>{job?.description}</p>
          <p>Link de la oferta: {job?.link}</p>
          <p>Duración del contrato: {job?.contractDuration}</p>
          <p>Tipo de contrato: {job?.contractType.value}</p>
          <p>
            Lugar: {job?.city}, {job?.country.value}
          </p>
          <p>Fecha de publicación de la oferta: {job?.creationDate}</p>
          <p>Experiencia mínima: {job?.experienceMin.value}</p>
          <p>Requisitos mínimos: {job?.minRequirements}</p>
          <p>Estudios mínimos: {job?.studiesMin.value}</p>
          <p>Requisitos que suman: {job?.desiredRequirements}</p>
          <p>Descripción del salario: {job?.salaryDescription}</p>
          <p>Subcategoría de la oferta: {job?.subcategory.value}</p>
          <p>Nivel del puesto: {job?.jobLevel.value}</p>
          <p>Numero de solicitudes: {job?.applications}</p>
          <p>Numero de vacantes: {job?.vacancies}</p>
          <p>
            Skills:{' '}
            {job?.skillsList.map((skill) => (
              <span key={skill.skill}>{skill.skill}</span>
            ))}
          </p>
        </div>

        <div className="container-wrapper flex flex-col md:flex-row gap-2">
          <Link className="btn" type="button" href="/">
            Volver a main
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
