<template>
  <v-data-table
    :headers="headers"
    :items="data"
    class="elevation-1"
    :loading="loader"
    loading-text="Cargando..."
  >
    <template v-slot:item.options="{ item }">
      <v-icon
        color="#000000"
        class="mr-2"
        @click="eventBus.$emit('userDelete', item.id)"
      >
        mdi-delete
      </v-icon>
      <v-icon
        color="#000000"
        class="mr-2"
        @click="eventBus.$emit('userEdit', item.id)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        color="#000000"
        @click="
          $router.push({
            path: `/user/${item.id}/posts`,
            query: { username: item.name },
          })
        "
      >
        mdi-play
      </v-icon>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: "Table",
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    loading: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      headers: [
        { text: "Nombre", value: "name" },
        { text: "Usuario", value: "username" },
        { text: "Email", value: "email" },
        { text: "Teléfono", value: "phone" },
        { text: "Website", value: "website" },
        { text: "Nombre Empresa", value: "company" },
        { text: "Opciones", value: "options" },
      ],
    };
  },
  computed: {
    loader() {
      return this.loading;
    },
  },
};
</script>