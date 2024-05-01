'use client'

import Link from 'next/link'
import Image from 'next/image'

import { usePets } from '@/hooks/usePets'
import { Text } from '@/components/text'

import * as S from './styles'

export function PetsList() {
  const { data, isLoading, isError, error } = usePets()

  return (
    <S.PetsList>
      {isLoading ? (
        <p>Carregando...</p>
      ) : isError ? (
        <p>Erro: {error.message}</p>
      ) : data?.pets?.length ? (
        data.pets.map((pet) => (
          <Link key={pet.id} href={`/pets/${pet.id}`}>
            <S.Pet>
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
              <Text size="lg">{pet.name}</Text>
            </S.Pet>
          </Link>
        ))
      ) : (
        <p>Nenhum pet encontrado...</p>
      )}
    </S.PetsList>
  )
}
