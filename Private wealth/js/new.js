$(function() {
	/*layer*/
	$('.Transaction_Detailed .ta_show').each(function(index){
			let Index=index;	
		$(this).hover(function(){
			let top = $(this).offset().top+48;
			let left = $(this).offset().left-105;
			$('.layer').eq(Index).css({'top' : top + 'px','left': left+ 'px'}).stop().show();
		},function(){
			$('.layer').hide()
		})
	});
	 
		/*layer*/
	// 基于准备好的dom，初始化echarts实例
	var myChart = echarts.init(document.getElementById('ech-box2'));
	
	function randomData() {
		now = new Date(+now + oneDay);
		value = value + Math.random() * 21 - 10;
		return {
			name: now.toString(),
			value: [
				[now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
				Math.round(value)
			]
		}
	}

	var data = [];
	var now = +new Date(1997, 9, 3);
	var oneDay = 24 * 3600 * 1000;
	var value = Math.random() * 1000;
	for(var i = 0; i < 1000; i++) {
		data.push(randomData());
	}

	// 指定图表的配置项和数据
	var option = {
		title: {
			left: 'center',
			text: '银河期货高阳管理计划'
		},
		tooltip: {
			trigger: 'axis',
			formatter: function(params) {
				params = params[0];
				var date = new Date(params.name);
				return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
			},
			axisPointer: {
				animation: false
			}
		},
		xAxis: {
			type: 'time',
			splitLine: {
				show: false

			},
			axisTick: {
				length: 5
			},

			axisLabel: {
				show: true,
				textStyle: {
					color: '#909090'
				}
			},

			axisLine: {
				lineStyle: {
					color: '#528cff',
					width: '2'
				}
			}

		},
		yAxis: {
			type: 'value',

			boundaryGap: [0, '100%'],
			splitLine: {
				show: true,
				lineStyle: {
					color: ['#528cff']
				}
			},

			axisLabel: {
				show: true,
				textStyle: {
					color: '#909090'
				}
			},
			axisLine: {
				lineStyle: {
					color: '#528cff',
					width: '2'
				}
			}
		},

		grid: {
			left: '8%',
			right: '0',
			bottom: '1%',
			show:true,
			borderWidth:1,
		
			containLabel: true
		},
		series: [{
			name: '模拟数据',
			type: 'line',

			showSymbol: false,
			hoverAnimation: false,
			data: data,
			itemStyle: {
				normal: {
					lineStyle: {
						color: '#528cff'
					}
				}
			},

		}]
	};

	setInterval(function() {

		for(var i = 0; i < 5; i++) {
			data.shift();
			data.push(randomData());
		}

		myChart.setOption({
			series: [{
				data: data
			}]
		});
	}, 1000);
	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
	var myChart = echarts.init(document.getElementById('ech-box3'));

	function randomData() {
		now = new Date(+now + oneDay);
		value = value + Math.random() * 21 - 10;
		return {
			name: now.toString(),
			value: [
				[now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
				Math.round(value)
			]
		}
	}

	var data = [];
	var now = +new Date(1997, 9, 3);
	var oneDay = 24 * 3600 * 1000;
	var value = Math.random() * 1000;
	for(var i = 0; i < 1000; i++) {
		data.push(randomData());
	}

	// 指定图表的配置项和数据
	var option = {
		title: {
			left: 'center',
			text: '银河期货高阳管理计划'
		},
		tooltip: {
			trigger: 'axis',
			formatter: function(params) {
				params = params[0];
				var date = new Date(params.name);
				return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
			},
			axisPointer: {
				animation: false
			}
		},
		xAxis: {
			type: 'time',
			splitLine: {
				show: false

			},
			axisTick: {
				length: 5
			},

			axisLabel: {
				show: true,
				textStyle: {
					color: '#909090'
				}
			},

			axisLine: {
				lineStyle: {
					color: '#528cff',
					width: '2'
				}
			}

		},
		yAxis: {
			type: 'value',

			boundaryGap: [0, '100%'],
			splitLine: {
				show: true,
				lineStyle: {
					color: ['#528cff']
				}
			},

			axisLabel: {
				show: true,
				textStyle: {
					color: '#909090'
				}
			},
			axisLine: {
				lineStyle: {
					color: '#528cff',
					width: '2'
				}
			}
		},

		grid: {
			left: '8%',
			right: '0',
			bottom: '1%',
			show:true,
			borderWidth:1,
		
			containLabel: true
		},
		series: [{
			name: '模拟数据',
			type: 'line',

			showSymbol: false,
			hoverAnimation: false,
			data: data,
			itemStyle: {
				normal: {
					lineStyle: {
						color: '#528cff'
					}
				}
			},

		}]
	};

	setInterval(function() {

		for(var i = 0; i < 5; i++) {
			data.shift();
			data.push(randomData());
		}

		myChart.setOption({
			series: [{
				data: data
			}]
		});
	}, 1000);
	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
	var myChart = echarts.init(document.getElementById('ech-box4'));

	function randomData() {
		now = new Date(+now + oneDay);
		value = value + Math.random() * 21 - 10;
		return {
			name: now.toString(),
			value: [
				[now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
				Math.round(value)
			]
		}
	}

	var data = [];
	var now = +new Date(1997, 9, 3);
	var oneDay = 24 * 3600 * 1000;
	var value = Math.random() * 1000;
	for(var i = 0; i < 1000; i++) {
		data.push(randomData());
	}

	// 指定图表的配置项和数据
	var option = {
		title: {
			left: 'center',
			text: '银河期货高阳管理计划'
		},
		tooltip: {
			trigger: 'axis',
			formatter: function(params) {
				params = params[0];
				var date = new Date(params.name);
				return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
			},
			axisPointer: {
				animation: false
			}
		},
		xAxis: {
			type: 'time',
			splitLine: {
				show: false

			},
			axisTick: {
				length: 5
			},

			axisLabel: {
				show: true,
				textStyle: {
					color: '#909090'
				}
			},

			axisLine: {
				lineStyle: {
					color: '#528cff',
					width: '2'
				}
			}

		},
		yAxis: {
			type: 'value',

			boundaryGap: [0, '100%'],
			splitLine: {
				show: true,
				lineStyle: {
					color: ['#528cff']
				}
			},

			axisLabel: {
				show: true,
				textStyle: {
					color: '#909090'
				}
			},
			axisLine: {
				lineStyle: {
					color: '#528cff',
					width: '2'
				}
			}
		},

		grid: {
			left: '8%',
			right: '0',
			bottom: '1%',
			show:true,
			borderWidth:1,
		
			containLabel: true
		},
		series: [{
			name: '模拟数据',
			type: 'line',

			showSymbol: false,
			hoverAnimation: false,
			data: data,
			itemStyle: {
				normal: {
					lineStyle: {
						color: '#528cff'
					}
				}
			},

		}]
	};

	setInterval(function() {

		for(var i = 0; i < 5; i++) {
			data.shift();
			data.push(randomData());
		}

		myChart.setOption({
			series: [{
				data: data
			}]
		});
	}, 1000);
	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
	var myChart = echarts.init(document.getElementById('ech-box5'));

	function randomData() {
		now = new Date(+now + oneDay);
		value = value + Math.random() * 21 - 10;
		return {
			name: now.toString(),
			value: [
				[now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
				Math.round(value)
			]
		}
	}

	var data = [];
	var now = +new Date(1997, 9, 3);
	var oneDay = 24 * 3600 * 1000;
	var value = Math.random() * 1000;
	for(var i = 0; i < 1000; i++) {
		data.push(randomData());
	}

	// 指定图表的配置项和数据
	var option = {
		title: {
			left: 'center',
			text: '银河期货高阳管理计划'
		},
		tooltip: {
			trigger: 'axis',
			formatter: function(params) {
				params = params[0];
				var date = new Date(params.name);
				return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
			},
			axisPointer: {
				animation: false
			}
		},
		xAxis: {
			type: 'time',
			splitLine: {
				show: false

			},
			axisTick: {
				length: 5
			},

			axisLabel: {
				show: true,
				textStyle: {
					color: '#909090'
				}
			},

			axisLine: {
				lineStyle: {
					color: '#528cff',
					width: '2'
				}
			}

		},
		yAxis: {
			type: 'value',

			boundaryGap: [0, '100%'],
			splitLine: {
				show: true,
				lineStyle: {
					color: ['#528cff']
				}
			},

			axisLabel: {
				show: true,
				textStyle: {
					color: '#909090'
				}
			},
			axisLine: {
				lineStyle: {
					color: '#528cff',
					width: '2'
				}
			}
		},

		grid: {
			left: '8%',
			right: '0',
			bottom: '1%',
			show:true,
			borderWidth:1,
		
			containLabel: true
		},
		series: [{
			name: '模拟数据',
			type: 'line',

			showSymbol: false,
			hoverAnimation: false,
			data: data,
			itemStyle: {
				normal: {
					lineStyle: {
						color: '#528cff'
					}
				}
			},

		}]
	};

	setInterval(function() {

		for(var i = 0; i < 5; i++) {
			data.shift();
			data.push(randomData());
		}

		myChart.setOption({
			series: [{
				data: data
			}]
		});
	}, 1000);
	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
	var myChart = echarts.init(document.getElementById('ech-box6'));

	function randomData() {
		now = new Date(+now + oneDay);
		value = value + Math.random() * 21 - 10;
		return {
			name: now.toString(),
			value: [
				[now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
				Math.round(value)
			]
		}
	}

	var data = [];
	var now = +new Date(1997, 9, 3);
	var oneDay = 24 * 3600 * 1000;
	var value = Math.random() * 1000;
	for(var i = 0; i < 1000; i++) {
		data.push(randomData());
	}

	// 指定图表的配置项和数据
	var option = {
		title: {
			left: 'center',
			text: '银河期货高阳管理计划'
		},
		tooltip: {
			trigger: 'axis',
			formatter: function(params) {
				params = params[0];
				var date = new Date(params.name);
				return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
			},
			axisPointer: {
				animation: false
			}
		},
		xAxis: {
			type: 'time',
			splitLine: {
				show: false

			},
			axisTick: {
				length: 5
			},

			axisLabel: {
				show: true,
				textStyle: {
					color: '#909090'
				}
			},

			axisLine: {
				lineStyle: {
					color: '#528cff',
					width: '2'
				}
			}

		},
		yAxis: {
			type: 'value',

			boundaryGap: [0, '100%'],
			splitLine: {
				show: true,
				lineStyle: {
					color: ['#528cff']
				}
			},

			axisLabel: {
				show: true,
				textStyle: {
					color: '#909090'
				}
			},
			axisLine: {
				lineStyle: {
					color: '#528cff',
					width: '2'
				}
			}
		},

		grid: {
			left: '8%',
			right: '0',
			bottom: '1%',
			show:true,
			borderWidth:1,
		
			containLabel: true
		},
		series: [{
			name: '模拟数据',
			type: 'line',

			showSymbol: false,
			hoverAnimation: false,
			data: data,
			itemStyle: {
				normal: {
					lineStyle: {
						color: '#528cff'
					}
				}
			},

		}]
	};

	setInterval(function() {

		for(var i = 0; i < 5; i++) {
			data.shift();
			data.push(randomData());
		}

		myChart.setOption({
			series: [{
				data: data
			}]
		});
	}, 1000);
	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
	var myChart = echarts.init(document.getElementById('ech-box7'));

	function randomData() {
		now = new Date(+now + oneDay);
		value = value + Math.random() * 21 - 10;
		return {
			name: now.toString(),
			value: [
				[now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
				Math.round(value)
			]
		}
	}

	var data = [];
	var now = +new Date(1997, 9, 3);
	var oneDay = 24 * 3600 * 1000;
	var value = Math.random() * 1000;
	for(var i = 0; i < 1000; i++) {
		data.push(randomData());
	}

	// 指定图表的配置项和数据
	var option = {
		title: {
			left: 'center',
			text: '银河期货高阳管理计划'
		},
		tooltip: {
			trigger: 'axis',
			formatter: function(params) {
				params = params[0];
				var date = new Date(params.name);
				return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
			},
			axisPointer: {
				animation: false
			}
		},
		xAxis: {
			type: 'time',
			splitLine: {
				show: false

			},
			axisTick: {
				length: 5
			},

			axisLabel: {
				show: true,
				textStyle: {
					color: '#909090'
				}
			},

			axisLine: {
				lineStyle: {
					color: '#528cff',
					width: '2'
				}
			}

		},
		yAxis: {
			type: 'value',

			boundaryGap: [0, '100%'],
			splitLine: {
				show: true,
				lineStyle: {
					color: ['#528cff']
				}
			},

			axisLabel: {
				show: true,
				textStyle: {
					color: '#909090'
				}
			},
			axisLine: {
				lineStyle: {
					color: '#528cff',
					width: '2'
				}
			}
		},

		grid: {
			left: '8%',
			right: '0',
			bottom: '1%',
			show:true,
			borderWidth:1,
		
			containLabel: true
		},
		series: [{
			name: '模拟数据',
			type: 'line',

			showSymbol: false,
			hoverAnimation: false,
			data: data,
			itemStyle: {
				normal: {
					lineStyle: {
						color: '#528cff'
					}
				}
			},

		}]
	};

	setInterval(function() {

		for(var i = 0; i < 5; i++) {
			data.shift();
			data.push(randomData());
		}

		myChart.setOption({
			series: [{
				data: data
			}]
		});
	}, 1000);
	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
	

})