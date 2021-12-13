<template>
  <v-row>
    <v-col>
      <div class="text-h4 text-sm-h3 mb-8">My personal Cost</div>
      <payments-display :items="currentElements" />
      <p class="total">Total: {{ getSumValue }}</p>
    </v-col>
    <v-col>
      <div class="text-h4 text-sm-h3 mb-8 ml-14">Chart</div>
      <chart
        :chartData="chartData"
        :options="options"
        :items="currentElements"
        :labels="categoryListChart"
      />
    </v-col>
  </v-row>
</template>

<script>
import PaymentsDisplay from "../components/PaymentsDisplay.vue";
import { mapMutations, mapGetters, mapActions } from "vuex";
import Chart from "../components/Chart.vue";

export default {
  name: "Dashboard",
  components: {
    PaymentsDisplay,
    Chart,
  },

  data() {
    return {
      chartData: {
        labels: [],
        datasets: [
          {
            backgroundColor: [
              "#CDDC39",
              "cyan",
              "purple",
              "pink",
              "orange",
              "#FF5722",
            ],
            data: [],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  computed: {
    currentElements() {
      return this.$store.getters.getPaymnetsList;
    },
    categoryListChart() {
      return this.$store.getters.getCategoryList;
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
  },

  created() {
    this.fetchData();
  },
};
</script>


