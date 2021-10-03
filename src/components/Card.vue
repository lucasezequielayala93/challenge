<template>
  <v-card rounded="lg" elevation="5">
    <v-card-actions>
      <v-btn
        rounded
        :color="post.enable ? '#32D993' : '#B8B6B6'"
        dark
        elevation="0"
        small
        @click="
          $emit('enablePost', {
            userId: post.userId,
            postId: post.id,
            postStatus: (post.enable = !post.enable),
          })
        "
      >
        {{ post.enable ? "Habilitado" : "Deshabilitado" }}
      </v-btn>
      <v-checkbox
        v-model="getSelected"
        :value="post.id"
        @click="setSelected(post.id)"
      ></v-checkbox>
    </v-card-actions>
    <v-card-title :title="post.title">
      {{ post.title | truncate(60) }}
    </v-card-title>
    <v-card-text :title="post.body">
      {{ post.body | truncate(125) }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Card",
  props: {
    post: {
      type: Object,
      default: () => ({}),
    },
  },
  methods:{
    setSelected(post){
      this.$store.dispatch('setSelectedPosts', post);
    }
  },
  computed:{
    getSelected(){
      return this.$store.getters.getSelectedPosts;
    }
  },
};
</script>

<style lang="scss" scoped>
.v-card {
  &__actions {
    justify-content: space-between;
    padding: 1rem;
  }
  &__title {
    font-weight: 600;
    line-height: 150%;
    color: rgba(0, 0, 0, 1);
    height: 120px;
    align-items: flex-start;
  }
  &__text {
    line-height: 150%;
    color: rgba(0, 0, 0, 1) !important;
  }
}
@media (max-width: 464px) {
  .v-card {
    &__title {
      font-size: 1rem;
    }
  }
}
</style>