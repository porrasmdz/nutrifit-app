<script setup lang="ts">
import { NButton } from 'naive-ui'
</script>

<template>
  <footer
    class="flex justify-between bg-gray-900 px-4 py-8 pr-8"
  >
    <AppLogo />

    <div
      class="flex items-start gap-8 font-medium"
    >
      <div>
        <h3>Learn More</h3>
        <ul class="my-4 flex flex-col gap-3">
          <li>
            <NuxtLink to="/">
              <NButton text class="text-gray-400">
                <span class="font-medium">About Release</span>
              </NButton>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">
              <NButton text class="text-gray-400">
                <span class="font-medium">Press Publish</span>
              </NButton>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">
              <NButton text class="text-gray-400">
                <span class="font-medium">Mision Vision</span>
              </NButton>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">
              <NButton text class="text-gray-400">
                <span class="font-medium">Stakeholders</span>
              </NButton>
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div>
        <h3>Tickets & Booking</h3>
        <ul class="my-4 flex flex-col gap-3">
          <li>
            <NuxtLink to="/">
              <NButton text class="text-gray-400">
                <span class="font-medium">Ticket 1</span>
              </NButton>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">
              <NButton text class="text-gray-400">
                <span class="font-medium">Ticket 2</span>
              </NButton>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">
              <NButton text class="text-gray-400">
                <span class="font-medium">Ticket 3</span>
              </NButton>
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div class="">
        <h3>Contact Us</h3>
        <ul class="my-4 flex flex-col gap-3">
          <li>
            <NuxtLink to="/">
              <NButton text class="text-gray-400">
                <span class="font-medium">Address</span>
              </NButton>
            </NuxtLink>
          </li>

          <li>
            <NuxtLink to="/">
              <NButton text class="text-gray-400">
                <span class="font-medium">Offices Location</span>
              </NButton>
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div class="">
        <h3>Social</h3>
        <ul class="my-4 flex gap-3">
          <li>
            <NuxtLink to="/">
              <NButton text class="text-white">
                <div
                  i-carbon-logo-facebook
                  h-6 w-6
                />
              </NButton>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">
              <NButton text class="text-white">
                <div
                  i-carbon-logo-instagram
                  h-6 w-6
                />
              </NButton>
            </NuxtLink>
          </li>

          <li>
            <NuxtLink to="/">
              <NButton text class="text-white">
                <div
                  i-carbon-logo-twitter
                  h-6 w-6
                />
              </NButton>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">
              <NButton text class="text-white">
                <div
                  i-carbon-logo-youtube
                  h-6 w-6
                />
              </NButton>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
