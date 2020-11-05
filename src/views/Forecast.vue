<template>
  <div>
    <line-chart
      :width="500"
      :height="300"
      :labels="customLabels"
      :datasets="dynamicDataSet"
      :options="dynamicOptions"
    ></line-chart>

    <p class="my-4" v-html="weather.item.description"></p>
  </div>
</template>

<script>
import data from "@/data.js";
import LineChart from "./Linechart";
import { tempDataSets, tempOptions } from "../constants/ChartConstants";
import numeral from "numeral";

export default {
  name: "forecast",
  components: {
    LineChart,
  },
  data() {
    return {
      dynamicOptions: {},
      dynamicDataSet: [],
      customLabels: [],
      weather: data.query.results.channel,
      forecast: data.query.results.channel.item.forecast,
    };
  },
  mounted() {
    this.displayData();
    this.displayedDatasets();
    this.displayCustomOptions();
  },
  computed: {},
  methods: {
    displayedDatasets() {
      this.dynamicDataSet = [...tempDataSets];
      this.dynamicDataSet[0].data = this.forecast.map((obj) => obj["high"]);
      this.dynamicDataSet[1].data = this.forecast.map((obj) => obj["low"]);
    },

    displayCustomOptions() {
      this.dynamicOptions = { ...tempOptions };
      this.dynamicOptions.tooltips = {
        mode: "index",
        enabled:true,
        callbacks: {
          label(tooltipItem, data) {
            const { label } = data.datasets[tooltipItem.datasetIndex];
            const value = numeral(tooltipItem.yLabel).format("0,0");
            return `${label}: ${value}`;
          },
        },
      };
    },
    displayData() {
      this.customLabels = this.forecast.map((obj) => obj["day"]);
    },
  },
};
</script>