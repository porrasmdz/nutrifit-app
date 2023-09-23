import type { BaseModel } from './BaseModel'

export interface ICategory extends Partial<BaseModel> {
  title: string
  description: string
  image: string

  href: string
}
