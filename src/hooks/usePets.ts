import { useContext } from 'react'
import { PetsContext } from '@/contexts/pet-context'

export function usePets() {
  return useContext(PetsContext)
}
