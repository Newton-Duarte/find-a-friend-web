'use client'

import { Button } from '@/components/button'
import { useRouter } from 'next/navigation'
import React from 'react'

export function RegisterButton() {
  const router = useRouter()

  return (
    <Button type="button" onClick={() => router.push('/sign-up')}>
      Cadastrar minha organização
    </Button>
  )
}
