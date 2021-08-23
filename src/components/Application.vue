//just name not an actual application
<template>
  <!-- App.vue -->

  <v-app>
    <v-navigation-drawer color="indigo" app>
      <!-- -->
    </v-navigation-drawer>

    <!-- Sizes your content based upon application components -->
    <v-main color="purple">
      <!-- Provides the application the proper gutter -->
      <v-container color="blue" fluid>
      </v-container>
    </v-main>

    <v-footer color="red" app>
      <!-- -->
    </v-footer>
  </v-app>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component
export default class Application extends Vue {}
</script>
