'use client'

import { Button } from '@/components/button'
import { useRouter } from 'next/navigation'

export function RegisterButton() {
  const router = useRouter()

  return (
    <Button type="button" onClick={() => router.push('/')}>
      Cadastrar
    </Button>
  )
}
