'use client'

import { SignOut } from '@phosphor-icons/react'
import { useRouter } from 'next/navigation'

import * as S from './styles'
import { Button } from '@/components/button'

export default function SignOutButton() {
  const router = useRouter()

  return (
    <Button variant="secondary" size="md" onClick={() => router.back()}>
      <SignOut size={24} />
    </Button>
  )
}
