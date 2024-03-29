import React, { useState } from "react";
import { View, Text, TouchableOpacity, ImageBackground, Image, TextInput, StyleSheet, StatusBar, ScrollView } from 'react-native'
import { icons, images } from '../constants/manager'
import AsyncStorage from "@react-native-async-storage/async-storage";


function LoginScreen({ navigation }) {
    const roles = ['Chủ tàu', 'Cán bộ']

    const [text, setText] = useState('')
    const [selectedRole, setSelectedRole] = useState('Chủ tàu');
    const [savePass, setSavePass] = useState(false)

    const phepCong = ({a,b})=>{
        return a+b;
    }

    AsyncStorage.setItem('key', 'value')
        .then(() => {
            console.log('Dữ liệu đã được lưu thành công!');
        })
        .catch((error) => {
            console.error('Lỗi khi lưu dữ liệu:', error);
        });

    return (

        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor={'white'} barStyle={"dark-content"} />
            <ImageBackground source={images.bglogin} resizeMode="stretch"
                style={{
                    width: '100%',
                    height: '100%'
                }}>

                {/* header */}
                <Text style={styles.loginText}>
                    ĐĂNG NHẬP
                </Text>
                {/* body */}
                <View style={{}}>

                    {/* radio check */}
                    <View style={styles.wrapCheckbox}>
                        {
                            roles.map((role, index) => (
                                <View key={role} style={{ flexDirection: 'row', alignItems: 'center', marginRight: index % 2 === 0 ? 20 : 0 }}>
                                    <TouchableOpacity style={styles.touchableCheckBox}
                                        onPress={() => setSelectedRole(role)}
                                    >
                                        {selectedRole === role && <Image source={icons.check} resizeMode="contain" style={{ height: 10, width: 10 }} />}
                                    </TouchableOpacity>
                                    <Text style={{ color: '#005F94', opacity: 10 }}>{role}</Text>
                                    {/* color: '#005F94' */}
                                </View>
                            ))
                        }
                    </View>

                    {/* TextInPut */}
                    <View>
                        <TextInput style={styles.textInput} placeholder="Số điện thoại" autoCapitalize="none" keyboardType="numeric"
                            value={text}
                            onChangeText={(textInput) => {
                                textInput.length <= 10 ? setText(textInput) : null
                            }} />
                        <TextInput style={styles.textInput} placeholder="Mật khẩu" autoCapitalize="none" secureTextEntry={true} />
                    </View>

                    <View>
                        {/* Lưu mật khẩu */}
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', marginRight: 10 }}>
                            <TouchableOpacity style={styles.touchableCheckBox}
                                onPress={() => setSavePass(!savePass)}
                            >
                                {
                                    savePass && <Image source={icons.check} resizeMode="contain" style={{ height: 10, width: 10 }} />

                                }

                            </TouchableOpacity>
                            <Text style={{ color: '#005F94' }}>Lưu mật khẩu</Text>
                        </View>

                        <TouchableOpacity style={{ backgroundColor: '#005F94', paddingHorizontal: 20, paddingVertical: 10, marginHorizontal: 100, borderRadius: 10, marginVertical: 40 }}
                            onPress={() => navigation.navigate('Home')}>
                            <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>Đăng nhập</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ marginHorizontal: 120 }} onPress={() => {
                            navigation.navigate('ForgetPass')
                        }}>
                            <Text style={{ color: '#005F94', textAlign: 'center' }}>Quên mật khẩu?</Text>
                        </TouchableOpacity>

                        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 40 }}>
                            <Text>Chủ tàu chưa có tải khoản? </Text>
                            <TouchableOpacity onPress={() => { navigation.push('Register') }}>
                                <Text style={{ fontWeight: 'bold', color: '#005F94' }}>Đăng ký ngay</Text>
                            </TouchableOpacity>
                            
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 40 }}>
                            <Text>cộng </Text>
                            <TouchableOpacity onPress={() => { phepCong }}>
                                <Text style={{ fontWeight: 'bold', color: '#005F94' }}>test</Text>
                            </TouchableOpacity>
                            
                        </View>
                    </View>
                    {/* fotter */}
                    <View style={{}}>

                    </View>
                </View>

            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    loginText: {
        color: '#005F94',
        fontSize: 24, fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 60,
        marginBottom: 40
    },
    textInput: {
        fontSize: 16,
        fontFamily: 'EduNSWACTFoundation-Medium',
        borderRadius: 10,
        borderWidth: 0.2,
        borderColor: 'gray',
        backgroundColor: 'white',
        margin: 10,
        textAlign: 'center',
        paddingVertical: 5
    },
    wrapCheckbox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    touchableCheckBox: {
        borderRadius: 4,
        borderWidth: 1,
        width: 15,
        height: 15,
        marginRight: 3,
        borderColor: '#005F94',
        justifyContent: 'center',
        alignItems: 'center'
    },

})

export default LoginScreen