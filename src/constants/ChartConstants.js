
export const tempDataSets = [
    {
      label: "High Temp",
      borderColor: "rgba(50, 115, 220, 0.5)",
      backgroundColor: "white",
      data: [],
      yAxisID: "High",
    },
    {
      label: "Low Temp",
      borderColor: "rgba(255, 56, 96, 0.5)",
      backgroundColor: "white",
      data: [],
      yAxisID: "low",
    },
  ];

  export const tempOptions = {
    scales: {
      'xAxes': [
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
      'yAxes': [
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
    // tooltips: {
    //   mode: "index",
    //   callbacks: {
    //     label(tooltipItem, data) {
    //       const { label } = data.datasets[tooltipItem.datasetIndex];
    //       const value = numeral(tooltipItem.yLabel).format("0,0");
    //       return `${label}: ${value}`;
    //     },
    //   },
    // },
  };