<template>
  <v-app-bar color="deep-purple accent-4" dark flat fixed>
    <v-toolbar-title>Logo</v-toolbar-title>
    <v-spacer></v-spacer>
    <avatar />
  </v-app-bar>
</template>


<script>
import Avatar from "./Avatar.vue";
export default {
  name: "Navbar",
  components: {
    Avatar,
  },
};
</script>

<style lang="scss" scoped>
.v-toolbar {
  background: linear-gradient(90deg, #9283be 0%, rgba(50, 187, 237, 0.8) 100%);
  &__title {
    font-weight: 800;
  }
}
</style>