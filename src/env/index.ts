import { z } from 'zod'

const envSchema = z.object({
  NEXT_PUBLIC_API_BASE_URL: z.string(),
})

const _env = envSchema.safeParse(process.env)

if (_env.error) {
  console.error(`'Invalid environment variables' ${_env.error.format()}`)
  throw new Error('Invalid environment variables')
}

export const env = _env.data
