//饼状图查违数据（动态）
var pieChartDynamicStreetData = [
    { name: "龙岗街道", value: 175 },
    { name: "龙城街道", value: 80 },
    { name: "坂田街道", value: 91 },
    { name: "宝龙街道", value: 105 },
    { name: "布吉街道", value: 105 },
    { name: "横岗街道", value: 37 },
    { name: "吉华街道", value: 113 },
    { name: "南湾街道", value: 364 },
    { name: "平湖街道", value: 96 },
    { name: "坪地街道", value: 108 },
    { name: "园山街道", value: 101 }
];

//饼状图查违数据（静态）
var pieChartStaticStreetData = [
    { name: "龙岗街道", yiheshi: 175, weibianhua: 1657 },
    { name: "龙城街道", yiheshi: 80, weibianhua: 379 },
    { name: "坂田街道", yiheshi: 91, weibianhua: 676 },
    { name: "宝龙街道", yiheshi: 105, weibianhua: 885 },
    { name: "布吉街道", yiheshi: 105, weibianhua: 692 },
    { name: "横岗街道", yiheshi: 37, weibianhua: 373 },
    { name: "吉华街道", yiheshi: 113, weibianhua: 621 },
    { name: "南湾街道", yiheshi: 364, weibianhua: 2937 },
    { name: "平湖街道", yiheshi: 96, weibianhua: 486 },
    { name: "坪地街道", yiheshi: 108, weibianhua: 599 },
    { name: "园山街道", yiheshi: 101, weibianhua: 820 }
];

//柱状图各社区数据
var barChartCommunityData = [
    { name: ["五联社区", "龙西社区", "新生社区", "龙岗社区", "南联社区", "平南社区", "龙岗墟社区"], value: [22, 32, 26, 24, 60, 7, 4] },
    { name: ["新联社区", "爱联社区", "中心城社区", "盛平社区", "黄阁坑社区", "回龙埔社区"], value: [32, 14, 8, 2, 19, 5] },
    { name: ["岗头社区", "象角塘社区", "新雪社区", "万科城", "大发埔社区", "坂田社区", "杨美社区", "四季花城", "五和社区", "马安堂社区", "第五园社区", "南坑社区"], value: [14, 5, 1, 11, 10, 10, 19, 3, 7, 5, 1, 5] },
    { name: ["龙新社区", "龙东社区", "同乐社区", "宝龙社区", "南约社区"], value: [8, 31, 32, 17, 17] },
    { name: ["南三社区", "长龙社区", "布吉圩社区", "布吉社区", "龙岭社区", "凤凰社区", "德兴社区", "东方半岛社区", "茂业社区", "大芬社区", "文景社区", "可园社区", "木棉湾社区", "龙珠社区", "金排社区", "国展社区", "罗岗社区"], value: [4, 1, 31, 7, 1, 6, 3, 6, 1, 1, 25, 1, 4, 2, 6, 1, 5] },
    { name: ["四联社区", "华乐社区", "六约社区", "横岗社区", "松柏社区", "华侨新村社区"], value: [11, 7, 14, 2, 1, 2] },
    { name: ["三联社区", "甘坑社区", "中海怡翠社区", "丽湖社区", "翠湖社区", "水径社区", "光华社区"], value: [21, 29, 3, 2, 31, 22, 5] },
    { name: ["上李朗社区", "康乐社区", "宝岭社区", "下李朗社区", "丹竹头社区", "丹平社区", "南岭社区", "南龙社区", "樟树布社区", "沙湾社区", "厦村社区", "吉厦社区", "沙塘布小区", "南新社区"], value: [27, 33, 6, 88, 68, 19, 44, 2, 2, 31, 5, 21, 16, 2] },
    { name: ["力昌社区", "山厦社区", "凤凰社区", "平湖社区", "新南社区", "禾花社区", "新木社区", "辅城坳社区", "上古木社区", "白泥坑社区", "良安田社区", "鹅公岭总站"], value: [17, 8, 17, 13, 6, 6, 4, 7, 4, 6, 4, 4] },
    { name: ["西坑社区", "坪西社区", "中心社区", "四方埔社区", "坪东社区", "六联社区", "年丰社区"], value: [11, 41, 14, 4, 18, 23, 8] },
    { name: ["保安社区", "荷坳社区", "银荷社区", "大康社区", "安良社区"], value: [14, 4, 3, 55, 14] }
];

