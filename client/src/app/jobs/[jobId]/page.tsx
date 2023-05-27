import { getJobById } from '@/api/getJobById'
import NotFound from '@/app/not-found'
import HeroGeneral from '@/components/hero/hero-general'

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

  if (!job || job?.error) {
    return <NotFound />
  }

  return (
    <>
      <main className="flex flex-col items-center justify-center gap-12 pb-16">
        <HeroGeneral icon={job?.stack} />
        <div className="container-wrapper">
          <div className="mb-12">
            <h1 className="text-3xl md:text-5xl font-bold self-start mb-2">
              {job?.title}
            </h1>
            <p>
              {' '}
              <strong>Lugar:</strong> {job?.city}, {job?.country?.value}
            </p>
            <small>
              Id: <i>{job.id}</i>
            </small>
          </div>

          <div className="two-col flex flex-col md:flex-row gap-12 justify-between text-justify">
            {/* // Information  */}
            <div>
              <div className="flex flex-col mb-8">
                <h2 className="font-bold text-xl">Descripción de la oferta:</h2>
                <p>{job.description}</p>
              </div>

              {job.contractDuration && (
                <div className="flex flex-col mb-8">
                  <h3 className="font-bold text-xl">Duración del contrato:</h3>
                  <p>{job.contractDuration}</p>
                </div>
              )}

              {job.contractType && (
                <div className="flex flex-col mb-8">
                  <h3 className="font-bold text-xl">Tipo de contrato:</h3>
                  <p>{job.contractType.value}</p>
                </div>
              )}

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
              <p className="flex flex-wrap items-center gap-2 max-w-[250px]">
                Skills:{' '}
                {job?.skillsList.map((skill) => (
                  <span
                    className="flex bg-gray-200 rounded-full border px-3 py-1 text-[8px] flex-nowrap font-semibold text-gray-700"
                    key={skill.skill}
                  >
                    {skill.skill}
                  </span>
                ))}
              </p>
            </div>

            {/* // Extra info and apply  */}
            <div>
              <div className="bg-primaryTransparent min-w-[300px] p-6 border border-black flex flex-col gap-4 text-center items-center">
                <p className="text-white">¿Te interesa? Aplica aquí</p>
                <a className="btn" href={job?.link}>
                  Link de la oferta
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
