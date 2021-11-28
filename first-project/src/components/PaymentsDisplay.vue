<template>
  <div class="table">
    <div class="item">
      <div class="item__text">
        <div class="list">
          <p class="head__text-bold">ID</p>
          <p class="head__text-bold">Date</p>
          <p class="head__text-bold">Category</p>
          <p class="head__text-bold">Value</p>
        </div>
        <div class="list" v-for="(item, idx) in items" :key="idx">
          <p class="head__text">{{ item.id }}</p>
          <p class="head__text">{{ item.date }}</p>
          <p class="head__text">{{ item.category }}</p>
          <p class="head__text">{{ item.value }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaymentsDisplay",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  methods: {},
  computed: {},
  created() {},
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
</style>
