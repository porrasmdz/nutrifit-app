import { acceptHMRUpdate, defineStore } from 'pinia'
import type { IMembership } from '~/interfaces/IMembership'

export const useMembershipsStore = defineStore('memberships', () => {
  const memberships = ref<IMembership[]>([])
  const loading = ref<boolean>(false)
  const limit = ref<number>(10)
  const totalResults = ref<number>(0)
  const nextPage = ref<number | null>(null)
  const prevPage = ref<number | null>(null)

  const loadMemberships = () => {
    loading.value = true
    if (memberships.value.length < 1) {
    // fetchMemberships
    }
    loading.value = false
  }

  return {
    // state (refs)
    memberships,
    limit,
    loading,
    totalResults,
    nextPage,
    prevPage,

    // getters (computed)

    // actions (functions)
    loadMemberships,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useMembershipsStore, import.meta.hot))
