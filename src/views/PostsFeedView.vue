<script setup>
import Post from "@/components/Post.vue";
</script>

<template>
  <main>
    <h1>Dernières publications...</h1>
    <Post>
      <template #author-image>
        <img src="https://via.placeholder.com/600/771796" alt="" />
      </template>

      <template #author-fullname>Bruno Héritier</template>

      <template #post-title>
        Super titre
      </template>


      
      Est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae
      ea dolores neque\nfugiat blanditiis voluptate porro
      
   
    </Post>
  </main>
</template>
