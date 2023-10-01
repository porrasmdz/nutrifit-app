<script setup lang="ts">
import { NAvatar, NButton } from 'naive-ui'
</script>

<template>
  <div class="w-full bg-white p-4">
    <div class="mx-auto w-2/3 flex items-center justify-between">
      <NuxtLink to="/">
        <NButton text>
          <div i-carbon-user-filled class="h-7 w-7" />
        </NButton>
      </NuxtLink>

      <NuxtLink to="/calculator">
        <NButton text>
          <div i-carbon-calculator class="h-7 w-7" />
        </NButton>
      </NuxtLink>

      <NuxtLink to="/consultations">
        <NButton text>
          <div i-carbon-chat class="h-7 w-7" />
        </NButton>
      </NuxtLink>

      <NuxtLink to="/achievements">
        <NButton text>
          <div i-carbon-trophy-filled class="h-7 w-7" />
        </NButton>
      </NuxtLink>
    </div>
  </div>
</template>
