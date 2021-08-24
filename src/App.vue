<template>
  <v-app>
    <!-- appbar starts in here -->
    <v-app-bar
      app
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
      dark
    >
      <v-app-bar-nav-icon dark @click="drawer = !drawer"> </v-app-bar-nav-icon>
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
      <!-- L[]g in and L[]g[]ut buttons starts in here -->
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
      <!-- L[]g in and L[]g[]ut buttons end in here -->
      <!-- Fav icon starts in here -->
      <v-btn fab small dark color="green darken-4" class="mx-2">
        <v-icon @click="$router.push({ path: '/fav' })">mdi-heart</v-icon>
      </v-btn>
      <!-- Menu Buttons End in here -->
    </v-app-bar>
    <!-- appbar ends in here -->
    <!-- Toolbar starts in here -->
    <v-navigation-drawer v-model="drawer" color="green" dark app>
      <v-list-item
        v-for="link in linksforNav"
        :key="link.id"
        router
        :to="link.route"
      >
        <v-list-item-action>
          <v-icon class="mx-1">{{ link.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            {{ link.text }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>

    <v-main class="mx-3">
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
  private linksforNav = [
    { icon: "mdi-home", text: "Home", route: "/" },
    { icon: "mdi-information", text: "About", route: "/aboutinfo" },
    { icon: "mdi-login", text: "Login", route: "/getstarted" },
    { icon: "mdi-heart", text: "Favorates", route: "/fav" },
  ];
}
</script>
