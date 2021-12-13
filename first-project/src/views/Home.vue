<template>
  <v-row justify="center">
    <v-col>
      <div class="text-h4 text-sm-h3 mb-8">Welcome to App!</div>
      <v-dialog v-model="dialog" max-width="500px">
        <template #activator="{ on }">
          <v-btn color="teal" dark v-on="on"
            >Enter for Users<v-icon class="ml-2"
              >mdi-application-import</v-icon
            ></v-btn
          >
        </template>
        <v-card>
          <auth-form />
        </v-card>
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script>
import AuthForm from "../components/AuthForm.vue";

export default {
  name: "Home",

  components: {
    AuthForm,
  },
  data() {
    return {
      dialog: false,
    };
  },
};
</script>
