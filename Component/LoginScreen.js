import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet, Image, Demensions, Dimensions, Button, TouchableOpacity } from 'react-native'
import SignUpScreen from './SignUpScreen'
import SignInScreen from './SignInScreen'
const { width, height } = Dimensions.get('window')

const Stack = createStackNavigator();

export default class LoginScreen extends Component {

    static navigationOptions = {
        title: 'Login',
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 3, position: 'relative' }}>
                    <Image source={require('../assets/logo_TDC(4).png')}
                        style={{ width: width, height: height }}
                        resizeMode='stretch'
                    />
                </View>
                <View style={{ flex: 2, position: 'absolute', top: 50, left: 80, flexDirection: 'row' }}>
                    <Image source={require('../assets/icon_TDC.png')}
                        style={{ width: 0.2 * width, height: 0.2 * height }}
                        resizeMode='center'
                    />
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ fontFamily: 'sans-serif', fontWeight: 'normal', fontSize: 20, color: 'black', top: 35, left: 20 }}>KHOA</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 30, color: 'black', top: 30, left: 25, right: 5, color: '#004f79', textDecorationLine: 'underline', textDecorationColor: '#004f79' }}>CÔNG NGHỆ </Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 30, color: 'black', top: 25, left: 50, color: '#004f79', textDecorationLine: 'underline', textDecorationColor: '#004f79' }}>THÔNG TIN</Text>
                    </View>
                </View>
                <View style={{ flex: 2 }}>
                    <View >
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('SignIn',{})} style={styles.btnSignIn}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}>SIGN IN</Text>
                        </TouchableOpacity>
                    </View>
                    <View >
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')} style={styles.btnSignUp}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black' }}>SIGN UP</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnSignIn: {
        marginTop: 20,
        backgroundColor: '#0099ff',
        width: 300,
        height: 60,
        marginHorizontal: 20,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnSignUp: {
        marginTop: 20,
        backgroundColor: 'white',
        width: 300,
        height: 60,
        marginHorizontal: 20,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
    }
})