<template>
  <div class="wrap" v-if="isShow" :style="styles">
    <button
      class="btn__form--cat"
      v-for="(item, idx) in items"
      :key="idx"
      @click="onClick(item)"
    >
      {{ item.text }}
    </button>
  </div>
</template>

<script>
export default {
  name: "ContextMenu",
  data() {
    return {
      isShow: false,
      items: [],
      xPos: 0,
      yPos: 0,
    };
  },

  methods: {
    onClick(item) {
      item.action();
      this.$context.close();
    },
    onShown({ items, caller }) {
      this.items = items;
      this.isShow = true;
      this.setPposition(caller);
    },
    onClose() {
      this.items = [];
      this.isShow = false;
    },
    setPposition(caller) {
      const pos = caller.getBoundingClientRect();
      (this.xPos = pos.left), (this.yPos = pos.top);
    },
  },
  computed: {
    styles() {
      return {
        top: `${this.yPos - 80}px`,
        left: `${this.xPos + 30}px`,
      };
    },
  },
  mounted() {
    this.$context.EventBus.$on("shown", this.onShown);
    this.$context.EventBus.$on("close", this.onClose);
  },
  beforeDestroy() {
    this.$context.EventBus.$off("shown", this.onShown);
    this.$context.EventBus.$off("close", this.onClose);
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  position: absolute;
  background: #eee;
  width: 10%;
  border: 2px #00a89b solid;
  padding: 10px;
  background-color: white;
  box-shadow: 0.1em 0.1em 0.5em 0.5em rgba(81, 90, 90, 0.2);
}

.btn__form--cat {
  background-color: #00a89b;
  color: #90f4f0;
  padding: 5px 5px;
  margin: 5px 0 0 5px;
  width: 50%;
  cursor: pointer;
}
</style>