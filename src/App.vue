<template>
  <v-app>
    <v-app-bar app color="green" dark>
      <v-app-bar-nav-icon dark @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>
        <span class="heading-1">Vuetify - </span>
        <span>Login </span>
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn
        left
        fab
        small
        dark
        color="green darken-4"
        @click="$router.push({ path: '/' })"
        class="mx-2"
      >
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn
        left
        fab
        small
        dark
        color="green darken-4"
        @click="$router.push({ name: 'About' })"
        class="mx-2"
      >
        <v-icon>mdi-information</v-icon>
      </v-btn>
      <v-btn
        fab
        small
        dark
        color="green darken-4"
        class="mx-2"
        @click="$router.push({ path: '/getstarted' })"
        v-if="!login"
      >
        <v-icon>mdi-login</v-icon>
      </v-btn>
      <v-btn
        fab
        small
        dark
        color="green darken-4"
        class="mx-2"
        @click="$router.push({ path: '/' })"
        v-else
      >
        <v-icon>mdi-logout </v-icon>
      </v-btn>
      <v-btn fab small dark color="green darken-4" class="mx-2">
        <v-icon>mdi-heart</v-icon></v-btn
      >
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" color="green" dark app>
      <!-- -->
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component
export default class App extends Vue {
  private login = false;
  private drawer = false;
}
</script>
