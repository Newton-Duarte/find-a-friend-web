import Image from 'next/image'

type LogoProps = {
  width?: number
  height?: number
}

export function Logo({ width = 215, height = 56 }: LogoProps) {
  return <Image src="/images/logo.svg" width={width} height={height} alt="" />
}
