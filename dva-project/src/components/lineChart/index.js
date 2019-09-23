import React, { useState,useEffect} from "react";
// import { connect } from "dva";
import styles from "./index.css";
import {query} from "../../services/example"
import  echarts from "echarts";

function Listchart() {
    
  let [uid,setUid]=useState(String)
  //初始数据
 useEffect(() => {
      // 获取当前用户信息
    query({
        method: "get",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }).then(res=>{
        setUid(res.data.useinfo.tid)
      })
     

    var myChart = echarts.init(document.getElementById("main"));
    var option = {
      title: {
        text: "XX学生的日周考成绩统计图",
        subtext: "仅供参考",
        styletest:{
          fontSize:"12px"
        }
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
        data: ['08-01','08-02','08-03','08-04','08-05','08-06','08-07','08-09','08-10','08-11','08-12','08-13']
      },
      yAxis: {
        type: "value",
        axisLabel: {
          formatter: "{value}"
        }
      },
      series: [
        {
          name: "理论",
          type:"line",
          data: [35, 48, 70, 23, 30, 76.7, 36, 62, 38, 20, 12, 3.3],
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
          name: "技能",
          type: "line",
          data:[15, 59, 90, 23, 30, 70, 82.2,48,20,60,22],
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
