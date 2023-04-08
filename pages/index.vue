<script setup lang="ts">
definePageMeta({
  auth: {
    unauthenticatedOnly: false,
    navigateAuthenticatedTo: '/protected',
  },
})

const { data } = await useFetch('/api/me')
</script>

<template>
  <h1 class="text-3xl font-bold">Welcome home.</h1>
  <pre>{{ data }}</pre>
</template>
