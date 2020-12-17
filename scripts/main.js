
let lollipopChart;
let slopeChart;
let occupationEducationChart;


var polarChartData = [
{'name': 'Some college, no degree',
'data': [20.3, 14.5, 5.5, 7.1, 0.7, 3.1, 2.5]},
{'name': "Associate's degree", 'data': [9.6, 5.4, 5.1, 9.9, 0.5, 2.3, 1.8]},
{'name': "Bachelor's degree",
'data': [23.5, 39.9, 56.4, 52.5, 5.5, 42.9, 40.0]},
{'name': "Master's degree",
'data': [10.5, 23.3, 25.4, 22.4, 4.3, 47.3, 50.8]},
{'name': 'Doctoral or professional degree',
'data': [4.4, 6.9, 4.5, 3.0, 88.4, 4.3, 4.9]}]


var polarChartCat = ['Total, all occupations','Chief executives',
'Civil engineers','Mechanical engineers','Lawyers',
'Elementary school teachers, except special education',
'Secondary school teachers']



document.addEventListener('DOMContentLoaded', function(){
    //occupationsByEducation
    occupationEducationChart = Highcharts.chart('occupationsByEducation',{
        chart: {
            polar: true,
            type: 'line'
        }, 
        title: {
            text: 'Occupations by Education Level',
            x: -120
        },
        subtitle: {
            text: 'Educational attainment for workers 25 years and older by detailed occupation (2018)',
            x: -120
        },
        pane: {
            size: '100%'
        },
        xAxis: {
            categories: polarChartCat,
            tickmarkPlacement: 'on',
            lineWidth: 0
        },
        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0
        },
        tooltip: {
            //shared: true,
            formatter: function() {
                return this.series.name + ' ' + this.y;
            }
        },
        legend: {
            align: 'right',
            verticalAlign: 'middle',
            layout: 'vertical'
        },
        colors: ['red','orange','#9B870C','green','blue','purple','pink'],
        plotOptions: {
            series: {
                marker: {enabled: false}
            }

        },
        series: polarChartData,
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 700
                },
                chartOptions: {
                    legend: {
                        align: 'center',
                        verticalAlign: 'bottom',
                        layout: 'horizontal'
                    },
                    pane: {
                        size: '70%'
                    }
                }
            }]
        }
    })



})




document.addEventListener('DOMContentLoaded', function(){
    lollipopChart = Highcharts.chart('lollipopCovid',{
        chart: {
            type: 'lollipop',
            inverted: true
        },
        title: {
            text: 'Roles with Increases in Hiring due to COVID-19'
        },
        subtitle: {
            text: 'Source: McKinsey Global Business Executives Survey, July 2020'
        },
        tooltip: {
            shared: true
        },
        xAxis: {
            // tickInterval: 0.5,
            // gridLineWidth: 1,

            type: 'category',
            labels: {
                enabled: true,
            },
            categories: [{
                name: "Health & safety",
                categories: ['Distancing/sanitizing','Workforce safety and health']
            }, {
                name: "Technology & automation",
                categories: ['Automation and AI','Digital customer experience',
                            'Internet of Things','Cloud','Cyber-security','Data and analytics','Intranet/company network']
            }, {
                name: "Digital learning & working",
                categories: ['Agile ways of working','Digital learning and training','HR digital and remote hiring']
            }]
            //minorGridLineColor: 'grey', 
        },
        yAxis: {
            title: {
                text: '% of Respondents'
            }
        },
        series: [{
            name: '% of Respondents',
            data: [{
                name: 'Distancing/sanitizing',
                low: 73, 
                color: '#00008B'
            }, {
                name: 'Workforce safety and health',
                low: 48, 
                color: '#00008B'
            }, {
                name: 'Automation and AI',
                low: 35,
                color: '#4169E1'
            }, {
                name: 'Digital customer experience',
                low: 26,
                color: '#4169E1'
            }, {
                name: 'Internet of Things',
                low: 24,
                color: '#4169E1'
            }, {
                name: 'Cloud',
                low: 19,
                color: '#4169E1'
            }, {
                name: 'Cyber-security',
                low: 12,
                color: '#4169E1'
            }, {
                name: 'Data and analytics',
                low: 12,
                color: '#4169E1'
            }, {
                name: 'Intranet/company network',
                low: 8,
                color: '#4169E1'
            }, {
                name: 'Agile ways of working',
                low: 32,
                color: '#87CEEB'
            }, {
                name: 'Digital learning and training',
                low: 14,
                color: '#87CEEB'
            }, {
                name: 'HR digital and remote hiring',
                low: 13,
                color: '#87CEEB'
            }]
        }]
    })
})