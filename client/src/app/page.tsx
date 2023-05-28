import HeroGeneral from '@/components/hero/hero-general'
import InteractiveElement from '@/components/interactive-element/interactive-element'
import JobsSalarySection from '@/components/job/jobs-salary-section'
import JobsSection from '@/components/job/jobs-section'
import { getTodayInSpanishFormat } from '@/functions/utils'

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-center gap-12 pb-8">
        <HeroGeneral />

        <JobsSection
          showFilters
          title={`Últimas ofertas a ${getTodayInSpanishFormat()}`}
        />

        <InteractiveElement
          data={{
            headline: '¿Qué stack te interesa más?',
            options: [
              {
                id: 1,
                icon: 'frontend',
                label: 'Frontend',
                title: 'Conviértete en el arquitecto de la experiencia web',
                description:
                  'El diseño y la interactividad de las páginas web son esenciales en el mundo digital de hoy. ¿Quieres saber cuáles son las últimas tecnologías frontend más demandadas en 2023? ¡Haz click en el enlace de abajo!',
                cta: {
                  label: 'Descubre más',
                  intern: true,
                  url: '/stacks/frontend',
                },
              },
              {
                id: 2,
                icon: 'backend',
                label: 'Backend',
                title: 'Haz posible la magia detrás de las escenas',
                description:
                  'El backend es el corazón de cualquier aplicación. ¿Estás listo para descubrir qué tecnologías backend están marcando tendencia en 2023? ¡Descúbrelo ahora!',
                cta: {
                  label: 'Descubre más',
                  intern: true,
                  url: '/stacks/backend',
                },
              },
              {
                id: 3,
                icon: 'fullstack',
                label: 'Fullstack',
                title: 'Domina ambos mundos: frontend y backend',
                description:
                  'Como desarrollador Fullstack, tienes el poder de construir una aplicación de principio a fin. ¿Quieres saber cuáles son las habilidades Fullstack más demandadas en 2023? ¡Haz click aquí!',
                cta: {
                  label: 'Descubre más',
                  intern: true,
                  url: '/stacks/fullstack',
                },
              },
              {
                id: 4,
                icon: 'mobile',
                label: 'Mobile',
                title: 'Escribe el futuro del desarrollo móvil',
                description:
                  'El mundo es móvil y las oportunidades en el desarrollo de apps son infinitas. ¿Quieres saber cuáles son las tecnologías de desarrollo móvil más populares en 2023? ¡Descúbrelo aquí!',
                cta: {
                  label: 'Descubre más',
                  intern: true,
                  url: '/stacks/mobile',
                },
              },
              {
                id: 5,
                icon: 'data',
                label: 'Data',
                title: 'Descubre los secretos ocultos en los datos',
                description:
                  'Los datos son el nuevo petróleo, y el mundo necesita expertos en datos. ¿Quieres conocer cuáles son las tecnologías y habilidades en análisis de datos más demandadas en 2023? ¡Descúbrelo ahora!',
                cta: {
                  label: 'Descubre más',
                  intern: true,
                  url: '/stacks/data',
                },
              },
              {
                id: 6,
                icon: 'devops',
                label: 'DevOps',
                title: 'Construye, prueba y despliega con eficacia',
                description:
                  'DevOps es esencial para un desarrollo y despliegue de software eficaz. ¿Quieres conocer las herramientas y prácticas DevOps más valoradas en 2023? ¡Haz click aquí!',
                cta: {
                  label: 'Descubre más',
                  intern: true,
                  url: '/stacks/devops',
                },
              },
            ],
          }}
        />

        <JobsSalarySection />
      </main>
    </>
  )
}
