var jobs = [{
	color: '#000000', 'name': 'Mining and logging', 'data': [31, 29, 30, 31, 29, 29, 40, 33, 34, 23, 20, 13, 19, 26, 12, 10, 10, 16, 16, 15, 17, 22]
}, {
	'name': 'Construction', 'data': [299, 277, 354, 430, 373, 325, 353, 353, 333, 325, 215, 216, 267, 296, 240, 247, 315, 244, 332, 275, 223, 230]
}, {
	'name': 'Manufacturing', 'data': [427, 462, 441, 479, 482, 486, 477, 445, 441, 403, 401, 360, 408, 422, 310, 315, 306, 346, 430, 469, 492, 525]
}, {
	'name': 'Wholesale trade', 'data': [279, 217, 217, 264, 214, 206, 169, 188, 193, 268, 188, 187, 172, 183, 156, 145, 153, 163, 179, 187, 180, 178]
}, {
	'name': 'Retail trade', 'data': [808, 791, 749, 740, 746, 813, 838, 792, 743, 877, 752, 762, 759, 715, 626, 521, 670, 669, 773, 705, 671, 667]
}, {
	'name': 'Transportation, warehousing, and utilities', 'data': [342, 250, 332, 342, 323, 323, 281, 308, 345, 327, 331, 244, 283, 270, 286, 217, 174, 243, 228, 238, 291, 257]
}, {
	'name': 'Information', 'data': [147, 129, 146, 120, 127, 120, 172, 131, 169, 142, 136, 146, 152, 132, 119, 132, 78, 97, 106, 82, 121, 129]
}, {
	'name': 'Financial activities', 'data': [411, 353, 362, 343, 367, 382, 381, 376, 349, 426, 348, 319, 427, 400, 336, 251, 264, 298, 291, 284, 301, 293]
}, {
	'name': 'Professional and business services', 'data': [1386, 1404, 1355, 1178, 1268, 1290, 1287, 1288, 1260, 1218, 1217, 1223, 1265, 1357, 1192, 982, 976, 1077, 1178, 1195, 1268, 1252]
}, {
	'name': 'Education and health services', 'data': [1379, 1205, 1378, 1377, 1358, 1303, 1325, 1315, 1216, 1306, 1311, 1203, 1294, 1252, 1193, 1051, 975, 1089, 1288, 1182, 1215, 1358]
}, {
	'name': 'Leisure and hospitality', 'data': [1125, 1001, 1022, 1017, 1018, 959, 957, 943, 995, 975, 966, 916, 919, 950, 664, 314, 622, 838, 770, 761, 772, 791]
}, {
	'name': 'Other services', 'data': [174, 224, 239, 218, 294, 260, 249, 255, 248, 256, 185, 250, 264, 232, 147, 147, 194, 268, 288, 242, 243, 247]
}, {
	'name': 'Federal government', 'data': [139, 130, 136, 154, 111, 116, 129, 116, 112, 124, 117, 88, 113, 119, 131, 114, 70, 112, 281, 123, 95, 101]
}, {
	'name': 'State and local government', 'data': [573, 575, 604, 590, 590, 572, 579, 622, 608, 638, 606, 626, 669, 649, 596, 550, 564, 542, 536, 594, 605, 602]
}]
var employed = [{
	color: '#000000', 'name': 'Mining and logging', 'data': [746, 741, 741, 741, 743, 741, 736, 731, 731, 735, 724, 715, 712, 714, 706, 653, 633, 626, 620, 619, 621, 623, 624]
}, {
	'name': 'Construction', 'data': [7452, 7423, 7443, 7469, 7478, 7497, 7504, 7508, 7524, 7541, 7539, 7555, 7593, 7639, 7574, 6556, 7012, 7171, 7202, 7226, 7261, 7333, 7360]
}, {
	'name': 'Manufacturing', 'data': [12825, 12830, 12827, 12829, 12829, 12838, 12845, 12848, 12851, 12810, 12868, 12866, 12844, 12852, 12806, 11489, 11729, 12062, 12103, 12133, 12193, 12226, 12253]
}, {
	'name': 'Wholesale trade', 'data': [5878, 5884, 5880, 5893, 5897, 5898, 5906, 5906, 5913, 5923, 5926, 5933, 5937, 5934, 5922, 5537, 5560, 5612, 5592, 5605, 5637, 5642, 5653]
}, {
	'name': 'Retail trade', 'data': [15696, 15667, 15642, 15631, 15618, 15613, 15614, 15613, 15622, 15644, 15630, 15672, 15669, 15672, 15586, 13287, 13673, 14531, 14785, 15046, 15061, 15156, 15122]
}, {
	'name': 'Transportation, warehousing, and utilities', 'data': [6135, 6135, 6141, 6146, 6150, 6172, 6171, 6166, 6175, 6181, 6205, 6202, 6224, 6224, 6213, 5650, 5623, 5707, 5756, 5842, 5887, 5948, 6093]
}, {
	'name': 'Information', 'data': [2843, 2841, 2851, 2845, 2853, 2865, 2862, 2861, 2866, 2865, 2874, 2883, 2894, 2894, 2888, 2609, 2569, 2576, 2565, 2588, 2641, 2613, 2614]
}, {
	'name': 'Financial activities', 'data': [8676, 8690, 8707, 8721, 8727, 8732, 8753, 8768, 8771, 8792, 8804, 8814, 8823, 8845, 8827, 8566, 8585, 8605, 8620, 8648, 8685, 8715, 8730]
}, {
	'name': 'Professional and business services', 'data': [21126, 21164, 21176, 21226, 21253, 21294, 21337, 21377, 21402, 21444, 21481, 21503, 21523, 21550, 21456, 19254, 19414, 19725, 19887, 20071, 20198, 20429, 20489]
}, {
	'name': 'Education and health services', 'data': [23900, 23918, 23981, 24046, 24076, 24131, 24204, 24262, 24323, 24363, 24436, 24465, 24534, 24586, 24408, 21805, 22193, 22760, 22979, 23154, 23214, 23276, 23330]
}, {
	'name': 'Leisure and hospitality', 'data': [16496, 16473, 16494, 16507, 16519, 16526, 16528, 16570, 16631, 16701, 16744, 16784, 16808, 16867, 16124, 8549, 9954, 11933, 12566, 12704, 13117, 13387, 13418]
}, {
	'name': 'Other services', 'data': [5853, 5854, 5869, 5884, 5881, 5896, 5905, 5910, 5907, 5907, 5923, 5925, 5935, 5941, 5850, 4571, 4816, 5182, 5340, 5409, 5458, 5502, 5509]
}, {
	'name': 'Federal government', 'data': [2811, 2814, 2815, 2823, 2826, 2829, 2831, 2857, 2857, 2844, 2850, 2847, 2855, 2867, 2886, 2893, 2885, 2883, 2912, 3164, 3128, 2986, 2900]
}, {
	'name': 'State and local government', 'data': [19695, 19699, 19713, 19730, 19725, 19724, 19756, 19780, 19793, 19801, 19809, 19832, 19859, 19878, 19842, 18883, 18380, 18434, 18640, 18853, 18670, 18545, 18532]
}]

