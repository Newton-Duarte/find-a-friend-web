import { useSearchParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import { getPets } from '@/api/get-pets'
import { Pet } from '@/data/types/pet'

interface UsePetsResponse {
  pets: Pet[]
}

export function usePets() {
  const searchParams = useSearchParams()
  const city = searchParams.get('city')

  return useQuery<UsePetsResponse>({
    queryFn: () => getPets(city || ''),
    queryKey: ['pets', city],
    staleTime: 1000 * 60 * 1, // 1 minute
    refetchOnWindowFocus: false,
  })
}
