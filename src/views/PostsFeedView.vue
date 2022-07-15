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

    <ul id="posts-feed-list">
      <li v-for="post in posts" :key="post.id">

        <Post :authorFullName="post.authorFullName" :authorImageUrl="post.authorImageUrl">
          <template #author-fullname>{{post.authorFullName}}</template>

          <template #post-title> {{ post.title }} </template>

          {{ post.body }}
        </Post>
      </li>
    </ul>
  </main>
</template>

<style>
  #posts-feed-list {
    width: 98%;
    max-width: 681px;
    margin: 30px auto
  }

  #posts-feed-list li:nth-child(odd){
    margin-left: 30px;
  }

  #posts-feed-list li:nth-child(even){
    margin-right: 30px;
  }
</style>
