<script setup lang="ts">
onMounted(() => {
  const title = inject<Ref<string>>('title')
  if (title !== undefined && title !== null)
    title.value = 'Calculadora'
})
</script>

<template>
  <div>
    <h1 class="mb-4 text-2xl font-bold">
      Calculadora de Macronutrientes
    </h1>
    <p>Aqui calculadora...</p>
  </div>
</template>
