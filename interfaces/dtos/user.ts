import type { IUser } from '../IUser'

export interface CreateUserDto extends Omit<IUser, 'id' | 'createdAt' | 'updatedAt'> {
  userId: string | number
}

export interface UpdateUserDto extends Partial<CreateUserDto> {}

export interface FindUserDto extends Partial<IUser> {}
