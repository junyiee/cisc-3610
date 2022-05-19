var doughnutChart = new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
      labels: ["01M292", "01M448", "01M450", "01M458", "01M509", "01M515", "01M539"],
      datasets: [
        {
          label: "Math Avg. Score",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#E072A4", "#FFAD69"],
          data: [404,423,402,401,433,557,574]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Jenny Cheng -- 2012 SAT Math Avg. Score'
      }
    }
});

var horizontalChart = new Chart(document.getElementById("bar-chart-horizontal"), {
    type: 'horizontalBar',
    data: {
      labels: ["01M292", "01M448", "01M450", "01M458", "01M509", "01M515", "01M539"],
      datasets: [
        {
          label: "Math Avg. Score",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#E072A4", "#FFAD69"],
          data: [404,423,402,401,433,557,574]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Jenny Cheng -- 2012 SAT Math Avg. Score'
      }
    }
});