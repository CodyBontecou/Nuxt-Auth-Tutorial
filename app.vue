<script setup lang="ts">
const { status } = useAuth()
const loggedIn = computed(() => status.value === 'authenticated')
</script>

<template>
  <div class="bg-gray-50 dark:bg-gray-900 h-screen w-screen">
    <Navbar v-if="loggedIn" />
    <NuxtPage class="max-w-screen-xl mx-auto p-4" />
  </div>
</template>
