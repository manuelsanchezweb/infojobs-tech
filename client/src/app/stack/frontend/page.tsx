'use client'

import HeroGeneral from '@/components/hero/hero-general'
import InteractiveElement from '@/components/interactive-element/interactive-element'
import JobsSection from '@/components/job/jobs-section'
import { ChartMonthTech } from '@/components/tremor/ChartMonthTech'
import { getTodayInSpanishFormat } from '@/functions/utils'
import { Stack } from '@/types/types'
import { usePathname, useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()
  const pathname = usePathname()
  const stack = pathname.split('/').pop() as Stack

  return (
    <main className="flex flex-col items-center justify-center gap-12 pb-24">
      <HeroGeneral icon="qwik" />

      <JobsSection
        title={`Últimas ofertas ${stack} a ${getTodayInSpanishFormat()}`}
        showFilters={false}
        stack={stack}
      />

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
        numberOfCols={2}
      />

      <ChartMonthTech
        title="Número de ofertas de trabajo por tecnología frontend"
        data={[
          {
            date: 'Enero 23',
            React: 3892,
            Vue: 2318,
            Angular: 1756,
            Qwik: 1203,
          },
          {
            date: 'Febrero 23',
            React: 3789,
            Vue: 2810,
            Angular: 1789,
            Qwik: 2019,
          },
          {
            date: 'Marzo 23',
            React: 3922,
            Vue: 1256,
            Angular: 1989,
            Qwik: 1876,
          },
          {
            date: 'Abril 23',
            React: 4000,
            Vue: 2156,
            Angular: 1210,
            Qwik: 2609,
          },
          {
            date: 'Mayo 23',
            React: 3967,
            Vue: 2378,
            Angular: 356,
            Qwik: 3500,
          },
        ]}
      />

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
