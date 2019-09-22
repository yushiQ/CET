import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './index.css';
import * as echarts from 'echarts';
// import Broken from '../../../components/broken/index';

const option = {
    title: {
        text: 'XX同学的日周考成绩统计图',
        subtext: '仅供参考'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['技能','理论']
    },
    toolbox: {
        show: true,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis:  {
        type: 'category',
        boundaryGap: false,
        data: ['08-01','08-02','08-03','08-04','08-05','08-06','08-07','08-09','08-10','08-11','08-12','08-13']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value}'
        }
    },
    series: [
        {
            name:'技能',
            type:'line',
            data:[30, 47, 70, 32, 27, 76.7, 36.05,61,36,30,23],
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
        },
        {
            name:'理论',
            type:'line',
            data:[15, 59, 90, 23, 30, 70, 82.2,48,20,60,22],
            markPoint: {
                data: [
                    {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'},
                    [{
                        symbol: 'none',
                        x: '90%',
                        yAxis: 'max'
                    }, {
                        symbol: 'circle',
                        label: {
                            normal: {
                                position: 'start',
                                formatter: '最大值'
                            }
                        },
                        type: 'max',
                        name: '最高点'
                    }]
                ]
            }
        }
    ]
};

const options = {
    title : {
        text: 'XX同学的日周考成绩统计图',
        subtext: '仅供参考'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['技能','理论']
    },
    toolbox: {
        show : true,
        feature : {
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data : ['08-01','08-02','08-03','08-04','08-05','08-06','08-07','08-09','08-10','08-11','08-12','08-13']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'技能',
            type:'bar',
            data:[35, 48, 70, 23, 30, 76.7, 36, 62, 38, 20, 12, 3.3],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        },
        {
            name:'理论',
            type:'bar',
            data:[30, 59, 70, 26, 30, 70, 78, 82.2, 48, 18.8, 60, 23],
            markPoint : {
                data : [
                    {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183},
                    {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name : '平均值'}
                ]
            }
        }
    ]
};




class Charts extends Component {
    render() {
        return (
            <div className={styles.charts}>
                <div className={styles.head}>
                    <h2>重点关注学生考试成绩统计图</h2>
                </div>
                <div className={styles.cons}>
                    <div className={styles.first}>
                        <p>选择班级：</p>
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
                    <div className={styles.two}>
                        <p>名单：</p>
                        <p>张三，张力，王强（3/人）</p>

                    </div>
                </div>
                <div className={styles.echar} id="main">
                    {/* <Broken/> */}
                </div>
                <div className={styles.broken}>

                </div>
                <div className={styles.echarts} id="mains">

                </div>
            </div>
        )
    }
    
    componentDidMount(){
        var myChart = echarts.init(document.getElementById('main'));
        myChart.setOption(option);

        var myChart = echarts.init(document.getElementById('mains'));
        myChart.setOption(options);
    }


   
}

export default connect()(Charts);
