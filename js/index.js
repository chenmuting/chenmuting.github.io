//alert('成功引入')
// 左一
var myChart1 = echarts.init(document.querySelector(".box1 .bar .chart"));
var option1 = {
    color: ["#2f89cf"],
    grid: {
        left: "0%",
        right:"0%",
        top:"10%",
        bottom:"4%",
        containLabel:true
    },
    xAxis: {
      type: 'category',
      data: ['旅游行业', '教育培训', '游戏行业', '医疗行业', '电商行业', '社交行业', '金融行业'],
      axisLabel:{
          color:"rgba(255,255,255,0.6)",
          fontsize: 12
      },
      // x轴不显示
      axisLine:{
          show: false
      }
    },
    yAxis: {
      type: 'value',
      axisLabel:{
        color: "rgba(255,255,255,.6)",
        fontsize: 12
        },
      axisLine:{
        lineStyle:{
          with: 1,
          type:"solid",
          color: "rgba(255,255,255,.1)"
          }
        },
      splitLine:{
        show: true,
        lineStyle:{
          with: 1,
          type:"solid",
          color: "rgba(255,255,255,.1)"
        }
      }  
    },
    series: [
      {
        data: [200, 300, 300, 900, 1500, 1200, 600],
        type: 'bar',
        itemStyle: {
          barBorderRadius: 10
        }
      }
    ]
  };
myChart1.setOption(option1);
// 图表自适应大小
window.addEventListener("resize", function() {
  myChart1.resize();
});

// 右一柱状图
var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
var myChart2 = echarts.init(document.querySelector(".box3 .bar .chart"));
option2 = {
  grid: {
    top: "10%",
    left: "18%",
    bottom: "10%"
  },
  xAxis: {
    show: false
  },
  yAxis: [
    {
      type: 'category',
      inverse:true, //让Y轴数据逆向
      data: ['HTML5', 'CSS3', 'javascript', 'VUE', 'NODE'],
      axisLabel: {color: "rgb(255,255,255)"},
      axisLine: {show: false},
      axisTick: {show: false}      
    },
    {
      type: 'category',
      data: [100,200,300,400,500],
      axisLine: {show: false},
      axisTick: {show: false},
      axisLabel: {color: "rgb(255,255,255)"}
    }
  ],
  series: [
    {
      name: '2011',
      type: 'bar',
      data: [18203, 23489, 29034, 104970, 131744],
      name: "条",
      barCategoryGap: 50,
      barWidth:10,
      itemStyle:{barBorderRadius: 20},
      label:{
        show:true,
        position:"inside",
        formatter:"{c}%"
      },
      itemStyle:{
        barBorderRadius: 20,
        color: function(params){
          console.log(params)
          return myColor[params.dataIndex]
        }
      },
      yAxisIndex: 0,
      data: [70, 34, 60, 78, 69]
    },
    {
      name: '2012',
      type: 'bar',
      data: [19325, 23438, 31000, 121594, 134141],
      // 柱子间的距离
      barCategoryGap: 50,
      // 柱子间的宽度
      barWidth: 15,
      itemStyle: {
        color: 'none',
        borderColor: '#00c1de',
        borderWidth: 3,
        barBorderRadius: 15 //边框圆角
      },
      yAxisIndex: 1,
      data: [100, 100, 100, 100, 100]
    }
  ]
};
myChart2.setOption(option2);
// 图表自适应大小
window.addEventListener("resize", function() {
  myChart2.resize();
});

