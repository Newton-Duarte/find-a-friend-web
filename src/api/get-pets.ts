import { axiosApi } from '@/lib/axios'
import { capitalizeWord } from '@/utils/capitalize-word'

export async function getPets(city: string) {
  const response = await axiosApi.get(`/pets?city=${capitalizeWord(city)}`)

  return response.data
}
