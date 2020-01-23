import React, { Component } from 'react'
import { SafeAreaView, StyleSheet, View, Text, ScrollView, ImageBackground, Image, StatusBar, Platform, TouchableHighlight } from 'react-native'
import { Icon, WhiteSpace, WingBlank, Card } from '@ant-design/react-native'
import { createStackNavigator } from 'react-navigation-stack'
import Test from './Test'
import Details from './Details'

const STATUS_BAR_HEIGHT = StatusBar.currentHeight
const STATUS_BAR_HEIGHT3 = StatusBar.currentHeight * 3
class Homepage extends Component {
    constructor(props) {
        super(props)
    }
    static navigationOptions = {
        header: null
    };
    render() {
        console.disableYellowBox = true
        return (
            <View style={styles.home}>
                <StatusBar translucent={true} backgroundColor="transparent" />
                <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                    <View style={{ height: 200 }}>
                        <ImageBackground source={require('./img/banner.png')} style={{ flex: 1 }} resizeMode='stretch'>
                            <WhiteSpace style={{ marginTop: STATUS_BAR_HEIGHT }} />
                            <WingBlank size="lg">
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                    <Text style={{ fontSize: 20, color: '#fff' }}>
                                        智慧价格
                                    </Text>
                                    <Icon name="bell" size="md" color="#fff" />
                                </View>
                            </WingBlank>
                        </ImageBackground>
                    </View>

                    <WingBlank size="lg">

                        <View style={{ marginTop: -70, height: 100, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TouchableHighlight style={{ width: '49%', height: 100, borderRadius: 8 }} onPress={() => this.props.navigation.navigate('Test')}>
                                <View style={{ width: '100%', height: "100%", backgroundColor: '#e9eff9', borderRadius: 8 }}>
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                                        <View style={{ height: '100%', justifyContent: 'space-around' }}>
                                            <Text style={{ marginTop: 5, color: '#3a7be5', fontSize: 18, fontWeight: 'bold' }}>价格预警</Text>
                                            <Text style={{ marginBottom: 5, color: '#428bdf' }}>维护物价的稳定</Text>
                                        </View>
                                        <Image source={require('./img/信用卡账单icon.png')} style={{ height: '100%', width: 50 }} resizeMode='contain' />
                                    </View>
                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight style={{ width: '49%', height: 100, borderRadius: 8 }} onPress={() => this.props.navigation.navigate('Details')}>
                                <View style={{ width: '100%', height: "100%", backgroundColor: '#e9eff9', borderRadius: 8 }}>
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                                        <View style={{ height: '100%', justifyContent: 'space-around' }}>
                                            <Text style={{ marginTop: 5, color: '#6e4300', fontSize: 18, fontWeight: 'bold' }}>价格预测</Text>
                                            <Text style={{ marginBottom: 5, color: '#6d4c1a' }}>价格趋势测算</Text>
                                        </View>
                                        <Image source={require('./img/还款icon.png')} style={{ height: '100%', width: 50 }} resizeMode='contain' />
                                    </View>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </WingBlank>

                    <WhiteSpace size="lg" />
                    <WingBlank size="lg">
                        <View style={{ elevation: 5, backgroundColor: '#fff', borderRadius: 10, paddingTop: 10, paddingBottom: 10 }}>
                            <View style={{ height: 60, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ height: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Image source={require('./img/商品预警.png')} style={{ height: '100%', marginLeft: -30 }} resizeMode='contain' />
                                    <View style={{ marginLeft: -30, justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 18, color: '#333', marginBottom: 5 }}>
                                            商品预警
                                            </Text>
                                        <Text style={{ fontSize: 14, color: '#b2b2b2' }}>
                                            商品预警详情
                                            </Text>
                                    </View>
                                </View>
                                <View style={{ justifyContent: 'center' }}>
                                    <Image source={require('./img/返回.png')} style={{ width: 15, height: 15, marginRight: 5 }} />
                                </View>
                            </View>
                            <WhiteSpace />
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10, marginBottom: 13 }}>
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={{ fontSize: 18, color: '#333', paddingBottom: 10 }}>苹果</Text>
                                    <Text style={{ fontSize: 14, color: '#fff', backgroundColor: '#eb0027', padding: 3, borderRadius: 4 }}>红色</Text>
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={{ fontSize: 18, color: '#333', paddingBottom: 10 }}>5元/斤</Text>
                                    <Text style={{ fontSize: 14, color: '#a8a8a8' }}>2元/斤</Text>
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ fontSize: 18, color: '#333', paddingBottom: 10 }}>1.26%</Text>
                                        <Icon name="rise" size="md" color="green" />
                                    </View>
                                    <Text style={{ fontSize: 14, color: '#a8a8a8' }}>环比-0.00%</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10, marginBottom: 13 }}>
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={{ fontSize: 18, color: '#333', paddingBottom: 10 }}>苹果</Text>
                                    <Text style={{ fontSize: 14, color: '#fff', backgroundColor: '#eb0027', padding: 3, borderRadius: 4 }}>红色</Text>
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={{ fontSize: 18, color: '#333', paddingBottom: 10 }}>5元/斤</Text>
                                    <Text style={{ fontSize: 14, color: '#a8a8a8' }}>2元/斤</Text>
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ fontSize: 18, color: '#333', paddingBottom: 10 }}>1.26%</Text>
                                        <Icon name="rise" size="md" color="green" />
                                    </View>
                                    <Text style={{ fontSize: 14, color: '#a8a8a8' }}>环比-0.00%</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10 }}>
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={{ fontSize: 18, color: '#333', paddingBottom: 10 }}>苹果</Text>
                                    <Text style={{ fontSize: 14, color: '#fff', backgroundColor: '#f19300', padding: 3, borderRadius: 4 }}>橙色</Text>
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={{ fontSize: 18, color: '#333', paddingBottom: 10 }}>5元/斤</Text>
                                    <Text style={{ fontSize: 14, color: '#a8a8a8' }}>2元/斤</Text>
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ fontSize: 18, color: '#333', paddingBottom: 10 }}>1.26%</Text>
                                        <Icon name="fall" size="md" color="red" />
                                    </View>
                                    <Text style={{ fontSize: 14, color: '#a8a8a8' }}>环比-0.00%</Text>
                                </View>
                            </View>

                        </View>
                    </WingBlank>

                    <WhiteSpace size="lg" />
                    <WingBlank size="lg">
                        <View style={{ elevation: 5, backgroundColor: '#fff', borderRadius: 10, paddingTop: 10, paddingBottom: 10 }}>
                            <View style={{ height: 60, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ height: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Image source={require('./img/价格预测.png')} style={{ height: '100%', marginLeft: -30 }} resizeMode='contain' />
                                    <View style={{ marginLeft: -30, justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 18, color: '#333', marginBottom: 5 }}>
                                            价格预测
                                            </Text>
                                        <Text style={{ fontSize: 14, color: '#b2b2b2' }}>
                                            商品价格预测详情
                                            </Text>
                                    </View>
                                </View>
                                <View style={{ justifyContent: 'center' }}>
                                    <Image source={require('./img/返回.png')} style={{ width: 15, height: 15, marginRight: 5 }} />
                                </View>
                            </View>
                            <WhiteSpace size='lg' />
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10, marginBottom: 13 }}>
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={{ fontSize: 18, color: '#333', paddingBottom: 10 }}>苹果</Text>
                                    <Image source={require('./img/苹果(1).png')} style={{ height: 20 }} resizeMode='contain' />
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={{ fontSize: 18, color: '#333', paddingBottom: 10 }}>5元/斤</Text>
                                    <Text style={{ fontSize: 14, color: '#a8a8a8' }}>2元/斤</Text>
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ fontSize: 18, color: '#333', paddingBottom: 10 }}>1.26%</Text>
                                        <Icon name="rise" size="md" color="green" />
                                    </View>
                                    <Text style={{ fontSize: 14, color: '#a8a8a8' }}>环比-0.00%</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10, marginBottom: 13 }}>
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={{ fontSize: 18, color: '#333', paddingBottom: 10 }}>苹果</Text>
                                    <Image source={require('./img/香蕉.png')} style={{ height: 20 }} resizeMode='contain' />
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={{ fontSize: 18, color: '#333', paddingBottom: 10 }}>5元/斤</Text>
                                    <Text style={{ fontSize: 14, color: '#a8a8a8' }}>2元/斤</Text>
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ fontSize: 18, color: '#333', paddingBottom: 10 }}>1.26%</Text>
                                        <Icon name="rise" size="md" color="green" />
                                    </View>
                                    <Text style={{ fontSize: 14, color: '#a8a8a8' }}>环比-0.00%</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10 }}>
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={{ fontSize: 18, color: '#333', paddingBottom: 10 }}>苹果</Text>
                                    <Image source={require('./img/大蒜(1).png')} style={{ height: 20 }} resizeMode='contain' />
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={{ fontSize: 18, color: '#333', paddingBottom: 10 }}>5元/斤</Text>
                                    <Text style={{ fontSize: 14, color: '#a8a8a8' }}>2元/斤</Text>
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ fontSize: 18, color: '#333', paddingBottom: 10 }}>1.26%</Text>
                                        <Icon name="fall" size="md" color="red" />
                                    </View>
                                    <Text style={{ fontSize: 14, color: '#a8a8a8' }}>环比-0.00%</Text>
                                </View>
                            </View>
                        </View>
                    </WingBlank>

                    <WhiteSpace size="lg" />
                    <WingBlank size="lg">
                        <View style={{ elevation: 5, backgroundColor: '#fff', borderRadius: 10, paddingTop: 10, paddingBottom: 10 }}>
                            <View style={{ height: 60, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ height: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Image source={require('./img/商品舆情.png')} style={{ height: '100%', marginLeft: -30 }} resizeMode='contain' />
                                    <View style={{ marginLeft: -30, justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 18, color: '#333', marginBottom: 5 }}>
                                            商品舆情
                                            </Text>
                                        <Text style={{ fontSize: 14, color: '#b2b2b2' }}>
                                            商品舆情详情
                                            </Text>
                                    </View>
                                </View>
                                <View style={{ justifyContent: 'center' }}>
                                    <Image source={require('./img/返回.png')} style={{ width: 15, height: 15, marginRight: 5 }} />
                                </View>
                            </View>
                            <WhiteSpace size='lg' />
                            <View style={{ width: '100%', height: 100, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10, marginBottom: 13 }}>
                                <View style={{ width: '65%', height: '100%', justifyContent: 'space-between', paddingRight: 10 }}>
                                    <Text style={{ fontSize: 16, color: '#333' }}>伊朗一夜间调转枪口!重型火箭轮番袭击美大使馆,大批外交官...</Text>
                                    <Text style={{ fontSize: 14, color: '#b3b3b3' }}>在美国与其中东盟友还在为沙特石油...</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Icon name="fire" size="xs" color="#aeb0c2" />
                                            <Text style={{ color: '#aeb0c2', fontSize: 14, alignItems: 'center' }}>23456</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Icon name="qq" size="xs" color="#aeb0c2" />
                                            <Text style={{ color: '#aeb0c2', fontSize: 14, alignItems: 'center' }}>腾讯新闻</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Icon name="clock-circle" size="xs" color="#aeb0c2" />
                                            <Text style={{ color: '#aeb0c2', fontSize: 14, alignItems: 'center' }}>2019-08-08</Text>
                                        </View>
                                    </View>
                                </View>
                                <Image source={require('./img/图片.png')} style={{ width: '35%', height: '100%' }} />
                            </View>
                            <View style={{ height: 1, backgroundColor: '#ecedee', marginBottom: 13 }} />


                            <View style={{ width: '100%', height: 100, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10, marginBottom: 13 }}>
                                <View style={{ width: '65%', height: '100%', justifyContent: 'space-between', paddingRight: 10 }}>
                                    <Text style={{ fontSize: 16, color: '#333' }}>伊朗一夜间调转枪口!火箭轮番袭击美大使馆?</Text>
                                    <Text style={{ fontSize: 14, color: '#b3b3b3' }}>在美国与其中东盟友还在为沙特石油...</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Icon name="fire" size="xs" color="#aeb0c2" />
                                            <Text style={{ color: '#aeb0c2', fontSize: 14, alignItems: 'center' }}>23456</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Icon name="qq" size="xs" color="#aeb0c2" />
                                            <Text style={{ color: '#aeb0c2', fontSize: 14, alignItems: 'center' }}>腾讯新闻</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Icon name="clock-circle" size="xs" color="#aeb0c2" />
                                            <Text style={{ color: '#aeb0c2', fontSize: 14, alignItems: 'center' }}>2019-08-08</Text>
                                        </View>
                                    </View>
                                </View>
                                <Image source={require('./img/图片2.png')} style={{ width: '35%', height: '100%' }} />
                            </View>
                            <View style={{ height: 1, backgroundColor: '#ecedee', marginBottom: 13 }} />

                            <View style={{ width: '100%', height: 100, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10 }}>
                                <View style={{ width: '65%', height: '100%', justifyContent: 'space-between', paddingRight: 10 }}>
                                    <Text style={{ fontSize: 16, color: '#333' }}>伊朗一夜间调转枪口!火箭轮番袭击美大使馆?</Text>
                                    <Text style={{ fontSize: 14, color: '#b3b3b3' }}>在美国与其中东盟友还在为沙特石油...</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Icon name="fire" size="xs" color="#aeb0c2" />
                                            <Text style={{ color: '#aeb0c2', fontSize: 14, alignItems: 'center' }}>23456</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Icon name="qq" size="xs" color="#aeb0c2" />
                                            <Text style={{ color: '#aeb0c2', fontSize: 14, alignItems: 'center' }}>腾讯新闻</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Icon name="clock-circle" size="xs" color="#aeb0c2" />
                                            <Text style={{ color: '#aeb0c2', fontSize: 14, alignItems: 'center' }}>2019-08-08</Text>
                                        </View>
                                    </View>
                                </View>
                                <Image source={require('./img/图片3.png')} style={{ width: '35%', height: '100%' }} />
                            </View>

                        </View>
                    </WingBlank>

                    <WhiteSpace size="lg" />
                    <WingBlank size="lg">
                        <View style={{ elevation: 5, backgroundColor: '#fff', borderRadius: 10, paddingTop: 10, paddingBottom: 10 }}>
                            <View style={{ height: 60, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ height: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Image source={require('./img/商品分析报告.png')} style={{ height: '100%', marginLeft: -30 }} resizeMode='contain' />
                                    <View style={{ marginLeft: -30, justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 18, color: '#333', marginBottom: 5 }}>
                                            商品分析报告
                                            </Text>
                                        <Text style={{ fontSize: 14, color: '#b2b2b2' }}>
                                            商品分析报告详情
                                            </Text>
                                    </View>
                                </View>
                                <View style={{ justifyContent: 'center' }}>
                                    <Image source={require('./img/返回.png')} style={{ width: 15, height: 15, marginRight: 5 }} />
                                </View>
                            </View>
                            <WhiteSpace size='lg' />
                            <View style={{ width: '100%', height: 60, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10, marginBottom: 13 }}>
                                <View style={{ flex: 1, justifyContent: 'space-between' }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ backgroundColor: 'red', paddingLeft: 6, paddingRight: 6, borderRadius: 3, marginRight: 5 }}>1</Text>
                                        <Text style={{ fontSize: 16, color: '#333' }}>伊朗一夜间调转枪口!重火箭轮番袭击美大使馆?</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginLeft: 25 }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 15 }}>
                                            <Icon name="fire" size="xs" color="#aeb0c2" />
                                            <Text style={{ color: '#aeb0c2', fontSize: 14, alignItems: 'center' }}>23456</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Icon name="clock-circle" size="xs" color="#aeb0c2" />
                                            <Text style={{ color: '#aeb0c2', fontSize: 14, alignItems: 'center' }}>2019-08-08</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={{ height: 1, backgroundColor: '#ecedee', marginBottom: 13 }} />
                            <View style={{ width: '100%', height: 60, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10, marginBottom: 13 }}>
                                <View style={{ flex: 1, justifyContent: 'space-between' }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ backgroundColor: '#f97b00', paddingLeft: 6, paddingRight: 6, borderRadius: 3, marginRight: 5 }}>2</Text>
                                        <Text style={{ fontSize: 16, color: '#333' }}>伊朗一夜间调转枪口!重火箭轮番袭击美大使馆?</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginLeft: 25 }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 15 }}>
                                            <Icon name="fire" size="xs" color="#aeb0c2" />
                                            <Text style={{ color: '#aeb0c2', fontSize: 14, alignItems: 'center' }}>23456</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Icon name="clock-circle" size="xs" color="#aeb0c2" />
                                            <Text style={{ color: '#aeb0c2', fontSize: 14, alignItems: 'center' }}>2019-08-08</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={{ height: 1, backgroundColor: '#ecedee', marginBottom: 13 }} />
                            <View style={{ width: '100%', height: 60, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10 }}>
                                <View style={{ flex: 1, justifyContent: 'space-between' }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ backgroundColor: '#fbad00', paddingLeft: 6, paddingRight: 6, borderRadius: 3, marginRight: 5 }}>3</Text>
                                        <Text style={{ fontSize: 16, color: '#333' }}>伊朗一夜间调转枪口!重火箭轮番袭击美大使馆?</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginLeft: 25 }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 15 }}>
                                            <Icon name="fire" size="xs" color="#aeb0c2" />
                                            <Text style={{ color: '#aeb0c2', fontSize: 14, alignItems: 'center' }}>23456</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Icon name="clock-circle" size="xs" color="#aeb0c2" />
                                            <Text style={{ color: '#aeb0c2', fontSize: 14, alignItems: 'center' }}>2019-08-08</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </WingBlank>
                    <WhiteSpace style={{ marginTop: 10 }} />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
        backgroundColor: '#fff',
        // paddingTop:STATUS_BAR_HEIGHT
    }
})

const HomeStackNavigator = createStackNavigator(
    {
        Home: {
            screen: Homepage,
        },
        Test: {
            screen: Test,
        },
        Details: {
            screen: Details
        }
    }
)

export default HomeStackNavigator
