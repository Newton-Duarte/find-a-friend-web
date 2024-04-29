import Image from 'next/image'
import Link from 'next/link'
import { Upload, FileText, XSquare, Plus } from '@phosphor-icons/react/dist/ssr'
import { Text } from '@/components/text'
import BackButton from '../../back-button'
import SignOutButton from '../../sign-out-button'
import { TextField } from '@/components/textfield'
import { TextArea } from '@/components/textarea'
import { Select } from '@/components/select'
import {
  petAges,
  petEnergyLevels,
  petEnvironments,
  petIndependenceLevels,
  petSizes,
} from '@/utils/pet-utils'

import * as S from './styles'

type PetPageProps = {
  params: {
    id: string
  }
}

export default function CreatePetPage({ params }: PetPageProps) {
  return (
    <S.Container>
      <S.Sidebar>
        <Link href="/pets">
          <Image src="/images/logo-icon.png" width={45} height={46} alt="" />
        </Link>
        <BackButton />
      </S.Sidebar>
      <S.Content>
        <S.Organization>
          <S.OrganizationInfo>
            <S.IconBox>
              <Image
                src="/images/logo-icon.png"
                width={27}
                height={28}
                alt=""
              />
            </S.IconBox>
            <div>
              <Text size="2xl" as="h4">
                Seu Cãopanheiro
              </Text>
              <Text>Rua do meio, 123 , Boa viagem, Recife - PE </Text>
            </div>
          </S.OrganizationInfo>
          <SignOutButton />
        </S.Organization>
        <S.ContentWrapper>
          <S.SectionTitle size="2xl" as="h2">
            Editar pet
          </S.SectionTitle>
          <S.Form>
            <S.FormGroup>
              <label htmlFor="name">Nome</label>
              <TextField type="text" variant="lg" />
            </S.FormGroup>
            <S.FormGroup>
              <label htmlFor="name">Sobre</label>
              <TextArea variant="fullWidth" size="lg" />
            </S.FormGroup>
            <S.FormGroup>
              <label htmlFor="name">Idade</label>
              <Select options={petAges} defaultValue={petAges[0].value} />
            </S.FormGroup>
            <S.FormGroup>
              <label htmlFor="name">Porte</label>
              <Select options={petSizes} defaultValue={petSizes[0].value} />
            </S.FormGroup>
            <S.FormGroup>
              <label htmlFor="name">Nível de energia</label>
              <Select
                options={petEnergyLevels}
                defaultValue={petEnergyLevels[0].value}
              />
            </S.FormGroup>
            <S.FormGroup>
              <label htmlFor="name">Nível de independência</label>
              <Select
                options={petIndependenceLevels}
                defaultValue={petIndependenceLevels[0].value}
              />
            </S.FormGroup>
            <S.FormGroup>
              <label htmlFor="name">Ambiente</label>
              <Select
                options={petEnvironments}
                defaultValue={petEnvironments[0].value}
              />
            </S.FormGroup>
            <S.FormGroup>
              <label htmlFor="photos">Fotos</label>
              <S.Photos>
                <S.PhotosDropContainer>
                  <Upload size={24} />
                  <Text>Arraste e solte o arquivo</Text>
                </S.PhotosDropContainer>
                <S.Photo>
                  <div>
                    <FileText size={24} />
                    <Text>pictureexemplo.png</Text>
                  </div>
                  <S.RemovePhoto>
                    <XSquare size={24} />
                  </S.RemovePhoto>
                </S.Photo>
                <S.AddItem type="button">
                  <Plus size={24} />
                </S.AddItem>
              </S.Photos>
            </S.FormGroup>
            <S.Requirements>
              <S.SectionTitle size="2xl" as="h2" style={{ margin: '2rem 0' }}>
                Requisitos para adoção
              </S.SectionTitle>
              <S.FormGroup>
                <label htmlFor="name">Requisito</label>
                <TextField type="text" variant="lg" />
              </S.FormGroup>
              <S.AddItem type="button">
                <Plus size={24} />
              </S.AddItem>
            </S.Requirements>
            <S.ConfirmButton>Confirmar</S.ConfirmButton>
          </S.Form>
        </S.ContentWrapper>
      </S.Content>
    </S.Container>
  )
}
