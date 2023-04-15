//Chunk of code to allow the scrollytelling part to work using Scrollama
var main = document.querySelector("main");
      var scrolly = main.querySelector("#scrolly");
      var sticky = scrolly.querySelector(".sticky-thing");
      var article = scrolly.querySelector("article");
      var steps = article.querySelectorAll(".step");

      // initialize the scrollama
      var scroller = scrollama();

      // scrollama event handlers
      // in the following function, response = { element, direction, index }
      function handleStepEnter(response) {
        var el = response.element;

        // remove is-active from all steps, then add is-active to this step
        steps.forEach(step => step.classList.remove('is-active'));
        el.classList.add('is-active');

        // update chart based on step
        sticky.querySelector("p").innerText = el.dataset.step;

        // if current step is data-step="1" append the chart to the div with id "drawChartHere"
        if (el.dataset.step === "1") {
          if (!document.getElementById("drawChartHere").contains(beefChart.canvas)) {
            document.getElementById("drawChartHere").appendChild(beefChart.canvas);
          } else {
            // remove chart from div and append again to re-render
            document.getElementById("drawChartHere").removeChild(beefChart.canvas);
            document.getElementById("drawChartHere").appendChild(beefChart.canvas);
          }
        } else {
          // remove chart from div if current step is not data-step="1" 
          if (document.getElementById("drawChartHere").contains(beefChart.canvas)) {
            document.getElementById("drawChartHere").removeChild(beefChart.canvas);
          }
        }
        // if current step is data-step="2" append the chart to the div with id "drawChartHere"
        if (el.dataset.step === "2") {
          if (!document.getElementById("drawChartHere").contains(livestockChart.canvas)) {
            document.getElementById("drawChartHere").appendChild(livestockChart.canvas);
          } else {
            // remove chart from div and append again to re-render
            document.getElementById("drawChartHere").removeChild(livestockChart.canvas);
            document.getElementById("drawChartHere").appendChild(livestockChart.canvas);
          }
        } else {
          // remove chart from div if current step is not data-step="2" 
          if (document.getElementById("drawChartHere").contains(livestockChart.canvas)) {
            document.getElementById("drawChartHere").removeChild(livestockChart.canvas);
          }
        }
        // if current step is data-step="3" append the chart to the div with id "drawChartHere"
        if (el.dataset.step === "3") {
          if (!document.getElementById("drawChartHere").contains(fashionChart.canvas)) {
            document.getElementById("drawChartHere").appendChild(fashionChart.canvas);
          } else {
            // remove chart from div and append again to re-render
            document.getElementById("drawChartHere").removeChild(fashionChart.canvas);
            document.getElementById("drawChartHere").appendChild(fashionChart.canvas);
          }
        } else {
          // remove chart from div if current step is not data-step="2" 
          if (document.getElementById("drawChartHere").contains(fashionChart.canvas)) {
            document.getElementById("drawChartHere").removeChild(fashionChart.canvas);
          }
        }
        // if current step is data-step="4" append the chart to the div with id "drawChartHere"
        if (el.dataset.step === "4") {
          if (!document.getElementById("drawChartHere").contains(apparelChart.canvas)) {
            document.getElementById("drawChartHere").appendChild(apparelChart.canvas);
          } else {
            // remove chart from div and append again to re-render
            document.getElementById("drawChartHere").removeChild(apparelChart.canvas);
            document.getElementById("drawChartHere").appendChild(apparelChart.canvas);
          }
        } else {
          // remove chart from div if current step is not data-step="4" 
          if (document.getElementById("drawChartHere").contains(apparelChart.canvas)) {
            document.getElementById("drawChartHere").removeChild(apparelChart.canvas);
          }
        }
        // if current step is data-step="5" append the chart to the div with id "drawChartHere"
        if (el.dataset.step === "5") {
          if (!document.getElementById("drawChartHere").contains(recyclingChart.canvas)) {
            document.getElementById("drawChartHere").appendChild(recyclingChart.canvas);
          } else {
            // remove chart from div and append again to re-render
            document.getElementById("drawChartHere").removeChild(recyclingChart.canvas);
            document.getElementById("drawChartHere").appendChild(recyclingChart.canvas);
          }
        } else {
          // remove chart from div if current step is not data-step="5" 
          if (document.getElementById("drawChartHere").contains(recyclingChart.canvas)) {
            document.getElementById("drawChartHere").removeChild(recyclingChart.canvas);
          }
        }
        

      }
      //function to step the divs
      function init() {
        scroller
          .setup({
            step: "#scrolly article .step",
            offset: 0.40,
            debug: false
          })
          .onStepEnter(handleStepEnter);

        // setup resize event
        window.addEventListener("resize", scroller.resize);
      }

      // kick things off
      init();

