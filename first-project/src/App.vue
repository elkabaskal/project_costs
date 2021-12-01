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
    <modal-window-add-payment-form
      :componentName="componentName"
      :settings="modalSetting"
      v-if="componentName"
    />
  </div>
</template>
<script>
export default {
  name: "App",
  components: {
    ModalWindowAddPaymentForm: () =>
      import(
        /*webpackChunkName: "Modal"*/ "./components/ModalWindowAddPaymentForm.vue"
      ),
  },
  props: {},
  data() {
    return {
      addShowForm: false,
      modalSetting: {},
      componentName: "",
    };
  },
  methods: {
    /* goTopageNotFound() {
      if (this.$route.name === "NotFound") return;
      this.$router.push({
        name: "NotFound",
      });
    }, */
    onShown(propsData) {
      const { settings, name } = propsData;
      this.componentName = name;
      this.modalSetting = settings;
    },
    onHide() {
      this.modalSetting = {};
      this.componentName = "";
    },
  },
  /*  created() {
    this.$router.push({ name: "Home" });
    this.setPaymentsListData(this.fetchData());
  }, */
  mounted() {
    this.$modal.EventBus.$on("shown", this.onShown);
    this.$modal.EventBus.$on("hide", this.onHide);
  },
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
  position: relative;
}
</style>