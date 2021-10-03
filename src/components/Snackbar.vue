<template>
  <v-snackbar
    v-model="data.active"
    timeout="5000"
    bottom
    right
    :color="data.color"
  >
    <v-icon color="#ffffff">
      {{ data.icon }}
    </v-icon>
    {{ data.text }}
  </v-snackbar>
</template>

<script>
export default {
  name: "Snackbar",
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>