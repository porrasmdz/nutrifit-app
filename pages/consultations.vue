<script setup lang="ts">
onMounted(() => {
  const title = inject<Ref<string>>('title')
  if (title !== undefined && title !== null)
    title.value = 'Consultas'
})
</script>

<template>
  <h1 class="mb-4 text-2xl font-bold">
    Consultas Próximas
  </h1>
  <p>Aqui calculadora...</p>
</template>
