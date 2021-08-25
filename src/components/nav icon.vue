<template>
  <div>
    <v-btn
      left
      fab
      small
      dark
      color="green darken-4"
      @click="$router.push({ path: '/' })"
      class="mx-2"
    >
      <v-icon>mdi-home</v-icon>
    </v-btn>
    <!-- L[]g in and L[]g[]ut buttons starts in here -->
    <v-btn
      left
      fab
      small
      dark
      color="green darken-4"
      @click="$router.push({ name: 'About' })"
      class="mx-2"
    >
      <v-icon>mdi-information</v-icon>
    </v-btn>
    <v-btn
      fab
      small
      dark
      color="green darken-4"
      class="mx-2"
      @click="$router.push({ path: '/getstarted' })"
      v-if="!login"
    >
      <v-icon>mdi-login</v-icon>
    </v-btn>
    <v-btn
      fab
      small
      dark
      color="green darken-4"
      class="mx-2"
      @click="$router.push({ path: '/' })"
      v-else
    >
      <v-icon>mdi-logout </v-icon>
    </v-btn>

    <v-spacer></v-spacer>
    <!-- L[]g in and L[]g[]ut buttons end in here -->
    <!-- Fav icon starts in here -->
    <v-btn fab small dark color="green darken-4" class="mx-2">
      <v-icon @click="$router.push({ path: '/fav' })">mdi-heart</v-icon>
    </v-btn>
  </div>
</template>
