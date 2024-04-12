import React, { useState } from "react";
import {
    View,
    TouchableOpacity,
    Text,
    Image,
    StatusBar,
    ScrollView,
} from 'react-native'
import { icons } from '../constants/manager'
import MyTextInput from "../components/mytextinput";
import MyCheckBox from "../components/mycheckbox";

function ChiTietTaiNanScreen({ navigation }) {
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

                    <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}>Chi tiết tai nạn</Text>

                    <View style={{ width: 20, height: 20 }} />
                </View>
            </View>
            {/* body */}
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={{ backgroundColor: 'white', borderRadius: 6, paddingHorizontal: 12, paddingVertical: 20, marginBottom: 20 }}>
                    <MyTextInput editable={false} header={'Tên tàu'} fontWeight={'bold'} />
                    <MyTextInput editable={false} header={'Thời gian tai nạn'} />
                    <MyTextInput editable={false} header={'Nguyên nhân'} />
                </View>

                <Text style={{ marginBottom: 5, color: '#005F94', fontSize: 16, fontWeight: 'bold' }}>Thiệt hại về người</Text>
                <View style={{ backgroundColor: 'white', borderRadius: 6, paddingHorizontal: 12, paddingVertical: 20, marginBottom: 20 }}>
                    <MyTextInput editable={false} header={'Số người chết'} />
                    <MyTextInput editable={false} header={'Số người mất tích'} />
                    <MyTextInput editable={false} header={'Số người bị thương'} />
                </View>

                <Text style={{ marginBottom: 5, color: '#005F94', fontSize: 16, fontWeight: 'bold' }}>Thiệt hại về phương tiện</Text>
                <View style={{ backgroundColor: 'white', borderRadius: 6, paddingHorizontal: 12, paddingVertical: 20, marginBottom: 20 }}>
                    <MyCheckBox text={'Chìm'} />
                    <MyTextInput editable={false} header={'Thông tin chìm'} />
                </View>

                <Text style={{ marginBottom: 5, color: '#005F94', fontSize: 16, fontWeight: 'bold' }}>Đơn vị xử lý</Text>
                <View style={{ backgroundColor: 'white', borderRadius: 6, paddingHorizontal: 12, paddingVertical: 20, marginBottom: 20 }}>
                    <MyTextInput editable={false} header={'Đơn vị xử lý'} />
                    <MyTextInput editable={false} header={'Ghi chú'} />
                </View>

                <TouchableOpacity style={{ backgroundColor: 'white', borderRadius: 6, paddingVertical: 10, width: 173, alignSelf: 'center', alignItems: 'center', marginTop: 20, marginBottom: 25 }}
                    onPress={() => navigation.goBack()}>
                    <Text style={{ color: '#005F94', fontWeight: 'bold' }}>Đóng</Text>
                </TouchableOpacity>
            </ScrollView>
            {/* footer */}

        </View>
    )
}

export default ChiTietTaiNanScreen