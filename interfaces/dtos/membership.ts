import type { IMembership } from '../IMembership'

export interface CreateMembershipDto extends Omit<IMembership, 'id' | 'createdAt' | 'updatedAt'> {
  membershipId: string | number
}

export interface UpdateMembershipDto extends Partial<CreateMembershipDto> {}

export interface FindMembershipDto extends Partial<IMembership> {}
