<template>
  <div class="bg-red-600">Form</div>
  <div class="bg-blue-600">{{ store.title }}</div>
</template>
<script setup>
import { useLoginStore } from '@/stores/loginStore'
const store = useLoginStore()
</script>
