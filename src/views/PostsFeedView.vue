<script>
import Post from "@/components/Post.vue";

export default {
  components: { Toto: Post },
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    let id = 1;
    this.posts = [
      {
        id: ++id,
        authorImg: "https://via.placeholder.com/600/771796",
        authorFullname: "Jean Dupont",
        title: "Super post 1",
        content: "Super contenu 1",
      },
      {
        id: ++id,
        authorImg: "https://via.placeholder.com/600/771796",
        authorFullname: "Pierre Durand",
        title: "Super post 2",
        content: "Super contenu 2",
      },
      {
        id: ++id,
        authorImg: "https://via.placeholder.com/600/771796",
        authorFullname: "Emilie Dupont",
        title: "Super post 3",
        content: "Super contenu 3",
      },
    ];
  },
};
</script>

<template>
  <main>
    <h1>Dernières publications...</h1>

    <ul>
      <li v-for="post in posts" :key="post.id">

        {{ post.id}}
        <Toto>
          <template #author-image>
            <img src="https://via.placeholder.com/600/771796" alt="" />
          </template>

          <template #author-fullname>Bruno Héritier</template>

          <template #post-title> Super titre </template>

          Est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae
          ea dolores neque\nfugiat blanditiis voluptate porro
        </Toto>
      </li>
    </ul>
  </main>
</template>
