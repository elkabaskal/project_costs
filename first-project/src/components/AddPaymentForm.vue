<template>
  <div>
    <div class="payment-content">
      <button id="1" class="btn__form" @click="goToPageAdd">
        ADD NEW COST +
      </button>
    </div>
    <transition name="fade">
      <router-view @addNewPayment="onDataPaymentAdd" />
    </transition>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "AddPaymentForm",
  props: {},
  data() {
    return {
      date: "",
      category: "",
      categoryNew: "",
      value: "",
      counter: 0,
      visible: false,
    };
  },
  computed: {
    options() {
      return this.$store.getters.getCategoryList;
    },
  },
  methods: {
    goToPageAdd() {
      this.$router.push({
        name: "Add",
        type: "Addition",
      });
    },
    /*  openAddPaymentForm() {
      this.$modal.show("Add", {
        title: "Add new Cost",
      });
    }, */

    onDataPaymentAdd(data) {
      this.addData(data);
    },

    ...mapMutations({
      setData: "setPaymentsListData",
      addData: "addDataToPaymentsList",
    }),
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
  justify-content: flex-start;
  max-width: 80%;
}

.btn__form {
  background-color: #00a89b;
  color: #90f4f0;
  padding: 5px 5px;
  width: 22%;
  cursor: pointer;
  left: 0;
}
.err {
  color: red;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>