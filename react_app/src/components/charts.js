import React, { Component } from 'react';

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/line';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

class EchartsTest extends Component {
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
        // 绘制图表
        myChart.setOption({
            title: {
                text: '商品好评率走势',
                subtext: '(近7日，单位：%)',
                x: 'center',
            },
            tooltip: {
                trigger: 'axis'
            },
            calculable: true,
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                data: ['2019-04-12', '2019-04-13', '2019-04-14', '2019-04-15', '2019-04-16',
                    '2019-04-17', '2019-04-18'
                ]
            }],
            yAxis: [{
                type: 'value',
                axisLabel: {
                    formatter: '{value} '
                }
            }],
            series: [{
                name: '好评率',
                type: 'line',
                data: [100, 100, 100, 100, 100, 100, 100],
                markLine: {
                    data: [{
                        type: 'average',
                        axisLabel: {
                            formatter: '{value} %'
                        },
                        name: '平均值'
                    }]
                }
            }, ]

        });
        var myChart1 = echarts.init(document.getElementById('main1'));
        // 绘制图表
        myChart1.setOption({
            title: {
                text: '商品价格走势',
                subtext: '(近7日，单位：元/斤)',
                x: 'center',
            },
            tooltip: {
                trigger: 'axis'
            },
            calculable: true,
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                data: ['2019-04-12', '2019-04-13', '2019-04-14', '2019-04-15', '2019-04-16',
                    '2019-04-17', '2019-04-18'
                ]
            }],
            yAxis: [{
                type: 'value',
                axisLabel: {
                    formatter: '{value} '
                }
            }],
            series: [{
                name: '价格',
                type: 'line',
                data: [3.8, 3.9, 3.8, 3.9, 3.8, 3.9, 4.0],
                markLine: {
                    data: [{
                        type: 'average',
                        axisLabel: {
                            formatter: '{value} '
                        },
                        name: '平均值'
                    }]
                }
            }, ]

        });
    }
    render() {
        return (
            <div> 
            <div id="main" style={{ width:360, height:400 }}></div>
            <div id="main1" style={{  width:360, height: 400}}></div>
            </div>
        );
    }
}

export default EchartsTest;