// 左二
var myChart3 = echarts.init(document.querySelector(".box1 .line .chart"));
option3 = {
  color:['#00f2f1','#ed3f35'],
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    textStyle:{
      color:'#4c9bfd',
    },
    right:"10%", //距离右边10%
    data: ['新增游客','新增粉丝']
  },
  grid: {
    top:"20%",
    left: '3%',
    right: '4%',
    bottom: '3%',
    show: true, //显示边框
    borderColor:'#012f4a',
    containLabel: true
  },
  
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    axisLine:{show:false}, //去除轴线
    axisTick:{show:false}, // 去除刻度线
    axisLabel:{color:"#4c9bfd"}, // 文本颜色
    boundaryGap:false // 去除轴间距
  },
  yAxis: {
    type: 'value',
    axisTick:{show:false},
    axisLabel:{color:"#4c9bfd"},
    splitLine:{
      lineStyle:{color:'#012f4a'}
    }
  },
  series: [
    {
      name: '新增游客',
      type: 'line',
      stack: 'Total',
      data: [120, 132, 101, 134, 90, 230, 210],
      smooth:true
    },
    {
      name: '新增粉丝',
      type: 'line',
      stack: 'Total',
      data: [220, 182, 191, 234, 290, 330, 310],
      smooth:true
    },
  ]
};
myChart3.setOption(option3);
// 图表自适应大小
window.addEventListener("resize", function() {
  myChart3.resize();
});


// 右二
var myChart4 = echarts.init(document.querySelector(".box3 .line .chart"));
option4 = {

  legend: {
    top:"0%",
    textStyle:{color: "rgba(255,255,255,0.5)",fontsize:12}
  },
  grid: {
    left: '10',
    top: "30",
    right: '10',
    bottom: '10',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: [ "01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","26","28","29","30"],
      axisLine:{lineStyle:{color:"rgba(255,255,255,.2)"}}, 
      axisTick:{show:false}, // 去除刻度线
      axisLabel:{color:"rgba(255,255,255,.6)",fontSize:12}, // 文本颜色
      boundaryGap:false // 去除轴间距
    }
  ],
  yAxis: [
    {
      type: 'value',
      axisLine:{lineStyle:{color:"rgba(255,255,255,.2)"}},
      axisTick:{show:false}, // 去除刻度线
      axisLabel:{textStyle:{color:"rgba(255,255,255,.6)",fontSize:12}}, // 文本颜色
      splitLine:{lineStyle:{color:"rgba(255,255,255,.1)"}},
      boundaryGap:false // 去除轴间距
    }
  ],
  series: [
    {
      name: '邮件营销',
      type: 'line',
      lineStyle:{color:"#0184d5",width:2},
      areaStyle:{},
      emphasis: {
        focus: 'series'
      },
      data: [ 30, 40, 30, 40,30, 40, 30,60,20, 40, 30, 40, 30, 40,30, 40, 30,60,20, 40, 30, 40, 30, 40,30, 40, 20,60,50, 40],
      smooth:true,
      // 填充区域
      areaStyle: {
        // 渐变色，只需要复制即可
      color: new echarts.graphic.LinearGradient(
        0,
        0,
        0,
        1,
        [
          {
            offset: 0,
            color: "rgba(1, 132, 213, 0.4)"   // 渐变色的起始颜色
          },
          {
            offset: 0.8,
            color: "rgba(1, 132, 213, 0.1)"   // 渐变线的结束颜色
          }
        ],
        false
      ),
      shadowColor: "rgba(0, 0, 0, 0.1)"},
      symbol:"circle",
      symbolSize:10,
      itemStyle:{color:"#0184d5",borderColor:"rgba(255,255,255,.1),borderWidth:12"},
      showSymbol:false

    },
    {
      name: '联盟广告',
      type: 'line',
      lineStyle:{color:"#00d887",width:2},
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [ 130, 10, 20, 40,30, 40, 80,60,20, 40, 90, 40,20, 140,30, 40, 130,20,20, 40, 80, 70, 30, 40,30, 120, 20,99,50, 20],
      smooth:true,
      // 填充区域
      areaStyle: {
        // 渐变色，只需要复制即可
      color: new echarts.graphic.LinearGradient(
        0,
        0,
        0,
        1,
        [
          {
            offset: 0,
            color: "rgba(1, 132, 213, 0.4)"   // 渐变色的起始颜色
          },
          {
            offset: 0.8,
            color: "rgba(1, 132, 213, 0.1)"   // 渐变线的结束颜色
          }
        ],
        false
      ),
      shadowColor: "rgba(0, 0, 0, 0.1)"},
      symbol:"circle",
      symbolSize:10,
      itemStyle:{color:"#0184d5",borderColor:"rgba(255,255,255,.1),borderWidth:12"},
      showSymbol:false
    },
  ]
};
myChart4.setOption(option4);
// 图表自适应大小
window.addEventListener("resize", function() {
  myChart4.resize();
});


