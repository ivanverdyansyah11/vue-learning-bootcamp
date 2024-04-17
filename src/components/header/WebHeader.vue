<script setup>
    import NavigationBar from '@/components/header/NavigationBar.vue'
</script>

<template>
  <div class="shadow-sm container-fluid bg-white py-3 border-bottom fixed-top">
    <div class="container-md d-flex justify-content-between align-items-center">
      <router-link :to="{ name: 'home' }">
        <img src="@/assets/images/Logo.png" alt="Logo Brand">
      </router-link>
      <NavigationBar/>
    </div>
  </div>
</template>

<style>

</style>