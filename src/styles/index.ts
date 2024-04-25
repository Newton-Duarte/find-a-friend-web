'use client'

import { createStitches } from '@stitches/react'

export const { styled, getCssText, globalCss } = createStitches({
  theme: {
    fonts: {
      default: 'Nunito Sans, sans-serif',
    },

    space: {
      px: '1px',
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      10: '2.5rem',
    },

    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
    },

    fontWeights: {
      regular: '400',
      medium: '500',
      bold: '700',
    },

    lineHeights: {
      shorter: '125%',
      short: '140%',
      base: '160%',
      tall: '180%',
    },

    colors: {
      primary: '#F15156',
      primary_dark: '#E44449',
      secondary: '#0D3B66',
      tertiary: '#F4D35E',
      orange: '#F27006',
      background: '#FDECED',

      whatsapp: '#3CDC8C',

      white: '#FFFFFF',
      black: '#000000',

      danger: '#F75A68',

      gray100: '#F8F9FC',
      gray200: '#E6E8F2',
      gray300: '#D1D6E4',
      gray400: '#8D95AF',
      gray500: '#303F73',
      gray600: '#252D4A',
      gray700: '#181C2A',
      gray800: '#0E1116',
    },

    radii: {
      xs: '3px',
      sm: '6px',
      md: '12px',
      lg: '20px',
      full: '99999px',
    },
  },
})
