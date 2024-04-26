import Link from 'next/link'
import { Text } from '@/components/text'
import { Container } from '@/styles/container'
import { TextField } from '@/components/textfield'
import { RegisterButton } from './register-button'
import { PasswordField } from '@/components/password-field'
import { Hero } from '../components/hero'

import * as S from './styles'

export default function SignUp() {
  return (
    <Container>
      <S.Main>
        <S.Hero>
          <Hero />
        </S.Hero>
        <S.Form>
          <Text size="2xl" as="h1">
            Cadastre sua organização
          </Text>
          <S.FormGroup>
            <label htmlFor="owner">Nome do responsável</label>
            <TextField type="text" variant="lg" />
          </S.FormGroup>
          <S.FormGroup>
            <label htmlFor="email">E-mail</label>
            <TextField type="email" variant="lg" />
          </S.FormGroup>
          <S.FormGroup>
            <label htmlFor="postal-code">CEP</label>
            <TextField type="text" variant="lg" />
          </S.FormGroup>
          <S.FormGroup>
            <label htmlFor="street">Endereço</label>
            <TextField type="text" variant="lg" />
          </S.FormGroup>
          <S.FormGroup>
            <label htmlFor="whatsapp">WhatsApp</label>
            <TextField type="text" variant="lg" />
          </S.FormGroup>
          <S.FormGroup>
            <label htmlFor="confirm-password">Confirmar Senha</label>
            <PasswordField />
          </S.FormGroup>
          <S.FormGroup>
            <label htmlFor="password">Senha</label>
            <PasswordField />
          </S.FormGroup>
          <S.Actions>
            <RegisterButton />
            <Link href="/sign-in">Já possui conta?</Link>
          </S.Actions>
        </S.Form>
      </S.Main>
    </Container>
  )
}
