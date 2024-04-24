<template>
  <div class="container-fluid py-5" style="background-color: #f5f5f5;">
    <div style="background-color: #ffffff; width: 400px min-height: 100vh;" class="p-5 m-auto login-form">
      <div class="text-center">
        <img src="@/assets/images/Logo.png" alt="Logo Brand" />
        <h2 class="mt-4">Log in to your account</h2>
        <p>Welcome back! Please enter your details.</p>
      </div>
      <form @submit.prevent="login">
        <div class="my-4">
          <base-input type="email" identity="email" placeholder="Enter your email" label="Email" v-model="loginData.email"></base-input>
        </div>
        <div class="my-4">
          <base-input type="password" identity="password" placeholder="Enter your password" label="Password" v-model="loginData.password"></base-input>
        </div>
        <div class="my-4">
          <button type="submit" class="btn btn-signup w-100">Log in</button>
        </div>
      </form>
      <div class="text-center mt-4">
        <p class="fw-semibold">
          Don’t have an account?
          <span style="color: #4c4ddc">
            <RouterLink :to="{ name: 'signup' }" class="text-decoration-none">Signup</RouterLink>
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import BaseInput from '@/components/ui/BaseInput.vue'
import { reactive } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore()
const router = useRouter()

const loginData = reactive({
  email: "",
  password: "",
  isLogin: true
})

const login = async () => {
  await store.dispatch('auth/getLoginData', loginData)
  router.push('/')
}
</script>