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
import SelectDropdown from 'react-native-select-dropdown'

const listquan = ['Bình Chánh', 'Bình Tân', 'Tân Phú']

function ThongTinGiayChungNhanScreen({ navigation }) {
    const [soDangKy, setSoDangKy] = useState('')
    const [tenTau, setTenTau] = useState('')
    return (
        <View style={{ flex: 1, marginHorizontal: 12, marginTop: 5 }}>
            {/* header */}
            <StatusBar backgroundColor={'#F5F5F5'} barStyle={'dark-content'} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={icons.back} style={{ width: 20, height: 20, tintColor: '#333333' }} />
                </TouchableOpacity>
                <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}>Thông tin giấy chứng nhận</Text>
                <View style={{ height: 10, width: 30 }} />
            </View>
            {/* body */}
            <ScrollView
                contentContainerStyle={{ paddingBottom: 10 }}
            >

                <View style={{ backgroundColor: 'white', borderRadius: 6, paddingHorizontal: 12, paddingVertical: 20, marginTop: 15 }}>
                    <MyTextInput editable={true} header={'Số giấy phép khai thác'} type={'delete'} value={soDangKy} setValue={setSoDangKy} />
                    <MyTextInput editable={true} header={'Ngày cấp GPKT'} type={'calendar'} value={tenTau} setValue={setTenTau} />
                    <MyTextInput editable={true} header={'Ngày hết hạn GPKT'} type={'delete'} value={tenTau} setValue={setTenTau} />
                    <MyTextInput editable={true} header={'Số giấy chứng nhận an toàn kỹ thuật'} type={'delete'} value={tenTau} setValue={setTenTau} />
                    <MyTextInput editable={true} header={'Ngày cấp GCNATKT'} type={'calendar'} value={tenTau} setValue={setTenTau} />
                    <MyTextInput editable={true} header={'Ngày hết hạn GCNATKT'} type={'calendar'} value={tenTau} setValue={setTenTau} />
                    <MyTextInput editable={true} header={'Đơn vị cấp GCNATKT'} type={'delete'} value={tenTau} setValue={setTenTau} />
                    <MyTextInput editable={true} header={'Số giấy đăng ký tàu cá'} type={'delete'} value={tenTau} setValue={setTenTau} />
                    <MyTextInput editable={true} header={'Ngày cấp số giấy đăng ký tàu cá'} type={'calendar'} value={tenTau} setValue={setTenTau} />
                </View>
                {/* nút đóng */}
                <TouchableOpacity style={{ backgroundColor: 'white', borderRadius: 6, paddingVertical: 10, width: 173, alignSelf: 'center', alignItems: 'center', marginBottom: 25, marginTop: 20 }}
                    onPress={() => navigation.navigate('ThongTinThietBiDinhVi')}>
                    <Text style={{ color: '#005F94', fontWeight: 'bold' }}>Tiếp tục</Text>
                </TouchableOpacity>

            </ScrollView>
            {/* footer */}
        </View>
    )
}

export default ThongTinGiayChungNhanScreen