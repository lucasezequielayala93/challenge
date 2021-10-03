<template>
  <v-overlay z-index="203" :value="active">
    <v-progress-circular indeterminate size="64"></v-progress-circular>
  </v-overlay>
</template>

<script>
export default {
  name: "Progress",
  data: () => ({
    active: false,
  }),
  created() {
    this.eventBus.$on("loaderShow", () => {
      this.active = true;
    });
    this.eventBus.$on("loaderClose", () => {
      this.active = false;
    });
  },
  destroy() {
    this.eventBus.$off("loaderShow");
    this.eventBus.$off("loaderClose");
  },
};
</script>

<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>
