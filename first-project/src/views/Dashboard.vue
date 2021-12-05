<template>
  <div id="app" class="container">
    <header>My Personal Costs</header>
    <main>
      <add-payment-form />
      <payments-display :items="currentElements" />
      <p class="total">Total: {{ getSumValue }}</p>
      <pagination
        :cur="page"
        :n="n"
        :length="paymentsList.length"
        @paginate="onChangePage"
      />
    </main>
  </div>
</template>

<script>
import AddPaymentForm from "../components/AddPaymentForm.vue";
import PaymentsDisplay from "../components/PaymentsDisplay.vue";
import Pagination from "../components/Pagination.vue";
import { mapMutations, mapGetters, mapActions } from "vuex";

export default {
  name: "Dashboard",
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    Pagination,
  },
  props: {},
  data() {
    return {
      page: 1,
      n: 7,
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
      editData: "editDataToPaymentsList",
    }),

    ...mapActions(["fetchData"]),

    onEditPayment(data) {
      this.editData(data);
    },

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
header {
  text-align: left;
}

.total {
  margin-top: 10px;
  text-align: center;
}
</style>