var slopeChartData = [{ name: '', data: [34, 17] }, { name: '', data: [333, 223] }, { name: '', data: [441, 492] },
{ name: '', data: [193, 180] }, { name: '', data: [743, 671] }, { name: '', data: [345, 291] },
{ name: '', data: [169, 121] }, { name: '', data: [349, 301] }, { name: '', data: [1260, 1268] },
{ name: '', data: [1216, 1215] }, { name: '', data: [995, 772] }, { name: '', data: [248, 243] },
{ name: '', data: [112, 95] }, { name: '', data: [608, 605] },
{
	type: 'scatter', data: [{ 'x': 0, 'y': 34, 'name': 'Mining and logging' }, { 'x': 0, 'y': 333, 'name': 'Construction' }, { 'x': 0, 'y': 441, 'name': 'Manufacturing' },
	{ 'x': 0, 'y': 193, 'name': 'Wholesale trade' }, { 'x': 0, 'y': 743, 'name': 'Retail trade' }, { 'x': 0, 'y': 345, 'name': 'Transportation, warehousing, and utilities' },
	{ 'x': 0, 'y': 169, 'name': 'Information' }, { 'x': 0, 'y': 349, 'name': 'Financial activities' }, { 'x': 0, 'y': 1260, 'name': 'Professional and business services' },
	{ 'x': 0, 'y': 1216, 'name': 'Education and health services' }, { 'x': 0, 'y': 995, 'name': 'Leisure and hospitality' }, { 'x': 0, 'y': 248, 'name': 'Other services' },
	{ 'x': 0, 'y': 112, 'name': 'Federal government' }, { 'x': 0, 'y': 608, 'name': 'State and local government' }]
}]


