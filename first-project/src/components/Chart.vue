<script>
import { Doughnut } from "vue-chartjs";
//const { reactiveProp } = mixins;

export default {
  name: "Chart",
  extends: Doughnut,
  //mixins: [reactiveProp],
  props: {
    chartData: {
      type: Object,
      default: null,
    },
    options: {
      type: Object,
      default: null,
    },
    items: {
      type: Array,
      default: () => [],
    },
    labels: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      dataCounter: 0,
      sumValues: [],
    };
  },

  methods: {
    getValues() {
      for (let cat = 0; cat < this.labels.length; cat++) {
        this.chartData.labels.push(this.labels[cat]);
        for (let i = 0; i < this.items.length; i++) {
          if (this.items[i].category === this.labels[cat]) {
            this.sumValues.push(this.items[i].value);
          }
        }
        this.dataCounter = this.sumValues.reduce(function (a, b) {
          return a + b;
        });
        this.chartData.datasets[0].data.push(this.dataCounter);
        this.dataCounter = 0;
        this.sumValues = [];
      }
    },
  },
  watch: {
    chartData() {
      this.$data._chart.update();
    },
  },

  created() {
    this.getValues(); //добавление данных в chartData
  },

  mounted() {
    this.renderChart(this.chartData, this.options);
  },
};
</script>