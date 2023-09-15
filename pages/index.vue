<script setup lang="ts">
import { NButton, NCard, NCarousel, NPageHeader } from 'naive-ui'
import type { ICourse } from '~/interfaces/ICourse'
import type { IMembership } from '~/interfaces/IMembership'
import type { IReview } from '~/interfaces/IReview'

import HomeLayout from '~/layouts/home.vue'

const router = useRouter()
const categories = ref<any>([{
  title: 'Finanzas',
  image: 'https://files.cults3d.com/uploaders/15529773/illustration-file/fc1c0ead-195b-426e-b2f3-46d7ee150a80/s-l400.jpg',
  href: '/courses',
}, {
  title: 'Economía',
  image: 'data:image/jpeg;base64,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',
  href: '/courses',
}, {
  title: 'Administración',
  image: 'https://files.cults3d.com/uploaders/15529773/illustration-file/fc1c0ead-195b-426e-b2f3-46d7ee150a80/s-l400.jpg',
  href: '/courses',
}])
const courses = ref<(ICourse)[]>([
  {
    title: 'Curso de Finanzas',
    image: 'https://files.cults3d.com/uploaders/15529773/illustration-file/fc1c0ead-195b-426e-b2f3-46d7ee150a80/s-l400.jpg',
    rating: 5,
    category: 2,
    reviews: 120,
    hours: 1,
    href: '/courses/1',
  },
  {
    title: 'Curso de Marketing',
    image: 'https://files.cults3d.com/uploaders/15529773/illustration-file/fc1c0ead-195b-426e-b2f3-46d7ee150a80/s-l400.jpg',
    rating: 3,
    category: 2,
    reviews: 120,
    hours: 0.4,
    href: 'string',
  },
  {
    title: 'Curso de ORientacion a Objetos ',
    image: 'https://files.cults3d.com/uploaders/15529773/illustration-file/fc1c0ead-195b-426e-b2f3-46d7ee150a80/s-l400.jpg',
    rating: 4,
    category: 2,
    reviews: 120,
    hours: 0.8,
    href: 'string',
  },
])
const memberships = ref<(IMembership)[]>([
  {
    name: 'Basic',
    price: 2,
    description: 'For starters and people who love tech',
    benefits: ['Fame', 'Fortune', 'Hair', 'ROI', 'Money'],
    href: '/memberships',

  }, {
    name: 'Premium',
    price: 40,
    description: 'For starters and people appasioned for tech ',
    benefits: ['Fame', 'Fortune', 'Hair', 'ROI', 'Money'],
    href: '/memberships',

  },
  {
    name: 'Pro',
    price: 200,
    description: 'For starters and hobbyists appasioned for tech',
    benefits: ['Fame', 'Fortune', 'Hair', 'ROI', 'Money'],
    href: '/memberships',

  },

])

const reviews = ref<(IReview)[]> ([
  {
    name: 'John Doe',
    role: 'CTO',
    rating: 5,
    image: 'https://www.mdtech.news/u/fotografias/m/2023/8/8/f608x342-25785_55508_0.jpg',
    quote: 'adsad',
    full_review: `
    QkbV6PJhLVk vlU g O GYNYE gZhoN0rtv4em rK9MAA8 t3P8AWVOO2 1UqghmJvoZ FGKZrAn dOpWpKVRTjpb cw0qloOL57 G76D4krTxNvqp`,
  },
  {
    name: 'John Doe',
    role: 'CTO',
    rating: 5,
    image: 'https://prod.assets.earlygamecdn.com/images/arcane-vi.jpg?transform=banner_webp',
    quote: 'acaxzc',
    full_review: `
    QkbV6PJhLVk vlU g O GYNYE gZhoN0rtv4em rK9MAA8 t3P8AWVOO2 1UqghmJvoZ FGKZrAn dOpWpKVRTjpb cw0qloOL57 G76D4krTxNvqp`,
  },
  {
    name: 'John Doe',
    role: 'CTO',
    rating: 3,
    image: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blta2da40afd9044f50/619637b260347d10a482c42d/112221_CaitlynCouncil_Banner.jpg',
    quote: 'zxzadqw',
    full_review: `
    QkbV6PJhLVk vlU g O GYNYE gZhoN0rtv4em rK9MAA8 t3P8AWVOO2 1UqghmJvoZ FGKZrAn dOpWpKVRTjpb cw0qloOL57 G76D4krTxNvqp asd as das das as
     das dasd as das dasd as dsadadasdasd asasdaqwn jw`
    ,
  },
])
const showLogin = ref<boolean>(false)
const showRegister = ref<boolean>(false)

