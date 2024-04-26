import Image from 'next/image'

import * as S from './styles'

export function Hero() {
  return (
    <S.Hero>
      <Image src="/images/logo.svg" width={174} height={45} alt="" />
      <Image src="/images/home-pets.png" width={384} height={195} alt="" />
    </S.Hero>
  )
}
