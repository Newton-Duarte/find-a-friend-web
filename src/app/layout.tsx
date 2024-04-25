import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import Providers from './providers'

import StitchesRegistry from '@/lib/stiches-registry'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Find A Friend',
  description:
    'Leve a felicidade para o seu lar. Encontre o animal de estimação ideal para seu estilo de vida!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <body className={nunito.className}>
        <StitchesRegistry>
          <Providers>{children}</Providers>
        </StitchesRegistry>
      </body>
    </html>
  )
}
