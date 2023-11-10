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
          barBorderRadius: 5
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
    left: "10%",
    bottom: "10%"
  },
  xAxis: {
    show: false
  },
  yAxis: {
    type: 'category',
    data: ['Brazil', 'Indonesia', 'USA', 'India', 'China'],
    axisLine:{
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      color: "rgb(255,255,255)"
    }
  },
  series: [
    {
      name: '2011',
      type: 'bar',
      data: [18203, 23489, 29034, 104970, 131744],
      name: "条",
      barCategoryGap: 50,
      barWidth:10,
      itemStyle:{
        barBorderRadius: 20
      },
      label:{
        show:true,
        position:"insideleft",
        formatter:"{c}%"
      },
      itemStyle:{
        barBorderRadius: 20,
        color: function(params){
          console.log(params)
          return myColor[params.dataIndex]
        }
      },
    },
    {
      name: '2012',
      type: 'bar',
      data: [19325, 23438, 31000, 121594, 134141],
      // name: "框",
      // barCategoryGap: 50,
      // barWidth:10,
      // itemStyle:{
      //   barBorderRadius: 20
      // },
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