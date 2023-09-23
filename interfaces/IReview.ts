import type { BaseModel } from './BaseModel'

export interface IReview extends Partial<BaseModel> {
  name: string
  role: string
  image: string
  rating: number
  quote: string
  full_review: string
}
