//beef consumption bar chart

const labelYear = ["2011","2012","2013","2014","2015","2016","2017","2018","2019","2020"]

const beefdata = {
    labels: labelYear,
     datasets: [
        {
            label: "beef consumption",
            data:  [19.01,	18.19,	13.12,	11.14,	3.25,	4.84,	10.65,	15.85,	20.91,	24.98,
            ],
            borderWidth: 2,
            fill: false,
            backgroundColor: "rgb(200, 22, 39)",
            borderColor: "rgb(8, 22, 39)"
        },
        
     ]
 }



new Chart("beef-chart",
    {
        type: "line",
        data: beefdata,
        options: { 
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            title: {
                display: true,
                text: ['Volume of beef consumed in Singapore from 2011 to 2020','(in 1,000 metric tons)'] ,
                fontSize: 24,
                fontColor: 'rgb(0,120,0)',
            },
            plugins: {
                datalabels: {
                    display: false,
                },
            }
        }
    });



//livestock emissions chart
const labelCompany = ["15 meat and dairy companies","Petrochina","ExxonMobil","BP","Royal Dutch Shell","Occidental","Conoco Phillips"]

const livestockdata = {
    labels: labelCompany,
     datasets: [
        {
            label: "livestock emissions",
            data:  [734,674,567,518,508,193,170
            ],
            borderWidth: 2,
            fill: false,
            backgroundColor: "rgb(200, 22, 39)",
            borderColor: "rgb(8, 22, 39)"
        },
        
     ]
 }

new Chart("livestock-chart",
    {
        type: "bar",
        data: livestockdata,
        options: { 
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            title: {
                display: true,
                text: ['Estimated livestock emissions of major meat and dairy companies compared to' , 'leading fossil fuel companies in 2020 and 2021(in million metric tons of CO₂ equivalent)'] ,
                fontSize: 24,
                fontColor: 'rgb(0,120,0)',
            },
            plugins: {
                datalabels: {
                    display: false,
                },
            }
        }
    });


//eco-friendly fashion products
const labelType = ["Cosmetics", "Clothing", "Footwear"]

const fashiondata = {
    labels: labelType,
     datasets: [
        {
            label: "Brand Switch",
            data:  [17, 16.40, 12.20
             ],
            borderWidth: 2,
            fill: false,
            backgroundColor: "rgb(255, 255, 39)",
            borderColor: "rgb(8, 22, 39)"
        },
        {
            label: "Pay More",
            data:  [12.60, 10.80, 9.10
             ],
            borderWidth: 2,
            fill: false,
            backgroundColor: "rgb(230, 230, 320)",
            borderColor: "rgb(8, 22, 39)"
        },
        
     ]
 }



new Chart("fashion-chart",
    {
        type: "horizontalBar",
        data: fashiondata,
        options: { 
            maintainAspectRatio: false,
            indexAxis: 'y',
            legend: {
                display: true
            },
            title: {
                display: true,
                text: ['Willingness to switch brands or pay more for eco-friendly fashion products in Singapore as of April 2022, by type (in %)'] ,
                fontSize: 24,
                fontColor: 'rgb(0,120,0)',
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
            //add code to add % symbol 
            
        }
    });



//apparel emissions chart  
    const labelApparel = ["2019",	"2020",	"2021",	"2022",	"2023",	"2024",	"2025",	"2026",	"2027",	"2028",	"2029",	"2030"
    ]

const appareldata = {
    labels: labelApparel,
     datasets: [
        {
            label: "apparel emissions",
            data:  [1025,  1067,  1110,	1155,	1202,	1251,	1301,	1354,	1409,	1466,	1526,	1588

            ],
            borderWidth: 2,
            fill: false,
            backgroundColor: "rgb(200, 22, 39)",
            borderColor: "rgb(8, 22, 39)"
        },
        
     ]
 }


new Chart("apparel-chart",
    {
        type: "line",
        data: appareldata,
        options: { 
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            title: {
                display: true,
                text: ['Projected carbon dioxide equivalent emissions of the apparel industry worldwide from 2019 to 2030(in megatons)'] ,
                fontSize: 24,
                fontColor: 'rgb(0,120,0)',
            },
            plugins: {
                datalabels: {
                    display: false,
                },
            }
        }
    });

//recycling chart
const recyclingdata = {
    labels: [
      'Always',
      'Not Always'
    ],
    datasets: [
    {
      label: 'Always',
      data: [28, 72],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    },
    ]};

  new Chart("recycling-chart",
    {
        type: "doughnut",
        data: recyclingdata,
        options: { 
            maintainAspectRatio: false,
            legend: {
                display: true
            },
            title: {
                display: true,
                text: ['Frequency of recycling household waste in Singapore as of June 2021'] ,
                fontFamily: "sans-serif",
                fontSize: 24,
                fontColor: 'rgb(0,120,0)',
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
                    color: '#fff',
                }
            }
        }
    })