// 左三
var myChart5 = echarts.init(document.querySelector(".box1 .pie .chart"));
option5 = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    bottom:"0%",
    textStyle: {color: 'skyblue',fontSize:12}
  },
  series: [
    {
      color: [
        "#065aab",
        "#066eab",
        "#0682ab",
        "#0696ab",
        "#06a0ab",
      ],
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'        
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 16,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1,name:'0岁以下'},
        { value: 4,name:'20~29岁'},
        { value: 2,name:'30~39岁'},
        { value: 2,name:'40~49岁'},
        { value: 1,name:'50岁以上'}
      ]
    }
  ]
};
myChart5.setOption(option5);
// 图表自适应大小
window.addEventListener("resize", function() {
  myChart5.resize();
});

// 右三
var myChart6 = echarts.init(document.querySelector(".box3 .pie .chart"));
option6 = {
  legend: {
    bottom: "0%",textStyle: {color: 'skyblue',fontSize:10}
  },
  series: [
    {
      color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
      name: 'Nightingale Chart',
      type: 'pie',
      radius: ["12%", "60%"],
      center: ['50%', '45%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 8
      },
      label:{fontSize:10},
      data: [
          { value: 20, name: '云南' },
          { value: 26, name: '北京' },
          { value: 24, name: '山东' },
          { value: 25, name: '河北' },
          { value: 20, name: '江苏' },
          { value: 25, name: '浙江' },
          { value: 30, name: '四川' },
          { value: 42, name: '湖北' }
      ]
    }
  ]
};
myChart6.setOption(option6);
// 图表自适应大小
window.addEventListener("resize", function() {
  myChart6.resize();
});




