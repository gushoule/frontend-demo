<!-- src/components/LoginBox.vue -->
<template>
  <section>
    <h3>登录</h3>
    <input v-model="form.username" placeholder="用户名" />
    <input v-model="form.password" placeholder="密码" type="password" />
    <button @click="submit">登录</button>
    <p v-if="me">已登录：{{ me.nickname }} ({{ me.username }})</p>
  </section>
</template>
<script setup>
import { reactive, ref } from 'vue'
import { login } from '@/services/api'
const form = reactive({ username:'', password:'' })
const me = ref(null)
async function submit(){ try { const {data}=await login(form); me.value=data } catch { alert('登录失败') } }
</script>
