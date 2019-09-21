import React, { Component } from 'react';
import * as echarts from 'echarts';


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

 class Broken extends Component {
    render() {
        return (
            <div className="broken" id="main">    
            </div>
        )
    }

    componentDidMount(){
        var myChart = echarts.init(document.getElementById('main'));
        myChart.setOption(option);
    }
}

export default Broken;
