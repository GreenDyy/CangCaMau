import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ImageBackground, Image, TextInput, StyleSheet, StatusBar, ScrollView, Alert } from 'react-native'
import { icons, images } from '../constants/manager'
import AsyncStorage from "@react-native-async-storage/async-storage";


function LoginScreen({ navigation }) {
    const roles = ['Chủ tàu', 'Cán bộ']

    const [text, setText] = useState('')
    const [selectedRole, setSelectedRole] = useState('Chủ tàu');
    const [savePass, setSavePass] = useState(false)

    const myProfile = {
        user: 'duy',
        pass: '1',
        ten: 'Huỳnh Khánh Duy',
        loaithuyenvien: 'Thuyền trưởng',
        chucvu: 'Chủ tàu',
        sdt: '0767237493',
        ngaysinh: '1/09/2002',
        ngaycap: '30/09/2024',
        avatar: images.avatar1,
    }

    const handleLogin = async (screen) => {
        try {
            await AsyncStorage.setItem('myProfile', JSON.stringify(myProfile))
            // Alert.alert('Thông báo', 'Đăng nhập thành công')
            navigation.navigate(screen);
        }
        catch(e) {
            console.log('Lỗi đăng nhập')
            Alert.alert('Error', 'lỗi đăng nhập')
        }
    }

    return (

        selectedRole === 'Chủ tàu' ?

            <View style={{ flex: 1 }}>
                <StatusBar backgroundColor={'#F2FDFF'} barStyle={"dark-content"} />
                <ImageBackground source={images.bglogin} resizeMode="stretch"
                    style={{
                        width: '100%',
                        height: '100%',
                        tintColor: 'green'
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
                                        <TouchableOpacity style={{
                                            borderRadius: 4,
                                            borderWidth: 1,
                                            width: 15,
                                            height: 15,
                                            marginRight: 3,
                                            borderColor: '#005F94',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            opacity: selectedRole === role ? 1 : 0.5
                                        }}
                                            onPress={() => setSelectedRole(role)}
                                        >
                                            {selectedRole === role && <Image source={icons.check} resizeMode="contain" style={{ height: 10, width: 10 }} />}
                                        </TouchableOpacity>
                                        <Text style={{ color: '#005F94', opacity: selectedRole === role ? 1 : 0.5 }}>{role}</Text>
                                        {/* color: '#005F94' */}
                                    </View>
                                ))
                            }
                        </View>

                        {/* TextInPut */}
                        <View>
                            <TextInput style={styles.textInput} placeholder="Số điện thoại" autoCapitalize="none" keyboardType="numeric" placeholderTextColor={'#005F94'}
                                value={text}
                                onChangeText={(textInput) => {
                                    textInput.length <= 10 ? setText(textInput) : null
                                }} />
                            <TextInput style={styles.textInput} placeholder="Mật khẩu" autoCapitalize="none" secureTextEntry={true} placeholderTextColor={'#005F94'}/>
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

                            <TouchableOpacity style={{ backgroundColor: '#005F94', paddingHorizontal: 20, paddingVertical: 10, marginHorizontal: 100, borderRadius: 10, marginVertical: 48 }}
                                onPress={() => { handleLogin('Home') }}>
                                <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>Đăng nhập</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ marginHorizontal: 120 }} onPress={() => {
                                navigation.navigate('ForgetPass')
                            }}>
                                <Text style={{ color: '#005F94', textAlign: 'center' }}>Quên mật khẩu?</Text>
                            </TouchableOpacity>

                            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 40 }}>
                                <Text style={{ color: '#005F94', opacity: 0.6 }}>Chủ tàu chưa có tải khoản? </Text>
                                <TouchableOpacity onPress={() => { navigation.push('Register') }}>
                                    <Text style={{ fontWeight: 'bold', color: '#005F94' }}>Đăng ký ngay</Text>
                                </TouchableOpacity>

                            </View>

                        </View>
                        {/* fotter */}
                        <View style={{}}>

                        </View>
                    </View>

                </ImageBackground>
            </View>
            :
            // view này của cán bộ-----------------------------------------------------------
            <View style={{ flex: 1 }}>
                <StatusBar backgroundColor={'#EEEBFF'} barStyle={"dark-content"} />
                <ImageBackground source={images.bgcanbo} resizeMode="stretch"
                    style={{
                        width: '100%',
                        height: '100%'
                    }}>

                    {/* header */}
                    <Text style={{
                        color: '#2B13C0',
                        fontSize: 24, fontWeight: 'bold',
                        textAlign: 'center',
                        marginTop: 60,
                        marginBottom: 40
                    }}>
                        ĐĂNG NHẬP
                    </Text>
                    {/* body */}
                    <View style={{}}>

                        {/* radio check */}
                        <View style={styles.wrapCheckbox}>
                            {
                                roles.map((role, index) => (
                                    <View key={role} style={{ flexDirection: 'row', alignItems: 'center', marginRight: index % 2 === 0 ? 20 : 0 }}>
                                        <TouchableOpacity style={{
                                            borderRadius: 4,
                                            borderWidth: 1,
                                            width: 15,
                                            height: 15,
                                            marginRight: 3,
                                            borderColor: '#2B13C0',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            opacity: selectedRole === role ? 1 : 0.5
                                        }}
                                            onPress={() => setSelectedRole(role)}
                                        >
                                            {selectedRole === role && <Image source={icons.check} resizeMode="contain" style={{ height: 10, width: 10, tintColor: '#2B13C0' }} />}
                                        </TouchableOpacity>
                                        <Text style={{ color: '#2B13C0', opacity: selectedRole === role ? 1 : 0.5 }}>{role}</Text>
                                        {/* color: '#005F94' */}
                                    </View>
                                ))
                            }
                        </View>

                        {/* TextInPut */}
                        <View>
                            <TextInput style={{
                                fontSize: 16,
                                fontFamily: 'EduNSWACTFoundation-Medium',
                                borderRadius: 8,
                                borderWidth: 0.2,
                                borderColor: 'gray',
                                backgroundColor: 'white',
                                margin: 10,
                                textAlign: 'center',
                                paddingVertical: 5,
                                color: '#2B13C0'
                            }} placeholder="Số điện thoại" autoCapitalize="none" keyboardType="numeric" placeholderTextColor={'#2B13C0'}
                                value={text}
                                onChangeText={(textInput) => {
                                    textInput.length <= 10 ? setText(textInput) : null
                                }} />
                            <TextInput style={{
                                fontSize: 16,
                                fontFamily: 'EduNSWACTFoundation-Medium',
                                borderRadius: 8,
                                borderWidth: 0.2,
                                borderColor: 'gray',
                                backgroundColor: 'white',
                                margin: 10,
                                textAlign: 'center',
                                paddingVertical: 5,
                                color: '#2B13C0'
                            }} placeholder="Mật khẩu" autoCapitalize="none" secureTextEntry={true} placeholderTextColor={'#2B13C0'} />
                        </View>

                        <View>
                            {/* Lưu mật khẩu */}
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', marginRight: 10 }}>
                                <TouchableOpacity style={{
                                    borderRadius: 4,
                                    borderWidth: 1,
                                    width: 15,
                                    height: 15,
                                    marginRight: 3,
                                    borderColor: '#2B13C0',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                                    onPress={() => setSavePass(!savePass)}
                                >
                                    {
                                        savePass && <Image source={icons.check} resizeMode="contain" style={{ height: 10, width: 10, tintColor: '#2B13C0' }} />

                                    }

                                </TouchableOpacity>
                                <Text style={{ color: '#2B13C0' }}>Lưu mật khẩu</Text>
                            </View>

                            <TouchableOpacity style={{ backgroundColor: '#2B13C0', paddingHorizontal: 20, paddingVertical: 10, marginHorizontal: 100, borderRadius: 10, marginVertical: 48 }}
                                onPress={() => { handleLogin('CBHome') }}>
                                <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>Đăng nhập</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate('ForgetPass')
                                }}
                            >
                                <Text style={{ color: '#2B13C0', textAlign: 'center' }}>Quên mật khẩu?</Text>
                            </TouchableOpacity>

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
        borderRadius: 6,
        borderWidth: 0.2,
        borderColor: 'gray',
        backgroundColor: 'white',
        margin: 10,
        textAlign: 'center',
        paddingVertical: 5,
        color: '#005F94'
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