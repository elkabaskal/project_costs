<template>
<<<<<<< Updated upstream
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
=======
  <div id="app" class="container">
    <div class="wrapper">
      <header>My Personal Costs</header>
      <main>
        <add-payment-form @addNewPayment="onDataPaymentAdd" />
        <payments-display :items="currentElements" />
        <p class="total">Total: {{ getSumValue }}</p>
        <pagination
          :cur="page"
          :n="n"
          :length="paymentsList.length"
          @paginate="onChangePage"
        />
      </main>
>>>>>>> Stashed changes
    </div>
    <router-view/>
  </div>
</template>

<<<<<<< Updated upstream
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
=======
<script>
import AddPaymentForm from "./components/AddPaymentForm.vue";
import PaymentsDisplay from "./components/PaymentsDisplay.vue";
import Pagination from "./components/Pagination.vue";
import { mapMutations, mapGetters, mapActions } from "vuex";

export default {
  name: "App",
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    Pagination,
  },
  data() {
    return {
      page: 1,
      n: 10,
    };
  },
  computed: {
    currentElements() {
      return this.$store.getters.getPaymnetsList.slice(
        this.n * (this.page - 1),
        this.n * (this.page - 1) + this.n
      );
    },
    ...mapGetters({
      getSumValue: "getFullPaymentValue",
      paymentsList: "getPaymnetsList",
    }),
  },
  methods: {
    ...mapMutations({
      setData: "setPaymentsListData",
      addData: "addDataToPaymentsList",
    }),

    ...mapActions(["fetchData"]),

    onDataPaymentAdd(data) {
      this.addData(data);
    },
    onChangePage(p) {
      this.page = p;
    },
  },
  created() {
    this.fetchData();
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
>>>>>>> Stashed changes
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
<<<<<<< Updated upstream
</style>
=======
.total {
  margin-top: 10px;
  text-align: center;
}
</style>
>>>>>>> Stashed changes
