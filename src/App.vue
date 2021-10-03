<template>
  <v-app>
    <Navbar />
    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style lang="scss">
.v-application {
  font-family: Poppins, sans-serif !important;
  .v-main {
    padding: 1.5rem 2.5rem 2rem !important;
    margin-top: 4rem;
    margin-bottom: 4.063rem;
    .v-btn {
      text-transform: capitalize;
    }
  }
}
@media (max-width: 464px) {
  .v-application {
    .v-main {
      padding: 1.5rem 1.5rem 2rem !important;
    }
  }
}
</style>
