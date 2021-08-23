<template>
  <v-app>
    <v-app-bar app color="green" dark>
      <v-tool-bar-title>
        <span class="heading-1">Vuetify - </span>
        <span>Login </span>
      </v-tool-bar-title>
      <v-spacer></v-spacer>
      <v-btn left fab small dark color="green darken-4" class="mx-2">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn left fab small dark color="green darken-4" class="mx-2">
        <v-icon></v-icon>
      </v-btn>
      <v-btn fab small dark color="green darken-4" class="mx-2">
        <v-icon>mdi-account-circle</v-icon></v-btn
      >
      <v-btn fab small dark color="green darken-4" class="mx-2">
        <v-icon>mdi-heart</v-icon></v-btn
      >
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",
  data: () => ({
    //
  }),
});
</script>
