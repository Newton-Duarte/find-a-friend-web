import Image from 'next/image'
import { Select } from '@/components/select'
import { Container } from '@/styles/container'
import { Text } from '@/components/text'

import * as S from './styles'
import { SearchPetsButton } from './search-pets-button'
import { citiesOptions } from '@/utils/city-options'

export default function Home() {
  return (
    <S.Main>
      <Container>
        <Image src="/images/logo.svg" width={215} height={56} alt="" />
        <S.Content>
          <Text>Leve a felicidade para o seu lar</Text>
          <Image src="/images/home-pets.png" width={592} height={305} alt="" />
        </S.Content>
        <S.Footer>
          <Text size="2xl">
            Encontre o animal de estimação ideal para seu estilo de vida!
          </Text>
          <S.Actions>
            <Text>Busque um amigo:</Text>
            <Select options={citiesOptions} defaultValue="maceio" />
            <SearchPetsButton city={citiesOptions[0].value} />
          </S.Actions>
        </S.Footer>
      </Container>
    </S.Main>
  )
}
