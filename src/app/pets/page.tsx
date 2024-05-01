import { Select } from '@/components/select'
import { Text } from '@/components/text'
import {
  petAges,
  petEnergyLevels,
  petIndependenceLevels,
  petSizes,
  petTypes,
} from '@/utils/pet-utils'
import { Logo } from '@/components/logo'
import { SelectCity } from './select-city'
import { PetsList } from './pets-list'

import * as S from './styles'

export default async function Pets() {
  return (
    <S.Wrapper>
      <S.Sidebar>
        <S.SidebarHeader>
          <Logo width={180} height={45} />
          <SelectCity />
        </S.SidebarHeader>
        <S.SidebarFilters>
          <Text size="2xl" as="h4">
            Filtros
          </Text>
          <S.FormGroup>
            <Text size="sm">Idade</Text>
            <Select
              options={petAges}
              defaultValue={petAges[0].value}
              variant="primary"
            />
          </S.FormGroup>
          <S.FormGroup>
            <Text size="sm">Nível de energia</Text>
            <Select
              options={petEnergyLevels}
              defaultValue={petEnergyLevels[0].value}
              variant="primary"
            />
          </S.FormGroup>
          <S.FormGroup>
            <Text size="sm">Porte do animal</Text>
            <Select
              options={petSizes}
              defaultValue={petSizes[0].value}
              variant="primary"
            />
          </S.FormGroup>
          <S.FormGroup>
            <Text size="sm">Nível de independência</Text>
            <Select
              options={petIndependenceLevels}
              defaultValue={petIndependenceLevels[0].value}
              variant="primary"
            />
          </S.FormGroup>
        </S.SidebarFilters>
      </S.Sidebar>
      <S.Content>
        <S.Header>
          <Text size="2xl">
            Encontre <strong>324 amigos</strong> na sua cidade
          </Text>
          <Select options={petTypes} defaultValue={petTypes[0].value} />
        </S.Header>
        <PetsList />
      </S.Content>
    </S.Wrapper>
  )
}
