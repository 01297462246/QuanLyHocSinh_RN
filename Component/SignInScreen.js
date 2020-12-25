import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, Demensions, Dimensions, Button, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
const { width, height } = Dimensions.get('window')

export default class SignInScreen extends React.Component {

    static navigationOptions = {
        title: 'SignIn',
    };

    
    
    // constructor(nameScreen){
    //     this.nameScreen = nameScreen;
    // }

    // static navigationOptions = {
    //     title: 'Signin',
    // };

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, flexDirection: "column", position: 'relative', marginBottom: 20, marginLeft: 20, marginRight: 20 }}>
                    <View style={{ flex: 1, position: 'relative' }}>
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
                        <View style={{ flexDirection: 'column', position: 'relative' }}>
                            <Text style={{ fontFamily: 'sans-serif', fontWeight: 'normal', fontSize: 20, color: 'black', top: 35, left: 20 }}>KHOA</Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 30, color: 'black', top: 30, left: 25, right: 5, color: '#004f79', textDecorationLine: 'underline', textDecorationColor: '#004f79' }}>CÔNG NGHỆ </Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 30, color: 'black', top: 25, left: 50, color: '#004f79', textDecorationLine: 'underline', textDecorationColor: '#004f79' }}>THÔNG TIN</Text>
                        </View>
                    </View>
                    <View style={{ flex: 8 }}>
                        <View style={styles.tp_User} >
                            <TextInput
                                style={{ borderColor: 'black', borderStyle: 'solid', fontSize: 20 }}
                                textAlign='left'
                                secureTextEntry
                                placeholder="Tài khoản" />
                        </View>
                        <View style={styles.tp_Pass}>
                            <TextInput
                                style={{ borderColor: 'black', borderStyle: 'solid', fontSize: 20 }}
                                textAlign='left'
                                secureTextEntry
                                placeholder="Mật khẩu"
                                passwordRules={true} 
                                />
                        </View>
                    </View>
                    <View style={{ flex: 1, top: 0, left: 100, borderWidth: 1, borderRadius: 35, width: 170, borderStyle: 'solid', borderColor: 'white', alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()} >
                            <Text style={{ color: 'white', fontSize: 40, fontWeight: 'bold', alignItems: 'center', justifyContent: 'center' }}> SIGN IN</Text>
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
    tp_User: {
        borderColor: '#0099ff',
        borderWidth: 1,
        marginTop: 20,
        width: 300,
        height: 60,
        marginHorizontal: 20,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        top: 200,
        left: 15
    },
    tp_Pass: {
        borderColor: '#0099ff',
        borderWidth: 1,
        marginTop: 20,
        width: 300,
        height: 60,
        marginHorizontal: 20,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 20,
        top: 200,
        left: 15
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
})