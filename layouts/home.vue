<script setup lang="ts">
import Footer from '~/components/base/Footer.vue'
</script>

<template>
  <TheHeader />
  <slot name="hero" />

  <main
    class="relative overflow-x-hidden px-10 py-20 text-center"
  >
    <slot />
  </main>
</template>
