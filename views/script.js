// google charts
// ACCELEROMETER CHART
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawAccelerometerChart);
google.charts.setOnLoadCallback(drawTemperatureChart);

function drawAccelerometerChart() {
  var data = google.visualization.arrayToDataTable([
    ["Time (s)", "Vibration Amplitude (m/s^2)"],
    ["1", 0],
    ["2", 3],
    ["3", 6],
    ["4", 3],
    ["5", 0],
    ["6", -3],
    ["7", -6],
    ["8", -3],
    ["9", 0],
    ["10", 3],
  ]);

  var options = {
    title: "Accelerometer Data",
    curveType: "function",
    legend: { position: "bottom" },
  };

  var chart = new google.visualization.LineChart(
    document.getElementById("accelerometer_chart_div")
  );

  chart.draw(data, options);
}

// TEMPERATURE SENSOR CHART
function drawTemperatureChart() {
  var data = google.visualization.arrayToDataTable([
    ["Time (s)", "Temperature (°C)"],
    ["1", 0],
    ["2", 30],
    ["3", 60],
    ["4", 65],
    ["5", 70],
    ["6", 72],
    ["7", 68],
    ["8", 64],
    ["9", 60],
    ["10", 55],
  ]);
  var options = {
    title: "Temperature Data",
    curveType: "function",
    legend: { position: "bottom" },
  };

  var chart = new google.visualization.LineChart(
    document.getElementById("temperature_chart_div")
  );

  chart.draw(data, options);
}

// Temperrature value
const temperatureValue = document.getElementById("temperature");
temperatureValue.innerHTML = "20";
