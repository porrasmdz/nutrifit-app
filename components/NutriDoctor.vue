<script setup lang="ts">
import { NAvatar, NBadge, NButton } from 'naive-ui'

const router = useRouter()
const images = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5I3X-3wgFxWp9rIsQ2YiZrcEEBL5rGXxmql_-aZW3WRrdSzmVYNPILKiaoUA4T7gvx34&usqp=CAU',
  'https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=1200:*',
  'https://superdoc.mx/wp-content/uploads/2023/05/doctora-1.png',
]
const getRandomImg = () => images[Math.floor(Math.random() * images.length)]
</script>

<template>
  <NCard class="w-full cursor-pointer rounded-lg p-4 active:bg-slate-200/60 hover:bg-slate-100/80" hoverable @click="$router.push('/nutri-detail')">
    <div class="flex items-center">
      <NAvatar round class="mr-6 h-18 w-18 object-cover" :src="getRandomImg()" />
      <div class="flex flex-col justify-center">
        <h3 class="text-lg font-medium">
          Dr. Miguel
        </h3>

        <span>3 años de experiencia</span>
        <span class="text-[#15c226]">+100 pacientes atendidos</span>
      </div>
      <div i-carbon-chevron-right class="absolute right-8" />
    </div>
  </NCard>
</template>
