'use client'

import { ReactNode, forwardRef } from 'react'

import * as S from './styles'
import * as RadixSelect from '@radix-ui/react-select'
import { Check } from '@phosphor-icons/react'

type SelectItemProps = {
  children: ReactNode
  value: string
}

export const SelectItem = forwardRef<HTMLDivElement | null, SelectItemProps>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <S.StyledItem {...props} ref={forwardedRef}>
        <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
        <S.StyledItemIndicator>
          <Check />
        </S.StyledItemIndicator>
      </S.StyledItem>
    )
  },
)

SelectItem.displayName = 'RadixSelectItem'
