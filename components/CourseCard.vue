<script setup lang="ts">
import { NButton, NCard } from 'naive-ui'
import type { ICourse } from '~/interfaces/ICourse'

defineProps<{
  course: ICourse
}>()

const router = useRouter()
</script>

<template>
  <NCard
    header-style="
    overflow: hidden;
    white-space: nowrap;
    height: 20px;
    text-overflow: ellipsis;
    margin: 0.48rem 0px 0px 0px;"
    size="small"
    :title="course.title"
    class="min-h-70 w-70 lg:w-full hover:bg-gray-200"
  >
    <template #cover>
      <div class="h-50 bg-red-300">
        <img
          class="h-full w-full object-cover"
          :src="course.image"
          :alt="`Course ${course.title} Button Cover`"
        >
      </div>
    </template>
    <span>
      {{ course.category === 2 ? 'Administración' : 'Finanzas' }}
    </span>
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <div
          v-for="star in course.rating"
          :key="`${course.title}-sf-${star}`"
          i-carbon-star-filled class="text-amber-500"
        />
        <div
          v-for="star in 5 - course.rating"
          :key="`${course.title}-se-${star}`"
          i-carbon-star class="text-amber-800"
        />
      </div>
      <span text="xs grey-600" font="bold">({{ course.reviews }})</span>
    </div>
    <div class="flex items-center gap-2">
      <div i-carbon-time />
      <span text="md grey-600" font="medium">{{ course.hours * 60 }} mins.</span>
    </div>

    <template #footer>
      <NButton type="primary" @click="router.push(course.href)">
        Más Información
      </NButton>
    </template>
  </NCard>
</template>
