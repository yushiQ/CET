import React, { useState,useEffect} from "react";
// import { connect } from "dva";
import styles from "./index.css";
// import {login,sign} from "../../services/example"
import  echarts from "echarts";

function Listchart() {
    
  //初始数据

  useEffect(() => {
    
    var myChart = echarts.init(document.getElementById("main"));
    var option = {
      title: {
        text: "XX学生的日周考成绩统计图",
        subtext: "仅供参考"
      },
      tooltip: {
        trigger: "axis"
      },
      legend: {
        data: ["技能", "理论"]
      },
      toolbox: {
        show: true,
        feature: {
          dataZoom: {
            yAxisIndex: "none"
          },
          dataView: { readOnly: false },
          magicType: { type:["line","bar"] },
          restore: {},
          saveAsImage: {}
        }
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
      },
      yAxis: {
        type: "value",
        axisLabel: {
          formatter: "{value} °C"
        }
      },
      series: [
        {
          name: "最高气温",
          type:"line",
          data: [11, 11, 15, 13, 12, 13, 10],
          markPoint: {
            data: [
              { type: "max", name: "最大值" },
              { type: "min", name: "最小值" }
            ]
          },
          markLine: {
            data: [{ type: "average", name: "平均值" }]
          }
        },
        {
          name: "最低气温",
          type: "line",
          data: [1, -2, 2, 5, 3, 2, 0],
          markPoint: {
            data: [{ name: "周最低", value: -2, xAxis: 1, yAxis: -1.5 }]
          },
          markLine: {
            data: [
              { type: "average", name: "平均值" },
              [
                {
                  symbol: "none",
                  x: "90%",
                  yAxis: "max"
                },
                {
                  symbol: "circle",
                  label: {
                    normal: {
                      position: "start",
                      formatter: "最大值"
                    }
                  },
                  type: "max",
                  name: "最高点"
                }
              ]
            ]
          }
        }
      ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }, []);

  return <div className={styles.LineBox}>
    <div id="main" className={styles.cva}></div>
    <div className={styles.com}>
      <div className={styles.times}>
       <span>2019-08-30</span>
       <span>今日分析及解决方案</span>
       <span>点击查看历史记录</span>
      </div>
     <div className={styles.presenting}>
       2222222222222222220000000000000000000000000000000000052222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
     </div>
  </div>
  </div>
}

export default Listchart;
