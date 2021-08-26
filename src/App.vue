<template>
  <v-app>
    <!-- appbar starts in here -->
    <v-app-bar
      app
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
      dark
    >
      <v-app-bar-nav-icon dark @click="drawer = !drawer"> </v-app-bar-nav-icon>
      <v-app-bar-title width="650">
        <span class="text-h5">Vuetify - </span>
        <span>Dashboard </span>
      </v-app-bar-title>
      <!-- Menu Buttons End in here -->
    </v-app-bar>
    <!-- appbar ends in here -->
    <!-- Toolbar starts in here -->
    <v-navigation-drawer v-model="drawer" color="green lighten-3" dark app>
      <v-list-item v-for="link in linksforNav" :key="link.id" :to="link.route">
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
  // this.$vuetify.theme.dark=true;
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
