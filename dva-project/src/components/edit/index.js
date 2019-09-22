import React, { Component,useState, setFlag} from 'react';
import styles from './index.css';

function  Edit(props){
    let {changeFlag} = props;
    console.log(props);

        return (
            <div className={styles.mark}>
                 <div className={styles.edit}>
                        <div className={styles.con}>
                            <h4>编辑内容</h4>
                            <span onClick={()=>{
                                changeFlag()
                            }}>X</span>
                        </div>
                        <div className={styles.lun}>
                           <span>理论</span>
                            <input/>
                        </div>
                        <div className={styles.neng}>
                            <span>技能</span>
                            <input/>
                        </div>
                        <div className={styles.exam}>
                            <div>
                                <input type="checkbox" placeholder="0-100之间的数字"/>
                                日考
                            </div>
                            <div>
                            <input type="checkbox" placeholder="0-100之间的数字"/>
                                周考
                            </div>
                        </div>
                        <div className={styles.an}>
                            <p>分析解决方案</p>
                            <div>
                                <textarea></textarea>
                            </div> 
                        </div>
                        <div className={styles.btns}>
                            <button onClick={()=>{
                                changeFlag()
                            }}>取消</button>
                            <button>确定</button>
                        </div>
                    </div>
                </div>
        )
    }


export default Edit;
