'use client'

import { ArrowDown, ArrowUp, CaretDown } from '@phosphor-icons/react'
import { SelectItem } from './select-item'

import * as S from './styles'
import * as RadixSelect from '@radix-ui/react-select'

type Option = {
  id: string | number
  label: string
  value: string
}

type SelectProps = {
  options: Option[]
  defaultValue?: string
  placeholder?: string
  variant?: 'default' | 'primary'
  size?: 'default' | 'fullWidth'
}

export function Select({
  options = [],
  defaultValue,
  placeholder,
  variant = 'default',
  size = 'default',
}: SelectProps) {
  return (
    <RadixSelect.Root defaultValue={defaultValue}>
      <S.SelectTrigger variant={variant} size={size}>
        <RadixSelect.Value placeholder={placeholder} />
        <S.SelectIcon>
          <CaretDown size={16} />
        </S.SelectIcon>
      </S.SelectTrigger>
      <RadixSelect.Portal>
        <S.SelectContent>
          <S.SelectScrollUpButton>
            <ArrowUp />
          </S.SelectScrollUpButton>
          <S.SelectViewport>
            {options.map((option) => (
              <SelectItem key={option.id} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </S.SelectViewport>
          <S.SelectScrollDownButton>
            <ArrowDown />
          </S.SelectScrollDownButton>
        </S.SelectContent>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  )
}
