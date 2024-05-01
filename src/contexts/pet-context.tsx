'use client'

import { getPets } from '@/api/get-pets'
import { useSearchParams } from 'next/navigation'
import { PropsWithChildren, createContext, useEffect, useState } from 'react'

export type Pet = {
  id: string
  name: string
}

interface PetsContextData {
  pets: Pet[]
}

export const PetsContext = createContext({} as PetsContextData)

export function PetsContextProvider({ children }: PropsWithChildren) {
  const [pets, setPets] = useState([])

  const searchParams = useSearchParams()
  const city = searchParams.get('city')

  useEffect(() => {
    const response = getPets(city || '')

    setPets(response.pets)
  }, [city])

  return <PetsContext.Provider value={{}}>{children}</PetsContext.Provider>
}
