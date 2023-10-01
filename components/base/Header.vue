<script setup lang="ts">
import naive from 'naive-ui'

const { NButton, NInput } = naive
const title = inject('title')
</script>

<template>
  <div class="w-full px-4 py-6">
    <div class="mx-4 flex items-center justify-between text-3xl font-medium">
      <NButton text>
        <div i-carbon-chevron-left text-2xl />
      </NButton>
      <h1 class="text-[#15c226]">
        {{ title }}
      </h1>
      <NButton text>
        <div i-carbon-settings text-2xl />
      </NButton>
    </div>
    <div class="relative mx-4 mt-6">
      <div i-carbon-search class="absolute z-10 mx-4 my-3 text-slate-400" />
      <NInput
        class="z-0 overflow-hidden rounded-lg bg-gray-200/60 py-1 pl-8"

        type="text"
        size="medium"
        placeholder="Search"
      >
        Search
      </NInput>
    </div>
  </div>
</template>
