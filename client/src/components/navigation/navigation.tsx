import { useEffect, useState } from 'react'
import { IconClose, IconMenu } from '../icons/Icons'
import Link from 'next/link'
import { Logo } from '../logo'
import { IconGithub } from '@/icons/github'
import { usePathname } from 'next/navigation'

const Navigation = () => {
  const pathname = usePathname()
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <HeroLogo />
      <nav>
        {/* Desktop Menu  */}
        {isNavOpen || windowWidth > 768 ? (
          <ul className="flex flex-col justify-center items-center gap-8 absolute top-0 left-0 bg-primaryLight h-screen w-full z-10 md:flex-row md:static md:bg-transparent md:h-full">
            <li>
              <Link
                href="/"
                className={`text-md md:text-sm ${
                  pathname === '/' ? 'font-bold' : ''
                }`}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="/sobre-nosotros"
                className={`text-md md:text-sm ${
                  pathname === '/sobre-nosotros' ? 'font-bold' : ''
                }`}
              >
                Sobre nosotros
              </Link>
            </li>
            <li>
              <a
                className="btn text-xs items-center"
                href="https://github.com/manuelsanchezweb/infojobs-tech"
              >
                <IconGithub customClass="w-4" /> Ver repo
              </a>
            </li>
          </ul>
        ) : (
          ''
        )}

        {!isNavOpen && (
          <button
            key="open-menu"
            className="nav-open md:hidden"
            aria-label="Open Menu"
            onClick={toggleNav}
          >
            <IconMenu />
          </button>
        )}

        {/* Close Button  */}
        {isNavOpen && (
          <button
            key="close-menu"
            className="nav-close absolute right-4 top-8 z-20 md:hidden"
            aria-label="Close Menu"
            onClick={toggleNav}
          >
            <IconClose />
          </button>
        )}
      </nav>
    </>
  )
}

export default Navigation

const HeroLogo = () => {
  return (
    <Link
      href="/"
      className="flex flex-col justify-end items-end hover:no-underline focus:no-underline"
    >
      <Logo customClass="text-primary w-32 h-auto" />
      <small className="font-bold italic text-xs">Tech</small>
    </Link>
  )
}
