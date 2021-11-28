<template>
  <div id="app">
    <header>
      <router-link to="/home">Home</router-link> /
      <router-link to="/dashboard">Dashboard</router-link> /
      <router-link to="/about">About</router-link>
    </header>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  props: {},
  data() {
    return {};
  },
  methods: {
    /* goTopageNotFound() {
      if (this.$route.name === "NotFound") return;
      this.$router.push({
        name: "NotFound",
      });
    }, */
  },
  /*  created() {
    this.$router.push({ name: "Home" });
    this.setPaymentsListData(this.fetchData());
  }, */
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>