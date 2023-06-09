
if($('#number-of-actions__graph').length)
am5.ready(function() {
	var root = am5.Root.new("number-of-actions__graph");
	root._logo.dispose();

	const color = [0x4669C2, 0x3CB7E3, 0xE33046]
	const colorString = ['#4669C2', '#3CB7E3', '#E33046']

	const $changeCssColor = $('#number-of-actions__graph').closest('.statistics-box').find('.number-of-actions__month-color')

	$changeCssColor.each(function(i) {
		$(this).css('background', `${colorString[i%3]}`)
	})

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

	var colorId = 0

	function generateData() {
		value = Math.round((Math.random() * 10 - 5) + value);
		am5.time.add(date, "day", 1);
		var lastMonth = new Date(date.getFullYear(), date.getMonth()+1, 0)


		if (lastMonth.getDate() == date.getDate()) {
			colorId++
			return {
				date: date.getTime(),
				value: value,
				bulletSettings: {
					radius: 4,
					stroke: root.interfaceColors.get("background"),
					strokeWidth: 2,
					fill: am5.color(color[colorId-1])
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

	const color = [0x4669C2, 0x3CB7E3, 0xE33046]
	const colorString = ['#4669C2', '#3CB7E3', '#E33046']

	const $changeCssColor = $('#number-of-actions__multiple').closest('.statistics-box').find('.number-of-actions__month-color')

	$changeCssColor.each(function(i) {
		$(this).css('background', `${colorString[i%3]}`)
	})

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
				bulletSettings1: {
					radius: 4,
					stroke: root.interfaceColors.get("background"),
					strokeWidth: 2,
					fill: am5.color(color[0]),
				},
				bulletSettings2: {
					radius: 4,
					stroke: root.interfaceColors.get("background"),
					strokeWidth: 2,
					fill: am5.color(color[1]),
				},
				bulletSettings3: {
					radius: 4,
					stroke: root.interfaceColors.get("background"),
					strokeWidth: 2,
					fill: am5.color(color[2]),
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
	function createSeries(name, field, color, bulletSet) {
		var series = chart.series.push(am5xy.LineSeries.new(root, {
			name: name,
			xAxis: xAxis,
			yAxis: yAxis,
			valueYField: field,
			valueXField: "date",
			stroke: am5.color(color),
			curveFactory: d3.curveNatural
		}));

		series.fills.template.setAll({visible: false,});

		series.bullets.push(function () {
			return am5.Bullet.new(root, {
				locationY: 0,
				sprite: am5.Circle.new(root, {
					templateField: bulletSet
				})
			});
		});

		var tooltip = series.set("tooltip", am5.Tooltip.new(root, {}));
		tooltip.label.set("text", "{valueY}");

		series.data.setAll(data);
		series.appear(1000);
	}



	createSeries("Flavors", "flavors", color[0], 'bulletSettings1');
	createSeries("Emulsifiers", "emulsifiers", color[1], 'bulletSettings2');
	createSeries("Stabilizers", "stabilizers", color[2], 'bulletSettings3');

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

})
