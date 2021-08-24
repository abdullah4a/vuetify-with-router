<template>
  <v-app>
    <v-main>
      <!-- banner -->
      <v-banner class="" icon="mdi-view-dashboard" elevation="3">
        Dashboard
      </v-banner>
      <!-- Avatar -->
      <v-avatar class="mx-2">
        <v-badge bordered color="warning" icon="mdi-lock" overlap>
          <v-icon size="36">mdi-file-sync</v-icon>
        </v-badge>
      </v-avatar>
      <!-- Alerts -->
      <v-alert border="left" type="success" color="green darken-2" dark>
        alert with a top border and red color
      </v-alert>
      <!-- Breadcrumbs -->
      <v-breadcrumbs :items="items">
        <template v-slot:divider>
          <v-icon>mdi-forward</v-icon>
        </template>
      </v-breadcrumbs>
    </v-main>
    <Application />
  </v-app>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Application from "../components/Application.vue";
@Component({
  components: {
    Application,
  },
})
export default class Home extends Vue {
  private items = [
    { text: "Dashboard", disabled: false, href: "breadcrumbs_dashboard" },
    { text: "Dashboard", disabled: true, href: "breadcrumbs_dashboard" },
    { text: "Dashboard", disabled: false, href: "breadcrumbs_dashboard" },
  ];
}
</script>
