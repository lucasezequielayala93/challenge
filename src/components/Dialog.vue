<template>
  <v-row justify="center">
    <v-dialog v-model="active" persistent scrollable max-width="750px">
      <v-card>
        <v-toolbar flat dark color="#70AADB">
          <v-card-title>
            <span class="text-h5">Editar usuario</span>
          </v-card-title>
        </v-toolbar>

        <v-card-text style="height: 450px">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-container>
              <v-row no-gutter>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="data.username"
                    label="Usuario"
                    readonly
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row no-gutter>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="data.email"
                    :rules="emailRules"
                    label="Email*"
                    required
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="data.phone"
                    :rules="phoneRules"
                    label="Teléfono*"
                    required
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row no-gutter>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="data.address.street"
                    :rules="addressRules"
                    label="Calle*"
                    required
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="data.address.suite"
                    label="Departamento"
                    readonly
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row no-gutter>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="data.address.city"
                    label="Ciudad"
                    readonly
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="data.address.zipcode"
                    label="Código postal"
                    readonly
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row no-gutter>
                <v-col cols="12" md="6">
                  <v-text-field label="WebSite" readonly> </v-text-field>
                </v-col>
              </v-row>
              <v-row no-gutter>
                <v-col cols="12">
                  <v-text-field
                    v-model="data.company.name"
                    label="Nombre empresa"
                    readonly
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row no-gutter>
                <v-col cols="12">
                  <v-textarea
                    v-model="data.company.catchPhrase"
                    label="Descripcion"
                    readonly
                  >
                  </v-textarea>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="#000000" text @click="eventBus.$emit('dialogClose')">
            Cerrar
          </v-btn>
          <v-btn color="#32D993" text @click="submit"> Guardar </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "Dialog",
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    valid: false,
    emailRules: [
      (v) => !!v || "Campo obligatorio",
      (v) => /.+@.+/.test(v) || "E-mail no válido",
    ],
    phoneRules: [
      (v) => !!v || "Campo obligatorio",
      (v) => /^[0-9- ,$]*$/.test(v) || "Teléfono no válido",
    ],
    addressRules: [(v) => !!v || "Campo obligatorio"],
  }),
  methods: {
    async submit() {
      if (this.$refs.form.validate()) {
        const id = this.data.id;
        const body = JSON.stringify({
          email: this.data.email,
          phone: this.data.phone,
          city: this.data.address.city,
        });
        this.eventBus.$emit("userUpdate", { id, body });
      }
    },
  }
};
</script>