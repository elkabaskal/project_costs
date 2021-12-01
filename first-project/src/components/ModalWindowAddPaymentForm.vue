<template>
  <div class="wrapper" v-if="componentName">
    <div class="header">
      {{ settings.title }}
    </div>
    <div class="content">
      <component :is="componentName" />
    </div>
    <div class="footer">
      <button class="btn__form--cat" @click="onClose">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    /* Add: () => import("../views/Add.vue"), */
    AuthForm: () => import("./AuthForm.vue"),
  },
  props: {
    componentName: String,
    settings: Object,
  },
  methods: {
    onClose() {
      this.$modal.hide();
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  position: absolute;
  max-width: 20%;
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 2px #00a89b solid;
  padding: 10px;
  background-color: white;
  left: 33%;
  top: 180px;
}
.btn__form--cat {
  background-color: #00a89b;
  color: #90f4f0;
  padding: 5px 5px;
  margin: 5px 0 0 5px;
  width: 50%;
  cursor: pointer;
}

.header {
  margin: 10px 10px;
}
</style>