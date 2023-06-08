
if($('#number-of-actions__graph').length)
am5.ready(function() {
	var root = am5.Root.new("number-of-actions__graph");
	root._logo.dispose();

	// Set themes
	// https://www.amcharts.com/docs/v5/concepts/themes/
	root.setThemes([
	  am5themes_Animated.new(root)
	]);


	// Create chart
	// https://www.amcharts.com/docs/v5/charts/xy-chart/
	var chart = root.container.children.push(am5xy.XYChart.new(root, {
	  panX: false,
	  panY: false,
	}));

	root.locale = am5locales_ru_RU;

	// Add cursor
	// https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
	var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
	}));
	cursor.lineY.set("visible", false);


	// Generate random data
	var date = new Date();
	date.setHours(0, 0, 0, 0);
	var value = 100;

	function generateData() {
		value = Math.round((Math.random() * 10 - 5) + value);
		am5.time.add(date, "day", 1);
		var lastMonth = new Date(date.getFullYear(), date.getMonth()+1, 0)


		if (lastMonth.getDate() == date.getDate()) {
			return {
				date: date.getTime(),
				value: value,
				bulletSettings: {
					radius: 4,
					stroke: root.interfaceColors.get("background"),
					strokeWidth: 2,
					fill: am5.color(0x00ff00)
				}
			};
		} else {
			return {
				date: date.getTime(),
				value: value,
			};
		}

	}

	function generateDatas(count) {
	  var data = [];
	  for (var i = 0; i < count; ++i) {
		data.push(generateData());
	  }
	  return data;
	}


	// Create axes
	// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
	var xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
	  maxDeviation: 0,
	  baseInterval: {
		timeUnit: "day",
		count: 1
	  },
	  gridIntervals: [
		{ timeUnit: "day", count: 1 },
		{ timeUnit: "month", count: 1 }
	  ],
	  renderer: am5xy.AxisRendererX.new(root, {
		minGridDistance: 40
	  }),
	  tooltip: am5.Tooltip.new(root, {})
	}));

	var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
	  renderer: am5xy.AxisRendererY.new(root, {})
	}));
	var yRenderer = yAxis.get("renderer");
	var xRenderer = xAxis.get("renderer");

	yRenderer.ticks.template.setAll({
		stroke: am5.color(0x8CA8B2),
		strokeWidth: 1
	});
	xRenderer.grid.template.setAll({
		strokeOpacity: 0
	});


	// Add series
	// https://www.amcharts.com/docs/v5/charts/xy-chart/series/
	var series = chart.series.push(am5xy.LineSeries.new(root, {
	  name: "Series",
	  xAxis: xAxis,
	  yAxis: yAxis,
	  valueYField: "value",
	  valueXField: "date",
	  curveFactory: d3.curveNatural
	}));

	series.fills.template.setAll({
	  visible: true,
	  fillOpacity: 0.2
	});

	series.bullets.push(function () {
		// console.log(data)
		// console.log(new Date(date.getFullYear(), date.getMonth()+1, 0))
	  return am5.Bullet.new(root, {
		locationY: 0,
		sprite: am5.Circle.new(root, {
		  templateField: "bulletSettings"
		//   strokeWidth: 2,
		//   fill: series.get("fill")
		})
	  });
	});

	var tooltip = series.set("tooltip", am5.Tooltip.new(root, {}));
	tooltip.label.set("text", "{valueY}");


	var data = generateDatas(100);
	series.data.setAll(data);



	// console.log(bullet)

	// Make stuff animate on load
	// https://www.amcharts.com/docs/v5/concepts/animations/
	series.appear(1000);
	chart.appear(1000, 100);

	function setCurveFactory(factory){
	  series.set("curveFactory", d3[factory]);
	  setButtonState();
	}

	function setIndex(offset) {
	  var selector = document.getElementById("selector");
	  var index = selector.selectedIndex + offset;
	  if (index < 0) {
		index = 0;
	  }
	  if (index > (selector.options.length - 1)) {
		index = selector.options.length - 1;
	  }
	  selector.selectedIndex = index;
	  setCurveFactory(selector.options[index].value);
	  setButtonState();
	}

	function setButtonState() {
	  var selector = document.getElementById("selector");
	  var index = selector.selectedIndex;
	  if (index == 0) {
		document.getElementById("selector-prev").disabled = "disabled";
		document.getElementById("selector-next").disabled = "";
	  }
	  else if (index >= (selector.options.length - 1)) {
		document.getElementById("selector-prev").disabled = "";
		document.getElementById("selector-next").disabled = "disabled";
	  }
	  else {
		document.getElementById("selector-prev").disabled = "";
		document.getElementById("selector-next").disabled = "";
	  }
	}
})

