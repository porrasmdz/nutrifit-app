<script setup lang="ts">
import { NButton } from 'naive-ui'
import logo from '~/assets/logohorizontal.png'

const router = useRouter()
</script>

<template>
  <NButton text class="" @click="router.push('/')">
    <img :src="logo" h-12 alt="Company Logo">
  </NButton>
</template>
