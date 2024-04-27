'use client'

import { Text } from '@/components/text'
import { styled } from '@/styles'

export const Container = styled('main', {
  minHeight: '100dvh',
  background: '#FDECED',
  paddingLeft: '6rem',
  paddingBottom: '$10',
})

export const Sidebar = styled('aside', {
  position: 'fixed',
  left: 0,
  width: '6rem',
  minHeight: '100dvh',
  background: '$primary',
  padding: '$6',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

export const Content = styled('div', {
  paddingTop: '5rem',
})

export const ContentWrapper = styled('div', {
  padding: '$10',
  borderRadius: '20px',
  maxWidth: 704,
  margin: '0 auto',
  background: '$white',
})

export const Separator = styled('hr', {
  border: '1px solid #D3E2E5',
  margin: '$10 0',
})

export const Organization = styled('div', {
  borderRadius: '20px',
  maxWidth: 704,
  margin: '0 auto $10',
  background: '$secondary',
  padding: '$5 $10',
  display: 'flex',
  justifyContent: 'space-between',
})

export const OrganizationInfo = styled('div', {
  display: 'flex',
  gap: '1rem',

  h4: {
    color: '$white',
  },

  p: {
    color: '$white',
  },
})

export const IconBox = styled('div', {
  width: '4rem',
  height: '4rem',
  borderRadius: '15px',
  background: '$orange',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  variants: {
    variant: {
      default: {
        background: '$orange',

        svg: {
          color: '$secondary',
        },
      },
      secondary: {
        background: '#114A80',
        svg: {
          color: '$white',
        },
      },
    },
  },

  defaultVariants: {
    variant: 'default',
  },
})

export const SectionTitle = styled(Text, {
  borderBottom: '1px solid #D3E2E5',
  paddingBottom: '$3',
})

export const Form = styled('form', {
  margin: '$8 0 0',
})

export const FormGroup = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  label: {
    display: 'block',
    marginBottom: '0.25rem',
    fontSize: '$md',
    fontWeight: 500,
  },

  '[role="combobox"]': {
    justifyContent: 'flex-start',
  },

  '&:not(:last-of-type)': {
    marginBottom: '$5',
  },
})

export const Photos = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
})

export const PhotosDropContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#F5F8FA',
  border: '1px solid #D3E2E5',
  borderRadius: '$md',
  gap: '1rem',
  height: 152,

  p: {
    fontWeight: 'bold',
  },
})

export const Photo = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: '#F5F8FA',
  border: '1px solid #D3E2E5',
  padding: '1rem',
  borderRadius: '$md',

  div: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',

    svg: {
      color: '#D3E2E5',
    },
  },
})

export const AddItem = styled('button', {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#FC868610',
  border: '1px dashed $colors$danger',
  padding: '1rem',
  borderRadius: '$md',
  cursor: 'pointer',

  svg: {
    color: '$danger',
  },
})

export const RemovePhoto = styled('div', {
  svg: {
    color: '$danger',
  },
})

export const Requirements = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  marginBottom: '4rem',
})

export const ConfirmButton = styled('button', {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
  width: '100%',
  height: '4rem',
  borderRadius: '20px',
  background: '#3CDC8C',
  color: '$white',
  cursor: 'pointer',
  fontSize: '1.125rem',
  fontWeight: 'bold',

  '&:hover': {
    background: '#1BBB6B',
  },
})
