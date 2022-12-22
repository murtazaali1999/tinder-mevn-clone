<template>
  <div class="tinder-card-wrapper">
    <div>
      <v-card
        width="500"
        height="500"
        location="bottom"
        class="rounded-xl mt-10"
        elevation="20"
      >
        <!--  <img :src="users.image" alt="" />
        <v-card-actions>{{ users.name }}</v-card-actions> -->
      </v-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
export default {
  setup() {
    const users = ref(null);

    const getUsers = async () => {
      const data = await axios.get("http://localhost:4431/get-user");
      users.value = data.data.user[0];

      console.log(users.value.image);
    };

    return { users, getUsers };
  },
  components: {},
  created() {
    this.getUsers();
  },
};
</script>

<style>
.tinder-card-wrapper {
  height: 600px;
}
</style>
