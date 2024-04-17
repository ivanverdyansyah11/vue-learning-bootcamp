<script setup>
import { RouterLink, RouterView } from 'vue-router'
import WebHeader from './components/header/WebHeader.vue'
import WebFooter from './components/footer/WebFooter.vue'
</script>

<template>
  <WebHeader/>
  <RouterView />
  <WebFooter/>
</template>

<style scoped>

</style>
