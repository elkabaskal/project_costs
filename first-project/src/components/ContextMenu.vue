<template>
  <div>
    <button class="btn__form--cat" @click="onDelData">Delete payment</button>
    <button class="btn__form--cat" @click="onEditlData">Edit payment</button>
  </div>
</template>

<script>
export default {
  name: "ContextMenu",

  methods: {
    onDelData() {
      this.$context.delData();
    },
    onEditlData() {
      this.$router.push({
        name: "Add",
        type: "Edition",
      });
      this.$context.editData();
    },
  },
};
</script>

<style lang="scss" scoped>
.btn__form--cat {
  background-color: #00a89b;
  color: #90f4f0;
  padding: 5px 5px;
  margin: 5px 0 0 5px;
  width: 80%;
  cursor: pointer;
}
</style>