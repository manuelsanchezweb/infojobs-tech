'use client'

import { getSkillsByStack } from '@/api/getSkillsByStack'
import HeroGeneral from '@/components/hero/hero-general'
import InteractiveElement from '@/components/interactive-element/interactive-element'
import JobsSection from '@/components/job/jobs-section'
import { Logo } from '@/components/logo'
import { BarMostPopularSkills } from '@/components/tremor/BarMostPopularSkills'
import { ChartMonthTech } from '@/components/tremor/ChartMonthTech'
import { getTodayInSpanishFormat, wait } from '@/functions/utils'
import { Stack } from '@/types/types'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function Page() {
  const [skills, setSkills] = useState([])
  const [loading, setLoading] = useState<boolean>(true)
  const pathname = usePathname()
  const stack = pathname.split('/').pop() as Stack

  useEffect(() => {
    document.body.classList.add('overflow-hidden')
    const fetchData = async () => {
      try {
        const skillsData = await getSkillsByStack({ stack })
        setSkills(skillsData)
        await wait(0.5)
        setLoading(false)
      } catch (error) {
        console.log(error)
      }

      document.body.classList.remove('overflow-hidden')
    }

    fetchData()
  }, [stack])

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
    <>
      <main className="flex flex-col items-center justify-center gap-12 pb-16">
        <HeroGeneral icon={stack} />

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

        <BarMostPopularSkills
          title={`Skills más demandadas dentro del mundo ${stack}`}
          skills={skills}
        />
      </main>
    </>
  )
}
