<!-- src/components/UserList.vue -->
<template>
  <section>
    <h3>用户列表</h3>
    <button @click="load">刷新</button>
    <ul><li v-for="u in users" :key="u.id">{{ u.id }} - {{ u.username }} - {{ u.nickname }}</li></ul>
  </section>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { getUsers } from '@/services/api'
const users = ref([])
async function load(){ const {data}=await getUsers(); users.value=data }
onMounted(load)
</script>