//柱状图街道查违数据（静态）
var barChartStaticStreetData = [
    { name: ["10月", "11月", "12月", "01月", "02月", "03月"], value: [183, 162, 212, 172, 371, 475] }
];

//柱状图违建同比增长统计数据
var barChartYoYGrowthData = { name: ["01月", "02月", "03月", "04月", "05月", "06月", "07月", "08月", "09月", "10月", "11月", "12月"], data1: [-9, 98, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0], data2: [-4.97, 56.65, 44.89, 0, 0, 0, 0, 0, 0, 0, 0, 0] };

//初始化及时率图表
function initCircliful() {
    $('#myStat2').html('');
    $('#myStat1').circliful();
    setTimeout(function () {
        $('#myStat1').html('');
        $('#myStat2').circliful();
    }, 8000);
    setTimeout(initCircliful, 20000);
}

//初始化饼状图表（静态）
function initPieChartStatic() {
    var myChart = echarts.init($("#pieChartStatic").get(0));
    var option = {
        title: {
            text: '',
            subtext: '',
            x: 'right',
            textStyle: {
                color: '#93ccf5'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [
            {
                name: '',
                type: 'pie',
                radius: '50%',
                center: ['50%', '50%'],
                data: [
                    { value: 1425, name: '已查实' },
                    { value: 10295, name: '伪变化' }
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },
                    normal: {
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                }
            }
        ]
        ,
        color: ['#fa4f31', '#ffa72b']
    };
    myChart.setOption(option, true);
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: 0
    });
}

//初始化饼状图表（动态）
function initPieChartDynamic() {
    var myChart = echarts.init($("#pieChartDynamic").get(0));
    myChart.on('click', function (params) {
        clearInterval(app.timerId);
        app.timerId = 0;
        app.currentIndex = params.dataIndex - 1;
        pieChartChangeData(myChart);
    });
    myChart.on('mouseout', function (params) {
        if (app.timerId == 0) {
            pieChartDynamic(myChart);
        }
    });
    var option = {
        title: {
            text: '',
            subtext: '',
            x: 'center',
            textStyle: {
                color: '#93ccf5'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [
            {
                name: '',
                type: 'pie',
                radius: '70%',
                center: ['50%', '47%'],
                data: pieChartDynamicStreetData,
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },
                    normal: {
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                }
            }
        ]
        ,
        color: ['#fa4f31', '#ffa72b', '#5bb834', '#06f0a9', '#5a9c38', '#0195c5', '#35a7ff', '#866eff', '#9d3124', '#c98b24', '#fe7d15']
    };
    myChart.setOption(option, true);
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: 0
    });
    initPieChartStaticStreet(pieChartStaticStreetData[0]);
    initBarChartCommunity(barChartCommunityData[0]);
    pieChartDynamic(myChart);
}

var app = {};
app.currentIndex = 0;
app.preIndex = 0;
app.timerId = 0;
function pieChartDynamic(myChart) {
    app.timerId = setInterval(function () { pieChartChangeData(myChart); }, 5000);
}

function pieChartChangeData(myChart) {
    var dataLen = 11;
    pieChartChangeDataDownPlay(myChart);
    app.currentIndex = (app.currentIndex + 1) % dataLen;
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: app.currentIndex
    });
    initPieChartStaticStreet(pieChartStaticStreetData[app.currentIndex]);
    initBarChartCommunity(barChartCommunityData[app.currentIndex]);
    myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: app.currentIndex
    });
    app.preIndex = app.currentIndex;
}

function pieChartChangeDataDownPlay(myChart) {
    myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: app.preIndex
    });
}

