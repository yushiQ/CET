import React, { Component, useState, useEffect, setOpen } from 'react';
import { connect } from 'dva';
import styles from './index.css';
import Edit from '../../../components/edit/index';
import Del from '../../../components/del/index';
import data from '../../../../mock/index';
import edit from '../../../services/example';

function Allexam() {
    const [flag, setFlag] = useState(Boolean, false);
    const [open, setOpen] = useState(Boolean, false);
   
    let changeFlag = () => {
        setFlag(false)
    }

    let changeOpen = () => {
        setOpen(false)
    }

    return (
        <div className={styles.allexam}>
            <div className={styles.head}>
                xx学生日周考试成绩统计表
                </div>
            <div className={styles.nav}>
                <div className={styles.top}>
                    <div>讲师：xxx</div>
                    <div>学生：xxx</div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className={styles.ipt}>
                                <select className={styles.put}>
                                    <option>111</option>
                                </select>
                        <span className={styles.spa}>X</span>
                    </div>
                </div>
                <div className={styles.bottom}>
                <ul className={styles.uls}>
                        <li className={styles.hao}>序号</li>
                        <li className={styles.date}>日期v</li>
                        <li className={styles.li}>理论</li>
                        <li className={styles.ji}>技能</li>
                        <li className={styles.xin}>分析和解决</li>
                        <li className={styles.exam}>是否周考v</li>
                        <li className={styles.done}>操作</li>
                    </ul>
                    {
                        data.map((item,index)=>{
                            return  <ul className={styles.uls}>
                            <li className={styles.hao}>{item.sort}</li>
                            <li className={styles.date}>{item.time}</li>
                            <li className={styles.li}>{item.theory}</li>
                            <li className={styles.ji}>{item.skill}</li>
                            <li className={styles.xin}>{item.serve}</li>
                            <li className={styles.exam}>{item.exam}</li>
                            <li className={styles.done}>
                                <span onClick={() => {
                                    setFlag(true)
                                }}>{item.edit}.</span>
                                <span onClick={() => {
                                    setOpen(true)
                                }}>{item.del}</span>
                            </li>
                        </ul>
                        })
                    }
                </div>
            </div>
            <div>
                {
                    flag ? <Edit changeFlag={changeFlag} /> : ''
                }
            </div>
            <div>
                {
                    open ? <Del changeOpen={changeOpen} /> : ''
                }
            </div>
        </div>
    )
}


export default connect()(Allexam);
