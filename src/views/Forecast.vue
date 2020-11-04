<template>
  <div>
    <line-chart
      :width="500"
      :height="300"
      :labels="customLabels"
      :datasets="customDataSets"
      :options="$options.options"
    ></line-chart>

    <p class="my-4" v-html="weather.item.description"></p>
  </div>
</template>

<script>
import numeral from "numeral";
import store from "@/store.js";

import LineChart from "./Linechart";

let datasets = [
  {
    label: "High Temp",
    borderColor: "rgba(50, 115, 220, 0.5)",
    backgroundColor: "white",
    data: [],
    yAxisID: "High",
    text: []
  },
  {
    label: "Low Temp",
    borderColor: "rgba(255, 56, 96, 0.5)",
    backgroundColor: "white",
    data: [],
    yAxisID: "low",
  },
];
const options = {
  scales: {
    xAxes: [
      {
        display: true,
        ticks: {
          startWith: "Tue",
        },
        position: "bottom",
        scaleLabel: {
          display: true,
          labelString: "Day",
          fontColor: "black",
        },
      },
    ],
    yAxes: [
      {
        type: "linear",
        display: true,
        position: "left",
        id: "High",
        scaleLabel: {
          display: true,
          labelString: "High Temprature",
          fontColor: "red",
        },
      },
      {
        type: "linear",
        display: true,
        position: "left",
        id: "low",
        scaleLabel: {
          display: true,
          labelString: "Low Temprature",
          fontColor: "blue",
        },
      },
    ],
  },
  tooltips: {
    mode: "index",
    callbacks: {
      label(tooltipItem, data) {
        const label = data.datasets[tooltipItem.datasetIndex].label;
        const value = numeral(tooltipItem.yLabel).format("0,0");
        return `${label}: ${value}`;
      },
    },
  },
};
export default {
  name: "forecast",
  datasets,
  options,
  components: {
    LineChart,
  },
  data() {
    return {
      lowTemp: [],
      highTemp: [],
      customLabels: [],
      weather: store.query.results.channel,
      forecast: store.query.results.channel.item.forecast,
      customDataSets: [],
      text: "",
    };
  },
  mounted() {
    this.displayData("day");
    this.displayData("high");
    this.displayData("low");
    this.displayData("text");

    this.displayedDatasets();
  },

  methods: {
    displayedDatasets() {
      this.customDataSets = datasets;
      datasets[0].data = this.highTemp;
      datasets[0].text = this.text;
      datasets[1].data = this.lowTemp;
       datasets[1].text = this.text;
    },

    displayData(type) {
      if (type == "day") {
        this.customLabels = this.forecast.map((obj) => obj[type]);
      } else if (type == "high") {
        this.highTemp = this.forecast.map((obj) => obj[type]);
      } else if (type == "low") {
        this.lowTemp = this.forecast.map((obj) => obj[type]);
      } else {
        this.text = this.forecast.map((obj) => obj[type]);
      }
    },
  },
};
</script>