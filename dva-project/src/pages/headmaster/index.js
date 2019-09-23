
import React, { useState,useEffect } from "react";
// import { connect } from "dva";
import styles from "./index.css";
// import {login,sign} from "../../services/example"
// import * as echarts from "echarts";

//组件
import Listchart from "../../components/lineChart";
import Histogram from "../../components/histogram";

//数据
let classData=["1703D","1703D","1703D","1703D","1703D","1703D","1703D","1703D","1703D","1703D","1703D"]

function Headermaster() {
 
  let [view,setView]=useState(Boolean,false)
  //初始数据
  useEffect(() => { }, []);

let setDataStyle=()=>{
  setView(!view)
}

  return (
    <div className={styles.masterpage}>
      <header className={styles.header}>重点关注学生考试成绩统计表</header>
      <div className={styles.class}>
        <div className={styles.classItem}>
          <div className={styles.hine}>选择班级</div>
          <div className={styles.item}>
          {
            classData.map((item,index)=>{
             return  <span key={index}>{item}</span>
            })
          }
          </div>
        </div>
        <div className={styles.name}>
          <div className={styles.hine}>名单:</div>
          <div className={styles.item}>
            <span>张三,张三,张三</span>
            <span>(3/人)</span>
            <span className={styles.Btns}><i className={styles.btnBox} onClick={setDataStyle}><b className={view?styles.btnRight:styles.icon}></b></i>柱状图/线圈</span>
          </div>
        </div>
      </div>
    {view? <div><Listchart/> <Histogram /></div>:""} 
    </div>
  );
}

export default Headermaster;
