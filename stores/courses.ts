import { acceptHMRUpdate, defineStore } from 'pinia'
import type { ICourse } from '~/interfaces/ICourse'

export const allCourses: ICourse[] = [
  {
    title: 'Curso de Finanzas',
    description: `Lorem Ipsum is simply dummy text of the printing and 
    typesetting industry. Lorem Ipsum has been the industry's 
    standard dummy text ever since the 1500s, when an unknown printer
    took a galley of type and scrambled it to make a type specimen 
    book. It has survived not only five centuries, but also the leap
    into electronic typesetting, remaining essentially unchanged. 
    It was popularised in the 1960s with the release of Letraset 
    sheets containing Lorem Ipsum passages, and more recently 
    with desktop publishing software like Aldus PageMaker 
    including versions of Lorem Ipsum.`,
    image: 'https://files.cults3d.com/uploaders/15529773/illustration-file/fc1c0ead-195b-426e-b2f3-46d7ee150a80/s-l400.jpg',
    rating: 5,
    category: 2,
    reviews: 120,
    hours: 1,
    href: '/courses/1/1',
  },
  {
    title: 'Curso de Marketing',
    description: `Lorem Ipsum is simply dummy text of the printing and 
    typesetting industry. Lorem Ipsum has been the industry's 
    standard dummy text ever since the 1500s, when an unknown printer
    took a galley of type and scrambled it to make a type specimen 
    book. It has survived not only five centuries, but also the leap
    into electronic typesetting, remaining essentially unchanged. 
    It was popularised in the 1960s with the release of Letraset 
    sheets containing Lorem Ipsum passages, and more recently 
    with desktop publishing software like Aldus PageMaker 
    including versions of Lorem Ipsum.`,
    image: 'https://files.cults3d.com/uploaders/15529773/illustration-file/fc1c0ead-195b-426e-b2f3-46d7ee150a80/s-l400.jpg',
    rating: 3,
    category: 2,
    reviews: 120,
    hours: 0.4,
    href: '/courses/2/1',
  },
  {
    title: 'Curso de ORientacion a Objetos ',
    description: `Lorem Ipsum is simply dummy text of the printing and 
    typesetting industry. Lorem Ipsum has been the industry's 
    standard dummy text ever since the 1500s, when an unknown printer
    took a galley of type and scrambled it to make a type specimen 
    book. It has survived not only five centuries, but also the leap
    into electronic typesetting, remaining essentially unchanged. 
    It was popularised in the 1960s with the release of Letraset 
    sheets containing Lorem Ipsum passages, and more recently 
    with desktop publishing software like Aldus PageMaker 
    including versions of Lorem Ipsum.`,
    image: 'https://files.cults3d.com/uploaders/15529773/illustration-file/fc1c0ead-195b-426e-b2f3-46d7ee150a80/s-l400.jpg',
    rating: 4,
    category: 2,
    reviews: 120,
    hours: 0.8,
    href: '/courses/3/1',
  },
  {
    title: 'Curso de Finanzasv2',
    description: `Lorem Ipsum is simply dummy text of the printing and 
    typesetting industry. Lorem Ipsum has been the industry's 
    standard dummy text ever since the 1500s, when an unknown printer
    took a galley of type and scrambled it to make a type specimen 
    book. It has survived not only five centuries, but also the leap
    into electronic typesetting, remaining essentially unchanged. 
    It was popularised in the 1960s with the release of Letraset 
    sheets containing Lorem Ipsum passages, and more recently 
    with desktop publishing software like Aldus PageMaker 
    including versions of Lorem Ipsum.`,
    image: 'https://files.cults3d.com/uploaders/15529773/illustration-file/fc1c0ead-195b-426e-b2f3-46d7ee150a80/s-l400.jpg',
    rating: 5,
    category: 2,
    reviews: 120,
    hours: 1,
    href: '/courses/1/2',
  },
  {
    title: 'Curso de Marketingv2',
    description: `Lorem Ipsum is simply dummy text of the printing and 
    typesetting industry. Lorem Ipsum has been the industry's 
    standard dummy text ever since the 1500s, when an unknown printer
    took a galley of type and scrambled it to make a type specimen 
    book. It has survived not only five centuries, but also the leap
    into electronic typesetting, remaining essentially unchanged. 
    It was popularised in the 1960s with the release of Letraset 
    sheets containing Lorem Ipsum passages, and more recently 
    with desktop publishing software like Aldus PageMaker 
    including versions of Lorem Ipsum.`,
    image: 'https://files.cults3d.com/uploaders/15529773/illustration-file/fc1c0ead-195b-426e-b2f3-46d7ee150a80/s-l400.jpg',
    rating: 3,
    category: 2,
    reviews: 120,
    hours: 0.4,
    href: '/courses/2/2',
  },
  {
    title: 'Curso de ORientacion a Objetos v2',
    description: `Lorem Ipsum is simply dummy text of the printing and 
    typesetting industry. Lorem Ipsum has been the industry's 
    standard dummy text ever since the 1500s, when an unknown printer
    took a galley of type and scrambled it to make a type specimen 
    book. It has survived not only five centuries, but also the leap
    into electronic typesetting, remaining essentially unchanged. 
    It was popularised in the 1960s with the release of Letraset 
    sheets containing Lorem Ipsum passages, and more recently 
    with desktop publishing software like Aldus PageMaker 
    including versions of Lorem Ipsum.`,
    image: 'https://files.cults3d.com/uploaders/15529773/illustration-file/fc1c0ead-195b-426e-b2f3-46d7ee150a80/s-l400.jpg',
    rating: 4,
    category: 2,
    reviews: 120,
    hours: 0.8,
    href: '/courses/3/2',
  },
]

export const useCoursesStore = defineStore('courses', () => {
  const courses = ref<ICourse[]>(allCourses)
  const loading = ref<boolean>(false)
  const limit = ref<number>(10)
  const totalResults = ref<number>(courses.value.length)
  const nextPage = ref<number | null>(null)
  const prevPage = ref<number | null>(null)

  const loadCourses = () => {
    loading.value = true
    courses.value = allCourses
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
