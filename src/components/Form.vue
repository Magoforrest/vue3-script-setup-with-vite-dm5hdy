<template>
  <div class="bg-blue-600">{{ store.title }}</div>
  <div class="flex flex-col w-44 gap-3 mt-2 ml-2">
    <input v-model="name" class="border border-slate-200 rounded-xl p-2" />
    <input v-model="lastName" class="border border-slate-200 rounded-xl p-2" />
    <button @click="inviaDati" class="bg-blue-400 rounded-xl w-24">Invia</button>
  </div>
</template>
<script setup>
import { useLoginStore } from '@/stores/loginStore'
const store = useLoginStore()
let name = ''
let lastName = ''

const inviaDati = () => {
  const credentials = {
    nome: name,
    cognome: lastName,
  }
  store.login(credentials)
}
</script>