//beef chart
const beefChart = document.getElementById('beefChart').getContext('2d');
const labelYear = ["2011","2012","2013","2014","2015","2016","2017","2018","2019","2020"]
const beefData = {
    labels: labelYear,
     datasets: [
        {
            label: "beef consumption",
            data:  [19.01,	18.19,	13.12,	11.14,	3.25,	4.84,	10.65,	15.85,	20.91,	24.98,
            ],
            borderWidth: 2,
            fill: false,
            backgroundColor: "rgb(0, 51, 153)",
            borderColor: "rgb(0, 51, 153)"
        },
        
     ]
 };
var beefChartCanvas = document.getElementById("drawChartHere");
beefChartCanvas.width = document.getElementById("drawChartHere").clientWidth;
beefChartCanvas.height = document.getElementById("drawChartHere").clientHeight;
new Chart("beefChart",
    {
        type: "line",
        data: beefData,
        options: { 
            responsive: false,
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            title: {
                display: true,
                text: ['Volume of beef consumed in Singapore from 2011 to 2020', '(in 1,000 metric tons)'] ,
                fontSize: 18,
                fontColor: 'rgb(0,0,0)',
            },
            plugins: {
                datalabels: {
                    display: false,
                },
            }
        }
    });



//livestock emissions chart
const livestockChart = document.getElementById('livestockChart').getContext('2d');
const labelCompany = ["15 meat and dairy companies","Petrochina","ExxonMobil","BP","Royal Dutch Shell","Occidental","Conoco Phillips"]
const livestockData = {
    labels: labelCompany,
     datasets: [
        {
            label: "livestock emissions",
            data:  [734,674,567,518,508,193,170
            ],
            borderWidth: 3,
            fill: false,
            backgroundColor: ["rgb(77, 166, 255)","rgb(0, 51, 153)","rgb(0, 51, 153)","rgb(0, 51, 153)","rgb(0, 51, 153)","rgb(0, 51, 153)","rgb(0, 51, 153)",]
        },
        
     ]
 }
 var livestockChartCanvas = document.getElementById("drawChartHere");
livestockChartCanvas.width = document.getElementById("drawChartHere").clientWidth;
livestockChartCanvas.height = document.getElementById("drawChartHere").clientHeight;
new Chart("livestockChart",
    {
        type: "horizontalBar",
        data: livestockData,
        options: { 
            responsive: false,
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            title: {
                display: true,
                text: ['Estimated livestock emissions of major meat and dairy companies compared to' , 'leading fossil fuel companies in 2020 and 2021 (in million metric tons of CO₂ equivalent)'] ,
                fontSize: 14,
                fontColor: 'rgb(0,0,0)',
            },
            plugins: {
                datalabels: {
                    display: false,
                },
            },
            
        }
    });

