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

function ThongSoKyThuatScreen({ navigation }) {
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
                <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}>Thông số kỹ thuật</Text>
                <View style={{ height: 10, width: 30 }} />
            </View>
            {/* body */}
            <ScrollView
                contentContainerStyle={{ paddingBottom: 10 }}
            >

                <View style={{ backgroundColor: 'white', borderRadius: 6, paddingHorizontal: 12, paddingVertical: 20, marginTop: 15 }}>
                    <MyTextInput editable={true} header={'Số lượng máy'} type={'delete'} value={soDangKy} setValue={setSoDangKy} />
                    <MyTextInput editable={true} header={'Tổng công suất'} type={'delete'} value={tenTau} setValue={setTenTau} />
                    <MyTextInput editable={true} header={'Chiều dài Lmax(m)'} type={'delete'} value={tenTau} setValue={setTenTau} />
                    <MyTextInput editable={true} header={'Chiều dài Ltk(m)'} type={'delete'} value={tenTau} setValue={setTenTau} />
                    <MyTextInput editable={true} header={'Chiều rộng Bmax(m)'} type={'delete'} value={tenTau} setValue={setTenTau} />
                    <MyTextInput editable={true} header={'Chiều rộng Btk(m)'} type={'delete'} value={tenTau} setValue={setTenTau} />
                    <MyTextInput editable={true} header={'Chiều cao mạn D(m)'} type={'delete'} value={tenTau} setValue={setTenTau} />
                    <MyTextInput editable={true} header={'Chiều chìm d(m)'} type={'delete'} value={tenTau} setValue={setTenTau} />
                    <MyTextInput editable={true} header={'Mạn khô f(m)'} type={'delete'} value={tenTau} setValue={setTenTau} />
                    <MyTextInput editable={true} header={'Vật liệu vỏ'} type={'delete'} value={tenTau} setValue={setTenTau} />
                    <MyTextInput editable={true} header={'Tổng dung tích'} type={'delete'} value={tenTau} setValue={setTenTau} />
                    <MyTextInput editable={true} header={'Sức chở tối đa (tấn)'} type={'delete'} value={tenTau} setValue={setTenTau} />
                    <MyTextInput editable={true} header={'Tốc độ tự do (hải lý/h)   '} type={'delete'} value={tenTau} setValue={setTenTau} />
                </View>
                {/* nút đóng */}
                <TouchableOpacity style={{ backgroundColor: 'white', borderRadius: 6, paddingVertical: 10, width: 173, alignSelf: 'center', alignItems: 'center', marginBottom: 25, marginTop: 20 }}
                    onPress={() => navigation.navigate('ThongTinGiayChungNhan')}>
                    <Text style={{ color: '#005F94', fontWeight: 'bold' }}>Tiếp tục</Text>
                </TouchableOpacity>

            </ScrollView>
            {/* footer */}
        </View>
    )
}

export default ThongSoKyThuatScreen