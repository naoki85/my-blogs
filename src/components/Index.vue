<template>
  <div>
    <v-card>
      <v-container
        fluid
        grid-list-lg
      >
        <v-layout row wrap>
          <v-flex xs12>
            <v-card color="grey lighten-5" to="/vuetify">
              <v-container fluid grid-list-lg>
                <v-layout row>
                  <v-flex xs7>
                    <div>
                      <div class="headline">About Vuetify</div>
                      <div>2018-07-10</div>
                    </div>
                  </v-flex>
                  <v-flex xs5>
                    <v-card-media
                      :src="image_src"
                      height="125px"
                      contain
                    ></v-card-media>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        image_src: require("@/assets/logo.png")
      }
    }
  }
</script>
