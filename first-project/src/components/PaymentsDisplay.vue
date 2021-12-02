<template>
  <div class="table">
    <div class="item">
      <div class="item__text">
        <div class="list">
          <p class="head__text-bold">ID</p>
          <p class="head__text-bold">Date</p>
          <p class="head__text-bold">Category</p>
          <p class="head__text-bold">Value</p>
          <p class="head__text-bold">Menu</p>
        </div>
        <div class="list" v-for="(item, idx) in items" :key="idx">
          <p class="head__text">{{ item.id }}</p>
          <p class="head__text">{{ item.date }}</p>
          <p class="head__text">{{ item.category }}</p>
          <p class="head__text">{{ item.value }}</p>
          <p
            class="head__text context"
            id="contextwindow"
            @click="onOpenContextMenu"
          >
            ...
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaymentsDisplay",
  data() {
    return {
      change: true,
    };
  },

  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    onOpenContextMenu() {
      this.$context.showMenu("ContextMenu", {
        title: "Context menu",
      });
      this.x = event.pageX;
      this.y = event.pageY;
      console.log(this.x, this.y);
    },
  },
};
</script>
 
<style lang="scss" scoped>
.item {
  font-weight: 100;
}
.list {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px #00a89b solid;
  max-width: 50%;
}

.head__text-bold {
  font-weight: bold;
}

.context {
  cursor: pointer;
}
</style>
