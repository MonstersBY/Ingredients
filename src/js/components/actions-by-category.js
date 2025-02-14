
if($('#actions-by-category__funnel-chart').length)
am5.ready(function() {

	// Create root element
	// https://www.amcharts.com/docs/v5/getting-started/#Root_element
	var root = am5.Root.new("actions-by-category__funnel-chart");
	root._logo.dispose();


	// Set themes
	// https://www.amcharts.com/docs/v5/concepts/themes/
	root.setThemes([
	  am5themes_Animated.new(root)
	]);


	// Create chart
	// https://www.amcharts.com/docs/v5/charts/percent-charts/sliced-chart/
	var chart = root.container.children.push(am5percent.SlicedChart.new(root, {
	  layout: root.verticalLayout
	}));


	// Create series
	// https://www.amcharts.com/docs/v5/charts/percent-charts/sliced-chart/#Series
	var series = chart.series.push(am5percent.FunnelSeries.new(root, {
		alignLabels: false,
		orientation: "vertical",
		valueField: "value",
		categoryField: "category",
	}));

	// series.slices.template.setAll({
	// 	cornerRadius: 1000,
	// 	fillOpacity: 0.5,
	// 	strokeWidth: 0,
	// });

	series.links.template.setAll({
		height: 12,
		fillOpacity: 0,
	});

	if (window.outerWidth <= 768) {
		series.labels.template.setAll({
			fontSize: '12rem',
			fill: am5.color(0xFFFFFF),
			textAlign: "center",
			text: "[fontFamily: Gilroy]{category} \n{value}"
		});
	}else {
		series.labels.template.setAll({
			fontSize: '16rem',
			fill: am5.color(0xFFFFFF),
			textAlign: "center",
			text: "[fontFamily: Gilroy]{category} \n{value}"
		});
	}

	series.get("colors").set("colors", [
		am5.color(0x9CEC8A),
		am5.color(0x4DE3B6),
		am5.color(0x1BBABA),
		am5.color(0x72BBFF),
		am5.color(0x4C70F1),
		am5.color(0x745BD7)
	]);


	// Set data
	// https://www.amcharts.com/docs/v5/charts/percent-charts/sliced-chart/#Setting_data
	series.data.setAll([
	  { value: 1000, category: "Посещение магазина" },
	  { value: 800, category: "Просмотр карточек" },
	  { value: 600, category: "Запрос документа" },
	  { value: 500, category: "Запрос цены" },
	  { value: 400, category: "Запрос образца" },
	  { value: 300, category: "Покупка" },
	]);


	// Play initial series animation
	// https://www.amcharts.com/docs/v5/concepts/animations/#Animation_of_series
	series.appear();

	// Make stuff animate on load
	// https://www.amcharts.com/docs/v5/concepts/animations/
	chart.appear(1000, 100);

});

if($('#actions-by-category__donut-chart').length)
am5.ready(function() {

	// Create root element
	// https://www.amcharts.com/docs/v5/getting-started/#Root_element
	var root = am5.Root.new("actions-by-category__donut-chart");
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

