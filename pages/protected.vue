<script setup lang="ts">
const { data } = useAuth()
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold">Hi! I'm protected.</h1>
    <pre>{{ data }}</pre>
    <h2 v-if="data?.subscribed">Thanks for subscribing!</h2>
  </div>
</template>
