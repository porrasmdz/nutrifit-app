<script setup lang="ts">
import { NButton, NInput } from 'naive-ui'

const title = inject('title')
</script>

<template>
  <div class="w-full px-4 py-6">
    <div class="flex items-center justify-between text-3xl font-medium">
      <NButton text>
        <div i-carbon-chevron-left text-2xl />
      </NButton>
      <h1>{{ title }}</h1>
      <NButton text>
        <div i-carbon-settings text-2xl />
      </NButton>
    </div>
    <div class="relative mt-6">
      <div i-carbon-search class="absolute z-10 mx-4 my-2 text-slate-400" />
      <NInput
        class="z-0 overflow-hidden rounded-md pl-8"

        type="text"
        size="medium"
        placeholder="Search"
      >
        Search
      </NInput>
    </div>
  </div>
</template>
