import { storeToRefs } from 'pinia'
import type { CreateMembershipDto, FindMembershipDto, UpdateMembershipDto } from '~/interfaces/dtos/membership'
import { useMembershipsStore } from '~/stores/memberships'

function useMemberships() {
  const membershipsStore = useMembershipsStore()
  const { memberships, limit, loading, totalResults, nextPage, prevPage } = storeToRefs(membershipsStore)

  const getAllMemberships = async () => {
    membershipsStore.loadMemberships()
  }
  const findMemberships = async (dto: FindMembershipDto) => {}
  const createMemberships = async (payload: CreateMembershipDto) => {}
  const updateMemberships = async (id: string | number, payload: UpdateMembershipDto) => {}
  const deleteMemberships = async (id: string | number) => {}

  return {
    memberships,
    limit,
    loading,
    totalResults,
    nextPage,
    prevPage,

    // (functions)
    getAllMemberships,
    findMemberships,
    createMemberships,
    updateMemberships,
    deleteMemberships,
  }
}
export default useMemberships
