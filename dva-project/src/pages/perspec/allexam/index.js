import React, { Component, useState, useEffect, setOpen } from 'react';
import { connect } from 'dva';
import styles from './index.css';
import Edit from '../../../components/edit/index';
import Del from '../../../components/del/index';

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
                        
                            {/* <input className={styles.put} placeholder="快捷选择其他学生"/>  */}

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
                    <ul className={styles.uls}>
                        <li className={styles.hao}>1</li>
                        <li className={styles.date}>11-03-2017</li>
                        <li className={styles.li}>89</li>
                        <li className={styles.ji}>Transfering</li>
                        <li className={styles.xin}>对方过后煞风景士大夫几十块几点几分考试的方式的可</li>
                        <li className={styles.exam}>否</li>
                        <li className={styles.done}>
                            <span onClick={() => {
                                setFlag(true)
                            }}>编辑.</span>
                            <span onClick={() => {
                                setOpen(true)
                            }}>删除</span>
                        </li>
                    </ul>
                    <ul className={styles.uls}>
                        <li className={styles.hao}>1</li>
                        <li className={styles.date}>11-03-2017</li>
                        <li className={styles.li}>89</li>
                        <li className={styles.ji}>Transfering</li>
                        <li className={styles.xin}>对方过后煞风景士大夫几十块几点几分考试的方式的可</li>
                        <li className={styles.exam}>否</li>
                        <li className={styles.done}>编辑.删除</li>
                    </ul>
                    <ul className={styles.uls}>
                        <li className={styles.hao}>1</li>
                        <li className={styles.date}>11-03-2017</li>
                        <li className={styles.li}>89</li>
                        <li className={styles.ji}>Transfering</li>
                        <li className={styles.xin}>对方过后煞风景士大夫几十块几点几分考试的方式的可</li>
                        <li className={styles.exam}>否</li>
                        <li className={styles.done}>编辑.删除</li>
                    </ul>
                    <ul className={styles.uls}>
                        <li className={styles.hao}>1</li>
                        <li className={styles.date}>11-03-2017</li>
                        <li className={styles.li}>89</li>
                        <li className={styles.ji}>Transfering</li>
                        <li className={styles.xin}>对方过后煞风景士大夫几十块几点几分考试的方式的可</li>
                        <li className={styles.exam}>否</li>
                        <li className={styles.done}>编辑.删除</li>
                    </ul>
                </div>

                {/* <div className={styles.del}>
                        <div className={styles.dels}>
                            <span className={styles.spd}>!</span>
                            <p>你确定删除吗？</p>
                        </div>
                        <div className={styles.bns}>
                            <button>取消</button>
                            <button>确定</button>
                        </div>
                    </div> */}
                {/* <div className={styles.other}>
                        <select>
                            <option>111</option>
                        </select>
                    </div> */}
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
