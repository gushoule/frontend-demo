<template>
  <main style="max-width:720px;margin:24px auto;line-height:1.8;">
    <h2>联调演示</h2>

    <section style="margin:12px 0;">
      <h3>注册</h3>
      <input v-model="reg.username" placeholder="用户名" />
      <input v-model="reg.password" placeholder="密码" type="password" />
      <input v-model="reg.nickname" placeholder="昵称" />
      <button @click="register">注册</button>
    </section>

    <section style="margin:12px 0;">
      <h3>登录</h3>
      <input v-model="loginForm.username" placeholder="用户名" />
      <input v-model="loginForm.password" placeholder="密码" type="password" />
      <button @click="login">登录</button>
      <p v-if="me">已登录：{{ me.nickname }} ({{ me.username }})</p>
    </section>

    <section style="margin:12px 0;">
      <h3>用户列表</h3>
      <button @click="load">刷新</button>
      <ul>
        <li v-for="u in users" :key="u.id">{{ u.id }} - {{ u.username }} - {{ u.nickname }}</li>
      </ul>
    </section>
  </main>
</template>

<script setup>
import axios from 'axios'
import { reactive, ref, onMounted } from 'vue'

// 走 Vite 代理，开发时会转到 http://localhost:8080
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE || '/api',
  timeout: 10000,
})

const reg = reactive({ username:'', password:'', nickname:'' })
const loginForm = reactive({ username:'', password:'' })
const me = ref(null)
const users = ref([])

async function register(){ await api.post('/register', reg); await load() }
async function login(){
  try{ const {data}=await api.post('/login', loginForm); me.value = data }
  catch{ alert('登录失败') }
}
async function load(){ const {data}=await api.get('/users'); users.value = data }

onMounted(load)
</script>
