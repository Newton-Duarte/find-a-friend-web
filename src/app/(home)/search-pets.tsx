'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/button'
import { MagnifyingGlass } from '@phosphor-icons/react'
import { Select } from '@/components/select'
import { citiesOptions } from '@/utils/city-options'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import * as S from './styles'

const searchPetsSchema = z.object({
  city: z.string().min(1, 'Informe a cidade'),
})

type SearchPetsInput = z.infer<typeof searchPetsSchema>

export function SearchPets() {
  const router = useRouter()

  const { handleSubmit, setValue } = useForm<SearchPetsInput>({
    resolver: zodResolver(searchPetsSchema),
    defaultValues: {
      city: 'maceio',
    },
  })

  const handleSearchPets = ({ city }: SearchPetsInput) => {
    router.push(`/pets?city=${city}`)
  }

  return (
    <S.Form onSubmit={handleSubmit(handleSearchPets)}>
      <Select
        options={citiesOptions}
        defaultValue="maceio"
        onChange={(city) => setValue('city', city)}
      />
      <Button type="submit" variant="tertiary" size="sm">
        <MagnifyingGlass size={26} color="#0D3B66" />
      </Button>
    </S.Form>
  )
}
