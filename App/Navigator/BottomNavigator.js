import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Homepage from '../Pages/Homepage'
import Date from '../Pages/DateDetails'
import My from '../Pages/My'


const BottomNavigator = createBottomTabNavigator({
        价格监测: {
            screen: Homepage
        },
        在线调研: {
            screen: Date
        },
        我的: {
            screen: My
        }

    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent = Ionicons;
                let iconName;
                if (routeName === '价格监测') {
                    iconName = `ios-home`;
                } else if (routeName === '在线调研') {
                    iconName = `ios-options`;
                }else if(routeName === '我的'){
                    iconName = `ios-settings`;
                }

                // You can return any component that you like here!
                return <IconComponent name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: '#409EFF',  // 选中项的颜色
            inactiveTintColor: '#909399', // 未选中项的颜色
        },
        initialRouteName: '价格监测'
    }
)

export default BottomNavigator
