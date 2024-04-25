'use client'

import { styled } from '@/styles'

export const Wrapper = styled('main', {
  display: 'grid',
  gridTemplateColumns: '22rem 1fr',
  minHeight: '100dvh',
})

export const Sidebar = styled('aside', {
  background: '$primary',
})

export const SidebarHeader = styled('div', {
  background: '$primary_dark',
  marginBottom: '$6',
  padding: '$10',

  img: {
    marginBottom: '$6',
  },

  '> div': {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',

    '[role="combobox"]': {
      border: '1px solid $colors$white',
    },
  },
})

export const SidebarFilters = styled('div', {
  padding: '0 $10 $10',

  h4: {
    marginBottom: '$6',
    color: '$white',
  },
})

export const FormGroup = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: '$6',

  p: {
    color: '$white',
  },

  '[role="combobox"]': {
    marginTop: '$2',
  },
})

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: '5.2rem',

  '[role="combobox"]': {
    background: '#FBE1E2',
    color: '$secondary',

    svg: {
      color: '$secondary',
    },
  },
})

export const Content = styled('div', {
  background: '#FDECED',
  padding: '$8',
})

export const PetsList = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '$8',
  marginTop: '$10',
})

export const IconBox = styled('div', {
  border: '3px solid $colors$white',
  borderRadius: '10px',
  width: '2.75rem',
  height: '2.75rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '-1rem',
})

export const Pet = styled('div', {
  background: '$white',
  borderRadius: '20px',
  padding: '$1 $1 $4',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',

  '&:hover': {
    background: '$secondary',
    p: {
      color: '$white',
    },
    [`& ${IconBox}`]: {
      borderColor: '$secondary',
    },
  },

  p: {
    fontWeight: 'bold',
    marginTop: '$1',
  },

  '&:nth-child(even)': {
    [`& ${IconBox}`]: {
      background: '$tertiary',
    },
  },

  '&:nth-child(odd)': {
    [`& ${IconBox}`]: {
      background: '$primary',
    },
  },
})
