document.addEventListener("DOMContentLoaded", function () {

const textColor = "#E2E8F0";

/* =======================
   1️⃣ Bubble Chart
======================= */

new Chart(document.getElementById("bubbleChart"), {
  type: "bubble",
  data: {
    datasets: [
      { label: "Winter Wedding", data: [{x:20,y:30,r:30}], backgroundColor:"#f97316" },
      { label: "Summer Corporate", data: [{x:45,y:25,r:25}], backgroundColor:"#22c55e" },
      { label: "All Seasons Birthday", data: [{x:35,y:50,r:35}], backgroundColor:"#38bdf8" },
      { label: "Winter Social", data: [{x:60,y:20,r:40}], backgroundColor:"#a855f7" }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,

    layout: {
      padding: 30
    },

    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: textColor,
          padding: 20
        }
      }
    },

    scales: {
      x: {
        display: false,
        min: 0,
        max: 80
      },
      y: {
        display: false,
        min: 0,
        max: 80
      }
    }
  }
});


/* =======================
   2️⃣ Stacked Bar Chart
======================= */

new Chart(document.getElementById("stackedBarChart"), {
  type: "bar",
  data: {
    labels:["Baked","Dairy","Fruits","Meat","Vegetables"],
    datasets:[
      { label:"High", data:[58000,49000,50000,57000,25000], backgroundColor:"#ef4444" },
      { label:"Moderate", data:[43000,38000,39000,46000,18000], backgroundColor:"#84cc16" },
      { label:"Low", data:[30000,29000,21000,34000,22000], backgroundColor:"#eab308" }
    ]
  },
  options:{
    responsive:true,
    maintainAspectRatio:false,
    plugins:{ 
      legend:{ 
        labels:{ color:textColor }
      }
    },
    scales:{
      x:{ 
        stacked:true,
        ticks:{color:textColor}
      },
      y:{ 
        stacked:true,
        ticks:{color:textColor}
      }
    }
  }
});

});                                                                                                                   
