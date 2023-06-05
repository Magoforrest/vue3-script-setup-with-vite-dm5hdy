<script setup>
import MainView from '@/views/MainView.vue'
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const msg = ref('Hello World!')
</script>

<template>
  <MainView />
  <RouterLink class="text-2xl hover:underline" to="/">Main</RouterLink>
<RouterView></RouterView>
</template>
