<template>
  <div>
    <div class="item">
      <div class="block__for__add" v-show="checked">
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
            @click="onEditClick"
            v-bind:disabled="category === '' || value < 0 || value === ''"
          >
            EDIT PAY
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
      </div>
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
  </div>
</template>

<script>
export default {
  name: "PaymentsDisplay",
  data() {
    return {
      date: "",
      category: "",
      categoryNew: "",
      value: "",
      checked: false,
      visible: false,
      editData: {},
    };
  },

  props: {
    items: {
      type: Array,
      default: () => [],
    },
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
    deleteItem(item) {
      this.$store.commit("deletePayment", item);
    },

    editItem(item) {
      this.editData = {
        id: item.id,
        date: this.date || this.getCurrentDate,
        category: item.category,
        value: item.value,
      };
    },

    onClickContextItem(event, item) {
      const items = [
        {
          text: "Edit",
          action: () => {
            this.editItem(item);
            this.checked = true;
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
      this.checked = false;
    },
    onEditClick() {
      this.editData = {
        id: this.editData.id,
        date: this.date || this.getCurrentDate,
        category: this.category,
        value: this.value,
      };
      this.$store.commit("editDataToPaymentsList", this.editData);
      this.visible = false;
      this.checked = false;
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
.item {
  font-weight: 100;
  position: relative;
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

.add__form {
  display: flex;
  flex-direction: column;
  width: 80%;
  border: 2px #00a89b solid;
  padding: 10px;
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
  left: 500px;
  top: 160px;
  display: flex;
  align-items: center;
  background-color: white;
  z-index: 1;
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
.err {
  color: red;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
}

.new__cat {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
