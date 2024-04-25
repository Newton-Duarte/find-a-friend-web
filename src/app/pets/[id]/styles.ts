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

export const Title = styled(Text, {
  textAlign: 'center',
  fontWeight: 500,
  padding: '$8 0',
})

export const Content = styled('div', {
  borderRadius: '20px',
  maxWidth: 704,
  margin: '0 auto',
  background: '$white',

  img: {
    borderRadius: '20px 20px 0 0',
  },
})

export const ContentWrapper = styled('div', {
  padding: '$10',
})

export const PetImages = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '1rem',

  img: {
    border: '4px solid transparent',
    borderRadius: '15px',
    opacity: '0.5',
    cursor: 'pointer',

    '&:hover': {
      borderColor: '$secondary',
      opacity: 1,
    },

    '&.active': {
      borderColor: '$secondary',
      opacity: 1,
      cursor: 'default',
    },
  },
})

export const PetInfo = styled('div', {
  marginTop: '$10',

  '> h3': {
    fontSize: '3.375rem',
  },

  '> p': {
    fontWeight: 500,
  },
})

export const PetDetails = styled('div', {
  marginTop: '$10',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1rem',

  '> h3': {
    fontSize: '3.375rem',
  },

  '> p': {
    fontWeight: 500,
  },

  '> :nth-child(2)': {
    flex: 1,
  },
})

export const PetDetail = styled('div', {
  border: '1px solid $colors$secondary',
  borderRadius: '20px',
  padding: '$6',
  flexBasis: '11.375rem',

  '> div': {
    display: 'flex',
    gap: '0.5rem',
  },

  '> p': {
    fontWeight: 500,
    marginTop: '1rem',
  },
})

export const PetLocation = styled('div', {
  marginTop: '$10',
  background: '$secondary',
  borderRadius: '24px',

  img: {
    width: '100%',
    objectFit: 'cover',
    borderRadius: '20px',
  },

  '> a': {
    display: 'block',
    textDecoration: 'none',
    fontSize: '$lg',
    color: '$tertiary',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: '$4',

    '&:hover': {
      textDecoration: 'underline',
    },
  },
})

export const Separator = styled('hr', {
  border: '1px solid #D3E2E5',
  margin: '$10 0',
})

export const Organization = styled('div', {})

export const OrganizationInfo = styled('div', {
  display: 'flex',
  gap: '1rem',

  a: {
    marginTop: '$4',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    background: '#E6F7FB',
    padding: '$4',
    borderRadius: '10px',
    textDecoration: 'none',

    '&:hover': {
      background: '$secondary',
      color: '$white',
      transition: 'background 0.2s',

      svg: {
        color: '$white',
      },

      p: {
        color: '$white',
      },
    },

    svg: {
      color: '$secondary',
    },
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
})

export const AdoptionRequirements = styled('div', {})

export const Requirements = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  marginTop: '$10',
})

export const Requirement = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  border: '1px solid $colors$primary',
  background:
    'linear-gradient(129.72deg, rgba(247, 95, 96, 0.1) 16.45%, rgba(241, 81, 86, 0) 67.3%);',
  padding: '$3',
  borderRadius: '10px',

  svg: {
    color: '$primary',
    marginLeft: '$5',
  },

  p: {
    color: '$primary',
  },
})

export const WhatsAppButton = styled('a', {
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
