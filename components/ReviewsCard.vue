<script setup lang="ts">
import { NAvatar, NButton, NCard, NTag } from 'naive-ui'
import type { IReview } from '~/interfaces/IReview'

defineProps<{
  review: IReview
}>()

const router = useRouter()
</script>

<template>
  <NCard
    class="relative h-90 w-70 flex flex-col justify-between overflow-hidden py-8 lg:w-1/3"
  >
    <div class="flex items-end justify-between">
      <div class="flex gap-4">
        <NAvatar object-fit="cover" :size="62" round :src="review.image" />
        <div>
          <span text="xl" font="bold">
            {{ review.name }}
          </span>

          <p text="lg" font="bold">
            {{ review.role }}
          </p>
        </div>
      </div>
      <div class="flex">
        <div v-for="s in review.rating" :key="`rating-sf-${s}`" i-carbon-star-filled />
        <div v-for="s in 5 - review.rating" :key="`rating-sf-${s}`" i-carbon-star />
      </div>
    </div>

    <div class="my-4 text-ellipsis">
      <h3 text="2xl grey-800" my-6 italic font="bold">
        "{{ review.quote }}"
      </h3>
      <p text="lg grey-600" font="medium">
        {{ review.full_review }}
      </p>
    </div>
  </NCard>
</template>