//age group chart
const adoptLabels= [ "Yes", "No", "Not Sure"]
const data0 = {
    labels: adoptLabels,
    datasets: [
    {   label: "16-24 years",
        data: [49.72, 29.57, 20.7],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
    }]}

const data1 = {
    labels: adoptLabels,
    datasets: [
    {   label: "25-34 years",
        data: [51.21, 28.87, 19.92],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
    }]}

const data2 = {
    labels: adoptLabels,
    datasets: [
    {   label: "35-44 years",
        data: [44.64, 34.68, 20.68],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
    }]}

const data3 = {
    labels: adoptLabels,
    datasets: [
    {   label: "45-54 years",
        data: [42.54, 32.8, 24.66],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
    }]}

const data4 = {
    labels: adoptLabels,
    datasets: [
    {   label: "55+ years",
        data: [36.18, 31.91, 31.91],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
    }]}

const defaultConfig = {
    type: "doughnut",
    data: data0,
    options:  {
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        title: {
            display: true,
            text: ['16-24 years'] ,
            fontSize: 24,
            fontColor: 'rgb(0,120,0)',
        },
        plugins: {
            datalabels: {
                display: false,
            },
        }

}}


/*new Chart("age-chart",
    {
        type: "doughnut",
        data: data0,
        options: { 
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            title: {
                display: true,
                text: ['16-24 years'] ,
                fontSize: 24,
                fontColor: 'rgb(0,120,0)',
            },
            plugins: {
                datalabels: {
                    display: false,
                },
            }
        }
    }); */

var create = document.getElementById('age-chart').getContext('2d');
var chart = new Chart(create, defaultConfig);

document.getElementById("button0").addEventListener('click', () => {
    const chart = document.getElementById("age-chart");
   // chart.config.format = { type: "doughnut" };
    chart.data = data0;
    chart.options = { 
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        title: {
            display: true,
            text: ['16-24 years'] ,
            fontSize: 24,
            fontColor: 'rgb(0,120,0)',
        },
        plugins: {
            datalabels: {
                display: false,
            },
        }
    };
    chart.update();
  }) 

  document.getElementById("button1").addEventListener('click', () => {
    const chart = document.getElementById("age-chart");
    //chart.config.format = { type: "doughnut" };
    chart.data = data1;
    chart.options = { 
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        title: {
            display: true,
            text: ['25-34 years'] ,
            fontSize: 24,
            fontColor: 'rgb(0,120,0)',
        },
        plugins: {
            datalabels: {
                display: false,
            },
        }

 };
    chart.update();
  }) 


var counter = 0
function pledger() {
      counter += 1 ;
      console.log(counter);
      document.getElementById("pledge").innerHTML =  (counter) + " people have pledged";
}

document.getElementById("count").addEventListener('click', () => {
    alert("Thank you for pledging to be a sustainable consumer!");
}

)