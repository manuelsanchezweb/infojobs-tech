'use client'

import React from 'react'
import { IconSwitcher } from '../icons/IconSwitcher'
import { Stack, Technology } from '@/types/types'
import Navigation from '../navigation/navigation'

const HeroGeneral = ({ icon }: { icon?: Stack | Technology }) => {
  return (
    <div
      className="flex flex-col items-center justify-center relative border-b border-primaryDark mb-12"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.45), rgba(255, 255, 255, 0)), url('/bg-home-full-tv.jpg')`,
        backgroundSize: 'cover',
        width: '100%',
        height: '350px',
      }}
    >
      <div className="h-full flex justify-between items-start container-wrapper relative py-8">
        <Navigation />

        {icon && (
          <div className="flex flex-col items-center justify-center absolute -bottom-16 right-4 border border-primaryDark bg-white rounded-full w-[150px] h-[150px]">
            <IconSwitcher classCustom="w-16 h-auto" icon={icon} />
            <small>{icon}</small>
          </div>
        )}
      </div>
    </div>
  )
}

export default HeroGeneral
