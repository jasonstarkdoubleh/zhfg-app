import React from 'react'
import {SafeAreaView,Text} from 'react-native'
import {createStackNavigator} from "react-navigation-stack"

class Welcome extends React.Component{
    componentDidMount() {
        setTimeout(()=>{
            this.props.navigation.navigate('Main')
        },1000)
    }


    render() {
        return (
            <SafeAreaView style={{flex:1,backgroundColor:'#409EFF',justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'#fff',fontSize:30,letterSpacing:5}}>
                    智慧发改
                </Text>
            </SafeAreaView>
        )
    }
}

const WelcomeNavigator =  createStackNavigator({
    Welcome:{
        screen: Welcome,
        navigationOptions:{
            header: null
        }
    }
})

export default WelcomeNavigator
