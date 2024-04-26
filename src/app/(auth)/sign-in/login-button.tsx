'use client'

import { Button } from '@/components/button'
import { useRouter } from 'next/navigation'
import React from 'react'

export function LoginButton() {
  const router = useRouter()

  return (
    <Button type="button" variant="secondary" onClick={() => router.push('/')}>
      Login
    </Button>
  )
}
