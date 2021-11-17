<template>
  <div id="app" class="container">
    <div class="wrapper">
      <header>My Personal Costs</header>
      <main>
        <add-payment-form @addNewPayment="onDataPaymentAdd" />
        <payments-display :items="paymentsList" />
      </main>
    </div>
  </div>
</template>

<script>
import AddPaymentForm from "./components/AddPaymentForm.vue";
import PaymentsDisplay from "./components/PaymentsDisplay.vue";
export default {
  name: "App",
  components: {
    PaymentsDisplay,
    AddPaymentForm,
  },
  data() {
    return {
      paymentsList: [],
    };
  },
  methods: {
    fetchData() {
      return [
        {
          date: "2020-03-28",
          category: "Food",
          value: 169,
        },
        {
          date: "2020-03-24",
          category: "Transport",
          value: 360,
        },
        {
          date: "2020-03-24",
          category: "Food",
          value: 532,
        },
      ];
    },
    onDataPaymentAdd(data) {
      this.paymentsList.push(data);
    },
  },
  created() {
    this.paymentsList = this.fetchData();
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1040px;
  margin: 0 auto;
}
.wrapper {
  font-family: Arial, Helvetica, sans-serif;
}
header {
  font-size: 1.3em;
  padding-left: 40px;
}
</style>