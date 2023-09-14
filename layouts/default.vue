<script setup lang="ts">
import Footer from '~/components/base/Footer.vue'
</script>

<template>
  <main>
    <slot />
    <Footer />
    <div class="mx-auto mt-5 text-center text-sm opacity-25">
      [Default Layout]
    </div>
  </main>
</template>
