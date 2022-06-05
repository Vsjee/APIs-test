chartIt();

async function chartIt() {
  const data = await getData();

  const ctx = document.getElementById("chart").getContext("2d");
  const myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: data.xs,
      datasets: [
        {
          label: "Global Average Temperature",
          data: data.ys,
          fill: false,
          backgroundColor: "rgba(255, 159, 64, 0.2)",
          borderColor: "rgba(255, 159, 64, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        yAxes: {
            callback: function(value, index, values) {
                return value + '°';
            }
        },
      },
    },
  });
}

async function getData() {
  const xs = [];
  const ys = [];

  const response = await fetch("ZonAnn.Ts+dSST.csv");
  const data = await response.text();

  const table = data.split("\n").slice(1);
  table.forEach((row) => {
    const columns = row.split(",");
    const year = columns[0];
    xs.push(year);
    const temp = columns[1];
    ys.push(parseFloat(temp) + 14);
    console.log(year, temp);
  });
  return { xs, ys };
}
