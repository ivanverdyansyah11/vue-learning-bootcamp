<template>
  <div class="container-fluid py-5" style="background-color: #f5f5f5">
    <div style="background-color: #ffffff" class="p-5 m-auto signup-form">
      <div class="text-center">
        <img src="@/assets/images/Logo.png" alt="Logo Brand" />
        <h2 class="mt-4">Create your account</h2>
        <p>Enter your details to use all the app features.</p>
      </div>
      <form class="mt-3" @submit.prevent="register">
        <div>
          <base-input type="text" identity="firstname" placeholder="Ex: Jack" label="Firstname" v-model="signupData.firstname"></base-input>
        </div>
        <div class="my-4">
          <base-input type="text" identity="lastname" placeholder="Ex: Daniels" label="Lastname" v-model="signupData.lastname"></base-input>
        </div>
        <div class="my-4">
            <base-input type="text" identity="username" placeholder="Your username" label="Username" v-model="signupData.username"></base-input>
        </div>
        <div class="my-4">
            <base-input type="email" identity="email" placeholder="Your email" label="Email" v-model="signupData.email"></base-input>
        </div>
        <div class="my-4">
            <base-input type="password" identity="password" placeholder="Your password" label="Password" v-model="signupData.password" @keyInput="passwordCheck"></base-input>
            <p class="text-danger mt-1 fw-medium" style="font-size: 11px;" :style="{ display: passwordStatusDisplay }">The password field must be at least 8 characters</p>
        </div>
        <div class="my-4">
            <base-input type="password" identity="confirmPassword" placeholder="Same with password" label="Confirm Password" v-model="signupData.confirmPassword" @keyInput="confirmationPasswordCheck"></base-input>
            <p class="text-danger mt-1 fw-medium" style="font-size: 11px;" :style="{ display: confirmPasswordDoesNotMatch }">The password confirmation does not match</p>
            <p class="text-success mt-1 fw-medium" style="font-size: 11px;" :style="{ display: confirmPasswordMatch }">The password confirmation does match</p>
        </div>
        <div class="my-4">
            <base-input type="file" identity="recipeImage" label="Profile Photo" isImage="true" @input="checkImage">
                <div>
                    <div class="border p-1 mt-2 rounded-circle">
                        <img :src="signupData.imageLink" alt="User Icon" class="rounded-circle" width="140" height="140" style="object-fit: cover;">
                    </div>
                    <div class="text-center" style="transform: translateY(-24px);">
                        <i class="fa-solid fa-camera fs-5 p-2 rounded-circle bg-white"></i>
                    </div>
                </div>
            </base-input>
        </div>
        <div class="my-4">
          <button type="submit" class="btn btn-signup w-100">Sign up</button>
        </div>
      </form>
      <div class="text-center mt-4">
        <p class="fw-semibold">
          Already have account?
          <span style="color: #4c4ddc">
            <router-link :to="{ name: 'login' }" class="text-decoration-none"> Login</router-link>
            </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import BaseInput from '@/components/ui/BaseInput.vue'
import { reactive, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const passwordStatusDisplay = ref("none")
const confirmPasswordDoesNotMatch = ref("none")
const confirmPasswordMatch = ref("none")
const store = useStore()
const router = useRouter()

const register = async () => {
  if (signupData.password !== signupData.confirmPassword || signupData.password.length < 8) {
    signupData.confirmPassword = ""
    signupData.password = ""
    confirmPasswordDoesNotMatch.value = "none"
    confirmPasswordMatch.value = "none"
  } else {
    console.log(signupData);
    await store.dispatch("auth/getRegisterData", signupData)
    router.push("/")
  }
}

const signupData = reactive({
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  isLogin: false,
  imageLink: "",
})

const passwordCheck = () => {
  if (signupData.password.length < 8) {
    passwordStatusDisplay.value = "block"
  } else {
    passwordStatusDisplay.value = "none"
  }
}

const confirmationPasswordCheck = () => {
  if (signupData.confirmPassword === "") {
    confirmPasswordDoesNotMatch.value = "none"
    confirmPasswordMatch.value = "none"
    return;
  }

  if (signupData.password !== signupData.confirmPassword) {
    confirmPasswordDoesNotMatch.value = "block"
    confirmPasswordMatch.value = "none"
    return;
  }

  confirmPasswordDoesNotMatch.value = "none"
  confirmPasswordMatch.value = "block"
}

const checkImage = (e) => {
  const file = e.target.files[0]
  const reader = new FileReader()
  reader.readAsDataURL(file)

  reader.addEventListener("load", () => {
    signupData.imageLink = reader.result
  })
}
</script>

<style>
    
</style>