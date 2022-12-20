<template>
  <!-- order prop can be used to change the order of the layout, dynamic binding can be used such as button -->
  <!-- to get a components information, use the name prop, use the app-bar name to access it in JS/TS, and print it -->
  <div class="page-wrapper">
    <Header />
    <TinderCard />
    <TinderButtons />
  </div>
</template>

<script setup></script>

<script>
import Header from "./components/Header.vue";
import TinderButtons from "./components/TinderButtons.vue";
import TinderCard from "./components/TinderCard.vue";

export default {
  name: "App",
  components: { Header, TinderButtons, TinderCard },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
