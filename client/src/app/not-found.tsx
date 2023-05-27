import HeroGeneral from '@/components/hero/hero-general'
import { IconSwitcher } from '@/components/icons/IconSwitcher'
import InteractiveElement from '@/components/interactive-element/interactive-element'

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center gap-12 pb-8">
      <HeroGeneral />

      <div className="container-wrapper flex flex-col gap-6">
        <h1 className="text-3xl md:text-5xl font-bold self-start">
          404 - Página no encontrada
        </h1>
        <div className="flex flex-col md:flex-row gap-8 items-center justify-between w-full">
          <IconSwitcher icon="error" classCustom="min-w-[300px]" />
          <div className="flex flex-col gap-8 text-center md:text-left items-center md:items-start">
            <p>
              La página que estás buscando o bien no existe o bien ha dejado de
              existir. Navega al menu principal o échale un vistazo al stack que
              te interese
            </p>
            <a className="btn w-fit" href="/">
              Volver al menú principal
            </a>
          </div>
        </div>
      </div>

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
                url: '/stack/frontend',
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
                url: '/stack/backend',
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
                url: '/stack/fullstack',
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
                url: '/stack/mobile',
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
                url: '/stack/data',
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
                url: '/stack/devops',
              },
            },
          ],
        }}
      />
    </main>
  )
}
