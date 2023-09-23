<script setup lang="ts">

</script>

<template>
  <TheHeader />
  <slot name="hero" />

  <main
    class="relative min-h-90vh overflow-x-hidden px-10 py-20 text-center"
  >
    <slot />
  </main>
  <TheFooter />
</template>
