import type { BaseModel } from './BaseModel'

export interface IUser extends Partial<BaseModel> {
  name: string
  lastname: string
  image: string
  phone_number: string
  email: string
}
