import { storeToRefs } from 'pinia'
import type { CreateUserDto, FindUserDto, UpdateUserDto } from '~/interfaces/dtos/user'
import { useUserStore } from '~/stores/user'

function useUser() {
  const userStore = useUserStore()
  const { user, loading } = storeToRefs(userStore)

  const findUser = async (dto: FindUserDto) => {}
  const createUser = async (payload: CreateUserDto) => {}
  const updateUser = async (id: string | number, payload: UpdateUserDto) => {}
  const deleteUser = async (id: string | number) => {}

  return {
    user,
    loading,

    // (functions)
    findUser,
    createUser,
    updateUser,
    deleteUser,
  }
}
export default useUser
