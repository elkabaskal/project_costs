<template>
  <div class="payment-content">
    <button class="btn__form" @click="checked = !checked">
      ADD NEW COST +
    </button>
    <div class="add__form" v-show="checked">
      <input
        type="date"
        class="add__text"
        placeholder="Payment Date"
        v-model="date"
      />
      <select
        v-model="category"
        class="add__text"
        placeholder="Payment Catgory"
      >
        <option v-for="option in options" :key="option">{{ option }}</option>
      </select>

      <input
        class="add__text"
        placeholder="Payment Value"
        v-model.number="value"
        type="number"
      />
      <button
        class="btn__form"
        @click="onSaveClick"
        v-bind:disabled="category === '' || value < 0 || value === ''"
      >
        ADD +
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddPaymentForm",
  props: {
    /* counter: Number, */
  },
  data() {
    return {
      /* counter: Number, */
      date: "",
      category: "",
      value: "",
      checked: false,
    };
  },
  computed: {
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();
      return `${y}-${m}-${d}`;
    },
    options() {
      return this.$store.getters.getCategoryList;
    },
  },
  methods: {
    onSaveClick() {
      const data = {
        counter: this.counter,
        date: this.date || this.getCurrentDate,
        category: this.category,
        value: +this.value,
      };
      this.$emit("addNewPayment", data);
      /*      console.log(this.counter); */
    },
  },
  mounted() {
    if (!this.category?.length) {
      this.$store.dispatch("fetchCategory");
    }
  },
};
</script>

<style lang="scss" scoped>
.payment-content {
  display: flex;
  flex-direction: column;
  max-width: 25%;
  position: relative;
}

.add__form {
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  left: 400px;
  top: 150px;
  border: 2px #00a89b solid;
  padding: 10px;
  background-color: white;
}

.add__text {
  margin-bottom: 5px;
}

.btn__form {
  background-color: #00a89b;
  color: #90f4f0;
  padding: 5px 5px;
  margin: 10px 0;
}
</style>