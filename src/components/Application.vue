// just name not an actual application
<template>
  <!-- App.vue -->
  <v-app>
    <!-- Sizes content based upon application components -->
    <v-main color="purple">
      <!-- Provides the application the proper gutter -->
      <v-container color="blue" fluid>
        <v-row justify="center">
          <v-subheader>Today</v-subheader>
          <!-- expansion Panel starts in here -->
          <v-expansion-panels popout>
            <v-expansion-panel
              v-for="(message, i) in messages"
              :key="i"
              hide-actions
            >
              <v-expansion-panel-header>
                <v-row align="center" class="spacer" no-gutters>
                  <v-col cols="4" sm="2" md="1">
                    <v-avatar size="36px">
                      <img
                        v-if="message.avatar"
                        alt="error"
                        src="https://wallpapercave.com/download/pakistan-flag-wallpapers-hd-wp2831483"
                      />
                    </v-avatar>
                  </v-col>

                  <v-col class="hidden-xs-only" sm="5" md="3">
                    <strong v-html="message.name"></strong>
                    <span v-if="message.total" class="grey--text">
                      &nbsp;({{ message.total }})
                    </span>
                  </v-col>

                  <v-col class="text-no-wrap" cols="5" sm="3">
                    <strong v-html="message.title"></strong>
                  </v-col>

                  <v-col
                    v-if="message.excerpt"
                    class="grey--text text-truncate hidden-sm-and-down"
                  >
                    &mdash;
                    {{ message.excerpt }}
                  </v-col>
                </v-row></v-expansion-panel-header
              >

              <v-expansion-panel-content>
                <v-divider></v-divider>
                <v-card-text v-for="LOR in lorem" :key="LOR">{{
                  LOR
                }}</v-card-text>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-row>
        <v-row justify="center">
          <v-expansion-panels>
            <v-expansion-panel v-for="(message, i) in messages" :key="i">
              <v-expansion-panel-header>
                Items
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                {{ message.title }}
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-row>
      </v-container>
    </v-main>
    <v-footer color="red" app>
      <v-card class="text-center">
        {{ new Date().getFullYear() }}- <strong>Vuetify </strong>
      </v-card>
    </v-footer>
  </v-app>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component
export default class Application extends Vue {
  private messages = [
    {
      avatar: "https://i.imgur.com/lF1GKDt.jpg",
      name: "John Leider",
      title: "Welcome to Vuetify!",
      excerpt: "Thank you for joining our community...",
    },
  ];
  private lorem = [
    "salkj;dlj sd;lkj;lsd lKJSFD;",
    "salkj;dlj sd;lkj;lsd lKJSFD;",
    "salkj;dlj sd;lkj;lsd lKJSFD;",
  ];
}
</script>