definePageMeta({
  layout: 'blank',
})
</script>

<template>
  <HomeLayout>
    <template #hero>
      <NCarousel class="h-[92vh] w-full" dot-type="line" draggable autoplay loop>
        <img src="http://m.gettywallpapers.com/wp-content/uploads/2021/12/Arcane-PC-Wallpaper-HD-768x432.png" alt="">
        <img src="http://m.gettywallpapers.com/wp-content/uploads/2021/12/Arcane-Wallpaper-768x432.jpg" alt="">
        <img src="http://m.gettywallpapers.com/wp-content/uploads/2021/12/Arcane-Background-Photos-768x432.jpg" alt="">
      </NCarousel>
    </template>
    <AsyncPage>
      <section id="offer" class="mx-auto my-20 h-[50vh] w-full flex items-center justify-between py-20 xl:w-4/5">
        <div class="ml-auto h-full w-1/2 flex items-center justify-center">
          <iframe
            width="460" height="315"
            src="https://www.youtube.com/embed/a3ICNMQW7Ok?si=K5b18n9PhO9Ucvdi&amp;controls=0"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          />
        </div>
        <div class="mr-auto w-1/2 flex items-start justify-center">
          <div class="text-end text-lg">
            <h2 text="5xl" class="my-4 font-medium">
              ¿Qué Ofrecemos?
            </h2>
            <p class="my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum temporibus perspiciatis pariatur soluta aliquam
              nemo dignissimos nulla corrupti provident possimus repellat molestias magnam
            </p>
            <p class="mb-4">
              Lorem ipsum dolor sit amet
              consectetur adipisicing elit.
            </p>
            <NButton type="primary" class="px-16" @click="router.push('/courses')">
              Explorar
            </NButton>
          </div>
        </div>
      </section>

      <section id="categories" class="mx-auto my-20 w-full py-20 text-center xl:w-4/5">
        <div class="text-left">
          <h2 text="5xl" class="my-4 font-medium">
            Categorías
          </h2>
          <p text="lg" class="my-4 w-2/3">
            Cursos con especialistas de distintas áreas que impulsarán la productividad de tu equipo
          </p>
          <div
            class="mt-16 flex flex-col items-center justify-center gap-4 md:flex-row lg:justify-between"
          >
            <CategoryCard
              v-for="category in categories" :key="`Cat-${category.title}`"
              :title="category.title"
              :image="category.image"
              :href="category.href"
            />
          </div>
        </div>
      </section>

      <section id="courses" class="mx-auto my-20 w-full py-20 text-center xl:w-4/5">
        <div class="text-left">
          <h2 text="5xl" class="my-4 font-medium">
            Cursos
          </h2>
          <p text="lg" class="my-4 w-2/3">
            Cursos con especialistas de distintas áreas que impulsarán la productividad de tu equipo
          </p>
          <div
            class="mt-16 flex flex-col items-center justify-between gap-4 md:flex-row lg:justify-between"
          >
            <CourseCard
              v-for="course in courses" :key="course.title"
              :course="course"
            />
          </div>
        </div>
      </section>

      <section id="memberships" class="mx-auto my-20 w-full py-20 text-center xl:w-4/5">
        <div class="text-left">
          <h2 text="5xl" class="my-4 font-medium">
            Membresías
          </h2>
          <p text="lg" class="my-4 w-2/3">
            Cursos con especialistas de distintas áreas que impulsarán la productividad de tu equipo
          </p>
          <div
            class="mt-16 flex flex-col items-center justify-center gap-4 md:flex-row lg:justify-between"
          >
            <MembershipCard v-for="mem in memberships" :key="`${mem.name}`" :membership="mem" />
          </div>
        </div>
      </section>

      <section id="reviews" class="mx-auto my-20 w-full py-20 text-center xl:w-4/5">
        <div class="text-left">
          <h2 text="5xl" class="my-4 font-medium">
            Reseñas
          </h2>
          <p text="lg" class="my-4 w-2/3">
            Cursos con especialistas de distintas áreas que impulsarán la productividad de tu equipo
          </p>
          <div
            class="mt-16 flex flex-col items-center justify-center gap-4 md:flex-row lg:justify-between"
          >
            <ReviewsCard v-for="review in reviews" :key="`${review.name}-${review.quote}`" :review="review" />
          </div>
        </div>
      </section>
    </AsyncPage>
  </HomeLayout>
</template>

<style scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
