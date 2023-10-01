<script setup lang="ts">
import Header from '~/components/base/Header.vue'
import Footer from '~/components/base/Footer.vue'

const pagetitle = ref('Title')
provide('title', pagetitle)
</script>

<template>
  <Header />
  <main class="p-4 py-12">
    <slot />
  </main>
  <MobileNavbar class="fixed bottom-0" />
</template>
