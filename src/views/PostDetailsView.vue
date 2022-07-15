<script>
import { PostService } from "@/services/postService.js"

export default {
  data() {
    return {
      post: {
        title: "Chargement...",
        body: "Cargement...",
        authorFullName: "Chargement ...",
        authorImageUrl: "",
        authorInitials : ""
      },
    };
  },
  mounted() {
    PostService.readOne(this.$route.params.postId).then(post => {
      this.post = post;
    });
  },
};
</script>

<template>
  <main>
    <h1>{{post.title}}</h1>
    <img v-if="post.authorImageUrl" :src="post.authorImageUrl" alt="">
    <div v-else class="author-initials">{{ post.authorInitials }}</div>
    <p>Publié par : {{ post.authorFullName}}</p>
  </main>
</template>

<style>
  
</style>
