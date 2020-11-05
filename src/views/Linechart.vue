<template>
  <canvas ref="myChart" :width="width" :height="height"></canvas>
</template>

<script>
import Chart from 'chart.js';
export default {
  name: 'Linechart',
  props: {
    // The canvas's width.
    width: {
      type: Number,
      validator: value => value > 0
    },
    // The canvas's height.
    height: {
      type: Number,
      validator: value => value > 0
    },
    // The chart's data.labels
    labels: Array,
    // The chart's data.datasets
    datasets: {
      type: Array,
      required: true
    },
    // The chart's options.
    options: Object
  },
  data() {
    return {
      chart: null
    };
  },
  watch: {
    datasets(newDatasets) {
       this.chart = new Chart(this.$refs.myChart, {
      type: 'line',
      responsive:true,
      data: {
        labels: this.labels,
        datasets: newDatasets
      },
      options: this.options

    });
      this.chart.update();
    },
  },
  mounted() { },
  beforeDestroy () {
    // Don't forget to destroy the Chart.js instance.
    if (this.chart) {
      this.chart.destroy()
    }
  }
}
</script>