//eco-friendly fashion products
const fashionChart = document.getElementById('fashionChart').getContext('2d');
const labelType = ["Cosmetics", "Clothing", "Footwear"]
const fashionData = {
    labels: labelType,
     datasets: [
        {
            label: "Brand Switch",
            data:  [17, 16.40, 12.20
             ],
            borderWidth: 2,
            fill: false,
            backgroundColor: "rgb(154, 88, 167)",
           
        },
        {
            label: "Pay More",
            data:  [12.60, 10.80, 9.10
             ],
            borderWidth: 2,
            fill: false,
            backgroundColor: "rgb(161, 54, 96)",
          
        },
        
     ]
 }
 var fashionChartCanvas = document.getElementById("drawChartHere");
 fashionChartCanvas.width = document.getElementById("drawChartHere").clientWidth;
 fashionChartCanvas.height = document.getElementById("drawChartHere").clientHeight;
new Chart("fashionChart",
    {
        type: "horizontalBar",
        data: fashionData,
        options: { 
            responsive: false,
            maintainAspectRatio: false,
            indexAxis: 'y',
            legend: {
                display: true
            },
            title: {
                display: true,
                text: ['Willingness to switch brands or pay more for eco-friendly fashion products' , 'in Singapore as of April 2022, by type (in %)'] ,
                fontSize: 16,
                fontColor: 'rgb(0,0,0)',
            },
            tooltips: {
                callbacks: {
                  label: function(tooltipItem, data) {
                    return data['labels'][tooltipItem['index']] + ': ' + data['datasets'][0]['data'][tooltipItem['index']] + '%';
                  }
        
                },
              },
            scales: {
                xAxes: [{
                    display: true,
                    ticks: {
                        suggestedMin: 0,
                        suggestedMax: 100,

                    }
                }]
            },
            plugins: {
              datalabels: {
                  formatter: (value, categories) => {

                      let sum = 0;
                      let dataArr = categories.chart.data.datasets[0].data;
                      dataArr.map(data => {
                          sum += data;
                      });
                      let percentage = (value*100 / sum).toFixed(2)+"%";
                      return percentage;


                  },
                  color: 'rgb(0, 0, 0)',
                  anchor: 'end',
                  align: 'right',
              
            
        }
      }}
    });

//apparel emissions chart  
const apparelChart = document.getElementById('apparelChart').getContext('2d');
const labelApparel = ["2019",	"2020",	"2021",	"2022",	"2023",	"2024",	"2025",	"2026",	"2027",	"2028",	"2029",	"2030"
]

const apparelData = {
labels: labelApparel,
 datasets: [
    {
        label: "apparel emissions",
        data:  [1025,  1067,  1110,	1155,	1202,	1251,	1301,	1354,	1409,	1466,	1526,	1588

        ],
        borderWidth: 2,
        fill: false,
        backgroundColor: "rgb(161, 54, 96)",
        borderColor: "rgb(161, 54, 96)"
    },
    
 ]
}
var apparelChartCanvas = document.getElementById("drawChartHere");
 apparelChartCanvas.width = document.getElementById("drawChartHere").clientWidth;
 apparelChartCanvas.height = document.getElementById("drawChartHere").clientHeight;
new Chart("apparelChart",
{
    type: "line",
    data: apparelData,
    options: { 
        responsive: false,
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        title: {
            display: true,
            text: ['Projected carbon dioxide equivalent emissions of' ,'the apparel industry worldwide from 2019 to 2030 (in megatons)'] ,
            fontSize: 16,
            fontColor: 'rgb(0,0,0)',
        },
        plugins: {
            datalabels: {
                display: false,
            },
        }
    }
});

//recycling chart
const recyclingChart = document.getElementById('recyclingChart').getContext('2d');
const recyclingData = {
  labels: [
    'Always',
    'Not Always'
  ],
  datasets: [
  {
    label: 'Always',
    data: [28, 72],
    backgroundColor: [
      'rgb(133, 188, 133)',
      'rgb(255, 102, 102)'
      
    ],
    hoverOffset: 4
  },
  ]}
  var recyclingChartCanvas = document.getElementById("drawChartHere");
  recyclingChartCanvas.width = document.getElementById("drawChartHere").clientWidth;
  recyclingChartCanvas.height = document.getElementById("drawChartHere").clientHeight;

