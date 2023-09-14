<script setup lang="ts">
import { NButton, NCard } from 'naive-ui'
import type { IMembership } from '~/interfaces/IMembership'

defineProps<{
  membership: IMembership
}>()

const router = useRouter()
</script>

<template>
  <NCard
    class="min-h-70 w-70 lg:w-1/3 hover:bg-gray-200"
  >
    <span>
      {{ membership.name }}
    </span>
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <div
          v-for="benefit in membership.benefits"
          :key="`${benefit}-plan-${membership.name}`"
          i-carbon-star-filled class="text-amber-500"
        />
      </div>
      <span text="xs grey-600" font="bold">asd</span>
    </div>

    <template #footer>
      <NButton type="primary" @click="router.push(membership.href)">
        Más Información
      </NButton>
    </template>
  </NCard>
</template>