var empl_line;
var jobs_line;
var slopeChart;

function generate_empl() {
	empl_line = Highcharts.chart('employment_ind', {
		title: {
			text: 'Employment by Industry 2019-2020',
		},
		subtitle: {
			text: 'Source: U.S. Bureau of Labor Statistics'
		},
		chart: {
			height: 700,
			type: 'line',
		},
		// colors: ['black','black','black','black','black','black','black','black','black','black','black','black','black','black'],
		plotOptions: {
			allowPointSelect: true,
			series: {
				marker: {
					enabled: false,
					states: {
						select: {
							enabled: true,
						},
						hover: {
							fillColor: '#4169E1',
							lineWidth: 3,
						}
					}
				},
				states: {
					inactive: {
						opacity: 1
					}
				}
			}
		},
		tooltip: {
            //shared: true,
            formatter: function() {
                return this.series.name + ': ' + this.y / 1000 + 'M';
            }
        },
		xAxis: {
			title: {
				text: false,
			},
			categories: ['Jan 2019', 'Feb 2019', 'Mar 2019', 'Apr 2019', 'May 2019', 'June 2019', 'July 2019', 'Aug 2019', 'Sept 2019', 'Oct 2019', 'Nov 2019', 'Dec 2019',
				'Jan 2020', 'Feb 2020', 'Mar 2020', 'Apr 2020', 'May 2020', 'June 2020', 'July 2020', 'Aug 2020', 'Sept 2020', 'Oct 2020', 'Nov 2020'],
			tickInterval: 2,
			// width: '80%'

		},
		yAxis: {
			title: {
				text: 'Total Industry Employment'
			},
			labels: {
				formatter: function () { return this.value / 1000 + 'M' }
			}
		},
		series: employed,
		legend: {

			layout: 'horizontal',
			align: 'center',
			verticalAlign: 'bottom',
			floating: false,
			backgroundColor: '#FFFFFF'
		},
	});
}

function generate_jobs() {
	jobs_line = Highcharts.chart('jobs', {
		title: {
			text: 'Job Openings by Industry 2019-2020',
		},
		subtitle: {
			text: 'Source: U.S. Bureau of Labor Statistics'
		},
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false,
			height: 700,
			type: 'line',
		},
		plotOptions: {
			allowPointSelect: true,
			series: {
				marker: {
					enabled: false,
					states: {
						select: {
							enabled: true,
						},
						hover: {
							fillColor: '#4169E1',
							lineWidth: 3,
						}
					}
				},
				states: {
					inactive: {
						opacity: 1
					}
				}
			}
		},
		tooltip: {
            //shared: true,
            formatter: function() {
                return this.series.name + ': ' + this.y + 'k';
            }
        },
		xAxis: {
			title: {
				text: false,
			},
			categories: ['Jan 2019', 'Feb 2019', 'Mar 2019', 'Apr 2019', 'May 2019', 'Jun 2019', 'Jul 2019', 'Aug 2019', 'Sep 2019', 'Oct 2019', 'Nov 2019', 'Dec 2019',
				'Jan 2020', 'Feb 2020', 'Mar 2020', 'Apr 2020', 'May 2020', 'Jun 2020', 'Jul 2020', 'Aug 2020', 'Sep 2020', 'Oct 2020']
			, tickInterval: 2,
		},
		yAxis: {
			title: {
				text: 'Units Sold per Category'
			},
			labels: {
				formatter: function () { return this.value+'k' }
			}
		},
		series: jobs,
		legend: {

			layout: 'horizontal',
			align: 'center',
			verticalAlign: 'bottom',
			floating: false,
			backgroundColor: '#FFFFFF'
		},
	});
}