new Chart("recyclingChart",
  {
      type: "doughnut",
      data: recyclingData,
      options: { 
          responsive: false,
          maintainAspectRatio: false,
          legend: {
              display: true
          },
          title: {
              display: true,
              text: ['Frequency of recycling household waste in Singapore as of June 2021'] ,
              fontFamily: "sans-serif",
              fontSize: 18,
              fontColor: 'rgb(0,0,0)',
          },
          tooltips: {
            callbacks: {
              label: function(tooltipItem, data) {
                return data['labels'][tooltipItem['index']] + ': ' + data['datasets'][0]['data'][tooltipItem['index']] + '%';
              }
    
            },
          },
          plugins: {
              datalabels: {
                  formatter: (value, categories) => {

                      let sum = 0;
                      let dataArr = categories.chart.data.datasets[0].data;
                      dataArr.map(data => {
                          sum += data;
                      });
                      let percentage = (value*100 / sum).toFixed(2)+"%";
                      return percentage;


                  },
                  color: 'rgb(0, 0, 0)',
                  
              }
          }
      }
  })





// age group chart data
const adoptLabels= [ "Yes", "No", "Not Sure"]
const data0 = {
    labels: adoptLabels,
    datasets: [
    {   label: "16-24 years",
        data: [49.72, 29.57, 20.7],
        backgroundColor: [
            'rgb(133, 188, 133)',
            'rgb(255, 102, 102)',
            'rgb(234, 195, 42)'
          ],
          hoverOffset: 4
    }]}

const data1 = {
    labels: adoptLabels,
    datasets: [
    {   label: "25-34 years",
        data: [51.21, 28.87, 19.92],
        backgroundColor: [
          'rgb(133, 188, 133)',
          'rgb(255, 102, 102)',
          'rgb(234, 195, 42)'
          ],
          hoverOffset: 4
    }]}

const data2 = {
    labels: adoptLabels,
    datasets: [
    {   label: "35-44 years",
        data: [44.64, 34.68, 20.68],
        backgroundColor: [
          'rgb(133, 188, 133)',
          'rgb(255, 102, 102)',
          'rgb(234, 195, 42)'
          ],
          hoverOffset: 4
    }]}

const data3 = {
    labels: adoptLabels,
    datasets: [
    {   label: "45-54 years",
        data: [42.54, 32.8, 24.66],
        backgroundColor: [
          'rgb(133, 188, 133)',
          'rgb(255, 102, 102)',
          'rgb(234, 195, 42)'
          ],
          hoverOffset: 4
    }]}

const data4 = {
    labels: adoptLabels,
    datasets: [
    {   label: "55+ years",
        data: [36.18, 31.91, 31.91],
        backgroundColor: [
          'rgb(133, 188, 133)',
          'rgb(255, 102, 102)',
          'rgb(234, 195, 42)'
          ],
          hoverOffset: 4
    }]}


// creating age group charts
new Chart("ageChart0",
    {
        type: "doughnut",
        data: data0,
        options: { 
            responsive: false,
            maintainAspectRatio: false,
            legend: {
                display: true
            },
            title: {
                display: true,
                text: ['16-24 years'] ,
                fontSize: 24,
                fontColor: 'rgb(0, 0, 0)',
            },
            tooltips: {
              callbacks: {
                label: function(tooltipItem, data) {
                  return data['labels'][tooltipItem['index']] + ': ' + data['datasets'][0]['data'][tooltipItem['index']] + '%';
                }
      
              },
            },
            plugins: {
                datalabels: {
                  formatter: (value, categories) => {

                    let sum = 0;
                    let dataArr = categories.chart.data.datasets[0].data;
                    dataArr.map(data => {
                        sum += data;
                    });
                    let percentage = (value*100 / sum).toFixed(2)+"%";
                    return percentage;


                },
                color: 'rgb(0, 0, 0)',
                
                },
            }
        }
    });

