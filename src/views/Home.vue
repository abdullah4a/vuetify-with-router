<template>
  <v-app>
    <v-card>
      <v-main>
        <!-- banner -->
        <v-banner class="" icon="mdi-view-dashboard" elevation="3">
          Dashboard
        </v-banner>
        <!-- Avatar -->
        <v-avatar>
          <v-icon>mdi-files</v-icon>
        </v-avatar>
        <!-- Alerts -->
        <v-alert border="left" type="success" color="green darken-2" dark>
          alert with a top border and red color
        </v-alert>
        <!-- Breadcrumbs -->
        <v-breadcrumbs :items="items"> </v-breadcrumbs>
      </v-main>
    </v-card>
  </v-app>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component
export default class Home extends Vue {
  private items = [{}];
}
</script>
