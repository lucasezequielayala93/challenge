<template>
  <v-row align="center" tag="nav" no-gutter>
    <h1>Usuarios</h1>
  </v-row>
</template>

<script>
export default {
  name: "Heading",
};
</script>

<style lang="scss" scoped>
nav {
  padding-bottom: 1.5rem;
  h1 {
    font-size: 1.875rem;
    font-weight: 400;
  }
}
@media (max-width: 464px) {
  nav {
    h1 {
      font-size: 1.25rem;
      font-weight: 600;
    }
  }
}
@media (max-width: 320px) {
  nav {
    h1 {
      font-size: 1rem;
    }
  }
}
</style>