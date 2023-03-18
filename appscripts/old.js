    
 
    
    const labelYear = ["2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021"]//years in quotes
    
    // Source of data: World Development Indicators
    
    
    const dataObj = {
        labels: labelYear,
        datasets: [
            {
                label: "Brunei", //country name in quotes
                data:  [18.53,19.05,18.09,17.10,12.93,11.40,12.13,13.57,13.47,12.01,14.01
                ],// data of the country as an array, no quotes
                borderWidth: 2,
                fill: false,
                backgroundColor: "rgb(8, 22, 39)",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
                borderColor: "rgb(8, 22, 39)"//put black rgb(0,0,0) or the same color as above
            },
            {
                label: "Cambodia",//country name in quotes
                data:  [12.83,14.05,15.23,16.70,18.05,20.02,22.18,24.57,27.09,25.87,26.96
                ],// data of the country as an array, no quotes
                borderWidth: 2,
                fill: false,
                backgroundColor: "rgb(17, 46, 81)",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
                borderColor: "rgb(17, 46, 81)"//put black rgb(0,0,0) or the same color as above
            },
            {
                label: "Indonesia",//country name in quotes
                data:  [892.97,917.87,912.52,890.82,860.85,931.88,1015.62,1042.27,1119.10,1058.69,1186.09
                ],// data of the country as an array, no quotes
                borderWidth: 2,
                fill: false,
                backgroundColor: "rgb(32, 84, 147)",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
                borderColor: "rgb(32, 84, 147)"//put black rgb(0,0,0) or the same color as above
            },
            {
                label: "Laos",//country name in quotes
                data:  [8.75,10.19,11.98,13.28,14.43,15.91,17.07,18.14,18.74,18.98,18.83
                ],// data of the country as an array, no quotes
                borderWidth: 2,
                fill: false,
                backgroundColor: "rgb(46, 120, 210)",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
                borderColor: "rgb(46, 120, 210)"//put black rgb(0,0,0) or the same color as above
            },
            {
                label: "Malaysia",//country name in quotes
                data:  [297.95,314.44,323.28,338.06,301.36,301.26,319.11,358.79,365.18,337.34,372.98
                ],// data of the country as an array, no quotes
                borderWidth: 2,
                fill: false,
                backgroundColor: "rgb(109, 161, 224)",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
                borderColor: "rgb(109, 161, 224)"//put black rgb(0,0,0) or the same color as above
            },
            {
                label: "Myanmar",//country name in quotes
                data:  [54.12,58.32,60.57,63.26,63.05,60.29,61.45,67.14,68.70,78.93,65.09
                ],// data of the country as an array, no quotes
                borderWidth: 2,
                fill: false,
                backgroundColor: "rgb(151, 188, 233)",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
                borderColor: "rgb(151, 188, 233)"//put black rgb(0,0,0) or the same color as above
            },
            {
                label: "Philippines",//country name in quotes
                data:  [234.22,261.92,283.90,297.48,306.45,318.63,328.48,346.84,376.82,361.75,394.09
                ],// data of the country as an array, no quotes
                borderWidth: 2,
                fill: false,
                backgroundColor: "rgb(193, 215, 248)",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
                borderColor: "rgb(193, 215, 248)"//put black rgb(0,0,0) or the same color as above
            },
            {
                label: "Singapore",//country name in quotes
                data:  [279.35,295.09,307.58,314.85,308.00,318.83,343.19,377.00,375.47,345.30,396.99
                ],// data of the country as an array, no quotes
                borderWidth: 2,
                fill: false,
                backgroundColor: "rgb(200, 215, 225)",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
                borderColor: "rgb(200, 215, 225)"//put black rgb(0,0,0) or the same color as above
            },
            {
                label: "Thailand",//country name in quotes
                data:  [370.82,397.56,420.33,407.34,401.30,413.37,456.36,506.76,544.08,499.68,505.95
                ],// data of the country as an array, no quotes
                borderWidth: 2,
                fill: false,
                backgroundColor: "rgb(200, 215, 225)",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
                borderColor: "rgb(200, 215, 225)"//put black rgb(0,0,0) or the same color as above
            },
            {
                label: "Vietnam",//country name in quotes
                data:  [172.60,195.59,213.71,233.45,239.26,257.10,281.35,310.11,334.37,346.62,366.14
                ],// data of the country as an array, no quotes
                borderWidth: 2,
                fill: false,
                backgroundColor: "rgb(200, 215, 225)",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
                borderColor: "rgb(200, 215, 225)"//put black rgb(0,0,0) or the same color as above}
            }
        ]
    };

    new Chart("GDP-chart",
            {
                type: 'line',
                data: dataObj,
                options: { 
                    maintainAspectRatio: false,
                    legend: {
                        display: true
                    },
                    title: {
                        display: true,
                        text: ["GDP of ASEAN countries from 2011 to 2021 (in Billion USD)"],//set this to 'Something'
                        fontFamily: "sans-serif",
                        fontSize: 24,
                        fontColor: 'rgb(0,0,120)',
                    },
                    scales: {
                        y: {
                            max: 1500,
                            min: 0,
                            ticks: {
                                stepSize: 100,
                            }
                        }
                    },
                    
                    plugins: {
                        chartAreaBorder: {
                          borderColor: 'red',
                          borderWidth: 2,
                          borderDash: [5, 5],
                          borderDashOffset: 2,
                        }
                      }
                    
                },

            
           
            });

const chartAreaBorder = {
  id: 'chartAreaBorder',
  beforeDraw(chart, args, options) {
    const {ctx, chartArea: {left, top, width, height}} = chart;
    ctx.save();
    ctx.strokeStyle = options.borderColor;
    ctx.lineWidth = options.borderWidth;
    ctx.setLineDash(options.borderDash || []);
    ctx.lineDashOffset = options.borderDashOffset;
    ctx.strokeRect(left, top, width, height);
    ctx.restore();
  }
};           