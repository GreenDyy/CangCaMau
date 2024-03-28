import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ImageBackground, Image, TextInput, StyleSheet, StatusBar, ScrollView } from 'react-native'
import { icons, images } from '../constants/manager'
import ButtonGoBack from "../components/buttongoback";


function ForgetNewPassScreen({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor={'lightgreen'} barStyle={"dark-content"} />
            <ImageBackground source={images.bgregister} resizeMode="stretch"
                style={{
                    width: '100%',
                    height: '100%'
                }}>

                {/* header */}
                <ButtonGoBack navigation={navigation}/>

                <View style={{ marginVertical: 40 }}>
                    <Text style={styles.headerText}>QUÊN MẬT KHẨU</Text>
                </View>

                {/* body */}
                <View style={{}}>
                    <TextInput style={styles.textInput} placeholder="Nhập mật khẩu mới" autoCapitalize="none"/>
                    <TextInput style={styles.textInput} placeholder="Nhập lại mật khẩu" autoCapitalize="none"/>
                    <TouchableOpacity style={{ backgroundColor: '#005F94', paddingHorizontal: 20, paddingVertical: 10, marginHorizontal: 100, borderRadius: 10, marginVertical: 40 }}>
                        <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>Đổi mật khẩu</Text>
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

export default ForgetNewPassScreen