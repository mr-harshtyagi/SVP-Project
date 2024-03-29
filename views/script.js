// google charts

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawAccelerometerChart);
google.charts.setOnLoadCallback(drawTemperatureChart);

// ACCELEROMETER CHART
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
    ["11", 0],
    ["12", 30],
    ["13", 60],
    ["14", 65],
    ["15", 70],
    ["16", 72],
    ["17", 68],
    ["18", 64],
    ["19", 60],
    ["20", 55],
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

// Temperature value
const temperatureValue = document.getElementById("temperature");

// motor-control
const motorButton = document.getElementById("motor-control");
motorButton.addEventListener("click", handleMotorClick);
function handleMotorClick() {
  // motorButton.disabled = true; // to disabble button
  if (motorButton.innerText === "Start") {
    motorButton.className = "btn btn-danger";
    motorButton.innerText = "Stop";
    smaButton.disabled = false;
    mrButton.disabled = false;
  } else {
    motorButton.className = "btn btn-success";
    motorButton.innerText = "Start";
    smaButton.disabled = true;
    mrButton.disabled = true;
  }
}

// sma-control
const smaButton = document.getElementById("sma-control");
smaButton.addEventListener("click", handleSmaClick);
function handleSmaClick() {
  // motorButton.disabled = true; // to disabble button
  if (smaButton.innerText === "Activate") {
    smaButton.className = "btn btn-danger";
    smaButton.innerText = "Deactivate";
  } else {
    console.log("Case false");
    smaButton.className = "btn btn-success";
    smaButton.innerText = "Activate";
  }
}

// mrfluid-control
const mrButton = document.getElementById("mrfluid-control");
mrButton.addEventListener("click", handleMrClick);
function handleMrClick() {
  // motorButton.disabled = true; // to disabble button
  if (mrButton.innerText === "Activate") {
    mrButton.className = "btn btn-danger";
    mrButton.innerText = "Deactivate";
  } else {
    console.log("Case false");
    mrButton.className = "btn btn-success";
    mrButton.innerText = "Activate";
  }
}

// keep sma and mr actuators disbled if motor is off
if (motorButton.innerText === "Start") {
  smaButton.disabled = true;
  mrButton.disabled = true;
}
