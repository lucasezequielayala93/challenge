<template>
  <v-footer color="#393939" padless fixed height="65">
    <v-col class="white--text text-center" cols="12">
      Mapa de la Acción Estatal - Challenge
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
@media (max-width: 320px) {
  .v-footer {
    .col {
      font-size: 0.75rem;
    }
  }
}
</style>
