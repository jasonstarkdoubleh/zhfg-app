import React from 'react';
import { ScrollView, Text, View, TouchableOpacity, StatusBar, Dimensions, TouchableNativeFeedback, StyleSheet, Image } from 'react-native';
import { Tabs, Icon, InputItem, Button } from '@ant-design/react-native';
import { Echarts, echarts } from 'react-native-secharts';
import DataTabel from './Components/DataTabel/DataTabel';
import { createStackNavigator } from 'react-navigation-stack'
import Test from "./Test"
import GoodsMore from "./GoodsMore"
import BottomNavigator from "../Navigator/BottomNavigator"


const { width, height } = Dimensions.get('window')
const STATUS_BAR_HEIGHT = StatusBar.currentHeight
const STATUS_BAR_HEIGHT3 = StatusBar.currentHeight * 3
const scrollHeight = height - 140

class Login extends React.Component {

    static navigationOptions = {
        header: null
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
                    <View style={{marginHorizontal:20}}>
                        <Text style={{marginTop:'50%',fontSize: 28,color: '#000'}}>
                            欢迎回来!
                        </Text>
                        <View style={{marginTop:100}}>
                            <View style={{backgroundColor:'#f0f0f0'}}>
                                <InputItem
                                    clear
                                    value={this.state.value}
                                    onChange={value => {
                                        this.setState({
                                            value,
                                        });
                                    }}
                                    placeholder=""
                                >
                                    用户名:
                                </InputItem>
                            </View>
                            <View style={{backgroundColor:'#f0f0f0',marginTop:30}}>
                                <InputItem
                                    clear
                                    value={this.state.value}
                                    type="password"
                                    onChange={value => {
                                        this.setState({
                                            value,
                                        });
                                    }}
                                    placeholder=""
                                >
                                    密码:
                                </InputItem>
                            </View>
                        </View>
                        <Button
                            style={{marginTop:50}}
                            onPress={() => this.props.navigation.navigate('BottomNavigator')}
                            type="primary"
                        >
                            登陆
                        </Button>
                        <View style={{marginTop:20,alignItems:'flex-end'}}>
                            <Text style={{color:'#409EFF'}}>
                                忘记密码?
                            </Text>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'center',marginTop:100}}>
                            <Text>
                                暂不登录,
                            </Text>
                            <Text style={{color:'#409EFF'}}>
                                游客模式
                            </Text>
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

const LoginNavigator = createStackNavigator(
    {
        Home: {
            screen: Login,
        },
        BottomNavigator: {
            screen: BottomNavigator,
            navigationOptions: {
                header: null
            }
        }
    }
)

export default LoginNavigator