new Chart("ageChart1",
{
    type: "doughnut",
    data: data1,
    options: { 
        responsive: false,
        maintainAspectRatio: false,
        legend: {
            display: true
        },
        title: {
            display: true,
            text: ['25-34 years'] ,
            fontSize: 24,
            fontColor: 'rgb(0, 0, 0)',
        },
        plugins: {
            datalabels: {
              formatter: (value, categories) => {

                let sum = 0;
                let dataArr = categories.chart.data.datasets[0].data;
                dataArr.map(data => {
                    sum += data;
                });
                let percentage = (value*100 / sum).toFixed(2)+"%";
                return percentage;


            },
            color: 'rgb(0, 0, 0)',
            },
        }
    }
});

new Chart("ageChart2",
{
    type: "doughnut",
    data: data2,
    options: { 
        responsive: false,
        maintainAspectRatio: false,
        legend: {
            display: true
        },
        title: {
            display: true,
            text: ['35-44 years'] ,
            fontSize: 24,
            fontColor: 'rgb(0, 0, 0)',
        },
        plugins: {
            datalabels: {
              formatter: (value, categories) => {

                let sum = 0;
                let dataArr = categories.chart.data.datasets[0].data;
                dataArr.map(data => {
                    sum += data;
                });
                let percentage = (value*100 / sum).toFixed(2)+"%";
                return percentage;


            },
            color: 'rgb(0, 0, 0)',
            },
        }
    }
});

new Chart("ageChart3",
{
    type: "doughnut",
    data: data3,
    options: { 
        responsive: false,
        maintainAspectRatio: false,
        legend: {
            display: true
        },
        title: {
            display: true,
            text: ['45-54 years'] ,
            fontSize: 24,
            fontColor: 'rgb(0, 0, 0)',
        },
        plugins: {
            datalabels: {
              formatter: (value, categories) => {

                let sum = 0;
                let dataArr = categories.chart.data.datasets[0].data;
                dataArr.map(data => {
                    sum += data;
                });
                let percentage = (value*100 / sum).toFixed(2)+"%";
                return percentage;


            },
            color: 'rgb(0, 0, 0)',
            },
        }
    }
});

new Chart("ageChart4",
{
    type: "doughnut",
    data: data4,
    options: { 
        responsive: false,
        maintainAspectRatio: false,
        legend: {
            display: true,
            
        },
        title: {
            display: true,
            text: ['55+ years'] ,
            fontSize: 24,
            fontColor: 'rgb(0, 0, 0)',
        },
        plugins: {
            datalabels: {
              formatter: (value, categories) => {

                let sum = 0;
                let dataArr = categories.chart.data.datasets[0].data;
                dataArr.map(data => {
                    sum += data;
                });
                let percentage = (value*100 / sum).toFixed(2)+"%";
                return percentage;


            },
            color: 'rgb(0, 0, 0)',
            },
        }
    }
});




//default chart shown on tabs
    document.getElementById("defaultOpen").click();


function openAge(evt, ageName) {
  // declare all variables
  var i, tabcontent, tablinks;

  // get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(ageName).style.display = "block";
  evt.currentTarget.className += " active";
}


//counter to increase the number of people who have pledged every time the button is clicked + firebase (?, update:nevermind it couldnt work :<)
var counter = 0
function pledger() {
      counter +=1 ;
      console.log(counter);
      if (counter===1) {
        document.getElementById("pledge").innerHTML =  counter + " person has pledged";
      } else {
        document.getElementById("pledge").innerHTML =  counter + " people have pledged";
      }
     }
    

document.getElementById("count").addEventListener('click', () => {
    alert("Thank you for pledging to be a sustainable consumer! Do remember to practice the above ways in your daily life and spread the word!");
})




//typewriter effect on header
var i = 0;
var txt = 'Dear Singaporean' +",\xa0\xa0\xa0 "; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("headerTitle").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter()

