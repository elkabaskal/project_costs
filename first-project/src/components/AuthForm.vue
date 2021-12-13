<template>
  <v-card class="text-left pa-8">
    <v-text-field type="text" label="UserName"></v-text-field>
    <v-text-field type="password" label="Password"></v-text-field>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="teal" text dark @click="dialog = false">Enter</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "AuthForm",
  data() {
    return {};
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