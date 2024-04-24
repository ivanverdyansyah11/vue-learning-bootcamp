<template>
  <div class="col-12 col-sm-8">
    <RecipeDescription />
    <RecipeIngredients />
    <RecipeDirections />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import RecipeDescription from '@/components/detail/RecipeDescription.vue'
import RecipeIngredients from '@/components/detail/RecipeIngredients.vue'
import RecipeDirections from '@/components/detail/RecipeDirections.vue'

const store = useStore()
const route = useRoute()
const recipeDetailStatus = ref(false)
const recipeDetail = ref()

onMounted(async () => {
  try {
    await store.dispatch("recipe/getRecipeDetail", route.params.id)
    recipeDetailStatus.value = true
    recipeDetail.value = store.state.recipe.recipeDetail
  } catch (err) {
    console.log(err);
  }
})

console.log(recipeDetail);
</script>

<style>

</style>