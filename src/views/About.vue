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
      <v-card>
        <v-btn @click="IncreaseTables">
          <v-icon>mdi-plus</v-icon>
          <span>Add Table</span>
        </v-btn>
        <v-simple-table v-for="tab in tables" :key="tab">
          <template v-slot:default>
            <thead>
              <tr class="text-h6">
                <th>Names</th>
                <th>Items</th>
                <th>Prices</th>
              </tr>
              <tr v-for="n in 3" :key="n" class="success">
                <td>Name {{ n }}</td>
                <td>Item {{ n }}</td>
                <td>${{ n * 512 }}</td>
              </tr>
            </thead>
          </template>
        </v-simple-table>
      </v-card>
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
  private tables = 1;
  IncreaseTables() {
    return this.tables++;
  }
}
</script>
