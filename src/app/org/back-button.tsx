'use client'

import { Button } from '@/components/button'
import { ArrowLeft } from '@phosphor-icons/react'
import { useRouter } from 'next/navigation'

export default function BackButton() {
  const router = useRouter()

  return (
    <Button variant="tertiary" size="sm" onClick={() => router.back()}>
      <ArrowLeft size={24} color="#0D3B66" />
    </Button>
  )
}
