'use client'

import { styled } from '@/styles'

export const Main = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  minHeight: '100dvh',
  justifyContent: 'center',
  alignContent: 'center',
  marginTop: '$10',
  paddingBottom: '$10',
})

export const Hero = styled('div', {
  position: 'fixed',
  left: '18.72%',
  top: '15.72%',
  transform: 'translateX(-18.72%, -15.72%)',
})

export const Form = styled('form', {
  width: 488,
  maxWidth: '100%',
  marginLeft: '100%',

  h1: {
    fontSize: '2rem',
    lineHeight: '2rem',
    margin: '5rem 0',
    textAlign: 'center',
  },
})

export const FormGroup = styled('div', {
  label: {
    display: 'block',
    marginBottom: '0.25rem',
    fontSize: '$md',
    fontWeight: 500,
  },

  '&:not(:last-of-type)': {
    marginBottom: '$5',
  },
})

export const Actions = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  marginTop: '3rem',

  button: {
    fontSize: '$xl',
    fontWeight: 'bold',

    '&:last-of-type': {
      backgroundColor: '#F3F5F7',
      color: '$secondary',
    },
  },

  a: {
    fontSize: '$xl',
    fontWeight: 'bold',
    color: '$secondary',
    textAlign: 'center',
    marginTop: '$4',
  },
})
