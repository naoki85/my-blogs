<template>
  <v-flex xs12>
    <v-card color="grey lighten-5" :to="to">
      <v-container fluid grid-list-lg>
        <v-layout row>
          <v-flex xs7>
            <div>
              <div class="headline">{{ title  }}</div>
              <div>{{ date  }}</div>
            </div>
          </v-flex>
          <v-flex xs5>
            <v-card-media
              :src="src"
              height="125px"
              contain
            ></v-card-media>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
  export default {
    props: {
      title: String,
      date: String,
      to: String,
      src: String,
    }
  }
</script>
