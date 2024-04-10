import React, { useState } from "react";
import {
    View,
    TouchableOpacity,
    Text,
    Image,
    StatusBar,
    ScrollView,
    TextInput,
    FlatList,
    Modal
} from 'react-native'
import { icons, images } from '../constants/manager'
import MyTextInput from "../components/mytextinput";

function ThongTinTauScreen() {
    const [soDangKy, setSoDangKy] = useState('')
    return (
        <View style={{ flex: 1, marginHorizontal: 12, marginTop: 5 }}>
            {/* header */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity>
                    <Text>Đóng</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}>Thông tin tàu</Text>
                <View style={{ height: 10, width: 30 }} />
            </View>
            {/* body */}
            <ScrollView style={{ backgroundColor: 'white', borderRadius: 6, paddingHorizontal: 12, paddingVertical: 20 }}>
                <MyTextInput editable={true} header={'Số đăng ký'} type={'delete'} value={soDangKy} setValue={setSoDangKy} />
                <MyTextInput editable={true} header={'Tên tàu'} showButtonX={true} />
                <MyTextInput editable={true} header={'Địa bàn đăng ký'} showButtonX={true} />
                <MyTextInput editable={true} header={'Ngành nghề'} showButtonX={true} />
                <MyTextInput editable={true} header={'Hô hiệu'} showButtonX={true} />
                <MyTextInput editable={true} header={'Loại tàu'} showButtonX={true} />
                <MyTextInput editable={true} header={'Ngày xuất xưởng'} showButtonX={true} />
                <MyTextInput editable={true} header={'Nơi đóng'} showButtonX={true} />
                <MyTextInput editable={true} header={'Mẫu thiết kế'} showButtonX={true} />
                <MyTextInput editable={true} header={'Cơ quan thiết kế'} showButtonX={true} />
                <MyTextInput editable={true} header={'Cảng biển đăng ký'} showButtonX={true} />
                <MyTextInput editable={true} header={'Cơ quan đăng kiểm'} showButtonX={true} />
                <MyTextInput editable={true} header={'Ngày hết hạn đăng kiểm'} showButtonX={true} />
                <MyTextInput editable={true} header={'Khu vực hoạt động'} showButtonX={true} />
                <MyTextInput editable={true} header={'Đơn vị quản lý'} showButtonX={true} />
            </ScrollView>
            {/* footer */}
        </View>
    )
}

export default ThongTinTauScreen