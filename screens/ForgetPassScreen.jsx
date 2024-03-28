import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ImageBackground, Image, TextInput, StyleSheet, StatusBar, ScrollView } from 'react-native'
import { icons, images } from '../constants/manager'


function ForgetPassScreen({ navigation }) {

    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor={'lightgreen'} barStyle={"dark-content"} />
            <ImageBackground source={images.bgregister} resizeMode="stretch"
                style={{
                    width: '100%',
                    height: '100%'
                }}>

                {/* header */}
                <TouchableOpacity style={{ margin: 10, marginEnd: '92%' }} onPress={() => {
                    navigation.goBack()
                }}>
                    <Image source={icons.back} />
                </TouchableOpacity>

                <View style={{ marginVertical: 40 }}>
                    <Text style={styles.headerText}>QUÊN MẬT KHẨU</Text>
                </View>

                {/* body */}
                <View style={{}}>
                    <TextInput style={styles.textInput} placeholder="Số điện thoại đăng ký" autoCapitalize="none" keyboardType="numeric" />

                    <TouchableOpacity style={{ backgroundColor: '#005F94', paddingHorizontal: 20, paddingVertical: 10, marginHorizontal: 100, borderRadius: 10, marginVertical: 40 }}
                        onPress={() => navigation.navigate('OTPForgetPass')}>
                        <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>Xác nhận</Text>
                    </TouchableOpacity>
                </View>

            </ImageBackground>
        </View>
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

export default ForgetPassScreen