<template>
  <div id="app">
    <header>
      <router-link to="/home">Home</router-link> /
      <router-link to="/dashboard">Dashboard</router-link> /
      <router-link to="/about">About</router-link>
    </header>
    <div>
      <router-view />
    </div>
    <transition name="fade">
      <modal-window-add-payment-form
        :componentName="componentName"
        :settings="modalSetting"
        v-if="componentName"
      />
    </transition>
    <transition name="fade">
      <context-menu />
    </transition>
  </div>
</template>
<script>
import ContextMenu from "./components/ContextMenu.vue";
export default {
  name: "App",
  components: {
    ModalWindowAddPaymentForm: () =>
      import(
        /*webpackChunkName: "Modal"*/ "./components/ModalWindowAddPaymentForm.vue"
      ),
    ContextMenu,
  },
  data() {
    return {
      addShowForm: false,
      modalSetting: {},
      componentName: "",
    };
  },
  methods: {
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>