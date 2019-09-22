import React, { Component } from 'react';
import styles from './index.css';

function  Del (props) {
    let {changeOpen} = props;
        return (
            <div className={styles.mark}>
            <div className={styles.del}>
                <div className={styles.dels}>
                    <span className={styles.spd}>!</span>
                    <p>你确定删除吗？</p>
                </div>
                <div className={styles.bns}>
                    <button onClick={()=>{
                        changeOpen()
                        }}>取消</button>
                    <button>确定</button>
                </div>
            </div>
            </div>
        )
    }


export default Del;
