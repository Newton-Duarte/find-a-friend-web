'use client'

import { Select } from '@/components/select'
import { citiesOptions } from '@/utils/city-options'
import { useRouter } from 'next/navigation'

export function SelectCity() {
  const router = useRouter()

  const handleChangeCity = (city: string) => {
    router.push(`?city=${city}`)
  }

  return (
    <Select
      options={citiesOptions}
      defaultValue={citiesOptions[0].value}
      variant="primary"
      size="fullWidth"
      onChange={handleChangeCity}
    />
  )
}
