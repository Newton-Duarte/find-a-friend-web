import { fetchApi } from '@/data/fetch-api'
import { Pet } from '@/data/types/pet'

interface GetPetByIdResponse {
  pet: Pet
}

export async function getPetById(id: string): Promise<GetPetByIdResponse> {
  const response = await fetchApi(`/pets/${id}`, {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  })

  const pet = await response.json()

  return pet
}
