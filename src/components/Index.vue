<template>
  <div>
    <v-card>
      <v-container
        fluid
        grid-list-lg
      >
        <v-layout row wrap>
          <v-post-card v-for="post in posts"
            :key="post.title"
            :title="post.title"
            :date="post.date"
            :to="post.to"
            :src="post.src"
          />
        </v-layout>
      </v-container>
    </v-card>
  </div>
</template>

<script>
  import PostCard from './PostCard'

  export default {
    components: {
      'v-post-card': PostCard,
    },
    data() {
      return {
        posts: [
          {
            title: "About Vuetify",
            date: "2018-07-10",
            to: "/vuetify",
            src: require("@/assets/logo.png")
          },
          {
            title: "About Vue.js",
            date: "2018-07-12",
            to: "/vuejs",
            src: require("@/assets/logo_vue.png")
          }, 
        ]
      }
    }
  }
</script>
