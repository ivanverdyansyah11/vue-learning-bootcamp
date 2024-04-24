<template>
  <div class="my-3">
    <div class="card">
        <div class="card-header">
            <p class="fs-4 my-0 fw-semibold">Ingredients</p>
        </div>
        <div class="card-body">
            <div class="mb-0">
                <li v-for="(ingredients, index) in recipeDetail.ingredients" :key="index">{{ ingredients }}</li>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore()

const recipeDetail = computed(() => {
  return store.state.recipe.recipeDetail
})
</script>

<style>

</style>