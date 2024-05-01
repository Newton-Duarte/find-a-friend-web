import { Organization } from './organization'

export type Pet = {
  id: string
  name: string
  description: string
  type: string
  size: string
  age: string
  independency_level: string
  energy_level: string
  ambient: string
  created_at: string
  organization_id: string
  organization?: Organization
}
