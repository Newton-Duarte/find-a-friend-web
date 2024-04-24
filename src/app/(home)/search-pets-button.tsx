'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/button'
import { MagnifyingGlass } from '@phosphor-icons/react'

type SearchPetsButtonProps = {
  city: string
}

export function SearchPetsButton({ city }: SearchPetsButtonProps) {
  const router = useRouter()

  return (
    <Button
      type="button"
      variant="tertiary"
      size="sm"
      onClick={() => router.push(`/pets?city=${city}`)}
    >
      <MagnifyingGlass size={26} color="#0D3B66" />
    </Button>
  )
}
