<template>
  <v-card>
    <v-main>
      <v-container>
        <v-avatar light color="teal" rounded size="25">AK</v-avatar>
      </v-container>
      <v-container fluid>
        <!-- alert Goes Here -->
        <v-alert border="left" colored-border type="success" elevation="2">
          Alerts in Vuetify
        </v-alert>
      </v-container>
      <v-container fluid>
        <!-- alert Goes Here -->
        <v-alert border="left" colored-border type="info" elevation="2">
          Alerts in Vuetify
        </v-alert>
      </v-container>
      <v-container fluid>
        <!-- alert Goes Here -->
        <v-alert border="left" colored-border type="error" elevation="2">
          Alerts in Vuetify
        </v-alert>
      </v-container>
    </v-main>
    <Application />
  </v-card>
</template>
<script lang="ts">
import Vue from "vue";
import Application from "../components/Application.vue";
import Component from "vue-class-component";
@Component({
  components: {
    Application,
  },
})
export default class home extends Vue {}
</script>
