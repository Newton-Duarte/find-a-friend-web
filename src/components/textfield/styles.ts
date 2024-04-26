'use client'

import { styled } from '@/styles'

export const Container = styled('div', {
  backgroundColor: '#F5F8FA',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '1px solid #D3E2E5',
  display: 'flex',
  alignItems: 'center',

  variants: {
    variant: {
      sm: {
        padding: '$2 $3',
      },
      md: {
        padding: '$3 $4',
      },
      lg: {
        padding: '$5 $4',
      },
    },
  },

  '&:has(input:focus)': {
    borderColor: '$secondary',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  '&:has(svg)': {
    color: '$gray500',
  },

  defaultVariants: {
    variant: 'md',
  },
})

export const Input = styled('input', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$secondary',
  fontWeight: '$regular',
  background: 'transparent',
  border: 0,
  width: '100%',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&::placeholder': {
    color: '$gray400',
  },
})
