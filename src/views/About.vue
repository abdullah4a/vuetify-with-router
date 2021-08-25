<template>
  <v-app>
    <v-main>
      <v-banner
        class=""
        icon="mdi-information-variant"
        icon-color="success"
        elevation="3"
      >
        About Us
      </v-banner>
      <v-container>
        <v-bottom-sheet v-model="sheet" inset persistent>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="green" dark v-bind="attrs" v-on="on">
              Open Persistent
            </v-btn>
            <span>
              This is a bottom sheet button which have 'persistent' prop
              working. After Click please press 'close' button(appears)</span
            >
          </template>
          <v-sheet class="text-center" height="200px">
            <v-btn class="mt-6" text color="error" @click="sheet = !sheet">
              'close'
            </v-btn>
            <div class="py-3">
              This is a bottom sheet using the persistent prop
            </div>
          </v-sheet>
        </v-bottom-sheet>
      </v-container>
    </v-main>
  </v-app>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component
export default class Home extends Vue {
  private sheet = false;
}
</script>
