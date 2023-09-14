<script setup lang="ts">
import { NButton, NInput, NInputGroup } from 'naive-ui'
import logo from '~/assets/logohorizontal.png'

const router = useRouter()
</script>

<template>
  <div w-full flex items-center justify-between gap-4 bg-white px-4 py-2 text-gray-500>
    <NButton text @click="router.push('/')">
      <img :src="logo" h-12 alt="Company Logo">
    </NButton>
    <NInput
      class="hidden max-w-[300px] lg:block"
      placeholder="Buscar"
    >
      <template #prefix>
        <div i-carbon-search />
      </template>
    </NInput>
    <nav>
      <ul flex items-center gap-4>
        <li>
          <NButton text @click="router.push('/courses')">
            Cursos
          </NButton>
        </li>
        <li>
          <NButton text @click="router.push('/about-us')">
            Nosotros
          </NButton>
        </li>
        <li>
          <NButton text @click="router.push('/contact')">
            Contacto
          </NButton>
        </li>
      </ul>
    </nav>

    <div w-auto flex items-center gap-4>
      <NButton type="primary" @click="router.push('/login')">
        Login
      </NButton>

      <NButton secondary strong @click="router.push('/register')">
        Register
      </NButton>
    </div>
  </div>
</template>
