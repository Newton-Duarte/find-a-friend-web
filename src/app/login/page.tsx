import Image from 'next/image'
import { Text } from '@/components/text'
import { Container } from '@/styles/container'
import { TextField } from '@/components/textfield'
import { LoginButton } from './login-button'
import { RegisterButton } from './register-button'
import { PasswordField } from '@/components/password-field'

import * as S from './styles'

export default function Login() {
  return (
    <Container>
      <S.Main>
        <S.Hero>
          <Image src="/images/logo.svg" width={174} height={45} alt="" />
          <Image src="/images/home-pets.png" width={384} height={195} alt="" />
        </S.Hero>
        <S.Form>
          <Text size="2xl" as="h1">
            Boas-vindas!
          </Text>
          <S.FormGroup>
            <label htmlFor="email">E-mail</label>
            <TextField type="email" placeholder="Seu e-mail" variant="lg" />
          </S.FormGroup>
          <S.FormGroup>
            <label htmlFor="password">Senha</label>
            <PasswordField />
          </S.FormGroup>
          <S.Actions>
            <LoginButton />
            <RegisterButton />
          </S.Actions>
        </S.Form>
      </S.Main>
    </Container>
  )
}
