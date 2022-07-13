<script>
import Post from "@/components/Post.vue";
import { PostService } from "@/services/postService.js"

export default {
  components: { Post },
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    PostService.readAll().then(posts => {
      this.posts = posts;
    });
  },
};
</script>

<template>
  <main>
    <h1>Dernières publications...</h1>

    <ul>
      <li v-for="post in posts" :key="post.id">

        <Post>
          <template #author-image>
            <img src="https://via.placeholder.com/600/771796" alt="" />
          </template>

          <template #author-fullname>Bruno Héritier</template>

          <template #post-title> {{ post.title }} </template>

         {{ post.body }}
        </Post>
      </li>
    </ul>
  </main>
</template>
