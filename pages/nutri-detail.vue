<script setup lang="ts">
onMounted(() => {
  const title = inject<Ref<string>>('title')
  if (title !== undefined && title !== null)
    title.value = 'Dr. Miguel'
})
</script>

<template>
  <div>
    <div>
      <h1 class="mb-4 text-2xl font-bold">
        Información
      </h1>
      <span>asdad</span>
    </div>

    <div>
      <h1 class="mb-4 text-2xl font-bold">
        Productos
      </h1>
      <span>asdad</span>
    </div>

    <div>
      <h1 class="mb-4 text-2xl font-bold">
        Servicios
      </h1>
      <span>asdad</span>
    </div>

    <div>
      <h1 class="mb-4 text-2xl font-bold">
        Horarios
      </h1>
      <span>asdad</span>
    </div>
  </div>
</template>
