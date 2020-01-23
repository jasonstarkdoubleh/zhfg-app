import React from 'react';
import { ScrollView, Text, View, TouchableOpacity, StatusBar, Dimensions, TouchableNativeFeedback, StyleSheet, Image } from 'react-native';
import { Tabs, Icon } from '@ant-design/react-native';
import { Echarts, echarts } from 'react-native-secharts';
import DataTabel from './Components/DataTabel/DataTabel';


const { width, height } = Dimensions.get('window')
const STATUS_BAR_HEIGHT = StatusBar.currentHeight
const STATUS_BAR_HEIGHT3 = StatusBar.currentHeight * 3
const scrollHeight = height - 140

export default class Details extends React.Component {

    static navigationOptions = {
        headerTitle: '价格监测',
        headerStyle: {
            height: STATUS_BAR_HEIGHT3,
            paddingTop: STATUS_BAR_HEIGHT,
            backgroundColor: '#2690fb'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf: 'center',
            flex: 1,
            textAlign: 'center'
        },
        headerRight: <Icon name="search" size="md" color="#fff" style={{ marginRight: 15 }} />
    };

    state = {

    }

    componentDidMount() {

    }

    _handleResults(results) {
        this.setState({ results });
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#f9f9f9' }}>
                <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                    <View style={{ height: 100, backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ width: '33%', alignItems: 'center' }}>
                            <Image source={require('./img/苹果(1).png')} style={{ width: 30 }} resizeMode='contain' />
                        </View>
                        <Text style={[style.priceHeader, { width: '33%', textAlign: 'center' }]}>
                            29.81
                    </Text>
                        <View style={{ width: '33%', alignItems: 'center' }}>
                            <Text style={[style.priceHeader, { fontSize: 16, marginBottom: 3 }]}>
                                -2.34
                        </Text>
                            <Text style={[style.priceHeader, { fontSize: 16, marginTop: 3 }]}>
                                -7.28%
                        </Text>
                        </View>
                    </View>
                    <View style={{ height: 1, backgroundColor: '#f9f9f9' }}></View>
                    <View style={{ height: 30, backgroundColor: '#fff', flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ marginLeft: 20 }}>
                            预测价格
                    </Text>
                        <Text style={{ marginLeft: 25 }}>
                            29.25
                    </Text>
                    </View>

                    <View style={{ marginTop: 15, backgroundColor: '#fff', paddingBottom: 10 }}>
                        <View>
                            <Text style={{ fontSize: 18, marginLeft: 20, marginTop: 10 }}>
                                苹果-日预测
                        </Text>
                        </View>
                        <View style={{ paddingHorizontal: 20 }}>
                            <Echarts option={{
                                xAxis: {
                                    type: 'category',
                                    boundaryGap: false,
                                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                                },
                                yAxis: {
                                    type: 'value'
                                },
                                grid: {
                                    left: '3%',
                                    right: '4%',
                                    bottom: '3%',
                                    top: '10%',
                                    containLabel: true
                                },
                                series: [{
                                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                                    type: 'line',
                                    areaStyle: {
                                        normal: {
                                            color: '#2690fb'
                                        }
                                    },
                                    itemStyle: {
                                        normal: {
                                            color: "#1686f7",
                                            lineStyle: {
                                                color: '#1686f7'
                                            }
                                        }
                                    }
                                }]
                            }} height={300}
                            />
                        </View>
                    </View>

                    <View style={{ marginTop: 15, backgroundColor: '#fff' }}>
                        <View>
                            <Text style={{ fontSize: 18, marginLeft: 20, marginTop: 10 }}>
                                苹果-日预测
                        </Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Echarts option={{
                                series: [
                                    {
                                        name: '内圈小',
                                        type: 'gauge',
                                        pointer: {
                                            show: false
                                        },
                                        radius: '90%',
                                        startAngle: 230,
                                        endAngle: -50,
                                        splitNumber: 4,
                                        axisLine: { // 坐标轴线
                                            lineStyle: { // 属性lineStyle控制线条样式
                                                color: [
                                                    [1, '#bfcbd9']
                                                ],
                                                width: 20
                                            }

                                        },
                                        splitLine: { //分隔线样式
                                            show: true,
                                        },
                                        axisLabel: { //刻度标签
                                            show: false,
                                        },
                                        axisTick: { //刻度样式
                                            show: true,
                                        },
                                        detail: {
                                            // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                            fontWeight: 'bolder',
                                            fontSize: 40,
                                            offsetCenter: [0, '20%']
                                        },
                                        data: [{
                                            value: 30,
                                            name: ''
                                        }]
                                    }, {
                                        name: '内圈小',
                                        type: 'gauge',
                                        title: {
                                            // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                            fontWeight: 'bolder',
                                            fontSize: 30,
                                            fontStyle: 'italic',
                                            offsetCenter: [0, '33%'],
                                        },
                                        pointer: {
                                            show: true
                                        },
                                        radius: '90%',
                                        startAngle: 230,
                                        endAngle: 50,
                                        splitNumber: 4,
                                        axisLine: { // 坐标轴线
                                            lineStyle: { // 属性lineStyle控制线条样式
                                                color: [
                                                    [1, '#0093ee']
                                                ],
                                                width: 20,
                                                shadowColor: '#0093ee', //默认透明
                                                shadowOffsetX: 0,
                                                shadowOffsetY: 0,
                                                shadowBlur: 40,
                                                opacity: 1,
                                            }

                                        },
                                        splitLine: { //分隔线样式
                                            show: true,
                                        },
                                        axisLabel: { //刻度标签
                                            show: true,
                                        },
                                        axisTick: { //刻度样式
                                            show: true,
                                        },
                                        detail: {
                                            // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                            fontWeight: 'bolder',
                                            fontSize: 40,
                                            offsetCenter: [0, '20%']
                                        },
                                        data: [{
                                            value: '30'
                                        }]
                                    },

                                ]
                            }} height={300}
                            />
                        </View>

                    </View>
                    <View style={{ marginTop: 15, backgroundColor: '#fff', paddingBottom: 10 }}>
                        <View>
                            <Text style={{ fontSize: 18, marginLeft: 20, marginTop: 10 }}>
                                资产规模
                            </Text>
                        </View>
                        <View style={{ paddingHorizontal: 20 }}>
                            <Echarts option={{
                                color: ['#3398DB'],
                                tooltip: {
                                    trigger: 'axis',
                                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                                    }
                                },
                                grid: {
                                    left: '3%',
                                    right: '4%',
                                    bottom: '3%',
                                    top: '10%',
                                    containLabel: true
                                },
                                xAxis: [
                                    {
                                        type: 'category',
                                        data: ['Mon', 'Tue', 'Wed', 'Thu'],
                                        axisTick: {
                                            alignWithLabel: true
                                        }
                                    }
                                ],
                                yAxis: [
                                    {
                                        type: 'value'
                                    }
                                ],
                                series: [
                                    {
                                        name: '直接访问',
                                        type: 'bar',
                                        barWidth: '60%',
                                        data: [10, 52, 20, 34],
                                        itemStyle: {
                                            normal: {
                                                color: '#7fb7ef'
                                            }
                                        }
                                    }
                                ]
                            }} height={300}
                            />
                        </View>
                    </View>
                    <View style={{ marginTop: 15, backgroundColor: '#fff', paddingBottom: 10 }}>
                        <View>
                            <Text style={{ fontSize: 18, marginLeft: 20, marginTop: 10 }}>
                                内容预警
                                </Text>
                        </View>
                        <View style={{ paddingHorizontal: 5 }}>
                            <DataTabel></DataTabel>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const style = StyleSheet.create({
    priceHeader: {
        color: 'red',
        fontSize: 32,
        fontWeight: 'bold'
    }
})
