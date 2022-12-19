<template>
  <!-- order prop can be used to change the order of the layout, dynamic binding can be used such as button -->
  <!-- to get a components information, use the name prop, use the app-bar name to access it in JS/TS, and print it -->
  <v-layout style="" align="center">
    <v-app-bar color="orange-lighten-2" height="22"
      >App Bar Full Width</v-app-bar
    >
    <v-navigation-drawer
      color="purple-darken-1"
      location="left"
      permanent
      width="100"
      >1st Left Navigation Drawer</v-navigation-drawer
    >
    <v-navigation-drawer color="grey-darken-2" permanent width="200"
      >2nd Left Navigation Drawer</v-navigation-drawer
    >
    <v-app-bar color="orange-lighten-2" height="64">App Bar Squeezed</v-app-bar>
    <v-main>
      <v-card height="1200px" color="green-darken-1">V-CARD</v-card>
      <v-btn>NEW BUTTON WITH BLUEPRINT</v-btn>
    </v-main>
    <v-navigation-drawer
      color="grey-darken-2"
      permanent
      width="200"
      location="right"
      >2nd Left Navigation Drawer</v-navigation-drawer
    >
    <v-app-bar color="orange-lighten-2" height="52" location="bottom"
      >App Bar Squeezed</v-app-bar
    >
  </v-layout>
</template>

<script setup></script>

<style></style>
