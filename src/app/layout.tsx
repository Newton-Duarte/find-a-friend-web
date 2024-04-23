import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import { globalStyles } from '@/styles/global'
import { getCssText } from '@/styles'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Find A Friend',
  description:
    'Leve a felicidade para o seu lar. Encontre o animal de estimação ideal para seu estilo de vida!',
}

globalStyles()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </head>
      <body className={nunito.className}>{children}</body>
    </html>
  )
}
