import React from 'react';
import { View,Text,StatusBar,Image,ScrollView,ImageBackground,TouchableHighlight  } from 'react-native';
import {Calendar,LocaleConfig} from 'react-native-calendars'
import {Icon,WhiteSpace,WingBlank,Button} from '@ant-design/react-native'
import {createStackNavigator} from 'react-navigation-stack'

const STATUS_BAR_HEIGHT = StatusBar.currentHeight
class My extends React.Component{
    onClick(){

    }
    render() {
        return  (
            <View style={{flex:1,backgroundColor:'#f9f9f9'}}>
                <StatusBar translucent={true} backgroundColor="transparent"/>
                <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
                    <View style={{height:200}}>
                        <ImageBackground source={require('./img/mybanner.png')} style={{flex:1}} resizeMode='stretch'>
                            <View style={{marginTop:STATUS_BAR_HEIGHT,alignItems:'center'}}>
                                <View style={{marginTop:25}}>
                                    <Image source={require('../Pages/img/头像.png')} style={{height:80,width:80}} resizeMode='contain'/>
                                </View>
                                <Text style={{marginTop:20,fontSize:20,color:'#fff',letterSpacing: 5}}>发改委</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{marginTop:20}}>
                        <TouchableHighlight onPress = { this.onClick }>
                            <View style={{height:50,backgroundColor:'#fff'}}>
                                <WingBlank>
                                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                        <View style={{flexDirection:'row',alignItems:'center',marginLeft:20}}>
                                            <Image source={require('./img/身份认证.png')} style={{width: 28, height: 28, marginRight: 5}}/>
                                            <Text style={{lineHeight:50,fontSize:18,marginLeft:5,color:'#333'}}>
                                                身份认证
                                            </Text>
                                        </View>
                                        <View style={{justifyContent:'center'}}>
                                            <Image source={require('./img/返回.png')} style={{width: 15, height: 15}}/>
                                        </View>
                                    </View>
                                </WingBlank>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View style={{height:30}}>
                        <Text style={{color:'#b3b3b3',marginLeft:20,lineHeight:30}}>
                            用户数据
                        </Text>
                    </View>
                    <View>
                        <TouchableHighlight onPress = { this.onClick }>
                            <View style={{height:50,backgroundColor:'#fff'}}>
                                <WingBlank>
                                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                        <View style={{flexDirection:'row',alignItems:'center',marginLeft:20}}>
                                            <Image source={require('./img/我的会议.png')} style={{width: 28, height: 28, marginRight: 5}}/>
                                            <Text style={{lineHeight:50,fontSize:18,marginLeft:5,color:'#333'}}>
                                                我的会议
                                            </Text>
                                        </View>
                                        <View style={{justifyContent:'center'}}>
                                            <Image source={require('./img/返回.png')} style={{width: 15, height: 15}}/>
                                        </View>
                                    </View>
                                </WingBlank>
                            </View>
                        </TouchableHighlight>
                        <View style={{height: 1, backgroundColor: '#ececec', marginLeft: 35}}/>
                        <TouchableHighlight onPress = { this.onClick }>
                            <View style={{height:50,backgroundColor:'#fff'}}>
                                <WingBlank>
                                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                        <View style={{flexDirection:'row',alignItems:'center',marginLeft:20}}>
                                            <Image source={require('./img/新增预警.png')} style={{width: 28, height: 28, marginRight: 5}}/>
                                            <Text style={{lineHeight:50,fontSize:18,marginLeft:5,color:'#333'}}>
                                                新增预警
                                            </Text>
                                        </View>
                                        <View style={{justifyContent:'center'}}>
                                            <Image source={require('./img/返回.png')} style={{width: 15, height: 15}}/>
                                        </View>
                                    </View>
                                </WingBlank>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View style={{height:30}}>
                        <Text style={{color:'#b3b3b3',marginLeft:20,lineHeight:30}}>
                            新消息
                        </Text>
                    </View>
                    <View>
                        <TouchableHighlight onPress = { this.onClick }>
                            <View style={{height:50,backgroundColor:'#fff'}}>
                                <WingBlank>
                                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                        <View style={{flexDirection:'row',alignItems:'center',marginLeft:20}}>
                                            <Image source={require('./img/消息.png')} style={{width: 28, height: 28, marginRight: 5}}/>
                                            <Text style={{lineHeight:50,fontSize:18,marginLeft:5,color:'#333'}}>
                                                系统消息
                                            </Text>
                                        </View>
                                        <View style={{justifyContent:'center'}}>
                                            <Image source={require('./img/返回.png')} style={{width: 15, height: 15}}/>
                                        </View>
                                    </View>
                                </WingBlank>
                            </View>
                        </TouchableHighlight>

                        <View style={{height: 1, backgroundColor: '#ececec', marginLeft: 35}}/>
                        <TouchableHighlight onPress = { this.onClick }>
                            <View style={{height:50,backgroundColor:'#fff'}}>
                                <WingBlank>
                                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                        <View style={{flexDirection:'row',alignItems:'center',marginLeft:20}}>
                                            <Image source={require('./img/设置.png')} style={{width: 28, height: 28, marginRight: 5}}/>
                                            <Text style={{lineHeight:50,fontSize:18,marginLeft:5,color:'#333'}}>
                                                设置
                                            </Text>
                                        </View>
                                        <View style={{justifyContent:'center'}}>
                                            <Image source={require('./img/返回.png')} style={{width: 15, height: 15}}/>
                                        </View>
                                    </View>
                                </WingBlank>
                            </View>
                        </TouchableHighlight>
                    </View>
                </ScrollView>
                <WhiteSpace style={{marginTop:10}}/>
            </View>
        )
    }
}

const MyNavigator = createStackNavigator(
    {
        My: {
            screen: My,
            navigationOptions:({ navigation, screenProps }) =>  {
                return {
                    headerTransparent: true,
                }
            }
        },
        
    }
)

export default MyNavigator
