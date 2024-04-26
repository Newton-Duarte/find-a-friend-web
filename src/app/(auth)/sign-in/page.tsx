import { Text } from '@/components/text'
import { Container } from '@/styles/container'
import { TextField } from '@/components/textfield'
import { LoginButton } from './login-button'
import { RegisterButton } from './register-button'
import { PasswordField } from '@/components/password-field'
import { Hero } from '../components/hero'

import * as S from './styles'

export default function SignIn() {
  return (
    <Container>
      <S.Main>
        <Hero />
        <S.Form>
          <Text size="2xl" as="h1">
            Boas-vindas!
          </Text>
          <S.FormGroup>
            <label htmlFor="email">E-mail</label>
            <TextField type="email" variant="lg" />
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
