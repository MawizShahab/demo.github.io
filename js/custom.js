document.addEventListener("DOMContentLoaded", function () {
  // Chart initialization code
  var lineChart = document.getElementById("line-chart").getContext("2d");

  // Line chart options
  var options = {
    borderWidth: 3,
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
  gradientOne.addColorStop(0, "rgba(51, 169, 247, 0.5)");
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
      labels: ["1", "2", "3", "4", "5", "6", "7", "8"],
      datasets: [
        {
          label: "Post",
          data: [310, 300, 370, 295, 350, 300, 230, 290],
          ...options,
          borderColor: "#B14AED",
          borderWidth: 5,
          fill: "start",
          backgroundColor: gradientTwo,
        },
        {
          label: "Blog",
          data: [150, 230, 195, 260, 220, 300, 320, 490],
          ...options,
          borderColor: "#9381FF",
          borderWidth: 5,
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
          ticks: {
            color: "#B3BAC2", // Change the color of x-axis labels
          },
        },
        y: {
          ticks: {
            color: "#B3BAC2",
            callback: function (value, index, values) {
              return " " + index;
            },
            stepSize: 0,
          },
        },
      },
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Chart initialization code
  var rangeChart = document.getElementById("range-chart").getContext("2d");

  // Range chart options
  var options = {
    barThickness: 5, // Adjust the bar thickness as needed
    maxBarThickness: 8, // Max bar thickness
    categoryPercentage: 0.9, // Adjust category percentage for spacing
    barPercentage: 0.9, // Adjust bar percentage for spacing
  };

  new Chart(rangeChart, {
    type: "bar", // Use a bar chart for the range graph
    data: {
      labels: ["D", "W", "M"],
      datasets: [
        {
          label: "Post",
          data: [310, 300, 370, 295, 350, 300, 230, 290],
          ...options,
          backgroundColor: "#9381FF",
        },
        {
          label: "Blog",
          data: [150, 230, 195, 260, 220, 300, 320, 490],
          ...options,
          backgroundColor: "#C88D93",
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
          ticks: {
            color: "#B3BAC2", // Change the color of x-axis labels
          },
        },
        y: {
          ticks: {
            color: "#B3BAC2",
            callback: function (value, index, values) {
              return " " + value;
            },
            stepSize: 50,
          },
        },
      },
    },
  });
});