//初始化各街道饼状图表（静态）
function initPieChartStaticStreet(jsonData) {
    $("#streetName").text(jsonData.name + "违建统计");
    var myChart = echarts.init($("#pieChartStaticStreet").get(0));
    var option = {
        title: {
            text: '',
            subtext: '',
            x: 'center',
            textStyle: {
                color: '#93ccf5'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [
            {
                name: '',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: [
                    { value: jsonData.yiheshi, name: '已核实' },
                    { value: jsonData.weibianhua, name: '伪变化' }
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },
                    normal: {
                        label: {
                            show: true
                        },
                        labelLine: {
                            show: false
                        }
                    }
                }
            }
        ]
        ,
        color: ['#fa4f31', '#ffa72b']
    };
    myChart.setOption(option, true);
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: 0
    });
}

//初始化各社区柱状图表
function initBarChartCommunity(jsonData) {
    var myChart = echarts.init($("#barChartCommunity").get(0));
    var option = {
        color: ['#fa4f31'],
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: jsonData.name,
                axisTick: {
                    alignWithLabel: true
                },
                axisLine: {
                    lineStyle: {
                        color: '#499fd0'
                    }
                },
                axisLabel: {
                    interval: 0,
                    rotate: 40
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: '#499fd0'
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#499fd0'
                    }
                }
            }
        ],
        series: [
            {
                name: '已核实数据',
                type: 'bar',
                barWidth: '12%',
                data: jsonData.value,
                itemStyle: {
                    normal: {
                        barBorderRadius: [90, 90, 0, 0]
                    }
                }
            }
        ]
    };
    myChart.setOption(option, true);
}

//初始化某街道柱状图表（静态）
function initBarChartStaticStreet(jsonData) {
    var myChart = echarts.init($("#barChartStaticStreet").get(0));
    var option = {
        color: ['#fa4f31'],
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: jsonData.name,
                axisTick: {
                    alignWithLabel: true
                },
                axisLine: {
                    lineStyle: {
                        color: '#499fd0'
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: '#499fd0'
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#499fd0'
                    }
                }
            }
        ],
        series: [
            {
                name: '已核实数据',
                type: 'bar',
                barWidth: '12%',
                data: jsonData.value,
                itemStyle: {
                    normal: {
                        barBorderRadius: [90, 90, 0, 0]
                    }
                }
            }
        ]
    };
    myChart.setOption(option, true);
}

//初始化违建同比增长统计数据
function initBarChartYoYGrowth(jsonData) {
  var myChart = echarts.init($("#barChartYoYGrowth").get(0));
  var option = { 
        title: {
            text: ''
        },
        tooltip: {},
        xAxis: {
            data: jsonData.name,
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#499fd0'
                }
            }
        },
        yAxis: [{
            min: -20,
            max: 100,
            position: 'right',
            axisLabel: {
                formatter: '{value} %'
            },
            axisLine: {
                lineStyle: {
                    color: '#499fd0'
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#499fd0'
                }
            }
        },
          {
                type: 'value',
                name: '',
                min: -20,
                max: 100,
                position: 'left',
                axisLabel: {
                    formatter: '{value} 宗'
                },
                axisLine: {
                    lineStyle: {
                        color: '#499fd0'
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#499fd0'
                    }
                }
            }
        ],
        series: [{
                name: '同比增长数量（宗）',
                type: 'bar',
                data: jsonData.data1,
                animationDelay: function (idx) {
                    return idx * 10;
                },
                color: function (para) {
                    var val = para.data;
                    if (val < 0)
                        return "-1";
                    return "1";
                }
            },
            {
                name: '同比增长比例（%）',
                type: 'bar',
                data: jsonData.data2,
                animationDelay: function (idx) {
                    return idx * 10 + 100;
                },
                color: function (para) {
                    var val = para.data;
                    if (val < 0)
                        return "-1";
                    return "1";
                }
            }],
        animationDelayUpdate: function (idx) {
            return idx * 5;
        },
        color: ['#5bb834', '#35a7ff']
    };
    myChart.setOption(option, true);
}