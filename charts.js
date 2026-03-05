document.addEventListener("DOMContentLoaded", function () {

console.log("Charts loaded from charts.js");
console.log("Analysis page link: analysis.html");


/* ================================
   BUBBLE CHART
================================ */

const bubbleCtx = document.getElementById("bubbleChart").getContext("2d");

new Chart(bubbleCtx, {

type: "bubble",

data: {
datasets: [

{
label: "Wedding",
data: [
{x:1,y:30,r:18},
{x:2,y:40,r:22},
{x:3,y:35,r:20}
],
backgroundColor:"#ff4ecd"
},

{
label: "Corporate",
data:[
{x:1,y:20,r:12},
{x:2,y:25,r:15},
{x:3,y:30,r:18}
],
backgroundColor:"#00f7ff"
},

{
label: "Birthday",
data:[
{x:1,y:15,r:10},
{x:2,y:18,r:12},
{x:3,y:22,r:14}
],
backgroundColor:"#ffc857"
}

]
},

options:{
plugins:{
legend:{
labels:{color:"white"}
}
},

scales:{
x:{
ticks:{color:"white"},
grid:{color:"#333"}
},

y:{
ticks:{color:"white"},
grid:{color:"#333"}
}
}
}

});


/* ================================
   STACKED BAR CHART
================================ */

const barCtx = document.getElementById("stackedBarChart").getContext("2d");

new Chart(barCtx, {

type:"bar",

data:{

labels:["Low Price","Moderate","High Price"],

datasets:[

{
label:"Veg",
data:[50,70,40],
backgroundColor:"#ff6ec7"
},

{
label:"Non-Veg",
data:[40,60,90],
backgroundColor:"#00e5ff"
},

{
label:"Desserts",
data:[20,30,50],
backgroundColor:"#ffd166"
}

]

},

options:{

responsive:true,

plugins:{
legend:{
labels:{color:"white"}
}
},

scales:{
x:{
stacked:true,
ticks:{color:"white"},
grid:{color:"#333"}
},

y:{
stacked:true,
ticks:{color:"white"},
grid:{color:"#333"}
}
}

}

});

});