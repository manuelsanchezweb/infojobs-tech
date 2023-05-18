import { Logo } from '@/components/logo'
import { IconGithub } from '@/icons/github'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-12 px-4">
      <div className="flex flex-col items-end justify-end">
        <Logo customClass="text-primary" />
        <small className="font-bold italic text-2xl">Tech</small>
      </div>
      <p>Pronto más y mejor...</p>
      <a
        className="btn"
        href="https://github.com/manuelsanchezweb/infojobs-tech"
      >
        <IconGithub /> Ver repo
      </a>
    </main>
  )
}
