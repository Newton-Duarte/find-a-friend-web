'use client'

import { styled } from '@/styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$md',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  boxSizing: 'border-box',
  padding: '0 $4',
  cursor: 'pointer',

  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$gray100',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        background: '$primary',

        '&:not(:disabled):hover': {
          filter: 'brightness(0.9)',
        },

        '&:disabled': {
          backgroundColor: '$gray200',
        },
      },

      secondary: {
        background: '$secondary',
        color: '$white',

        '&:not(:disabled):hover': {
          filter: 'brightness(0.9)',
        },

        '&:disabled': {
          color: '$gray200',
          borderColor: '$gray200',
        },
      },

      tertiary: {
        background: '$tertiary',

        '&:not(:disabled):hover': {
          filter: 'brightness(0.9)',
        },

        '&:disabled': {
          color: '$gray600',
        },
      },
    },

    size: {
      sm: {
        height: 48,
      },

      md: {
        height: 64,
      },

      lg: {
        height: 72,
      },
    },

    color: {
      purple: {
        color: '$purple100 !important',
        '&:not(:disabled):hover': {
          color: '$white !important',
        },
      },
      default: {
        color: '$white',
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
    color: 'default',
  },
})
