<template>
  <div class="tinder-button-wrapper d-flex justify-space-around">
    <v-btn
      class="rounded-circle align-center justify-center d-flex"
      height="60"
      elevation="10"
    >
      <v-icon icon="mdi-arrow-u-left-top-bold"></v-icon>
    </v-btn>
    <v-btn
      height="60"
      class="rounded-circle align-center justify-center d-flex"
      elevation="10"
    >
      <v-icon icon="mdi-cancel"></v-icon>
    </v-btn>
    <v-btn
      height="60"
      class="rounded-circle align-center justify-center d-flex"
      elevation="10"
      ><v-icon icon="mdi-star"></v-icon
    ></v-btn>
    <v-btn
      height="60"
      class="rounded-circle align-center justify-center d-flex"
      elevation="10"
      ><v-icon icon="mdi-heart"></v-icon
    ></v-btn>
    <v-btn
      height="60"
      class="rounded-circle align-center justify-center d-flex"
      elevation="10"
      ><v-icon icon="mdi-lightning-bolt"></v-icon
    ></v-btn>
  </div>
</template>

<script>
export default {
  setup() {},
  components: {},
  created() {},
};
</script>

<style scoped>
.tinder-button-wrapper {
  height: 200px;
}

.icons {
  height: 50px;
  width: 50px;
}
</style>
