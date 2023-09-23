import type { ICourse } from '../ICourse'

export interface CreateCourseDto extends Omit<ICourse, 'id' | 'createdAt' | 'updatedAt'> {
  courseId: string | number
}

export interface UpdateCourseDto extends Partial<CreateCourseDto> {}

export interface FindCourseDto extends Partial<ICourse> {}
