<script setup lang="ts">
const online = useOnline()
</script>

<template>
  <div class="w-full">
    <Suspense>
      <ClientOnly>
        <slot v-if="online" />
        <div v-else text-gray:80>
          You're offline. Check Your Internet Connection
        </div>
      </ClientOnly>
      <template #fallback>
        <div w-full bg-red-500>
          <span>Cargando</span>
          <span animate-pulse>Loading...</span>
        </div>
      </template>
    </Suspense>
  </div>
</template>
