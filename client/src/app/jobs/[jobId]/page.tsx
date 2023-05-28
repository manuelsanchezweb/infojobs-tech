import { getJobById } from '@/api/getJobById'
import NotFound from '@/app/not-found'
import HeroGeneral from '@/components/hero/hero-general'
import { convertDateToStandardFormat } from '@/functions/utils'

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
            <h1 className="text-3xl md:text-4xl font-bold self-start mb-2 max-w-[612px]">
              {job?.title}
            </h1>
            <p>
              {' '}
              <strong>Lugar:</strong> {job?.city}, {job?.country?.value}
            </p>
            {job.creationDate && (
              <p>
                <strong>Fecha de publicación:</strong>{' '}
                {convertDateToStandardFormat(job.creationDate)}
              </p>
            )}
            <small>
              Id: <i>{job.id}</i>
            </small>
          </div>

          <h2 className="text-2xl font-bold border-b border-primaryDark mb-8">
            Información de la oferta
          </h2>

          <div className="two-col flex flex-col md:flex-row gap-12 justify-between md:text-justify">
            {/* // General info  */}
            <div>
              {job.subcategory && (
                <div className="flex flex-wrap mb-8 items-center gap-2">
                  <h3 className="font-bold text-xl">
                    Subcategoría de la oferta:
                  </h3>
                  <p>{job.subcategory.value}</p>
                </div>
              )}

              {job.skillsList && (
                <div className="flex flex-col gap-2 mb-8">
                  <h3 className="font-bold text-xl">
                    Conocimientos que buscan:
                  </h3>
                  <div className="flex gap-2">
                    {job?.skillsList.map((skill) => (
                      <span
                        className="flex bg-gray-200 rounded-full border px-3 py-1 text-[8px] flex-nowrap font-semibold text-gray-700"
                        key={skill.skill}
                      >
                        {skill.skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {job.jobLevel && (
                <div className="flex flex-wrap mb-8 items-center gap-2">
                  <h3 className="font-bold text-xl">Nivel del puesto:</h3>
                  <p>{job.jobLevel.value}</p>
                </div>
              )}

              {job.contractDuration && (
                <div className="flex flex-wrap mb-8 items-center gap-2">
                  <h3 className="font-bold text-xl">Duración del contrato:</h3>
                  <p>{job.contractDuration}</p>
                </div>
              )}

              {job.contractType && (
                <div className="flex flex-wrap mb-8 items-center gap-2">
                  <h3 className="font-bold text-xl">Tipo de contrato:</h3>
                  <p>{job.contractType.value}</p>
                </div>
              )}

              {job.studiesMin && (
                <div className="flex flex-wrap mb-8 items-center gap-2">
                  <h3 className="font-bold text-xl">Estudios mínimos:</h3>
                  <p>{job.studiesMin.value}</p>
                </div>
              )}

              {job.experienceMin && (
                <div className="flex flex-wrap mb-8 items-center gap-2">
                  <h3 className="font-bold text-xl">Experiencia mínima:</h3>
                  <p>{job.experienceMin.value}</p>
                </div>
              )}

              {job.minRequirements && (
                <div className="flex flex-wrap mb-8 items-center gap-2">
                  <h3 className="font-bold text-xl">Requisitos mínimos:</h3>
                  <p>{job.minRequirements}</p>
                </div>
              )}

              {job.desiredRequirements && (
                <div className="flex flex-wrap mb-8 items-center gap-2">
                  <h3 className="font-bold text-xl">Requisitos que suman:</h3>
                  <p>{job.desiredRequirements}</p>
                </div>
              )}

              {job.salaryDescription && (
                <div className="flex flex-wrap mb-8 items-center gap-2">
                  <h3 className="font-bold text-xl">
                    Descripción del salario:
                  </h3>
                  <p>{job.salaryDescription}</p>
                </div>
              )}

              <div className="flex flex-col">
                <h2 className="font-bold text-xl">Descripción de la oferta:</h2>
                <p>{job.description}</p>
              </div>

              <a
                className="btn hidden md:flex md:my-4"
                href={job?.link}
                title="Aplicar a la oferta"
              >
                Link de la oferta
              </a>
            </div>

            {/* // Extra info and apply  */}
            <div>
              <div className="flex flex-wrap mb-2 items-center gap-2">
                <h3 className="font-bold text-xl">Solicitudes:</h3>
                <p>{job.applications}</p>
              </div>

              {job.vacancies && (
                <div className="flex flex-wrap mb-4 items-center gap-2">
                  <h3 className="font-bold text-xl">Vacantes:</h3>
                  <p>{job.vacancies}</p>
                </div>
              )}
              <div className="bg-primaryTransparent min-w-[300px] p-6 border border-black flex flex-col gap-4 text-center items-center">
                <p className="text-white">¿Te interesa? Aplica aquí</p>
                <a className="btn" href={job?.link} title="Aplicar a la oferta">
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
