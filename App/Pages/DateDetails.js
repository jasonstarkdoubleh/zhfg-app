import React, {Component} from 'react';
import { View,Text,StatusBar,Image,ScrollView } from 'react-native';
import {Calendar,LocaleConfig} from 'react-native-calendars'
import {Icon,WhiteSpace,WingBlank} from '@ant-design/react-native'
import {createStackNavigator} from 'react-navigation-stack'

const STATUS_BAR_HEIGHT = StatusBar.currentHeight
// 日历组件 中文替换
// ['日','一','二','三','四','五','六']
LocaleConfig.locales['fr'] = {
    monthNames: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
    monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
    dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
    dayNamesShort: ['SU','M','T','W','TH','F','S']
};
LocaleConfig.defaultLocale = 'fr';
// 日历组件 标记点的颜色
const vacation = {key:'vacation', color: '#d94d64', selectedDotColor: '#d94d64'};
const arr = ['2019-12-11','2019-12-12','2019-12-13']
const val = {}
arr.forEach(item => {
    val[item] = {dots: [vacation]}
})

class DateDetails extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            date : val
        }
        this.onChange = date => {
            let target = Object.assign({},val)
            target[date.dateString] = {selected: true, selectedColor: '#5957cc'}
            // val[date.dateString] = {dots: [vacation]}
            this.setState({
                date : target
            })
        }
    }
    render() {
        return(
            <View style={{flex:1}}>
                <StatusBar translucent={true} backgroundColor="transparent"/>
                <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
                    <View style={{backgroundColor: '#71a0ff'}}>
                        <View style={{marginTop:STATUS_BAR_HEIGHT}}>
                            <Text style={{color:'#fff',fontSize:70,fontWeight: 'bold',textAlign: 'center'}}>
                                23
                            </Text>
                            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                                <Text style={{color:'#fff',marginRight:30}}>
                                    ·
                                </Text>
                                <Text style={{color:'#fff'}}>
                                    有两个行程
                                </Text>
                                <Text style={{color:'#fff',marginLeft:30}}>
                                    ·
                                </Text>
                            </View>
                        </View>
                        <WhiteSpace size={'lg'}/>
                        <View>
                            <Calendar
                                monthFormat = { ' yyyy MM ' }
                                markedDates={this.state.date}
                                markingType={'multi-dot'}
                                hideArrows={false}
                                firstDay={1}
                                onDayPress={day => {this.onChange(day)}}
                                theme={{
                                    backgroundColor: '#ffffff',
                                    calendarBackground: '#71a0ff',
                                    textSectionTitleColor: '#ffffff',
                                    selectedDayBackgroundColor: '#00adf5',
                                    selectedDayTextColor: '#ffffff',
                                    todayTextColor: 'orange',
                                    dayTextColor: '#ffffff',
                                    textDisabledColor: '#d9e1e8',
                                    dotColor: '#00adf5',
                                    selectedDotColor: '#ffffff',
                                    arrowColor: 'orange',
                                    monthTextColor: '#ffffff',
                                    indicatorColor: 'blue',
                                    textDayFontFamily: 'monospace',
                                    textMonthFontFamily: 'monospace',
                                    textDayHeaderFontFamily: 'monospace',
                                    textDayFontWeight: '300',
                                    textMonthFontWeight: 'bold',
                                    textDayHeaderFontWeight: '300',
                                    textDayFontSize: 16,
                                    textMonthFontSize: 16,
                                    textDayHeaderFontSize: 16
                                }}
                            />
                        </View>
                        <View style={{height:30}}>

                        </View>
                    </View>
                    <WingBlank>
                        <View style={{elevation:5,backgroundColor:'#fff',marginTop:-20,borderRadius:10}}>
                            <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:-1}}>
                                <Image source={require('./img/1.png')} style={{height: 12, width: 6}} resizeMode='stretch'/>
                                <Image source={require('./img/1.png')} style={{height: 12, width: 6}} resizeMode='stretch'/>
                                <Image source={require('./img/1.png')} style={{height: 12, width: 6}} resizeMode='stretch'/>
                                <Image source={require('./img/1.png')} style={{height: 12, width: 6}} resizeMode='stretch'/>
                            </View>
                            <WhiteSpace style={{marginTop:20}}/>
                            <WingBlank>
                                <Text style={{marginBottom:10,fontSize:16}}>
                                    工作日程
                                </Text>
                                <View style={{marginBottom:15,flexDirection:'row',alignItems:'center'}}>
                                    <Icon name="carry-out" size="lg" color="#71a0ff" />
                                    <View style={{marginLeft:10}}>
                                        <Text style={{color:'#ccc',fontSize:16}}>
                                            12-23 10:00
                                        </Text>
                                        <Text style={{fontSize:18}}>
                                            关于猪肉涨价主题展开会议
                                        </Text>
                                    </View>
                                </View>
                                <View style={{marginBottom:15,flexDirection:'row',alignItems:'center'}}>
                                    <Icon name="carry-out" size="lg" color="#71a0ff" />
                                    <View style={{marginLeft:10}}>
                                        <Text style={{color:'#ccc',fontSize:16}}>
                                            12-23 16:00
                                        </Text>
                                        <Text style={{fontSize:18}}>
                                            原油期货主题会议
                                        </Text>
                                    </View>
                                </View>
                            </WingBlank>
                        </View>
                    </WingBlank>
                    <WhiteSpace style={{marginTop:10}}/>
                </ScrollView>
            </View>
        )
    }
}

const DateNavigator = createStackNavigator(
    {
        DateDetails: {
            screen: DateDetails,
            navigationOptions:({ navigation, screenProps }) =>  {
                return {
                    headerTransparent: true,
                }
            }
        }
    }
)


export default DateNavigator
