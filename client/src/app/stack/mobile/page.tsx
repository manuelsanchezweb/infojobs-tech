'use client'

import { usePathname, useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <>
      <h1>Estamos en esta page: {pathname}</h1>
      <button className="btn" type="button" onClick={() => router.back()}>
        Volver a la página anterior
      </button>
      <button className="btn" type="button" onClick={() => router.push('/')}>
        Volver a main
      </button>
    </>
  )
}