function generate_slope() {
	slopeChart = Highcharts.chart('slopeJobOpenings', {
		chart: {
			renderTo: 'slopeJobOpenings',
			defaultSeriesType: 'line',
			marginTop: 100,
		},
		title: {
			text: 'Job Openings per Sector (in thousands)'
		},
		subtitle: {
			text: 'Source: BLS Job Openings (Sept. 2019, Sept. 2020)'
		},
		legend: {
			enabled: false
		},
		tooltip: {
			formatter: function () {
				return this.y+'k';
			}
		},
		xAxis: {
			opposite: true,
			lineColor: '#999',
			categories: ['September 2019', 'September 2020'],
			title: {
				text: ''
			},
			labels: {
				style: {
					fontWeight: 'bold'
				}
			}
		},
		yAxis: {
			gridLineWidth: 0,
			labels: {
				enabled: false,
			},
			title: {
				text: '',
			}
		},
		plotOptions: {
			series: {
				dataLabels: { enabled: false },
				marker: {
					enabled: false,
					states: {
						select: {
							enabled: true,
						},
						hover: {
							fillColor: '#4169E1',
							lineWidth: 3,
						}
					}
				},
				states: {
					inactive: {
						opacity: 1
					}
				}
			},
			line: {
				lineWidth: 2,
				shadow: false,
				color: '#666',
				marker: {
					radius: 2,
					symbol: 'circle'
				},
				dataLabels: {
					enabled: true,
					align: 'left',
					x: 10,
					y: 0,
					formatter: function () {
						if (this.x == 'September 2020') {
							return this.y +'k'+ this.series.name;
						}
					}
				}
			},

			scatter: {
				shadow: false,
				color: '#666',
				marker: {
					radius: 2
				},
				dataLabels: {
					enabled: true,
					align: 'right',
					x: -10,
					y: 0,
					formatter: function () {
						return this.point.name + ': ' + this.y+'k';
					}
				}
			}
		},
		series: slopeChartData
	})
}
// populate dropdown lists
function ind_dropdown() {
	industry_dropdown = document.getElementById('ind_select');
	let ind = ['Mining and logging', 'Construction', 'Manufacturing', 'Wholesale trade', 'Retail trade', 'Transportation, warehousing, and utilities', 'Information',
		'Financial activities', 'Professional and business services', 'Education and health services', 'Leisure and hospitality', 'Other services',
		'Federal government', 'State and local government'];
	let options = '';
	for (var i = 0; i < ind.length; i++) {
		options += '<option value="' + ind[i] + '" />';
	}
	industry_dropdown.innerHTML = options;
}
function clear_ind() {
	console.log('clear');
	document.getElementById('industry_box').value = ''
	select_industry();
}

function select_industry() {
	ibox = document.getElementById('industry_box')
	let selected_series = ibox.value;
	console.log('industry selected: ' + selected_series)

	for (var i = 0; i < empl_line.series.length; i++) {
		if (empl_line.series[i].name == selected_series) {
			//TODO select series, change colors
			empl_line.series[i].color = '#4169E1';
			jobs_line.series[i].color = '#4169E1';
			slopeChart.series[i].color = '#4169E1';
			empl_line.series[i].options.lineWidth = 10;
			jobs_line.series[i].options.lineWidth = 10;
			slopeChart.series[i].options.lineWidth = 10;
			empl_line.series[i].options.opacity = 1;
			jobs_line.series[i].options.opacity = 1;
			slopeChart.series[i].options.opacity = 1;
			console.log('changed!' + i)
			empl_line.series[0].update(empl_line.series[0].options);
			jobs_line.series[0].update(jobs_line.series[0].options);
			slopeChart.series[0].update(slopeChart.series[0].options);
		} else {
			console.log(i)
			if (selected_series !== undefined) {
				empl_line.series[i].color = '#000000';
				jobs_line.series[i].color = '#000000';
				slopeChart.series[i].color = '#000000';
				empl_line.series[i].options.lineWidth = 2;
				jobs_line.series[i].options.lineWidth = 2;
				slopeChart.series[i].options.lineWidth = 2;
				empl_line.series[i].options.opacity = 0.4;
				jobs_line.series[i].options.opacity = 0.4;
				slopeChart.series[i].options.opacity = 0.4;
			} else {
				empl_line.series[i].color = '#000000';
				jobs_line.series[i].color = '#000000';
				empl_line.series[i].options.lineWidth = 2;
				jobs_line.series[i].options.lineWidth = 2;
				empl_line.series[i].options.opacity = 1;
				jobs_line.series[i].options.opacity = 1;
			}
		}
	}

}

document.addEventListener('DOMContentLoaded', function () {
	generate_empl();
	generate_jobs();
	ind_dropdown();
	generate_slope();


});

