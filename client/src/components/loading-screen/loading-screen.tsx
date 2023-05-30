'use client'

import React, { useEffect, useState } from 'react'
import { Logo } from '../logo'

const loadingStates = [
  [true, false, false], // .
  [true, true, false], // ..
  [true, true, true], // ...
]

const LoadingScreen = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % loadingStates.length)
    }, 500)

    return () => clearInterval(interval)
  }, [index])

  return (
    <div className="h-screen flex flex-col gap-8 fixed top-0 left-0 overflow-hidden overflow-y-hidden w-screen m-auto justify-center items-center bg-white z-10 px-4">
      <Logo customClass="text-primary w-48 md:w-64 h-auto" />
      <p className="text-xl font-bold text-center max-w-[600px]">
        El sector IT en España es como un gran código en constante evolución.
        ¡Estás a un commit de ser parte de él!
      </p>

      <div className="flex items-center gap-2">
        <p>Cargando las últimas ofertas</p>

        <div className="flex text-4xl">
          <div>·</div>
          <div className={index > 0 ? '' : 'invisible'}>·</div>
          <div className={index === 2 ? '' : 'invisible'}>·</div>
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen
