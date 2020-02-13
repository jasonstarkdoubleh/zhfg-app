import React from 'react';
import { ScrollView, Text, View, TouchableOpacity, StatusBar, Dimensions, TouchableNativeFeedback, StyleSheet, ImageBackground } from 'react-native';
import { Tabs, Icon } from '@ant-design/react-native';
import { Echarts, echarts } from 'react-native-secharts';
import DataTabel from './Components/DataTabel/DataTabel';



const { width, height } = Dimensions.get('window')
const STATUS_BAR_HEIGHT = StatusBar.currentHeight
const STATUS_BAR_HEIGHT3 = StatusBar.currentHeight * 3
const scrollHeight = height - 140

export default class GoodsMore extends React.Component {

  static navigationOptions = {
    headerTitle: '小麦',
    headerStyle: {
      height: STATUS_BAR_HEIGHT3,
      paddingTop: STATUS_BAR_HEIGHT,
      backgroundColor: '#2690fb',
      borderBottomWidth: 0,
      elevation: 0,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      alignSelf: 'center',
      flex: 1,
      textAlign: 'center'
    },
    headerRight: <View />
  };

  state = {
    colorArray: ['近一月', '近三月', '近一年', '今年以来'],
    touchColor: '近一月',
    tabs: [
      { title: '常规预警' },
      { title: '非常规预警' },
      { title: '舆情预警' },
    ]
  }

  componentDidMount() {

  }

  handleChange = (item) => {
    this.setState({
      touchColor: item
    })
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#f9f9f9' }}>
        <View style={{ height: 150, width:'100%',backgroundColor: '#2690fb', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          {[1, 2, 3].map(item => {
            return (
              <View style={{ width: '33%', height: '100%', alignItems: 'center' }}>
                <Text style={{ fontSize: 18, color: '#fff', marginTop: 30, fontWeight: '600' }}>
                  34
                </Text>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                  <Icon name="pay-circle" size="md" color="#fff"/>
                  <Text style={{ fontSize: 16, color: '#fff', marginLeft: 2 }}>
                    当前价格
                  </Text>
                </View>
              </View>
            )
          })}
        </View>
        <Tabs tabs={this.state.tabs} swipeable={false} animated={false} tabBarInactiveTextColor="#ccc">
          <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
            <View>
              <View style={{ backgroundColor: '#fff', paddingTop: 20, paddingBottom: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginHorizontal: 10 }}>
                  {this.state.colorArray.map(item => {
                    return (
                      <TouchableNativeFeedback onPress={() => { this.handleChange(item) }} key={item}>
                        <Text style={item === this.state.touchColor ? style.touchColor : style.defaultColor} >
                          {item}
                        </Text>
                      </TouchableNativeFeedback>
                    )
                  })}
                </View>
                <View style={{ paddingHorizontal: 10 }}>
                  <Echarts option={{
                    tooltip: {
                      trigger: 'axis'
                    },
                    grid: {
                      left: '3%',
                      right: '4%',
                      bottom: '3%',
                      top: '10%',
                      containLabel: true
                    },
                    xAxis: {
                      type: 'category',
                      boundaryGap: false,
                      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                      axisLabel: {
                        formatter: function (val) {
                          if (val === '周一' || val === '周日') {
                            return val
                          }
                          else {
                            return ''
                          }
                        }
                      }
                    },
                    yAxis: {
                      type: 'value'
                    },
                    series: [
                      {
                        name: '邮件营销',
                        type: 'line',
                        stack: '总量',
                        data: [120, 132, 101, 134, 90, 230, 210]
                      },
                      {
                        name: '联盟广告',
                        type: 'line',
                        stack: '总量',
                        data: [220, 182, 191, 234, 290, 330, 310]
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
                            color: '#ccc'
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
                <View style={{ paddingHorizontal: 5, marginBottom: 20 }}>
                  <DataTabel></DataTabel>
                </View>
              </View>

            </View>
          </ScrollView>
          <View>
            <Text>Content of Second Tab</Text>
          </View>
          <View>
            <Text>Content of Third Tab</Text>
          </View>
        </Tabs>
        <View style={style.fixedStyle}>
          <View>
            <Text style={{ color: 'black' }}>
              涨幅度
            </Text>
          </View>
          <View style={{ flexDirection: 'row', marginLeft: 30, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: 'green' }}>
              1.26%
            </Text>
            <Icon name="rise" size="md" color="green" />
          </View>
          <View style={{ flexDirection: 'row', marginLeft: 30, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: 'red' }}>
              1.26%
            </Text>
            <Icon name="fall" size="md" color="red" />
          </View>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  touchColor: {
    color: '#000',
    fontSize: 16,
    backgroundColor: "#ccc",
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 3
  },
  defaultColor: {
    color: '#ccc',
    fontSize: 16,
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 3
  },
  fixedStyle: {
    height: 30,
    width: width,
    position: 'absolute',
    top: scrollHeight,
    left: 0,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    elevation: 5,
  }
})
