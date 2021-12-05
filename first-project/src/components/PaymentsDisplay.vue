<template>
  <div class="item">
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
      <p class="head__text context" @click="onClickContextItem($event, item)">
        ...
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaymentsDisplay",
  data() {
    return {
      change: true,
      date: "",
      category: "",
      categoryNew: "",
      value: "",
    };
  },

  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    deleteItem(item) {
      /*  const data = {
        id: item.id,
        date: item.date,
        category: item.category,
        value: item.value,
      }; */
      this.items.splice(item.id - 1, 1);
      /* this.$emit("editDataToPaymentsList", this.data); */
      console.log(item);
    },
    onClickContextItem(event, item) {
      const items = [
        {
          text: "Edit",
          action: () => {
            this.$router.push({
              name: "Add",
              type: "Edition",
            });
          },
        },
        {
          text: "Delete",
          action: () => {
            this.deleteItem(item);
          },
        },
      ];
      this.$context.show({ event, items });
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
