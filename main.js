const chartData = {
    labels: ["France", "Germany", "US", "England", "Others"],
    data: [30, 17, 10, 36 , 7 ],
  };
  
  const myChart = document.querySelector(".my-chart");
  const ul = document.querySelector(".Countries-stats .details ul");
  
  
  new Chart(myChart, {
    type: "doughnut",
    data: {
      labels: chartData.labels,
      datasets: [
        {
          label: "Donation percentage",
          data: chartData.data,
        },
      ],
    },
    options: {
      borderWidth: 10,
      borderRadius: 2,
      hoverBorderWidth: 0,
     
    },
  });
  
  const populateUl = () => {
    chartData.labels.forEach((l, i) => {
      let li = document.createElement("li");
      li.innerHTML = `${l}: <span class='percentage'>${chartData.data[i]}%</span>`;
      ul.appendChild(li);
    });
  };
  
  populateUl();