if($('#number-of-actions__multiple').length)
am5.ready(function() {
	var root = am5.Root.new("number-of-actions__multiple");
	root._logo.dispose();

	root.locale = am5locales_ru_RU;

	root.setThemes([
		am5themes_Animated.new(root)
	  ]);


	// Create chart
	// https://www.amcharts.com/docs/v5/charts/xy-chart/
	var chart = root.container.children.push(am5xy.XYChart.new(root, {
		panX: false,
		panY: false,
	}));

	root.locale = am5locales_ru_RU;

	// Add cursor
	// https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
	var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
	}));
	cursor.lineY.set("visible", false);


	// Generate random data
	var date = new Date();
	date.setHours(0, 0, 0, 0);
	var value = 50;
	var value1 = 100;
	var value2 = 150;

	function generateData() {
		value = Math.round((Math.random() * 10 - 5) + value);
		value1 = Math.round((Math.random() * 10 - 5) + value1);
		value2 = Math.round((Math.random() * 9 - 5) + value2);
		am5.time.add(date, "day", 1);
		var lastMonth = new Date(date.getFullYear(), date.getMonth()+1, 0)


		if (lastMonth.getDate() == date.getDate()) {
			return {
				date: date.getTime(),
				flavors: value,
				emulsifiers: value1,
				stabilizers: value2,
				bulletSettings: {
					radius: 4,
					stroke: root.interfaceColors.get("background"),
					strokeWidth: 2,
					fill: am5.color(0x00ff00)
				}
			};
		} else {
			return {
				date: date.getTime(),
				flavors: value,
				emulsifiers: value1,
				stabilizers: value2,
			};
		}

	}

	function generateDatas(count) {
		var data = [];
		for (var i = 0; i < count; ++i) {
			data.push(generateData());
		}
		return data;
	}
	var data = generateDatas(100);


	// Create axes
	// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
	var xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
	maxDeviation: 0,
	baseInterval: {
		timeUnit: "day",
		count: 1
	},
	gridIntervals: [
		{ timeUnit: "day", count: 1 },
		{ timeUnit: "month", count: 1 }
	],
	renderer: am5xy.AxisRendererX.new(root, {
		minGridDistance: 40
	}),
	tooltip: am5.Tooltip.new(root, {})
	}));

	var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
	renderer: am5xy.AxisRendererY.new(root, {})
	}));
	var yRenderer = yAxis.get("renderer");
	var xRenderer = xAxis.get("renderer");

	yRenderer.ticks.template.setAll({
		stroke: am5.color(0x8CA8B2),
		strokeWidth: 1
	});
	xRenderer.grid.template.setAll({
		strokeOpacity: 0
	});


	// Add series
	// https://www.amcharts.com/docs/v5/charts/xy-chart/series/
	function createSeries(name, field) {
	var series = chart.series.push(am5xy.LineSeries.new(root, {
			name: name,
			xAxis: xAxis,
			yAxis: yAxis,
			valueYField: field,
			valueXField: "date",
			curveFactory: d3.curveNatural
		}));

		series.fills.template.setAll({visible: false,});

		series.bullets.push(function () {
			return am5.Bullet.new(root, {
				locationY: 0,
				sprite: am5.Circle.new(root, {
				templateField: "bulletSettings"
				})
			});
		});

		var tooltip = series.set("tooltip", am5.Tooltip.new(root, {}));
		tooltip.label.set("text", "{valueY}");

		series.data.setAll(data);
		series.appear(1000);
	}



	createSeries("Flavors", "flavors");
	createSeries("Emulsifiers", "emulsifiers");
	createSeries("Stabilizers", "stabilizers");

	  // Make stuff animate on load
	  // https://www.amcharts.com/docs/v5/concepts/animations/

	chart.appear(1000, 100);

	  function setCurveFactory(factory){
		series.set("curveFactory", d3[factory]);
		setButtonState();
	  }

	  function setIndex(offset) {
		var selector = document.getElementById("selector");
		var index = selector.selectedIndex + offset;
		if (index < 0) {
		  index = 0;
		}
		if (index > (selector.options.length - 1)) {
		  index = selector.options.length - 1;
		}
		selector.selectedIndex = index;
		setCurveFactory(selector.options[index].value);
		setButtonState();
	  }

	  function setButtonState() {
		var selector = document.getElementById("selector");
		var index = selector.selectedIndex;
		if (index == 0) {
		  document.getElementById("selector-prev").disabled = "disabled";
		  document.getElementById("selector-next").disabled = "";
		}
		else if (index >= (selector.options.length - 1)) {
		  document.getElementById("selector-prev").disabled = "";
		  document.getElementById("selector-next").disabled = "disabled";
		}
		else {
		  document.getElementById("selector-prev").disabled = "";
		  document.getElementById("selector-next").disabled = "";
		}
	  }

	// // Set themes
	// // https://www.amcharts.com/docs/v5/concepts/themes/
	// root.setThemes([
	// 	am5themes_Animated.new(root)
	// ]);


	// // Create chart
	// // https://www.amcharts.com/docs/v5/charts/xy-chart/
	// var chart = root.container.children.push(am5xy.XYChart.new(root, {
	// 	panX: true,
	// 	panY: true,
	// }));


	// // Add cursor
	// // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
	// var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
	// 	// behavior: "none"
	// }));
	// cursor.lineY.set("visible", false);

	// // Generate random data
	// var date = new Date();
	// date.setHours(0, 0, 0, 0);
	// var value = 100;

	// function generateData() {
	// 	value = Math.round((Math.random() * 10 - 5) + value);
	// 	am5.time.add(date, "day", 1);
	// 	var lastMonth = new Date(date.getFullYear(), date.getMonth()+1, 0)


	// 	if (lastMonth.getDate() == date.getDate()) {
	// 		return {
	// 			date: date.getTime(),
	// 			value: value,
	// 			bulletSettings: {
	// 				radius: 4,
	// 				stroke: root.interfaceColors.get("background"),
	// 				strokeWidth: 2,
	// 				fill: am5.color(0x00ff00)
	// 			}
	// 		};
	// 	} else {
	// 		return {
	// 			date: date.getTime(),
	// 			value: value,
	// 		};
	// 	}

	// }

	// function generateDatas(count) {
	//   var data = [];
	//   for (var i = 0; i < count; ++i) {
	// 	data.push(generateData());
	//   }
	//   return data;
	// }

	// var data = generateDatas(100);

	// // // The data
	// // var data = [{
	// // 	"year": "1994",
	// // 	"cars": 1587,
	// // 	"motorcycles": 650,
	// // 	"bicycles": 121
	// // }, {
	// // 	"year": "1995",
	// // 	"cars": 1567,
	// // 	"motorcycles": 683,
	// // 	"bicycles": 146
	// // }, {
	// // 	"year": "1996",
	// // 	"cars": 1617,
	// // 	"motorcycles": 691,
	// // 	"bicycles": 138
	// // }, {
	// // 	"year": "1997",
	// // 	"cars": 1630,
	// // 	"motorcycles": 642,
	// // 	"bicycles": 127
	// // }, {
	// // 	"year": "1998",
	// // 	"cars": 1660,
	// // 	"motorcycles": 699,
	// // 	"bicycles": 105
	// // }, {
	// // 	"year": "1999",
	// // 	"cars": 1683,
	// // 	"motorcycles": 721,
	// // 	"bicycles": 109
	// // }, {
	// // 	"year": "2000",
	// // 	"cars": 1691,
	// // 	"motorcycles": 737,
	// // 	"bicycles": 112
	// // }, {
	// // 	"year": "2001",
	// // 	"cars": 1298,
	// // 	"motorcycles": 680,
	// // 	"bicycles": 101
	// // }, {
	// // 	"year": "2002",
	// // 	"cars": 1275,
	// // 	"motorcycles": 664,
	// // 	"bicycles": 97
	// // }, {
	// // 	"year": "2003",
	// // 	"cars": 1246,
	// // 	"motorcycles": 648,
	// // 	"bicycles": 93
	// // }, {
	// // 	"year": "2004",
	// // 	"cars": 1318,
	// // 	"motorcycles": 697,
	// // 	"bicycles": 111
	// // }, {
	// // 	"year": "2005",
	// // 	"cars": 1213,
	// // 	"motorcycles": 633,
	// // 	"bicycles": 87
	// // }, {
	// // 	"year": "2006",
	// // 	"cars": 1199,
	// // 	"motorcycles": 621,
	// // 	"bicycles": 79
	// // }, {
	// // 	"year": "2007",
	// // 	"cars": 1110,
	// // 	"motorcycles": 210,
	// // 	"bicycles": 81
	// // }, {
	// // 	"year": "2008",
	// // 	"cars": 1165,
	// // 	"motorcycles": 232,
	// // 	"bicycles": 75
	// // }, {
	// // 	"year": "2009",
	// // 	"cars": 1145,
	// // 	"motorcycles": 219,
	// // 	"bicycles": 88
	// // }, {
	// // 	"year": "2010",
	// // 	"cars": 1163,
	// // 	"motorcycles": 201,
	// // 	"bicycles": 82
	// // }, {
	// // 	"year": "2011",
	// // 	"cars": 1180,
	// // 	"motorcycles": 285,
	// // 	"bicycles": 87
	// // }, {
	// // 	"year": "2012",
	// // 	"cars": 1159,
	// // 	"motorcycles": 277,
	// // 	"bicycles": 71
	// // }];


	// // Create axes
	// // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
	// var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
	// 	maxDeviation: 0,
	// 	baseInterval: {
	// 	  timeUnit: "day",
	// 	  count: 1
	// 	},
	// 	gridIntervals: [
	// 	  { timeUnit: "day", count: 1 },
	// 	  { timeUnit: "month", count: 1 }
	// 	],
	// 	renderer: am5xy.AxisRendererX.new(root, {
	// 	  minGridDistance: 40
	// 	}),
	// 	tooltip: am5.Tooltip.new(root, {})
	// }));

	// xAxis.data.setAll(data);

	// var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
	// 	renderer: am5xy.AxisRendererY.new(root, {})
	// }));

	// // Add series
	// // https://www.amcharts.com/docs/v5/charts/xy-chart/series/

	// // function createSeries(name, field) {
	// 	var series = chart.series.push(am5xy.LineSeries.new(root, {
	// 	name: 'Values',
	// 	xAxis: xAxis,
	// 	yAxis: yAxis,
	// 	stacked:true,
	// 	valueYField: 'value',
	// 	categoryXField: "date",
	// 	curveFactory: d3.curveNatural,
	// 	tooltip: am5.Tooltip.new(root, {
	// 		pointerOrientation: "horizontal",
	// 		labelText: "{valueY}"
	// 		})
	// 	}));

	// 	series.fills.template.setAll({
	// 	fillOpacity: 0.5,
	// 	visible: true
	// 	});

	// 	series.data.setAll(data);
	// 	series.appear(1000);
	// // }

	// // createSeries("Cars", "value");
	// // createSeries("Motorcycles", "motorcycles");
	// // createSeries("Bicycles", "bicycles");


	// // Make stuff animate on load
	// // https://www.amcharts.com/docs/v5/concepts/animations/
	// chart.appear(1000, 100);

})
