import React, { useState } from "react";
import {
    View,
    TouchableOpacity,
    Text,
    Image,
    StatusBar,
    ScrollView,
    TextInput
} from 'react-native'
import { icons } from '../../constants/manager'
import MyTextInput from "../../components/mytextinput";

function CBChiTietThongBaoScreen({ navigation }) {
    return (
        <View style={{ flex: 1, marginHorizontal: 12, marginTop: 5 }}>
            {/* header */}
            <StatusBar barStyle={"dark-content"} backgroundColor={'#F5F5F5'} />

            <View style={{ marginBottom: 17 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}>
                        <Image source={icons.back} style={{ height: 20, width: 20, tintColor: 'black' }} />
                    </TouchableOpacity>

                    <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}>Thông báo</Text>

                    <View style={{ width: 20, height: 20 }} />
                </View>
            </View>
            {/* body */}
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={{ backgroundColor: 'white', borderRadius: 6, paddingHorizontal: 12, paddingVertical: 20 }}>
                    <Text style={{ color: 'black', }}>#Nội dung thông báo: dkasdakdaskjdajkdajkdasjk</Text>
                </View>

                <View style={{ backgroundColor: 'white', borderRadius: 6, paddingHorizontal: 12, paddingVertical: 20, marginTop: 5 }}>
                    <View>
                        <Text style={{ fontSize: 12, color: '#ADADAD' }}>Giấy chứng nhận đăng ký tàu</Text>
                        <Text style={{ fontSize: 16, color: 'black', marginTop: 10 }}>Chungnhan.jpg</Text>
                    </View>
                </View>

            </ScrollView>
            {/* footer */}
            <TouchableOpacity style={{ backgroundColor: 'white', borderRadius: 6, paddingVertical: 10, width: 173, alignSelf: 'center', alignItems: 'center', position: 'absolute', bottom: 25 }}
                onPress={() => navigation.goBack()}>
                <Text style={{ color: '#828282', fontWeight: 'bold' }}>Đóng</Text>
            </TouchableOpacity>

        </View>
    )
}

export default CBChiTietThongBaoScreen