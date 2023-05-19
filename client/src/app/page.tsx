import { Jobs } from '@/components/job/jobs'
import { Logo } from '@/components/logo'
import { ChartMonthTech } from '@/components/tremor/ChartMonthTech'
import { IconGithub } from '@/icons/github'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-12 py-24 px-4">
      <div className="flex flex-col items-end justify-end">
        <Logo customClass="text-primary w-64 h-auto" />
        <small className="font-bold italic text-2xl">Tech</small>
      </div>

      <ChartMonthTech />

      <h1 className="self-start text-left font-bold text-4xl">
        ¡Encuentra tu trabajo ideal con este moderno buscador!
      </h1>
      <Jobs />

      <a
        className="btn"
        href="https://github.com/manuelsanchezweb/infojobs-tech"
      >
        <IconGithub /> Ver repo
      </a>
    </main>
  )
}
