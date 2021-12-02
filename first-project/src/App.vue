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
    <transition name="fade">
      <context-window-menu
        :Name="Name"
        :settings="contextSetting"
        v-if="Name"
      />
    </transition>
  </div>
</template>
<script>
export default {
  name: "App",
  components: {
    ModalWindowAddPaymentForm: () =>
      import("./components/ModalWindowAddPaymentForm.vue"),
    ContextWindowMenu: () => import("./components/ContextWindowMenu.vue"),
  },
  data() {
    return {
      contextSetting: {},
      componentName: "",
      Name: "",
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

    onShownMenu(propsData) {
      const { settings, name } = propsData;
      this.Name = name;
      this.contextSetting = settings;
    },
    onDelData() {
      this.contextSetting = {};
      this.Name = "";
    },

    onEditData() {
      this.contextSetting = {};
      this.Name = "";
    },
  },

  /*  created() {
    this.$router.push({ name: "Home" });
    this.setPaymentsListData(this.fetchData());
  }, */
  mounted() {
    this.$modal.EventBus.$on("shown", this.onShown);
    this.$modal.EventBus.$on("hide", this.onHide);
    this.$context.EventBus.$on("shownMenu", this.onShownMenu);
    this.$context.EventBus.$on("delData", this.onDelData);
    this.$context.EventBus.$on("editData", this.onEditData);
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>