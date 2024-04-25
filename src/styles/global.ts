'use client'

import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
  },

  html: {
    height: '100dvh',
  },

  body: {
    height: '100dvh',
    color: '$secondary',
    '-webkit-font-smoothing': 'antialiased',
  },

  'body, input, textarea, button': {
    fontFamily: 'Nunito Sans, sans-serif',
    fontWeight: 400,
  },

  '#__next': {
    height: '100dvh',
  },
})
