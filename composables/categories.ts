import { storeToRefs } from 'pinia'
import type { CreateCategoryDto, FindCategoryDto, UpdateCategoryDto } from '~/interfaces/dtos/category'
import { useCategoriesStore } from '~/stores/categories'

function useCategories() {
  const categoriesStore = useCategoriesStore()
  const { categories, limit, loading, totalResults, nextPage, prevPage } = storeToRefs(categoriesStore)

  const getAllCategories = async () => {
    categoriesStore.loadCategories()
  }
  const findCategories = async (dto: FindCategoryDto) => {}
  const createCategories = async (payload: CreateCategoryDto) => {}
  const updateCategories = async (id: string | number, payload: UpdateCategoryDto) => {}
  const deleteCategories = async (id: string | number) => {}

  return {
    categories,
    limit,
    loading,
    totalResults,
    nextPage,
    prevPage,

    // (functions)
    getAllCategories,
    findCategories,
    createCategories,
    updateCategories,
    deleteCategories,
  }
}
export default useCategories
