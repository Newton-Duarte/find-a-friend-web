'use client'

import { ComponentProps, ElementRef, ReactNode, forwardRef } from 'react'

import * as S from './styles'

export interface TextFieldProps extends ComponentProps<typeof S.Input> {
  endIcon?: ReactNode
  variant?: 'sm' | 'md' | 'lg'
  containerProps?: ComponentProps<typeof S.Container>
}

export const TextField = forwardRef<ElementRef<typeof S.Input>, TextFieldProps>(
  ({ containerProps, variant = 'md', endIcon, ...props }, ref) => {
    return (
      <S.Container {...containerProps} variant={variant}>
        <S.Input ref={ref} {...props} />
        {!!endIcon && endIcon}
      </S.Container>
    )
  },
)

TextField.displayName = 'TextField'
