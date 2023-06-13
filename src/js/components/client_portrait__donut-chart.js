
if($('#client_portrait__donut-chart-one').length)
am5.ready(function() {

	// Create root element
	// https://www.amcharts.com/docs/v5/getting-started/#Root_element
	var root = am5.Root.new("client_portrait__donut-chart-one");
	root._logo.dispose();

	// Set themes
	// https://www.amcharts.com/docs/v5/concepts/themes/
	root.setThemes([
		am5themes_Animated.new(root)
	]);

	// Create chart
	// https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
	if (window.outerWidth <= 768) {
		var chart = root.container.children.push(am5percent.PieChart.new(root, {
			radius: am5.percent(90),
			innerRadius: am5.percent(40),
			layout: root.verticalLayout,
		}));
	} else {
		var chart = root.container.children.push(am5percent.PieChart.new(root, {
			radius: am5.percent(90),
			innerRadius: am5.percent(40),
			layout: root.horizontalLayout,
		}));
	}


	// Create series
	// https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
	var series = chart.series.push(am5percent.PieSeries.new(root, {
		name: "Series",
		valueField: "value",
		categoryField: "category",
		alignLabels: false,
		legendValueText: "{valuePercentTotal.formatNumber('0')}%[/]",
	}));

	// Set data
	// https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
	series.data.setAll([
		{ value: 10, category: "Скачивание документов" },
		{ value: 9, category: "Заказы" },
		{ value: 6, category: "Запрос образца" },
		{ value: 5, category: "Запрос цены" },
		{ value: 4, category: "Запрос документа" },
		{ value: 3, category: "Просмотры карточек" },
		{ value: 3, category: "Контакт в чате" },
	]);

	// Disabling ticks
	// series.labels.template.set("visible", false);
	series.labels.template.setAll({
		fill: am5.color(0xffffff),
		text: "{valuePercentTotal.formatNumber('0')}%[/]",
		textType: "circular",
		radius: 10,
		inside: true,
	});
	series.ticks.template.set("visible", false);

	// Create legend
	// https://www.amcharts.com/docs/v5/charts/percent-charts/legend-percent-series/

	if (window.outerWidth <= 768) {
		var legend = chart.children.push(am5.Legend.new(root, {}));
	} else {
		var legend = chart.children.push(am5.Legend.new(root, {
			centerY: am5.percent(50),
			y: am5.percent(50),
			layout: root.verticalLayout,
		}));
	}

	legend.markerRectangles.template.setAll({
		cornerRadiusTL: 10,
		cornerRadiusTR: 10,
		cornerRadiusBL: 10,
		cornerRadiusBR: 10,
		centerY: am5.percent(-25),
		maxWidth: 10,
		maxHeight: 10,
	});
	// set value labels align to right
	legend.valueLabels.template.setAll({ textAlign: "right" })
	// set width and max width of labels
	legend.labels.template.setAll({
		maxWidth: 200,
		width: 200,
		oversizedBehavior: "wrap"
	});

	legend.data.setAll(series.dataItems);


	// Play initial series animation
	// https://www.amcharts.com/docs/v5/concepts/animations/#Animation_of_series
	series.appear(1000, 100);

});

if($('#client_portrait__donut-chart-two').length)
am5.ready(function() {

	// Create root element
	// https://www.amcharts.com/docs/v5/getting-started/#Root_element
	var root = am5.Root.new("client_portrait__donut-chart-two");
	root._logo.dispose();

	// Set themes
	// https://www.amcharts.com/docs/v5/concepts/themes/
	root.setThemes([
		am5themes_Animated.new(root)
	]);

	// Create chart
	// https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
	if (window.outerWidth <= 768) {
		var chart = root.container.children.push(am5percent.PieChart.new(root, {
			radius: am5.percent(90),
			innerRadius: am5.percent(40),
			layout: root.verticalLayout,
		}));
	} else {
		var chart = root.container.children.push(am5percent.PieChart.new(root, {
			radius: am5.percent(90),
			innerRadius: am5.percent(40),
			layout: root.horizontalLayout,
		}));
	}


	// Create series
	// https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
	var series = chart.series.push(am5percent.PieSeries.new(root, {
		name: "Series",
		valueField: "value",
		categoryField: "category",
		alignLabels: false,
		legendValueText: "{valuePercentTotal.formatNumber('0')}%[/]",
	}));

	// Set data
	// https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
	series.data.setAll([
		{ value: 10, category: "Скачивание документов" },
		{ value: 9, category: "Заказы" },
		{ value: 6, category: "Запрос образца" },
		{ value: 5, category: "Запрос цены" },
		{ value: 4, category: "Запрос документа" },
		{ value: 3, category: "Просмотры карточек" },
		{ value: 3, category: "Контакт в чате" },
	]);

	// Disabling ticks
	// series.labels.template.set("visible", false);
	series.labels.template.setAll({
		fill: am5.color(0xffffff),
		text: "{valuePercentTotal.formatNumber('0')}%[/]",
		textType: "circular",
		radius: 10,
		inside: true,
	});
	series.ticks.template.set("visible", false);

	// Create legend
	// https://www.amcharts.com/docs/v5/charts/percent-charts/legend-percent-series/

	if (window.outerWidth <= 768) {
		var legend = chart.children.push(am5.Legend.new(root, {}));
	} else {
		var legend = chart.children.push(am5.Legend.new(root, {
			centerY: am5.percent(50),
			y: am5.percent(50),
			layout: root.verticalLayout,
		}));
	}

	legend.markerRectangles.template.setAll({
		cornerRadiusTL: 10,
		cornerRadiusTR: 10,
		cornerRadiusBL: 10,
		cornerRadiusBR: 10,
		centerY: am5.percent(-25),
		maxWidth: 10,
		maxHeight: 10,
	});
	// set value labels align to right
	legend.valueLabels.template.setAll({ textAlign: "right" })
	// set width and max width of labels
	legend.labels.template.setAll({
		maxWidth: 200,
		width: 200,
		oversizedBehavior: "wrap"
	});

	legend.data.setAll(series.dataItems);


	// Play initial series animation
	// https://www.amcharts.com/docs/v5/concepts/animations/#Animation_of_series
	series.appear(1000, 100);

});
