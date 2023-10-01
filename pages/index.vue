<script setup lang="ts">
import { NButton, NCard, NCarousel, NPageHeader } from 'naive-ui'
import type { ICourse } from '~/interfaces/ICourse'
import type { IMembership } from '~/interfaces/IMembership'
import type { ICategory } from '~/interfaces/ICategory'
import type { IReview } from '~/interfaces/IReview'

import HomeLayout from '~/layouts/home.vue'

const router = useRouter()

const showLogin = ref<boolean>(false)
const showRegister = ref<boolean>(false)

onMounted(() => {
  const title = inject<Ref<string>>('title')
  if (title !== undefined && title !== null)
    title.value = 'Nutricionistas'
})
</script>

<template>
  <div class="flex flex-col gap-8">
    <div>
      <h1 class="text-2xl font-bold">
        Los más recientes
      </h1>
      <div class="no-scrollbar flex gap-6 overflow-x-scroll pt-6">
        <NutriAvatar />
        <NutriAvatar />
        <NutriAvatar />
        <NutriAvatar />
        <NutriAvatar />
        <NutriAvatar />
        <NutriAvatar />
        <NutriAvatar />
      </div>
    </div>
    <div>
      <h1 class="text-2xl font-bold">
        Nutricionistas
      </h1>
      <div class="no-scrollbar flex flex-col gap-6 overflow-scroll pt-6">
        <NutriDoctor />
        <NutriDoctor />
        <NutriDoctor />
        <NutriDoctor />
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}
</style>
