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
        <option v-for="option in options" :key="option">
          {{ option }}
        </option>
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
      <div>
        <div class="new__cat">
          <input
            class="add__text--cat"
            placeholder="Input New Category"
            v-model="categoryNew"
            type="text"
          />
          <button
            class="btn__form--cat"
            @click="addNewCategory"
            v-bind:disabled="categoryNew === ''"
          >
            ADD New Caterory
          </button>
        </div>
        <p class="err" v-show="visible">ERROR!<br>This category has been added.<br>Please enter a new one!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddPaymentForm",
  props: {},
  data() {
    return {
      date: "",
      category: "",
      categoryNew: "",
      value: "",
      checked: false,
      counter: 0,
      visible: false,
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
      this.counter++;
      const data = {
        id: this.counter,
        date: this.date || this.getCurrentDate,
        category: this.category,
        value: +this.value,
      };
      this.$emit("addNewPayment", data);
    },
    addNewCategory() {
      const data = this.categoryNew;
      let check = this.options.every(function (el) {
        return data !== el
      });
      if (check == true) {
      this.visible = false;
      this.options.push(data);
      this.$emit("addDataToCategoryList", this.data);
      } else {
        this.visible = true;
      }
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
.add__text--cat {
  margin-bottom: 5px;
  width: 50%;
}

.btn__form {
  background-color: #00a89b;
  color: #90f4f0;
  padding: 5px 5px;
  margin: 10px 0;
}
.btn__form--cat {
  background-color: #00a89b;
  color: #90f4f0;
  padding: 5px 5px;
  margin: 10px 0 0 5px;
  width: 40%;
}
.new__cat {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.err{
  color: red;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
}
</style>