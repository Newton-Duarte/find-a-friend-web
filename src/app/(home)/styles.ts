import { styled } from '@/styles'

export const Main = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  minHeight: '100dvh',
  backgroundColor: '$primary',
})

export const Content = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',

  p: {
    maxWidth: '30rem',
    fontSize: '4.5rem',
    lineHeight: '90%',
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'flex-end',
  },
})

export const Footer = styled('footer', {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '7.5rem',

  '> p': {
    maxWidth: '25rem',
    lineHeight: '34px',
    color: '$white',
  },
})

export const Actions = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '1rem',
  flex: 1,

  p: {
    color: '$white',
  },
})