// 地图
var myChart7 = echarts.init(document.querySelector(".box2 .map .chart"));
var geoCoordMap = {
  '上海': [121.4648,31.2891],
  '东莞': [113.8953,22.901],
  '东营': [118.7073,37.5513],
  '中山': [113.4229,22.478],
  '临汾': [111.4783,36.1615],
  '临沂': [118.3118,35.2936],
  '丹东': [124.541,40.4242],
  '丽水': [119.5642,28.1854],
  '乌鲁木齐': [87.9236,43.5883],
  '佛山': [112.8955,23.1097],
  '保定': [115.0488,39.0948],
  '兰州': [103.5901,36.3043],
  '包头': [110.3467,41.4899],
  '北京': [116.4551,40.2539],
  '北海': [109.314,21.6211],
  '南京': [118.8062,31.9208],
  '南宁': [108.479,23.1152],
  '南昌': [116.0046,28.6633],
  '南通': [121.1023,32.1625],
  '厦门': [118.1689,24.6478],
  '台州': [121.1353,28.6688],
  '合肥': [117.29,32.0581],
  '呼和浩特': [111.4124,40.4901],
  '咸阳': [108.4131,34.8706],
  '哈尔滨': [127.9688,45.368],
  '唐山': [118.4766,39.6826],
  '嘉兴': [120.9155,30.6354],
  '大同': [113.7854,39.8035],
  '大连': [122.2229,39.4409],
  '天津': [117.4219,39.4189],
  '太原': [112.3352,37.9413],
  '威海': [121.9482,37.1393],
  '宁波': [121.5967,29.6466],
  '宝鸡': [107.1826,34.3433],
  '宿迁': [118.5535,33.7775],
  '常州': [119.4543,31.5582],
  '广州': [113.5107,23.2196],
  '廊坊': [116.521,39.0509],
  '延安': [109.1052,36.4252],
  '张家口': [115.1477,40.8527],
  '徐州': [117.5208,34.3268],
  '德州': [116.6858,37.2107],
  '惠州': [114.6204,23.1647],
  '成都': [103.9526,30.7617],
  '扬州': [119.4653,32.8162],
  '承德': [117.5757,41.4075],
  '拉萨': [91.1865,30.1465],
  '无锡': [120.3442,31.5527],
  '日照': [119.2786,35.5023],
  '昆明': [102.9199,25.4663],
  '杭州': [119.5313,29.8773],
  '枣庄': [117.323,34.8926],
  '柳州': [109.3799,24.9774],
  '株洲': [113.5327,27.0319],
  '武汉': [114.3896,30.6628],
  '汕头': [117.1692,23.3405],
  '江门': [112.6318,22.1484],
  '沈阳': [123.1238,42.1216],
  '沧州': [116.8286,38.2104],
  '河源': [114.917,23.9722],
  '泉州': [118.3228,25.1147],
  '泰安': [117.0264,36.0516],
  '泰州': [120.0586,32.5525],
  '济南': [117.1582,36.8701],
  '济宁': [116.8286,35.3375],
  '海口': [110.3893,19.8516],
  '淄博': [118.0371,36.6064],
  '淮安': [118.927,33.4039],
  '深圳': [114.5435,22.5439],
  '清远': [112.9175,24.3292],
  '温州': [120.498,27.8119],
  '渭南': [109.7864,35.0299],
  '湖州': [119.8608,30.7782],
  '湘潭': [112.5439,27.7075],
  '滨州': [117.8174,37.4963],
  '潍坊': [119.0918,36.524],
  '烟台': [120.7397,37.5128],
  '玉溪': [101.9312,23.8898],
  '珠海': [113.7305,22.1155],
  '盐城': [120.2234,33.5577],
  '盘锦': [121.9482,41.0449],
  '石家庄': [114.4995,38.1006],
  '福州': [119.4543,25.9222],
  '秦皇岛': [119.2126,40.0232],
  '绍兴': [120.564,29.7565],
  '聊城': [115.9167,36.4032],
  '肇庆': [112.1265,23.5822],
  '舟山': [122.2559,30.2234],
  '苏州': [120.6519,31.3989],
  '莱芜': [117.6526,36.2714],
  '菏泽': [115.6201,35.2057],
  '营口': [122.4316,40.4297],
  '葫芦岛': [120.1575,40.578],
  '衡水': [115.8838,37.7161],
  '衢州': [118.6853,28.8666],
  '西宁': [101.4038,36.8207],
  '西安': [109.1162,34.2004],
  '贵阳': [106.6992,26.7682],
  '连云港': [119.1248,34.552],
  '邢台': [114.8071,37.2821],
  '邯郸': [114.4775,36.535],
  '郑州': [113.4668,34.6234],
  '鄂尔多斯': [108.9734,39.2487],
  '重庆': [107.7539,30.1904],
  '金华': [120.0037,29.1028],
  '铜川': [109.0393,35.1947],
  '银川': [106.3586,38.1775],
  '镇江': [119.4763,31.9702],
  '长春': [125.8154,44.2584],
  '长沙': [113.0823,28.2568],
  '长治': [112.8625,36.4746],
  '阳泉': [113.4778,38.0951],
  '青岛': [120.4651,36.3373],
  '韶关': [113.7964,24.7028]
};

var XAData = [
  [{name:'西安'}, {name:'北京',value:100}],
  [{name:'西安'}, {name:'上海',value:100}],
  [{name:'西安'}, {name:'广州',value:100}],
  [{name:'西安'}, {name:'西宁',value:100}],
  [{name:'西安'}, {name:'银川',value:100}]
];

var XNData = [
  [{name:'西宁'}, {name:'北京',value:100}],
  [{name:'西宁'}, {name:'上海',value:100}],
  [{name:'西宁'}, {name:'广州',value:100}],
  [{name:'西宁'}, {name:'西安',value:100}],
  [{name:'西宁'}, {name:'银川',value:100}]
];

