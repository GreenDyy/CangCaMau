import React, { useState } from "react";
import { View, Text, TouchableOpacity, ImageBackground, Image, TextInput, StyleSheet, StatusBar, ScrollView } from 'react-native'
import { icons, images } from '../constants/manager'


function RegisterScreen({ navigation }) {

    return (
        <ImageBackground source={images.bgregister} resizeMode="stretch"
            style={{
                width: '100%',
                height: '100%'
            }}>
            <StatusBar backgroundColor={'lightgreen'} barStyle={"dark-content"} />
            <ScrollView style={{ flex: 1 }}>


                {/* header */}
                <View style={{ marginVertical: 40 }}>
                    <Text style={styles.headerText}>ĐĂNG KÝ</Text>
                    <Text style={styles.headerText}>TÀI KHOẢN CHỦ TÀU</Text>
                </View>

                {/* body */}
                <View style={{}}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginHorizontal: 90, }}>
                        <Image source={icons.qr} style={{ height: 16, width: 16 }} />
                        <Text style={{ color: '#005F94', textAlign: 'center', fontSize: 12, borderBottomWidth: 0.2, marginLeft: 5, borderBottomColor: '#005F94' }}>Đăng ký bằng CCCD gắn chíp</Text>
                    </TouchableOpacity>
                    {/* TextInPut */}
                    <View>
                        <TextInput style={styles.textInput} placeholder="Họ và Tên" autoCapitalize="none" keyboardType="numeric" />
                        <TextInput style={styles.textInput} placeholder="CCCD/CMND" autoCapitalize="none" />
                        <TextInput style={styles.textInput} placeholder="Ngày sinh" autoCapitalize="none" />
                        <TextInput style={styles.textInput} placeholder="Địa chỉ" autoCapitalize="none" />
                        <TextInput style={styles.textInput} placeholder="Số điện thoại đăng ký" autoCapitalize="none" />
                        <TextInput style={styles.textInput} placeholder="Mật khẩu" autoCapitalize="none" secureTextEntry={true} />
                        <TextInput style={styles.textInput} placeholder="Nhập lại mật khẩu" autoCapitalize="none" secureTextEntry={true} />
                    </View>

                    <View>



                        <TouchableOpacity style={{ backgroundColor: '#005F94', paddingHorizontal: 20, paddingVertical: 10, marginHorizontal: 100, borderRadius: 10, marginVertical: 40 }}
                            onPress={() => { navigation.navigate('OTP') }}>
                            <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>Đăng ký</Text>
                        </TouchableOpacity>

                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <Text>Chủ tàu đã có tải khoản? </Text>
                            <TouchableOpacity onPress={() => { navigation.push('Login') }}>
                                <Text style={{ fontWeight: 'bold', color: '#005F94' }}>Đăng nhập</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* fotter */}
                    <View style={{}}>

                    </View>
                </View>


            </ScrollView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    headerText: {
        color: '#005F94',
        fontSize: 24, fontWeight: 'bold',
        textAlign: 'center',
    },
    textInput: {
        fontSize: 16,
        fontFamily: 'EduNSWACTFoundation-Medium',
        borderRadius: 10,
        borderColor: 'gray',
        backgroundColor: 'white',
        margin: 10,
        textAlign: 'center',
        paddingVertical: 5,
        elevation: 2
    },

})

export default RegisterScreen