'use client'

import { styled } from '@/styles'

export const Hero = styled('div', {
  background: '$primary',
  borderRadius: '20px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: 488,
  maxWidth: '100%',
  maxHeight: '100%',
  height: 661,
  margin: '0 auto',

  img: {
    margin: '0 auto',

    '&:first-of-type': {
      marginTop: '8rem',
    },
  },
})