var YCData = [
  [{name:'银川'}, {name:'北京',value:100}],
  [{name:'银川'}, {name:'广州',value:100}],
  [{name:'银川'}, {name:'上海',value:100}],
  [{name:'银川'}, {name:'西安',value:100}],
  [{name:'银川'}, {name:'西宁',value:100}],
];

var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
//var planePath = 'arrow';
var convertData = function (data) {
  
  var res = [];
  for (var i = 0; i < data.length; i++) {
    
      var dataItem = data[i];

      var fromCoord = geoCoordMap[dataItem[0].name];
      var toCoord = geoCoordMap[dataItem[1].name];
      if (fromCoord && toCoord) {
          res.push({
              fromName: dataItem[0].name,
              toName: dataItem[1].name,
              coords: [fromCoord, toCoord],
              value: dataItem[1].value
          });
      }
  }
  return res;
   
};

var color = ['#a6c84c', '#ffa022', '#46bee9'];//航线的颜色
var series = [];
[['西安', XAData], ['西宁', XNData], ['银川', YCData]].forEach(function (item, i) {  
  series.push({
      name: item[0] + ' Top3',
      type: 'lines',
      zlevel: 1,
      effect: {
          show: true,
          period: 6,
          trailLength: 0.7,
          color: 'red',   //arrow箭头的颜色
          symbolSize: 3
      },
      lineStyle: {
          normal: {
              color: color[i],
              width: 0,
              curveness: 0.2
          }
      },
      data: convertData(item[1])
  },
  {
      name: item[0] + ' Top3',
      type: 'lines',
      zlevel: 2,
      symbol: ['none', 'arrow'],
      symbolSize: 10,
      effect: {
          show: true,
          period: 6,
          trailLength: 0,
          symbol: planePath,
          symbolSize: 15
      },
      lineStyle: {
          normal: {
              color: color[i],
              width: 1,
              opacity: 0.6,
              curveness: 0.2
          }
      },
      data: convertData(item[1])
  },
  {
      name: item[0] + ' Top3',
      type: 'effectScatter',
      coordinateSystem: 'geo',
      zlevel: 2,
      rippleEffect: {
          brushType: 'stroke'
      },
      label: {
          normal: {
              show: true,
              position: 'right',
              formatter: '{b}'
          }
      },
      symbolSize: function (val) {
          return val[2] / 8;
      },
      itemStyle: {
        normal: {
          color: color[i],
        },
        emphasis: {
            areaColor: '#2B91B7'
        }
      },
      data: item[1].map(function (dataItem) {
          return {
              name: dataItem[1].name,
              value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
          };
      })
  });
});
var option7 = {
  // backgroundColor: 'skyblue',
  // title : {
  //     text: '模拟航线',
  //     subtext: '数据纯属虚构',
  //     left: 'center',
  //     textStyle : {
  //         color: '#fff'
  //     }
  // },
  tooltip : {
      trigger: 'item', 
      formatter:function(params, ticket, callback){
          if(params.seriesType=="effectScatter") {
              return "线路："+params.data.name+""+params.data.value[2];
          }else if(params.seriesType=="lines"){
              return params.data.fromName+">"+params.data.toName+"<br />"+params.data.value;
          }else{
              return params.name;
          }
      } 
  },
  legend: {
      orient: 'vertical',
      top: 'bottom',
      left: 'right',
      data:['西安 Top3', '西宁 Top3', '银川 Top3'],
      textStyle: {
          color: '#fff'
      },
      selectedMode: 'multiple'
  },
  geo: {
      map: 'china',
      zoom: 1.2,   //地图放大
      label: {
          emphasis: {
              show: false,
          }
      },
      roam: false,
      itemStyle: {
        normal: {
            areaColor: '#142957',
            borderColor: '#0692a4',
            // borderWidth: 1,
        },
        emphasis: {
            areaColor: '#0b1c2d'
        }
      }
  },
  series: series
};


myChart7.setOption(option7);
// 图表自适应大小
window.addEventListener("resize", function() {
  myChart7.resize();
});