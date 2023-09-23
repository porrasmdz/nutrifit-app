import type { IReview } from '../IReview'

export interface CreateReviewDto extends Omit<IReview, 'id' | 'createdAt' | 'updatedAt'> {
  reviewId: string | number
}

export interface UpdateReviewDto extends Partial<CreateReviewDto> {}

export interface FindReviewDto extends Partial<IReview> {}
