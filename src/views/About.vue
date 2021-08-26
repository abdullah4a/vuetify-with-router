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
        <v-btn @click="IncreaseTables" text rounded class="text-subtitle-1">
          <v-icon>mdi-plus</v-icon>
          <span>Add Table</span>
        </v-btn>
        <v-simple-table v-for="tab in tables" :key="tab">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-h6">Names</th>
                <th class="text-h6">Items Quantity</th>
                <th class="text-h6">Prices</th>
              </tr>
              <tr v-for="n in 5" :key="n" class="success">
                <td>Item {{ n }}</td>
                <td>{{ n * 4 }}</td>
                <td>{{ n * 78 * 4 }}</td>
              </tr>
            </thead>
          </template>
        </v-simple-table>
        <v-card class="">
          <v-data-table
            :headers="header"
            :items="Items"
            :items-per-page="1"
            class="elevation-2"
          >
          </v-data-table>
        </v-card>
      </v-card>
      <v-container>
        <v-bottom-sheet v-model="sheet">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="green" dark v-bind="attrs" v-on="on">
              Open Persistent
            </v-btn>
            <span>
              <v-form> </v-form>
            </span>
          </template>
          <v-sheet class="text-center " inset height="300px">
            <v-responsive max-width="800px">
              <div class="pt-4">
                <v-text-field label="Item Name"></v-text-field>
                <v-text-field label="Item Quantity" type="number">
                </v-text-field>
                <v-text-field label="Item Price" type="number"></v-text-field>
                <v-btn class="ma-4" text color="error" @click="AddItems">
                  <v-icon>mdi-plus</v-icon>
                  <span>Add Items</span>
                </v-btn>
              </div>
            </v-responsive>
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
  private num1 = 3;
  IncreaseTables() {
    this.num1 = Math.random();
    return this.tables++;
  }
  AddItems() {
    this.sheet = false;
  }
  private header = [
    {
      text: "Items",
      align: "start",
      value: "Itemname",
    },
    { text: "Quantity (Kgs)", value: "Quantity" },
    { text: "Retail Price (Rs)", value: "Price" },
    { text: "Unit (Rs)", value: "UPrice" },
  ];
  private Items = [
    {
      Itemname: "Strawberries",
      Quantity: "2",
      Price: "120",
      UPrice: "240",
    },
    {
      Itemname: "Apples",
      Quantity: "4",
      Price: "500",
      UPrice: "2000",
    },
    {
      Itemname: "Mangos",
      Quantity: "5",
      Price: "300",
      UPrice: "1500",
    },
  ];
}
</script>
