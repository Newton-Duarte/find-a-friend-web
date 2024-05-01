import { env } from '@/env'

export function fetchApi(path: string, init?: RequestInit) {
  const baseUrl = env.NEXT_PUBLIC_API_BASE_URL
  const apiPrefix = ''
  const url = new URL(apiPrefix.concat(path), baseUrl)

  return fetch(url, init)
}
