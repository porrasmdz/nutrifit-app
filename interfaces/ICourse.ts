import type { BaseModel } from './BaseModel'

export interface ICourse extends Partial<BaseModel> {
  title: string
  description: string
  image: string
  video?: string
  rating: number
  category: number
  reviews: number
  hours: number
  href: string
}
