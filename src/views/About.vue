<template>
  <div class="blog">
    <article v-for="post in posts" :key="post.id" class="blog__post">
      <h2>{{post.title}}</h2>
      <small>{{post.publishedAt}}</small>

      <p>{{post.content}}</p>

      <a href="#" @click.prevent="destroy(post)">Delete this post</a>

      <hr />

      <section class="comments">
        <h3>Comments</h3>

        <article v-for="comment in posts.comments" :key="comment.id" class="comments__comment">
          <h4>From {{comment.author}}</h4>
          <p>{{comment.content}}</p>
        </article>
      </section>
    </article>
  </div>
</template>

<script>
  import Post from '@/store/models/post';

  export default {
    computed: {
      // Returns all posts with reactivity.
      posts: () => Post.all()
    },

    async mounted() {
      // Load all posts form the GraphQL API.
      await Post.fetch();
    },

    methods: {
      // Deletes the post from Vuex Store and from the server.
      async destroy(post) {
        post.$deleteAndDestroy();
      }
    }
  }
</script>