import { acceptHMRUpdate, defineStore } from 'pinia'
import type { ICourse } from '~/interfaces/ICourse'

export const useCoursesStore = defineStore('courses', () => {
  const courses = ref<ICourse[]>([
    {
      title: 'Curso de Finanzas',
      image: 'https://files.cults3d.com/uploaders/15529773/illustration-file/fc1c0ead-195b-426e-b2f3-46d7ee150a80/s-l400.jpg',
      rating: 5,
      category: 2,
      reviews: 120,
      hours: 1,
      href: '/courses/1/1',
    },
    {
      title: 'Curso de Marketing',
      image: 'https://files.cults3d.com/uploaders/15529773/illustration-file/fc1c0ead-195b-426e-b2f3-46d7ee150a80/s-l400.jpg',
      rating: 3,
      category: 2,
      reviews: 120,
      hours: 0.4,
      href: '/courses/2/2',
    },
    {
      title: 'Curso de ORientacion a Objetos ',
      image: 'https://files.cults3d.com/uploaders/15529773/illustration-file/fc1c0ead-195b-426e-b2f3-46d7ee150a80/s-l400.jpg',
      rating: 4,
      category: 2,
      reviews: 120,
      hours: 0.8,
      href: '/courses/3/3',
    },
    {
      title: 'Curso de Finanzas',
      image: 'https://files.cults3d.com/uploaders/15529773/illustration-file/fc1c0ead-195b-426e-b2f3-46d7ee150a80/s-l400.jpg',
      rating: 5,
      category: 2,
      reviews: 120,
      hours: 1,
      href: '/courses/1/1',
    },
    {
      title: 'Curso de Marketing',
      image: 'https://files.cults3d.com/uploaders/15529773/illustration-file/fc1c0ead-195b-426e-b2f3-46d7ee150a80/s-l400.jpg',
      rating: 3,
      category: 2,
      reviews: 120,
      hours: 0.4,
      href: '/courses/2/2',
    },
    {
      title: 'Curso de ORientacion a Objetos ',
      image: 'https://files.cults3d.com/uploaders/15529773/illustration-file/fc1c0ead-195b-426e-b2f3-46d7ee150a80/s-l400.jpg',
      rating: 4,
      category: 2,
      reviews: 120,
      hours: 0.8,
      href: '/courses/3/3',
    },
  ])
  const loading = ref<boolean>(false)
  const limit = ref<number>(10)
  const totalResults = ref<number>(courses.value.length)
  const nextPage = ref<number | null>(null)
  const prevPage = ref<number | null>(null)

  const loadCourses = () => {
    loading.value = true
    if (courses.value.length < 1) {
      // fetchCourse
    }
    loading.value = false
  }
  return {
    courses,
    loading,
    limit,
    totalResults,
    nextPage,
    prevPage,

    loadCourses,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useCoursesStore, import.meta.hot))
