import React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import { images } from '../constants/manager'


function LoginScreen(navigation) {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={images.bglogin} resizeMode="stretch"
                style={{
                    width: '100%',
                    height: '100%'
                }}>

                {/* header */}
                <View style={{ flex: 0.2, backgroundColor: 'red' }}>
                    <Text style={{ color: '#005F94', fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginTop: 95 }}>
                        ĐĂNG NHẬP
                    </Text>
                </View>
                {/* body */}
                <View style={{ flex: 0.5, backgroundColor: 'green' }}>
                    {/* checkbox */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <View>
                            <TouchableOpacity style={{}}>

                            </TouchableOpacity>
                            <Text>Chủ tàu</Text>
                        </View>

                    </View>
                </View>
                {/* fotter */}
                <View style={{ flex: 0.3, backgroundColor: 'blue' }}>

                </View>

            </ImageBackground>
        </View>
    )
}

export default LoginScreen