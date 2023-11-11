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
  color:['#00f2f1','#ed3f35'],
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    textStyle:{
      color:'#4c9bfd',
    },
    right:"20%", //距离右边10%
    data: ['邮件营销','联盟广告']
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
      name: '邮件营销',
      data: [130, 112, 128, 167, 189, 147, 145],
      type: 'line',
      smooth: true,
      areaStyle: {color: 'rgba(47, 79, 147, 1)'}
    },
    {
      name: '联盟广告',
      data: [285, 334, 312, 257, 221, 286, 290],
      type: 'line',
      smooth: true,
      areaStyle: {color: 'rgba(47, 79, 147, 1)'}
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
    orient: "vertical",
    left:"left",
    padding:20,
    textStyle: {color: 'skyblue'}
  },
  series: [
    {
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
          fontSize: 12,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1020,name:'26~35'},
        { value: 735,name:'36~45'},
        { value: 580,name:'46~55'},
        { value: 484,name:'10~25'},
        { value: 300,name:'56~70'}
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
  series: [
    {
      name: 'Nightingale Chart',
      type: 'pie',
      radius: [15, 70],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 8
      },
      labelLine:{length:5,length2:5},
      data: [
        { value: 40, name: '北京',labelLine:{length:15,length2:10} },
        { value: 38, name: '上海',labelLine:{length:15,length2:10} },
        { value: 32, name: '广东',labelLine:{length:15,length2:10} },
        { value: 30, name: '江苏',labelLine:{length:15,length2:10} },
        { value: 28, name: '福建',labelLine:{length:15,length2:10} },
        { value: 26, name: '河北',labelLine:{length:15,length2:10} },
        { value: 22, name: '河南',labelLine:{length:15,length2:10} },
        { value: 18, name: '山东',labelLine:{length:15,length2:10} }
      ]
    }
  ]
};
myChart6.setOption(option6);
// 图表自适应大小
window.addEventListener("resize", function() {
  myChart6.resize();
});