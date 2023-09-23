import type { ICategory } from '../ICategory'

export interface CreateCategoryDto extends Omit<ICategory, 'id' | 'createdAt' | 'updatedAt'> {
  categoryId: string | number
}

export interface UpdateCategoryDto extends Partial<CreateCategoryDto> {}

export interface FindCategoryDto extends Partial<ICategory> {}
