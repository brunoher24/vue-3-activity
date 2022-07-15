<template>
  <div class="post">
    <article>
         <div class="post-top-infos">
            <img v-if="authorImageUrl" :src="authorImageUrl" alt="" >
            <div v-else class="author-initials">{{ postAuthorInitials }}</div>
            <span class="post-written-by-text">Rédigé par</span>
            <slot name="author-fullname"></slot>
         </div>
         <div class="post-main-content">
            <h3><slot name="post-title"></slot></h3>
            <p><slot></slot></p>
         </div>
    </article>
    
  </div>
</template>

<script>
export default {
    props: {
        authorFullName: String,
        authorImageUrl: String
    },
    computed: {
        postAuthorInitials() {
            if(!this.authorImageUrl) {
                return this.authorFullName.split(/[\- ]/)
                .map(part => part[0].toUpperCase()).join(" ");
            } else {
                return "";
            }
        }
    }

}
</script>


<style scoped>
    .post {
        background-color: #f8f8f8;
        box-shadow: 1px 1px 4px silver;
        border-radius: 4px;
        padding: 15px;
        margin: 10px 0;
    }

    .post-top-infos {
        display: flex;
        align-items: center;
    }
    .post-top-infos img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        box-shadow: 1px 1px 4px silver;
        margin-right: 20px;
    }

    .post-top-infos img {
        object-fit: cover;
    }

    .post-written-by-text {
        padding-right: 5px;
    }

    .post-top-infos p {
        font-size: 15px;
        font-style: italic;
    }

</style>
