import { storeToRefs } from 'pinia'
import { useCoursesStore } from '~/stores/courses'
import type { CreateCourseDto, FindCourseDto, UpdateCourseDto } from '~/interfaces/dtos/course'

function useCourses() {
  const coursesStore = useCoursesStore()
  const { courses, limit, loading, totalResults, nextPage, prevPage } = storeToRefs(coursesStore)

  const getAllCourses = async () => {
    coursesStore.loadCourses()
  }
  const findCourses = async (dto: FindCourseDto) => {}
  const createCourses = async (payload: CreateCourseDto) => {}
  const updateCourses = async (id: string | number, payload: UpdateCourseDto) => {}
  const deleteCourses = async (id: string | number) => {}

  return {
    courses,
    limit,
    loading,
    totalResults,
    nextPage,
    prevPage,

    // (functions)

  }
}
export default useCourses
