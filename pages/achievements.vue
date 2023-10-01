<script setup lang="ts">
onMounted(() => {
  const title = inject<Ref<string>>('title')
  if (title !== undefined && title !== null)
    title.value = 'Metas'
})
</script>

<template>
  <h1 class="mb-4 text-2xl font-bold">
    Metas alimenticias
  </h1>
  <p>Aqui calculadora...</p>
</template>
