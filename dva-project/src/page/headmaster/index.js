
import React, { useState,useEffect } from "react";
// import { connect } from "dva";
import styles from "./index.css";
// import {login,sign} from "../../services/example"
// import * as echarts from "echarts";

//组件
import Listchart from "../../components/lineChart";
import Histogram from "../../components/histogram";

function Headermaster() {
  let [button,setButton]=useState(true)
  //初始数据
  useEffect(() => { }, []);

let setDataStyle=()=>{
  setButton(!button)
}
console.log(button)
  return (
    <div className={styles.masterpage}>
      <header className={styles.header}>重点关注学生考试成绩统计表</header>
      <div className={styles.class}>
        <div className={styles.classItem}>
          <div className={styles.hine}>选择班级</div>
          <div className={styles.item}>
            <span>1703D</span>
            <span>1703D</span>
            <span>1703D</span>
            <span>1703D</span>
            <span>1703D</span>
            <span>1703D</span>
            <span>1703D</span>
            <span>1703D</span>
            <span>1703D</span>
            <span>1703D</span>
            <span>1703D</span>
            <span>1703D</span>
            <span>1703D</span>
            <span>1703D</span>
          </div>
        </div>
        <div className={styles.name}>
          <div className={styles.hine}>名单:</div>
          <div className={styles.item}>
            <span>张三,张三,张三</span>
            <span>(3/人)</span>
            <span className={styles.Btns}><i className={styles.btnBox} onClick={setDataStyle}><b className={styles.icon}></b></i>柱状图/线圈</span>
          </div>
        </div>
      </div>
      <Listchart button={button}/>
      <Histogram />
    </div>
  );
}

export default Headermaster;
