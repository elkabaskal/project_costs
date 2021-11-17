<template>
  <div class="table">
    <div class="item">
      <ol class="item__text">
        <li class="list">
          <p class="head__text-bold">#</p>
          <p class="head__text-bold">Date</p>
          <p class="head__text-bold">Category</p>
          <p class="head__text-bold">Value</p>
        </li>
        <li class="list" v-for="(item, idx) in items" :key="idx">
          <p class="head__text">{{ idx + 1 }}</p>
          <p class="head__text">{{ item.date }}</p>
          <p class="head__text">{{ item.category }}</p>
          <p class="head__text">{{ item.value }}</p>
        </li>
      </ol>
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
  data() {
    return {};
  },
  methods: {},
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
