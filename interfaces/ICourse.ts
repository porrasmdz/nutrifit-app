import type { BaseModel } from './BaseModel'

export interface ICourse extends Partial<BaseModel> {
  title: string
  image: string
  rating: number
  category: number
  reviews: number
  hours: number
  href: string
}
