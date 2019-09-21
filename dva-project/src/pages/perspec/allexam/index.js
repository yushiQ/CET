import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './index.css';

class Allexam extends Component {
    render() {
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
                            <span>
                                <input className={styles.put} placeholder="快捷选择其他学生"/>
                            </span>
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
                    <div className={styles.edit}>
                        <div className={styles.con}>
                            <h4>编辑内容</h4>
                            <span>X</span>
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
                            <div></div>
                        </div>
                        <div className={styles.btns}>
                            <button>取消</button>
                            <button>确定</button>
                        </div>
                    </div>
                    <div className={styles.del}>
                        <div className={styles.dels}>
                            <span className={styles.spd}>!</span>
                            <p>你确定删除吗？</p>
                        </div>
                        <div className={styles.bns}>
                            <button>取消</button>
                            <button>确定</button>
                        </div>
                    </div>
                    <div className={styles.other}>
                        <select>
                            <option>111</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(Allexam);
