<!-- src/components/UserForm.vue -->
<template>
  <section>
    <h3>新增用户</h3>
    <input v-model="form.username" placeholder="用户名" />
    <input v-model="form.password" placeholder="密码" type="password" />
    <input v-model="form.nickname" placeholder="昵称" />
    <button @click="submit">提交</button>
  </section>
</template>
<script setup>
import { reactive } from 'vue'
import { createUser } from '@/services/api'
const form = reactive({ username:'', password:'', nickname:'' })
async function submit(){ await createUser(form); alert('新增成功') }
</script>
