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
              <tr v-for="data in tData" :key="data" class="success">
                <td>{{ data.ItemName }}</td>
                <td>{{ data.ItemQuantity }}</td>
                <td>{{ data.ItemPrice }}</td>
              </tr>
            </thead>
          </template>
        </v-simple-table>
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
          <v-sheet class="text-center" height="300px">
            <v-card>
              <v-row>
                <v-text-field
                  label="Item Name"
                  v-model="ItemName"
                ></v-text-field>
              </v-row>
              <v-row>
                <v-text-field
                  label="Item Quantity"
                  type="number"
                  v-model="ItemQuantity"
                ></v-text-field>
              </v-row>
              <v-row>
                <v-text-field
                  label="Item Price"
                  type="number"
                  v-model="ItemPrice"
                ></v-text-field>
              </v-row>
              <v-btn class="mt-6" text color="error" @click="AddItems">
                <v-icon>mdi-plus</v-icon>
                <span>Add Items</span>
              </v-btn>
            </v-card>
            <div class="py-3"></div>
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
  private ItemName = "";
  private ItemPrice = 0;
  private ItemQuantity = 0;
  private tData: (string | number)[] = [];
  AddItems() {
    this.tData.push(this.ItemName);
    this.tData.push(this.ItemQuantity);
    this.tData.push(this.ItemPrice);
  }
}
</script>
