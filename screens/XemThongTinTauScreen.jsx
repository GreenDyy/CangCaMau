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

function XemThongTinTauScreen({ navigation }) {
    const [soDangKy, setSoDangKy] = useState('')
    const [tenTau, setTenTau] = useState('')
    return (
        <View style={{ flex: 1, marginHorizontal: 12, marginTop: 5 }}>
            {/* header */}
            <StatusBar backgroundColor={'#F5F5F5'} barStyle={'dark-content'} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text>Đóng</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}>Thông tin tàu</Text>
                <View style={{ height: 10, width: 30 }} />
            </View>
            {/* body */}
            <ScrollView
                contentContainerStyle={{ paddingBottom: 10 }}
                showsVerticalScrollIndicator={false}
            >
                <View style={{ backgroundColor: 'white', borderRadius: 6, paddingHorizontal: 12, paddingVertical: 20, marginTop: 15 }}>
                    <MyTextInput header={'Số đăng ký'} editable={false} />
                    <MyTextInput header={'Tên tàu'} editable={false} />
                    <MyTextInput header={'Địa bàn đăng ký'} editable={false} />
                    <MyTextInput header={'Ngành nghề'} editable={false} />
                    <MyTextInput header={'Hô hiệu'} editable={false} />
                    <MyTextInput header={'Loại tàu'} editable={false} />
                    <MyTextInput header={'Ngày xuất xưởng'} editable={false} />
                    <MyTextInput header={'Nơi đóng'} editable={false} />
                    <MyTextInput header={'Mẫu thiết kế'} editable={false} />
                    <MyTextInput header={'Cơ quan thiết kế'} editable={false} />
                    <MyTextInput header={'Cảng biển đăng ký'} editable={false} />
                    <MyTextInput header={'Cơ quan đăng kiểm'} editable={false} />
                    <MyTextInput header={'Ngày hết hạn đăng kiểm'} editable={false} />
                    <MyTextInput header={'Khu vực hoạt động'} editable={false} />
                    <MyTextInput header={'Đơn vị quản lý'} editable={false} />
                </View>

                {/* nút đóng */}
                <TouchableOpacity style={{ backgroundColor: 'white', borderRadius: 6, paddingVertical: 10, width: 173, alignSelf: 'center', alignItems: 'center', marginBottom: 25, marginTop: 20 }}
                    onPress={() => navigation.goBack()}>
                    <Text style={{ color: '#828282', fontWeight: 'bold' }}>Đóng</Text>
                </TouchableOpacity>

            </ScrollView>
            {/* footer */}
        </View>
    )
}

export default XemThongTinTauScreen