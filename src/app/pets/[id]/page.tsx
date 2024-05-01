import Image from 'next/image'
import Link from 'next/link'
import {
  Lightning,
  CornersOut,
  Circle,
  WhatsappLogo,
  Info,
} from '@phosphor-icons/react/dist/ssr'
import { Text } from '@/components/text'
import BackButton from './back-button'
import { getPetById } from '@/api/get-pet-by-id'

import * as S from './styles'

type PetPageParams = {
  params: {
    id: string
  }
}

export default async function PetPage({ params: { id } }: PetPageParams) {
  const data = await getPetById(id)

  return (
    <S.Container>
      <S.Sidebar>
        <Link href="/pets">
          <Image src="/images/logo-icon.png" width={45} height={46} alt="" />
        </Link>
        <BackButton />
      </S.Sidebar>
      <S.Title as="h2">Seu novo amigo</S.Title>
      <S.Content>
        <Image
          src="/images/cover/alfredo.png"
          width={704}
          height={336}
          priority
          quality={100}
          alt=""
        />
        <S.ContentWrapper>
          <S.PetImages>
            {[1, 2, 3, 4, 5].map((image) => (
              <Image
                key={image}
                src="/images/thumb/alfredo.png"
                width={80}
                height={80}
                className={image === 1 ? 'active' : ''}
                alt=""
              />
            ))}
          </S.PetImages>
          <S.PetInfo>
            <Text size="2xl" as="h3">
              {data.pet.name}
            </Text>
            <Text size="lg">{data.pet.description}</Text>
          </S.PetInfo>
          <S.PetDetails>
            <S.PetDetail>
              <div>
                <Lightning size={20} />
                <Lightning size={20} />
                <Lightning size={20} />
                <Lightning size={20} />
                <Lightning size={20} />
              </div>
              <Text>Muita energia</Text>
            </S.PetDetail>
            <S.PetDetail>
              <CornersOut size={20} />
              <Text>Ambiente Amplo</Text>
            </S.PetDetail>
            <S.PetDetail>
              <div>
                <Circle size={20} weight="fill" />
                <Circle size={20} />
                <Circle size={20} />
              </div>
              <Text>Pequeno</Text>
            </S.PetDetail>
          </S.PetDetails>
          <S.PetLocation>
            <Image
              src="/images/map/alfredo.png"
              width={560}
              height={227}
              alt=""
            />
            <a href="#" target="_blank">
              Ver rotas no Google Maps
            </a>
          </S.PetLocation>
          <S.Separator />
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
                  {data.pet.organization?.name}
                </Text>
                <Text>{`${data.pet.organization?.street_name}, ${data.pet.organization?.street_number}, ${data.pet.organization?.neighborhood}, ${data.pet.organization?.city}`}</Text>
                <Link href="#">
                  <WhatsappLogo size={24} weight="fill" />
                  <Text>{data.pet.organization?.phone}</Text>
                </Link>
              </div>
            </S.OrganizationInfo>
          </S.Organization>
          <S.Separator />
          <S.AdoptionRequirements>
            <Text size="2xl" as="h5">
              Requisitos para adoção
            </Text>
            <S.Requirements>
              {[1, 2, 3, 4, 5].map((item) => (
                <S.Requirement key={item}>
                  <Info size={24} />
                  <Text size="lg">
                    Local grande para o animal correr e brincar.
                  </Text>
                </S.Requirement>
              ))}
            </S.Requirements>
          </S.AdoptionRequirements>
          <S.Separator />
          <S.WhatsAppButton href="#">
            <WhatsappLogo size={24} />
            Entrar em contato
          </S.WhatsAppButton>
        </S.ContentWrapper>
      </S.Content>
    </S.Container>
  )
}
