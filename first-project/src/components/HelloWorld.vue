<template>
  <v-row>
    <v-col>
      <div class="text-h4 text-sm-h3 mb-8">Welcome to App!</div>
      <v-dialog max-width="500px">
        <template #activator="{ on }">
          <v-btn color="teal" dark v-on="on"
            >Enter for Users<v-icon class="ml-2"
              >mdi-application-import</v-icon
            ></v-btn
          >
        </template>
        <v-card class="text-left pa-8">
          <v-text-field type="text" label="UserName"></v-text-field>
          <v-text-field type="password" label="Password"></v-text-field>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="teal" text dark @click="dialog = false">Enter</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Hello World",
  data() {
    return {
      dialog: false,
    };
  },
  methods: {},
};
</script>

















<script>
export default {
  name: "Home",
  methods: {
    onOpenAuth() {
      this.$modal.show("AuthForm", {
        title: "Form of Authentication",
      });
    },
  },
};
</script>