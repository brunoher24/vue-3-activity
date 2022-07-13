<template>
  <div class="post">
    <article>
         <p class="post-top-infos">
            <slot name="author-image"></slot>
            <span class="post-written-by-text">Rédigé par</span>
            <slot name="author-fullname"></slot>
         </p>
         <div class="post-main-content">
            <h3><slot name="post-title"></slot></h3>
            <p><slot></slot></p>
         </div>
    </article>
    
  </div>
</template>

<style>
    .post {
        background-color: #f8f8f8;
        box-shadow: 1px 1px 4px silver;
        border-radius: 4px;
        padding: 15px;
        margin: 10px;
        width: 98%;
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
