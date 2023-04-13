<script setup lang="ts">
definePageMeta({
  auth: {
    unauthenticatedOnly: false,
    navigateAuthenticatedTo: '/protected',
  },
})
</script>

<template>
  <h1 class="text-3xl font-bold">Welcome home.</h1>
</template>
