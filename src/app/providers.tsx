import { PropsWithChildren } from 'react'
import { ReactQueryClientProvider } from '@/lib/react-query-client-provider'

export default function Providers({ children }: PropsWithChildren) {
  return <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
}
