import InteractiveElement from '@/components/interactive-element/interactive-element'
import Jobs from '@/components/job/jobs'
import { Logo } from '@/components/logo'
import { ChartMonthTech } from '@/components/tremor/ChartMonthTech'
import { IconGithub } from '@/icons/github'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-24 py-24 px-4">
      <div className="flex flex-col items-end justify-end">
        <Logo customClass="text-primary w-64 h-auto" />
        <small className="font-bold italic text-2xl">Tech</small>
      </div>

      <Jobs />

      <InteractiveElement
        data={{
          headline: '¿Cuál es tu tecnología de frontend favorita?',
          options: [
            {
              id: 1,
              icon: 'react',
              label: 'React',
              title:
                'Impulsa tu carrera con React: El gigante de los frameworks frontend',
              description:
                '¿Sabías que React es uno de los frameworks más demandados por las empresas de tecnología en todo el mundo? Aprende más sobre cómo dominar React puede impulsar tu carrera y abrirte las puertas a oportunidades laborales increíbles.',
              cta: {
                label: 'Descubre más',
                intern: true,
                url: '/stack/frontend',
              },
            },
            {
              id: 2,
              icon: 'vue',
              label: 'Vue',
              title: 'Vue: La joya emergente del desarrollo frontend',
              description:
                'Vue se está convirtiendo rápidamente en el framework de elección para los desarrolladores frontend. Descubre cómo Vue está cambiando el panorama del desarrollo web y cómo puede beneficiar a tu futuro profesional.',
              cta: {
                label: 'Descubre más',
                intern: true,
                url: '/stack/frontend',
              },
            },
            {
              id: 3,
              icon: 'qwik',
              label: 'Qwik',
              title:
                'Qwik: La tecnología frontend que promete revolucionar la web',
              description:
                'Qwik es un nuevo y emocionante framework que tiene como objetivo mejorar la eficiencia y la velocidad de las aplicaciones web. Aprende más sobre cómo este innovador framework puede cambiar el rumbo de tu carrera en desarrollo frontend.',
              cta: {
                label: 'Descubre más',
                intern: true,
                url: '/stack/frontend',
              },
            },
            {
              id: 4,
              icon: 'angular',
              label: 'Angular',
              title:
                'Angular: Un pilar indiscutible en el desarrollo de aplicaciones web',
              description:
                'Angular es un framework estable y robusto, ampliamente utilizado en la industria de la tecnología. Conoce cómo el dominio de Angular puede aumentar tu valor en el mercado laboral y abrirte la puerta a una gran variedad de oportunidades en desarrollo web.',
              cta: {
                label: 'Descubre más',
                intern: true,
                url: '/stack/frontend',
              },
            },
          ],
        }}
      />

      <ChartMonthTech />

      <a
        className="btn"
        href="https://github.com/manuelsanchezweb/infojobs-tech"
      >
        <IconGithub /> Ver repo
      </a>
    </main>
  )
}
