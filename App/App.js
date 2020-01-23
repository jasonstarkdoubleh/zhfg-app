import React,{Component} from 'react'
import {View} from 'react-native'
import AppNavigator from './Navigator/AppNavigator'
import HomeStackNavigator from './Pages/Homepage'
import { createAppContainer } from 'react-navigation';

const ContainNavigator = createAppContainer(HomeStackNavigator)

class App extends Component{
    render() {
        console.disableYellowBox = true
        return (
            <View style={{flex:1}}>
                <AppNavigator></AppNavigator>
                {/* <ContainNavigator></ContainNavigator> */}
            </View>

        )
    }
}

export default App
