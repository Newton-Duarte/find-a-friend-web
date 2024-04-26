'use client'

import { Eye, EyeClosed } from '@phosphor-icons/react'
import { useState } from 'react'
import { TextField } from '../textfield'

import * as S from './styles'

export function PasswordField() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <TextField
      type={showPassword ? 'text' : 'password'}
      variant="lg"
      endIcon={
        showPassword ? (
          <S.IconButton
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            <Eye size={16} />
          </S.IconButton>
        ) : (
          <S.IconButton
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            <EyeClosed size={16} />
          </S.IconButton>
        )
      }
    />
  )
}
