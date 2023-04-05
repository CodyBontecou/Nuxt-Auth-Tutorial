<script setup lang="ts">
const { status, signIn, signOut } = useAuth()

const loggedIn = computed(() => status.value === 'authenticated')

async function handleSignIn() {
  await signIn()
}

async function handleSignOut() {
  await signOut()
}
</script>

<template>
  <button v-if="loggedIn" @click="handleSignOut">Sign Out</button>
  <button v-else @click="handleSignIn">Sign In</button>
</template>
