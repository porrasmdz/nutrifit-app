<script setup lang="ts">
import { NAvatar, NBadge, NButton } from 'naive-ui'

const router = useRouter()
</script>

<template>
  <NCard class="w-full cursor-pointer rounded-lg p-4 active:bg-slate-200/60 hover:bg-slate-100/80" hoverable @click="$router.push('/nutri-detail')">
    <div class="flex items-center">
      <NAvatar round class="mr-6 h-18 w-18" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
      <div class="flex flex-col justify-center">
        <h3 class="pb-4 text-lg font-medium">
          Dr. Miguel
        </h3>

        <span>3 años de experiencia</span>
        <span>+100 pacientes atendidos</span>
      </div>
      <div i-carbon-chevron-right class="absolute right-8" />
    </div>
  </NCard>
</template>
