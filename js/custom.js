document.addEventListener("DOMContentLoaded", function () {
  // Chart initialization code
  var lineChart = document.getElementById("line-chart").getContext("2d");

  // Line chart options
  var options = {
    borderWidth: 2,
    cubicInterpolationMode: "monotone",
    pointRadius: 2,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: "#fff",
    pointHoverBorderWidth: 4,
  };

  // Create linear gradients for line chart
  var gradientOne = lineChart.createLinearGradient(
    0,
    0,
    0,
    lineChart.canvas.clientHeight
  );
  gradientOne.addColorStop(0, "rgba(51, 169, 247, 0.3)");
  gradientOne.addColorStop(1, "rgba(0, 0, 0, 0)");

  var gradientTwo = lineChart.createLinearGradient(
    0,
    0,
    0,
    lineChart.canvas.clientHeight
  );
  gradientTwo.addColorStop(0, "rgba(195, 113, 239, 0.15)");
  gradientTwo.addColorStop(1, "rgba(0, 0, 0, 0)");

  new Chart(lineChart, {
    type: "line",
    data: {
      labels: ["May", "Jun", "Jul", "Aug", "Sep", "Oct"],
      datasets: [
        {
          label: "Post",
          data: [310, 300, 370, 295, 350, 300, 230, 290],
          ...options,
          borderColor: "#c371ef",
          fill: "start",
          backgroundColor: gradientTwo,
        },
        {
          label: "Blog",
          data: [150, 230, 195, 260, 220, 300, 320, 490],
          ...options,
          borderColor: "#33a9f7",
          fill: "start",
          backgroundColor: gradientOne,
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          backgroundColor: "rgba(53, 27, 92, 0.8)",
          caretPadding: 5,
          boxWidth: 5,
          usePointStyle: "triangle",
          boxPadding: 3,
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
          beginAtZero: true,
        },
        y: {
          ticks: {
            callback: function (value, index, values) {
              return " " + value;
            },
            stepSize: 100,
          },
        },
      },
    },
  });
});
