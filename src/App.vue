<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "@/components/Header.vue";

// defineProps({
//   msg: {
//     type: String,
//     required: true,
//   },
// });
</script>

<template>
  <div>
    <Header/>
  <RouterView />
  </div>
  
</template>

<style>
@import "@/assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0;
  font-weight: normal;
}
  
</style>
