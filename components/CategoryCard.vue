<script setup lang="ts">
import { NCard } from 'naive-ui'

defineProps<{
  title: string
  image: string
  href: string
}>()

const router = useRouter()
</script>

<template>
  <NCard
    :title="title"
    hoverable
    class="h-70 w-70 cursor-pointer overflow-hidden rounded-lg lg:w-full active:scale-95 hover:scale-105 hover:bg-gray-200"
    @click="router.push(href)"
  >
    <template #cover>
      <div class="h-50 bg-red-300">
        <img
          class="h-full w-full object-cover"
          :src="image"
          :alt="`Category ${title} Button Cover`"
        >
      </div>
    </template>
  </NCard>
</template>
