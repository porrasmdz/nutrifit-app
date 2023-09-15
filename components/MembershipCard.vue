<script setup lang="ts">
import { NButton, NCard, NTag } from 'naive-ui'
import type { IMembership } from '~/interfaces/IMembership'

defineProps<{
  membership: IMembership
}>()

const router = useRouter()
</script>

<template>
  <NCard
    class="relative h-110 w-70 flex flex-col justify-between px-4 py-8 lg:w-1/3"
  >
    <NTag
      v-if="membership.name === 'Pro'"
      round
      size="large"
      type="primary"
      class="absolute right-8 top-6"
    >
      <template #icon>
        <div i-carbon-checkmark-filled h-6 w-6 />
      </template>
      Most Popular
    </NTag>
    <div class="flex items-end gap-6">
      <span text="4xl" font="bold">
        $ {{ membership.price }}
      </span>
      <span text="grey-600" font="bold">
        /mes
      </span>
    </div>

    <div class="my-4">
      <h3 text="2xl grey-800" font="medium">
        {{ membership.name }}
      </h3>
      <p text="lg grey-600" font="medium">
        {{ membership.description }}
      </p>
    </div>

    <div
      v-for="benefit in membership.benefits"
      :key="`${benefit}-plan-${membership.name}`"
      class="my-1 flex gap-2"
    >
      <div i-carbon-checkmark-filled />
      <span>{{ benefit }}</span>
    </div>

    <template #footer>
      <NButton type="primary" @click="router.push(membership.href)">
        Más Información
      </NButton>
    </template>
  </NCard>
</template>
