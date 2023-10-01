<script setup lang="ts">
import { NAvatar, NBadge } from 'naive-ui'
</script>

<template>
  <NBadge :offset="[-2, 4]" class="w-18">
    <template #value>
      <div class="h-1 w-[0.4rem] rounded-full" />
    </template>
    <NAvatar round class="h-18 w-18" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
  </NBadge>
</template>
