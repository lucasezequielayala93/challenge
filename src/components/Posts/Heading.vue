<template>
  <v-row align="center" justify="space-between" tag="nav" no-gutter>
    <v-row align="center" no-gutter>
      <router-link class="mr-4" :to="'/users'">
        <v-icon color="#000000" class="mr-2"> mdi-chevron-left </v-icon>
        Volver
      </router-link>
      <h1>{{ title }}</h1>
    </v-row>
    <v-spacer></v-spacer>
    <v-row
      align="center"
      justify="center"
      justify-sm="end"
      class="mt-sm-3"
      no-gutter
    >
      <v-btn
        class="mr-4"
        rounded
        color="#32D993"
        dark
        elevation="0"
        @click="
          $emit('enablePosts', {
            postStatus: true,
          })
        "
      >
        Habilitar
      </v-btn>
      <v-btn
        rounded
        color="#B8B6B6"
        dark
        elevation="0"
        @click="
          $emit('enablePosts', {
            postStatus: false,
          })
        "
      >
        Deshabilitar
      </v-btn>
    </v-row>
  </v-row>
</template>

<script>
export default {
  name: "Heading",
  props: {
    title: {
      type: String,
      default: undefined,
    },
  },
};
</script>

<style lang="scss" scoped>
nav {
  padding-bottom: 1.5rem;
  a {
    color: #000000;
    text-decoration: none;
    font-size: 1.25rem;
  }
  h1 {
    font-size: 1.875rem;
    font-weight: 400;
  }
}

@media (max-width: 464px) {
  nav {
    a {
      font-size: 1rem;
    }
    h1 {
      font-size: 1.25rem;
      font-weight: 600;
    }
    .row:last-child {
      margin-top: 1.5rem;
    }
  }
}
@media (max-width: 320px) {
  nav {
    a {
      font-size: 1rem;
    }
    h1 {
      font-size: 1rem;
    }
  }
}
</style>
