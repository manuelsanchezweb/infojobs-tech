import { IconGithub } from '@/icons/github'
import React from 'react'
import { Logo } from '../logo'
import { IconSwitcher } from '../icons/IconSwitcher'
import { Stack, Technology } from '@/types/types'
import Link from 'next/link'

const HeroGeneral = ({ icon }: { icon?: Stack | Technology }) => {
  return (
    <div
      className="flex flex-col items-center justify-center relative border-b border-primaryDark"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.35), rgba(255, 255, 255, 0.35)), url('/bg-home-full-tv.jpg')`,
        backgroundSize: 'cover',
        width: '100%',
        height: '350px',
      }}
    >
      <div className="h-full flex flex-col justify-center items-center text-center container relative">
        <a
          className="btn absolute right-2 top-8"
          href="https://github.com/manuelsanchezweb/infojobs-tech"
        >
          <IconGithub /> Ver repo
        </a>
        <Link href="/" className="flex flex-col justify-end items-end">
          <Logo customClass="text-primary w-64 h-auto" />
          <small className="font-bold italic text-2xl">Tech</small>
        </Link>

        {icon && (
          <div className="absolute -bottom-16 right-2 border border-primaryDark bg-white rounded-full p-8">
            <IconSwitcher classCustom="w-16 h-auto" icon={icon} />
          </div>
        )}
      </div>
    </div>
  )
}

export default HeroGeneral
