<template>
  <v-container fluid>
    <Progress />
    <Heading :title="userName" @enablePosts="setStatusPosts" />
    <v-row>
      <v-col v-for="post in posts" :key="post.id" lg="3" md="6" sm="12">
        <Card
          :post="post"
          @enablePost="setStatusPost"
          @selectedPost="setSelectedPost"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import services from "@/services/";
import Heading from "@/components/Posts/Heading.vue";
import Card from "@/components/Card.vue";
import Progress from "@/components/Progress.vue";
export default {
  name: "Posts",
  components: {
    Heading,
    Card,
    Progress,
  },
  data() {
    return {
      userId: undefined,
      userName: undefined,
      posts: [],
      selected: [],
    };
  },
  methods: {
    async fetchPosts() {
      try {
        this.userId = this.$route.params.id;
        this.userName = this.$route.query.username;

        const posts = await services.posts.fetch(this.userId);

        if (!this.$store.getters.getPosts[this.userId]) {
          posts.data.find((post) => {
            post.enable = true;
          });
          await this.$store.dispatch("setPosts", { [this.userId]: posts.data });
        }

        this.posts = this.$store.getters.getPosts[this.userId];
      } catch (error) {
        this.snackbar = {
          active: true,
          icon: "mdi-close-circle-outline",
          color: "#D32F2F",
          text: "Ha ocurrido un error",
        };
      }
    },
    setStatusPost(post) {
      this.$store.dispatch("setStatusPost", post);
    },
    async setStatusPosts(posts) {
      const selected = this.$store.getters.getSelectedPosts;
      await Object.assign(posts, { userId: this.userId, postsId: selected });
      this.$store.dispatch('setStatusPosts', posts);
      this.$store.dispatch('resetSelectedPosts', []);
    }
  },
  watch: {
    getPosts() {
      this.posts = this.$store.getters.getPosts[this.userId];
    }, 
  },
  created() {
    this.fetchPosts();
  },
};
</script>

