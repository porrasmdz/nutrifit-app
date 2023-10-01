<script setup lang="ts">
import naive from 'naive-ui'

const { NAvatar, NButton } = naive
const route = useRoute()
</script>

<template>
  <div class="w-full bg-white p-4">
    <div class="mx-8 flex items-center justify-between">
      <NuxtLink to="/">
        <NButton text>
          <div i-carbon-user-filled class="h-7 w-7" :class="$route.name === 'index' ? 'text-[#15c226]' : ''" />
        </NButton>
      </NuxtLink>

      <NuxtLink to="/calculator">
        <NButton text>
          <div i-carbon-calculator class="h-7 w-7" :class="$route.name === 'calculator' ? 'text-[#15c226]' : ''" />
        </NButton>
      </NuxtLink>

      <NuxtLink to="/consultations">
        <NButton text>
          <div i-carbon-chat class="h-7 w-7" :class="$route.name === 'consultations' ? 'text-[#15c226]' : ''" />
        </NButton>
      </NuxtLink>

      <NuxtLink to="/achievements">
        <NButton text>
          <div i-carbon-trophy-filled class="h-7 w-7" :class="$route.name === 'achievements' ? 'text-[#15c226]' : ''" />
        </NButton>
      </NuxtLink>
    </div>
  </div>
</template>
