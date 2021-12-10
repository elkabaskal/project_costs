<template>
  <v-row>
    <v-col>
      <div class="text-h4 text-sm-h3 mb-8">My personal Cost</div>
      <payments-display :items="currentElements" />
      <p class="total">Total: {{ getSumValue }}</p>
    </v-col>
    <v-col> CHART </v-col>
  </v-row>
</template>

<script>
import PaymentsDisplay from "../components/PaymentsDisplay.vue";
import { mapMutations, mapGetters, mapActions } from "vuex";

export default {
  name: "Dashboard",
  components: {
    PaymentsDisplay,
  },
  props: {},
  data() {
    return {
      type: String,
    };
  },
  computed: {
    currentElements() {
      return this.$store.getters.getPaymnetsList;
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


