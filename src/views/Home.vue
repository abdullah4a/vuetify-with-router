<template>
  <v-app>
    <v-main>
      <!-- banner -->
      <v-banner class="my-3" icon="mdi-view-dashboard" elevation="3">
        Dashboard
      </v-banner>
      <v-row>
        <v-col>
          <v-btn
            v-if="!chip1 && !chip2"
            @click="(chip1 = true), (chip2 = true)"
            text
            color="success"
            rounded
          >
            Reset Chip</v-btn
          >
        </v-col>
        <v-col>
          <!-- Chips -->
          <v-chip
            v-if="chip1"
            class="ma-2 success"
            close
            @click:close="chip1 = false"
          >
            Succeded
          </v-chip>
        </v-col>
        <v-col>
          <v-chip
            v-if="chip2"
            class="ma-2 error"
            close
            @click:close="chip2 = false"
          >
            error
          </v-chip>
        </v-col>
      </v-row>
      <!-- Avatar -->
      <v-avatar class="mt-3 pa-3">
        <v-badge color="error" dot overlap offset-x="10" offset-y="10">
          <v-icon>mdi-file-sync</v-icon>
        </v-badge>
      </v-avatar>
      <!-- Alerts -->
      <v-alert
        border="left"
        class="my-3"
        type="success"
        color="green darken-2"
        dark
      >
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
  private chip1 = false;
  private chip2 = false;
}
</script>
