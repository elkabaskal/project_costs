<template>
  <div>
    Welcome to App!
    <button class="btn__form--cat" @click="onOpenAuth">Enter for Users</button>
  </div>
</template>

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

<style lang="scss" scoped>
.btn__form--cat {
  background-color: #00a89b;
  color: #90f4f0;
  padding: 5px 5px;
  margin: 5px 0 0 5px;
  width: 10%;
  cursor: pointer;
}
</style>