import React from 'react';
import {ScrollView, Text, View, TouchableOpacity, StatusBar} from 'react-native';
import {Icon, Tabs, WhiteSpace, WingBlank} from '@ant-design/react-native';

const renderContent = (tab, index) => {
  const style = {
    paddingVertical: 40,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#ddd',
  };
  const content = [1, 2, 3, 4, 5, 6, 7, 8].map(i => {
    return (
        <View key={`${index}_${i}`} style={style}>
          <Text>
            {tab.title} - {i}
          </Text>
        </View>
    );
  });
  return (
      <ScrollView style={{ backgroundColor: '#fff',flex:1 }}>
        <WhiteSpace size="lg" />
        <WingBlank size="lg">
          <View style={{flex: 1,flexDirection:'row',justifyContent:'space-between',paddingHorizontal: 20}}>
            <View style={{width:'33%'}}>
              <Text style={{color:'#B4B4B4',textAlign: 'left'}}>
                全部
              </Text>
            </View>
            <View style={{width:'33%'}}>
              <Text style={{color:'#B4B4B4',textAlign: 'center'}}>
                价格
              </Text>
            </View>
            <View style={{width:'33%'}}>
              <Text style={{color:'#B4B4B4',textAlign: 'right'}}>
                涨跌幅
              </Text>
            </View>
          </View>
          <View style={{flex:1,paddingTop: 10}}>
            {[1,1,1,1,1,1,1,1,1,1,1,1,1].map(item=>{
              return (
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10, marginBottom: 13 }}>
                    <View style={{ alignItems: 'center' }}>
                      <Text style={{ fontSize: 14, color: '#333', paddingBottom: 5 }}>苹果</Text>
                      <Text style={{ fontSize: 12, color: '#fff', backgroundColor: '#eb0027', padding: 3, borderRadius: 4 }}>红色</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                      <Text style={{ fontSize: 14, color: '#333', paddingBottom: 5 }}>5元/斤</Text>
                      <Text style={{ fontSize: 12, color: '#a8a8a8' }}>2元/斤</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                      <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 14, color: '#333', paddingBottom: 5 }}>1.26%</Text>
                        <Icon name="rise" size="md" color="green" />
                      </View>
                      <Text style={{ fontSize: 12, color: '#a8a8a8' }}>环比-0.00%</Text>
                    </View>
                  </View>
              )
            })}
          </View>
        </WingBlank>


        <View></View>
      </ScrollView>
  )
};
const STATUS_BAR_HEIGHT = StatusBar.currentHeight
const STATUS_BAR_HEIGHT3 = StatusBar.currentHeight * 3

export default class BasicTabsExample extends React.Component {

  static navigationOptions = {
    headerTitle: '商品预警',
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
    headerRight: <View />
  };

  render() {

    const tabs = [
      { title: 'First Tab' },
      { title: 'Second Tab' },
      { title: 'Third Tab' },
    ];

    const tabs2 = [
      { title: '蔬菜' },
      { title: '水果' },
      { title: '蛋类' },
      { title: '能源' },
      { title: '生猪' },
      { title: '天然气' },
      { title: '矿产' },
    ];

    const style = {
      alignItems: 'center',
      justifyContent: 'center',
      height: 150,
      backgroundColor: '#fff',
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Tabs tabs={tabs2} initialPage={0} tabBarPosition="top" tabBarActiveTextColor="#409EFF" tabBarUnderlineStyle={{backgroundColor:'transparent'}} tabBarTextStyle={{fontSize:16}}>
                    {renderContent}
                </Tabs>
            </View>
        </View>
    );
  }
}
export const title = 'Tabs';
export const description = 'Tabs example';
