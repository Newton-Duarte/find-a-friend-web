'use client'

import { styled } from '@/styles'
import { ComponentProps } from 'react'

export const TextArea = styled('textarea', {
  backgroundColor: '#F5F8FA',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '1px solid #D3E2E5',

  fontSize: '$sm',
  color: '$secondary',
  fontWeight: '$regular',
  resize: 'vertical',
  minHeight: 80,

  '&:focus': {
    outline: 0,
    borderColor: '$secondary',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$gray400',
  },

  variants: {
    variant: {
      default: {
        width: 'auto',
      },

      fullWidth: {
        width: '100%',
      },
    },

    size: {
      default: {
        minHeight: 80,
      },
      lg: {
        minHeight: 120,
      },
    },
  },

  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

export interface TextAreaProps extends ComponentProps<typeof TextArea> {}

TextArea.displayName = 'TextArea'
