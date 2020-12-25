import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen'
import SignUpScreen from './SignUpScreen'
import SignInScreen from './SignInScreen'

// const Stack = createStackNavigator({
//     Login: { screen: LoginScreen },
//     Signup: { screen: SignUpScreen },
//     Signin: { screen: SignInScreen },
// });

function cacheImages(images){
    return images.map(image => {
        if(typeof image === 'string') return Image.prefetch(image);
        else return Asset.fromModule(image).downloadAsync();
    })
}
const Stack = createStackNavigator();
export default class HomeNavigation extends React.Component{
    
    constructor(){
        super()
        this.state = {
            isReady: false
        }
    }
    async _loadAssetsAsync(){
        const imageAssets = cacheImages([require('../assets/icon_TDC.png')])
        await Promise.all([...imageAssets]);
    }
    render(){
        // if(!this.state.isReady){
        //     return (
        //         <AppLoading
        //             startAsync = {this._loadAssetsAsync}
        //             onfinish={()=> this.setState({isReady:true})}
        //             onEror={console.warn}/>
        //     )
        // }
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName={'LogIn'} screenOptions={{headerShown: false}}  >
                    <Stack.Screen name="LogIn" component={LoginScreen} options={{ title: 'Login Screen' }}>
                       {/*  {props => <LoginScreen {...props} extraData={someData} />} */}
                    </Stack.Screen>
                    <Stack.Screen name="SignIn" component={SignInScreen} />
                    <Stack.Screen name="SignUp" component={SignUpScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }    
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})