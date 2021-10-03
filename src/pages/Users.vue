<template>
  <v-container fluid>
    <Heading />
    <Progress />
    <Table :data="users" :loading="loading" />
    <Dialog :data="user" :active="dialog" />
    <Alert :active="alert" />
    <Snackbar :data="snackbar" />
  </v-container>
</template>

<script>
import services from "@/services/";
import Heading from "@/components/Users/Heading.vue";
import Table from "@/components/Table.vue";
import Dialog from "@/components/Dialog.vue";
import Alert from "@/components/Alert.vue";
import Snackbar from "@/components/Snackbar.vue";
import Progress from "@/components/Progress.vue";

export default {
  name: "Users",
  components: {
    Heading,
    Table,
    Dialog,
    Alert,
    Snackbar,
    Progress,
  },
  data() {
    return {
      users: [],
      user: {},
      dialog: false,
      alert: false,
      loading: true,
      snackbar: {},
    };
  },
  methods: {
    async fetchUsers() {
      try {
        const users = await services.users.fetchAll();
        users.data.forEach((user) => {
          this.users.push({
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
            phone: user.phone,
            website: user.website,
            company: user.company.name,
          });
        });
        this.loading = false;
      } catch (error) {
        this.snackbar = {
          active: true,
          icon: "mdi-close-circle-outline",
          color: "#D32F2F",
          text: "Ha ocurrido un error",
        };
      }
    },
    async fetchUser(userId) {
      try {
        const user = await services.users.fetch(userId);
        this.user = user.data;
        this.dialog = true;
      } catch (error) {
        this.snackbar = {
          active: true,
          icon: "mdi-close-circle-outline",
          color: "#D32F2F",
          text: "Ha ocurrido un error",
        };
      }
    },
    async updateUser(user) {
      try {
        this.eventBus.$emit("loaderShow");
        await services.users.update(user.id, user.body);
        this.eventBus.$emit("loaderClose");
        this.snackbar = {
          active: true,
          color: "#32D993",
          icon: "mdi-check-circle-outline",
          text: "Se ha actualizado correctamente",
        };
      } catch (error) {
        this.snackbar = {
          active: true,
          icon: "mdi-close-circle-outline",
          color: "#D32F2F",
          text: "Ha ocurrido un error",
        };
      }
    },
    async deleteUser(userId) {
      try {
        this.eventBus.$emit("loaderShow");
        await services.users.delete(userId);
        this.eventBus.$emit("loaderClose");
        this.snackbar = {
          active: true,
          icon: "mdi-check-circle-outline",
          color: "#1867c0",
          text: "Se ha eliminado correctamente",
        };
      } catch (error) {
        this.snackbar = {
          active: true,
          icon: "mdi-close-circle-outline",
          color: "#D32F2F",
          text: "Ha ocurrido un error",
        };
      }
    },
  },
  created() {
    this.fetchUsers();

    this.eventBus.$on("userEdit", (userId) => {
      this.fetchUser(userId);
    });
    this.eventBus.$on("userUpdate", (user) => {
      this.updateUser(user);
    });
    this.eventBus.$on("userDelete", (userId) => {
      this.deleteUser(userId);
    });
    this.eventBus.$on("dialogClose", () => {
      this.dialog = false;
    });
  },
  beforeDestroy() {
    this.eventBus.$off("userEdit");
    this.eventBus.$off("userUpdate");
    this.eventBus.$off("userDelete");
    this.eventBus.$off("dialogClose");
  },
};
</script>