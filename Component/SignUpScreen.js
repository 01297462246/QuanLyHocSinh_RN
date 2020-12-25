import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, Demensions, Dimensions, Button, TextInput, TouchableOpacity,SafeAreaView, ScrollView } from 'react-native'
const { width, height } = Dimensions.get('window')
export default class SignUpScreen extends React.Component {

    static navigationOptions = {
        title: 'Signup',
    };

    state = { user: '', email: '', password: '', errorMessage: null }
    handleSignUp = () => {
        // TODO: Firebase stuff...
        console.log('handleSignUp')
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: "column", position: 'relative', marginBottom: 20, marginLeft: 20, marginRight: 20 }}>
                    {/* Ảnh nền */}
                    <View style={{ flex: 1, position: 'relative' }}>
                        <Image source={require('../assets/logo_TDC(4).png')}
                            style={{ width: width, height: height }}
                            resizeMode='stretch'
                        />
                    </View>
                    {/* Status + Tên Khoa */}
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
                    {/* Form Input + Button */}
                    <View style={{ flex: 1 }}>
                        <View style={styles.tp_User} >
                            <TextInput
                                style={{ borderColor: 'black', borderStyle: 'solid', fontSize: 20 }}
                                textAlign='left'
                                secureTextEntry
                                placeholder="Tài khoản"
                                onChangeText={email => this.setState({ user })}
                                value={this.state.user} />
                        </View>
                        <View style={styles.tp_User} >
                            <TextInput
                                style={{ borderColor: 'black', borderStyle: 'solid', fontSize: 20 }}
                                textAlign='left'
                                secureTextEntry
                                placeholder="Email"
                                onChangeText={email => this.setState({ email })}
                                value={this.state.email} />
                        </View>
                        <View style={styles.tp_Pass}>
                            <TextInput
                                style={{ borderColor: 'black', borderStyle: 'solid', fontSize: 20 }}
                                textAlign='left'
                                secureTextEntry
                                placeholder="Mật khẩu"
                                passwordRules={true}
                                onChangeText={password => this.setState({ password })}
                                value={this.state.password} />
                        </View>
                        <View style={{marginTop:10, flex: 1, left: 100, borderWidth: 1, borderRadius: 35, width: 170, borderStyle: 'solid', borderColor: 'white', alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()} >
                                <Text style={{ flex: 1, color: 'white', fontSize: 40, fontWeight: 'bold', alignItems: 'center', justifyContent: 'center' }}> SIGN UP</Text>
                            </TouchableOpacity>
                        </View>
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
        flex:1,
        borderColor: '#0099ff',
        borderWidth: 1,
        marginTop: 20,
        backgroundColor: 'white',
        width: 300,
        height: 60,
        marginHorizontal: 20,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        left: 15
    },
    tp_Pass: {
        flex:1,
        borderColor: '#0099ff',
        borderWidth: 1,
        marginTop: 20,
        backgroundColor: 'white',
        width: 300,
        height: 60,
        marginHorizontal: 20,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 20,
        left: 15
    },
    btnSignIn: {
        flex:1,
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