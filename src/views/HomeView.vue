<!-- src/views/HomeView.vue -->
<template>
  <main style="max-width:720px;margin:24px auto;line-height:1.8;">
    <LoginBox />
    <UserForm />
    <UserList />
  </main>
</template>
<script setup>
import LoginBox from '@/components/LoginBox.vue'
import UserForm from '@/components/UserForm.vue'
import UserList from '@/components/UserList.vue'
</script>
