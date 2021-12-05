<template>
  <div class="add">
    <div class="block__for__add">
      <div class="add__form">
        <button class="btn__form--close" @click="btnFormClose">
          Close the form
        </button>
        <input
          type="date"
          class="add__text"
          placeholder="Payment Date"
          v-model="date"
        />
        <select v-model="category" class="add__text">
          <option disabled>Payment Catgory</option>
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
          class="btn__form--cat"
          @click="onSaveClick"
          v-bind:disabled="category === '' || value < 0 || value === ''"
        >
          ADD +
        </button>
        <div>
          <div class="new__cat">
            <button
              class="btn__form--cat"
              @click="addNewCategory"
              v-bind:disabled="categoryNew === ''"
            >
              ADD New Caterory
            </button>
            <input
              class="add__text--cat"
              placeholder="Input New Category"
              v-model="categoryNew"
              type="text"
            />
          </div>
          <p class="err" v-show="visible">
            ERROR!<br />This category has been added.<br />Please enter a new
            one!
          </p>
        </div>
      </div>
      <div class="btn__add">
        <button id="2" class="btn__form" @click="inputStandingPay">
          ADD Food for 200
        </button>
        <button id="3" class="btn__form" @click="inputStandingPay">
          ADD Transport for 50
        </button>
        <button id="4" class="btn__form" @click="inputStandingPay">
          ADD Entertainment for 2000
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Add",
  props: {},
  data() {
    return {
      date: "",
      category: "",
      categoryNew: "",
      value: "",
      counter: 0,
      visible: false,
      payid: Number,
    };
  },
  computed: {
    getCurrentDate() {
      const today = new Date();
      let day = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();
      if (day < 10) day = "0" + day;
      return `${y}-${m}-${day}`;
    },
    options() {
      return this.$store.getters.getCategoryList;
    },
  },
  methods: {
    onSaveClick() {
      this.visible = false;
      this.categoryNew = "";
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
        return data !== el;
      });
      if (check == true) {
        this.visible = false;
        this.options.push(data);
        this.$emit("addDataToCategoryList", this.data);
      } else {
        this.visible = true;
      }
    },

    btnFormClose() {
      this.$router.push({
        name: "Dashboard",
      });
    },
    inputStandingPay(btnId) {
      this.payid = btnId.target.id;

      if (this.payid == 2) {
        this.category = "Food";
        this.value = "200";
        this.date = this.getCurrentDate;
      } else if (this.payid == 3) {
        this.category = "Auto";
        this.value = "50";
        this.date = this.getCurrentDate;
      } else if (this.payid == 4) {
        this.category = "Education";
        this.value = "2000";
        this.date = this.getCurrentDate;
      } else {
        return;
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
.add {
  position: relative;
}
.add__form {
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 2px #00a89b solid;
  padding: 10px;
  background-color: white;
  box-shadow: 0.1em 0.1em 0.5em 0.5em rgba(81, 90, 90, 0.2);
}

.add__text {
  margin-bottom: 5px;
}

.add__text--cat {
  margin-top: 5px;
  width: 50%;
}
.block__for__add {
  position: absolute;
  left: 400px;
  top: 160px;
  display: flex;
  align-items: center;
}
.btn__add {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  margin-left: 5px;
  width: 60%;
}
.btn__form {
  background-color: #00a89b;
  color: #90f4f0;
  padding: 5px 5px;
  width: 100%;
  cursor: pointer;
  margin: 5px 0 5px 5px;
}

.btn__form--cat {
  background-color: #00a89b;
  color: #90f4f0;
  padding: 5px 5px;
  margin: 5px 0 0 5px;
  width: 40%;
  cursor: pointer;
}
.btn__form--close {
  background-color: #00a89b;
  color: red;
  padding: 5px;
  margin: 5px 5px;
  width: 40%;
  cursor: pointer;
}

.new__cat {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>