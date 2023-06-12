
if($('#client_portrait__column-one').length)
am5.ready(function() {

	// Create root element
	// https://www.amcharts.com/docs/v5/getting-started/#Root_element
	var root = am5.Root.new("client_portrait__column-one");
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
		wheelX: "none",
		wheelY: "none",
		layout: root.verticalLayout
	}));

	// We don't want zoom-out button to appear while animating, so we hide it
	chart.zoomOutButton.set("forceHidden", true);


	// Create axes
	// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
	var yRenderer = am5xy.AxisRendererY.new(root, {
	});

	// yRenderer.grid.template.set("location", 1);
	yRenderer.grid.template.set("forceHidden", true);
	yRenderer.labels.template.set("forceHidden", true);

	var yAxis = chart.yAxes.push(am5xy.CategoryAxis.new(root, {
		maxDeviation: 0,
		categoryField: "product",
		renderer: yRenderer,
		tooltip: am5.Tooltip.new(root, { themeTags: ["axis"] })
	}));

	var xAxis = chart.xAxes.push(am5xy.ValueAxis.new(root, {
		maxDeviation: 0,
		min: 0,
		extraMax: 0.1,
		renderer: am5xy.AxisRendererX.new(root, {
			strokeOpacity: 0.1
		})
	}));


	// Add series
	// https://www.amcharts.com/docs/v5/charts/xy-chart/series/
	var series = chart.series.push(am5xy.ColumnSeries.new(root, {
		name: "Series 1",
		xAxis: xAxis,
		yAxis: yAxis,
		valueXField: "value",
		categoryYField: "product",
		tooltip: am5.Tooltip.new(root, {
			pointerOrientation: "left",
			labelText: "{valueX}"
		})
	}));



	// Rounded corners for columns
	series.columns.template.setAll({
		cornerRadiusTR: 5,
		cornerRadiusBR: 5,
		strokeOpacity: 0
	});

	// Make each column to be of a different color
	series.columns.template.adapters.add("fill", function(fill, target) {
		return chart.get("colors").getIndex(series.columns.indexOf(target));
	});

	series.columns.template.adapters.add("stroke", function(stroke, target) {
		return chart.get("colors").getIndex(series.columns.indexOf(target));
	});

	// series.columns.template.adapters.add("fillGradient", am5.LinearGradient.new(root, {
	// 	stops: [{
	// 	  color: am5.color(0xffffff)
	// 	}, {
	// 	  color: am5.color(0x946b49)
	// 	}],
	// 	rotation: 0
	// }));


  // Set data
  var data = [{
	product: "Бады",
	value: 2025
  }, {
	product: "Снижение сахара",
	value: 1882
  }, {
	product: "Снеки",
	value: 1809
  }, {
	product: "Корма для животных",
	value: 1322
  }, {
	product: "Газированные напитки",
	value: 1122
  }, {
	product: "Энергетические напитки",
	value: 1114
  }, {
	product: "Безалкогольные напитки",
	value: 984
  }];

  series.bullets.push(function () {
	return am5.Bullet.new(root, {
	  locationX: 1,
	  sprite: am5.Label.new(root, {
		text: "{product}",
		fill: root.interfaceColors.get("alternativeText"),
		centerX: am5.p100,
		centerY: am5.p50,
		populateText: true
	  })
	});
  });

  yAxis.data.setAll(data);
  series.data.setAll(data);


  // Make stuff animate on load
  // https://www.amcharts.com/docs/v5/concepts/animations/
  series.appear(1000);
  chart.appear(1000, 100);

});

if($('#client_portrait__column-two').length)
am5.ready(function() {

	// Create root element
	// https://www.amcharts.com/docs/v5/getting-started/#Root_element
	var root = am5.Root.new("client_portrait__column-two");
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
		wheelX: "none",
		wheelY: "none",
		layout: root.verticalLayout
	}));

	// We don't want zoom-out button to appear while animating, so we hide it
	chart.zoomOutButton.set("forceHidden", true);


	// Create axes
	// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
	var yRenderer = am5xy.AxisRendererY.new(root, {
	});

	// yRenderer.grid.template.set("location", 1);
	yRenderer.grid.template.set("forceHidden", true);
	yRenderer.labels.template.set("forceHidden", true);

	var yAxis = chart.yAxes.push(am5xy.CategoryAxis.new(root, {
		maxDeviation: 0,
		categoryField: "product",
		renderer: yRenderer,
		tooltip: am5.Tooltip.new(root, { themeTags: ["axis"] })
	}));

	var xAxis = chart.xAxes.push(am5xy.ValueAxis.new(root, {
		maxDeviation: 0,
		min: 0,
		extraMax: 0.1,
		renderer: am5xy.AxisRendererX.new(root, {
		strokeOpacity: 0.1
		})
	}));


	// Add series
	// https://www.amcharts.com/docs/v5/charts/xy-chart/series/
	var series = chart.series.push(am5xy.ColumnSeries.new(root, {
		name: "Series 1",
		xAxis: xAxis,
		yAxis: yAxis,
		valueXField: "value",
		categoryYField: "product",
		tooltip: am5.Tooltip.new(root, {
		pointerOrientation: "left",
		labelText: "{valueX}"
		})
	}));


	// Rounded corners for columns
	series.columns.template.setAll({
		cornerRadiusTR: 5,
		cornerRadiusBR: 5,
		strokeOpacity: 0
	});

	// Make each column to be of a different color
	series.columns.template.adapters.add("fill", function(fill, target) {
		return chart.get("colors").getIndex(series.columns.indexOf(target));
	});

	series.columns.template.adapters.add("stroke", function(stroke, target) {
		return chart.get("colors").getIndex(series.columns.indexOf(target));
	});


  // Set data
  var data = [{
	product: "Бады",
	value: 2025
  }, {
	product: "Снижение сахара",
	value: 1882
  }, {
	product: "Снеки",
	value: 1809
  }, {
	product: "Корма для животных",
	value: 1322
  }, {
	product: "Газированные напитки",
	value: 1122
  }, {
	product: "Энергетические напитки",
	value: 1114
  }, {
	product: "Безалкогольные напитки",
	value: 984
  }];

  series.bullets.push(function () {
	return am5.Bullet.new(root, {
	  locationX: 1,
	  sprite: am5.Label.new(root, {
		text: "{product}",
		fill: root.interfaceColors.get("alternativeText"),
		centerX: am5.p100,
		centerY: am5.p50,
		populateText: true
	  })
	});
  });

  yAxis.data.setAll(data);
  series.data.setAll(data);


  // Make stuff animate on load
  // https://www.amcharts.com/docs/v5/concepts/animations/
  series.appear(1000);
  chart.appear(1000, 100);

});
