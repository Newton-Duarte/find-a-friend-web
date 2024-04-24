import Image from 'next/image'

import * as S from './styles'
import { Select } from '@/components/select'
import { Button } from '@/components/button'
import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr'
import { Text } from '@/components/text'
import { citiesOptions } from '@/utils/city-options'
import {
  petAges,
  petEnergyLevels,
  petIndependenceLevels,
  petSizes,
  petTypes,
} from '@/utils/pet-utils'

export default function Pets() {
  return (
    <S.Wrapper>
      <S.Sidebar>
        <S.SidebarHeader>
          <Image src="/images/logo-icon.png" width={45} height={46} alt="" />
          <div>
            <Select
              options={citiesOptions}
              defaultValue={citiesOptions[0].value}
            />
            <Button variant="tertiary" size="sm">
              <MagnifyingGlass size={26} color="#0D3B66" />
            </Button>
          </div>
        </S.SidebarHeader>
        <S.SidebarFilters>
          <Text size="2xl" as="h4">
            Filtros
          </Text>
          <S.FormGroup>
            <Text size="xs">Idade</Text>
            <Select options={petAges} defaultValue={petAges[0].value} />
          </S.FormGroup>
          <S.FormGroup>
            <Text size="xs">Nível de energia</Text>
            <Select
              options={petEnergyLevels}
              defaultValue={petEnergyLevels[0].value}
            />
          </S.FormGroup>
          <S.FormGroup>
            <Text size="xs">Porte do animal</Text>
            <Select options={petSizes} defaultValue={petSizes[0].value} />
          </S.FormGroup>
          <S.FormGroup>
            <Text size="xs">Nível de independência</Text>
            <Select
              options={petIndependenceLevels}
              defaultValue={petIndependenceLevels[0].value}
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
        <S.PetsList>
          {[1, 2, 3, 4, 5, 6].map((pet) => (
            <S.Pet key={pet}>
              <Image
                src="/images/pets/alfredo.png"
                width={274}
                height={135}
                alt=""
              />
              <S.IconBox>
                <Image
                  src="/images/logo-icon.png"
                  width={15}
                  height={15}
                  alt=""
                />
              </S.IconBox>
              <Text size="lg">Alfredo</Text>
            </S.Pet>
          ))}
        </S.PetsList>
      </S.Content>
    </S.Wrapper>
  )
}
