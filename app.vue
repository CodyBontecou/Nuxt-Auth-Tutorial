<script setup lang="ts">
const { status, signIn, signOut } = useSession()

const loggedIn = computed(() => status.value === 'authenticated')

async function handleSignIn() {
  await signIn()
}

async function handleSignOut() {
  await signOut()
}
</script>

<template>
  <div>
    <button v-if="loggedIn" @click="handleSignOut">Sign Out</button>
    <button v-else @click="handleSignIn">Sign In</button>
  </div>
</template>
