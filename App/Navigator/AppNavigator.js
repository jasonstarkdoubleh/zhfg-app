import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import WelcomeNavigator from "../Pages/Welcome"
import LoginNavigator from "../Pages/Login"


const SwitchNavigator = createSwitchNavigator({
    Init: WelcomeNavigator,
    Main: LoginNavigator
})

export default createAppContainer(SwitchNavigator)
