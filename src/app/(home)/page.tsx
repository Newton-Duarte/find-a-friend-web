import Image from 'next/image'
import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr'
import { Select } from '@/components/select'
import { Container } from '@/styles/container'
import { Button } from '@/components/button'
import { Text } from '@/components/text'

import * as S from './styles'

const citiesOptions = [
  { id: 1, label: 'Maceió', value: 'maceio' },
  { id: 2, label: 'Recife', value: 'recife' },
]

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
            <Button type="button" variant="tertiary" size="sm">
              <MagnifyingGlass size={26} color="#0D3B66" />
            </Button>
          </S.Actions>
        </S.Footer>
      </Container>
    </S.Main>
  )
}
