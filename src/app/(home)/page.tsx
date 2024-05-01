import Image from 'next/image'
import { Container } from '@/styles/container'
import { Text } from '@/components/text'
import { Logo } from '@/components/logo'
import { SearchPets } from './search-pets'

import * as S from './styles'

export default function Home() {
  return (
    <S.Main>
      <Container>
        <Logo />
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
            <SearchPets />
          </S.Actions>
        </S.Footer>
      </Container>
    </S.Main>
  )
}
