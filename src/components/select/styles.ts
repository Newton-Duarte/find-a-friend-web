'use client'

import { styled } from '@/styles'
import * as RadixSelect from '@radix-ui/react-select'

export const SelectTrigger = styled(RadixSelect.SelectTrigger, {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 12,
  padding: '0 15px',
  fontSize: '$xl',
  lineHeight: 1,
  minWidth: 180,
  height: 48,
  gap: 5,
  backgroundColor: '$primary_dark',
  color: '$white',
  '&:focus': { boxShadow: `0 0 0 2px $colors$white` },
  '&[data-placeholder]': { color: '$white' },
})

export const SelectIcon = styled(RadixSelect.SelectIcon, {
  color: '$white',
})

export const SelectContent = styled(RadixSelect.Content, {
  overflow: 'hidden',
  backgroundColor: '$white',
  borderRadius: 6,
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
})

export const SelectViewport = styled(RadixSelect.Viewport, {
  padding: 5,
})

export const StyledItem = styled(RadixSelect.Item, {
  fontSize: 16,
  lineHeight: 1,
  color: '$secondary',
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center',
  height: 32,
  padding: '0 32px 0 24px',
  position: 'relative',
  userSelect: 'none',

  '&[data-disabled]': {
    color: '$gray100',
    pointerEvents: 'none',
  },

  '&[data-highlighted]': {
    outline: 'none',
    backgroundColor: '$secondary',
    color: '$gray100',
  },
})

export const SelectLabel = styled(RadixSelect.Label, {
  padding: '0 24px',
  fontSize: 14,
  lineHeight: '24px',
  color: '$gray400',
})

export const SelectSeparator = styled(RadixSelect.Separator, {
  height: 1,
  backgroundColor: '$secondary',
  margin: 5,
})

export const StyledItemIndicator = styled(RadixSelect.ItemIndicator, {
  position: 'absolute',
  left: 0,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const scrollButtonStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 25,
  backgroundColor: 'white',
  color: '$secondary',
  cursor: 'default',
}

export const SelectScrollUpButton = styled(
  RadixSelect.ScrollUpButton,
  scrollButtonStyles,
)

export const SelectScrollDownButton = styled(
  RadixSelect.ScrollDownButton,
  scrollButtonStyles,
)
