'use client'

import { styled } from '@/styles'

export const Main = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  minHeight: '100dvh',
  justifyContent: 'center',
  alignContent: 'center',
})

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

export const Form = styled('form', {
  width: 488,
  maxWidth: '100%',

  h1: {
    fontSize: '3.375rem',
    margin: '5rem 0',
  },
})

export const FormGroup = styled('div', {
  label: {
    display: 'block',
    marginBottom: '0.25rem',
    fontSize: '$md',
    fontWeight: 500,
  },

  '&:first-of-type': {
    marginBottom: '$5',
  },
})

export const Actions = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  marginTop: '3rem',

  button: {
    fontFamily: '$default',
    fontSize: '$xl',
    fontWeight: 'bold',

    '&:last-of-type': {
      backgroundColor: '#F3F5F7',
      color: '$secondary',
    },
  },
})
