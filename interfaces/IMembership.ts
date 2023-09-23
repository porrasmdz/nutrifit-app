import type { BaseModel } from './BaseModel'

export interface IMembership extends Partial<BaseModel> {
  name: string
  price: number
  description: string
  benefits: string[]
  href: string
}
