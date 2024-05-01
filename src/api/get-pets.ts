import { api } from '@/data/api'
import { capitalizeWord } from '@/utils/capitalize-word'

export async function getPets(city: string) {
  const response = await api(`/pets?city=${capitalizeWord(city)}`)
  const data = await response.json()

  return data
}
