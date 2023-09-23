<script setup lang="ts">
import { RouteInfo } from '@nuxt/devtools'
import CourseCard from '~/components/CourseCard.vue'
import type { RouteParams } from '#vue-router'
import type { ICategory } from '~/interfaces/ICategory'
import type { ICourse } from '~/interfaces/ICourse'
import useCourses from '~/composables/courses'
import useCategories from '~/composables/categories'

definePageMeta({
  layout: 'home',
})
const { id } = useRoute().params as RouteParams<'courses-id'>

const category = ref<ICategory>()

const { courses } = useCourses()
const { categories } = useCategories()

function getCategory(id: number | string) {
  category.value = categories.value.find(cat => cat.href.includes(`courses/${id}`))
}

onMounted(() => {
  getCategory(id)
})
</script>

<template>
  <div class="text-left">
    <h2 text="5xl" class="my-4 font-medium">
      Cursos de {{ category?.title }}
    </h2>
    <p text="lg" class="my-4 w-2/3">
      {{ category?.description ?? 'Descripcion vacia' }}
    </p>
    <div
      class="grid grid-cols-3 mt-16 gap-8"
    >
      <CourseCard
        v-for="course in courses"
        :key="`Cat-${category?.title}-${course.title}`"
        :course="course"
      />
    </div>
  </div>
</template>
