import { IconGithub } from '@/icons/github'
import React from 'react'
import { Logo } from '../logo'
import { IconSwitcher } from '../icons/IconSwitcher'
import { Stack, Technology } from '@/types/types'
import Link from 'next/link'

const HeroGeneral = ({ icon }: { icon?: Stack | Technology }) => {
  return (
    <div
      className="flex flex-col items-center justify-center relative border-b border-primaryDark mb-12"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.35), rgba(255, 255, 255, 0.35)), url('/bg-home-full-tv.jpg')`,
        backgroundSize: 'cover',
        width: '100%',
        height: '350px',
      }}
    >
      <div className="h-full flex justify-between items-start container-wrapper relative py-8">
        <HeroLogo />

        <div className="flex items-center gap-8">
          <Link href="/" className="text-sm">
            Sobre el proyecto
          </Link>
          <a
            className="btn text-xs items-center"
            href="https://github.com/manuelsanchezweb/infojobs-tech"
          >
            <IconGithub customClass="w-4" /> Ver repo
          </a>
        </div>

        {icon && (
          <div className="absolute -bottom-16 right-4 border border-primaryDark bg-white rounded-full p-8">
            <IconSwitcher classCustom="w-16 h-auto" icon={icon} />
          </div>
        )}
      </div>
    </div>
  )
}

export default HeroGeneral

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
