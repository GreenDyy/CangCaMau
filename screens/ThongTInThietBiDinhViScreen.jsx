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

function ThongTinThietBiDinhViScreen({ navigation }) {
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
                <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold', width: 190, textAlign: 'center' }}>Thông tin thiết bị định vị & File đính kèm</Text>
                <View style={{ height: 10, width: 30 }} />
            </View>
            {/* body */}
            <ScrollView
                contentContainerStyle={{ paddingBottom: 10 }}
            >
                {/* ô 1 */}
                <View style={{ backgroundColor: 'white', borderRadius: 6, paddingHorizontal: 12, paddingVertical: 20, marginTop: 8 }}>

                    <View style={{ borderBottomWidth: 1, borderBottomColor: '#D6D6D6', flex: 1, marginBottom: 15 }}>
                        <Text style={{ fontSize: 12 }}>Giấy chứng nhận đăng ký tàu</Text>
                        <TouchableOpacity style={{ backgroundColor: '#E5EFF4', width: 74, flexDirection: 'row', alignItems: 'center', paddingVertical: 3, justifyContent: 'center', borderRadius: 2, marginBottom: 15, marginTop: 10 }}>
                            <Image source={icons.upload} style={{ width: 12, height: 12 }} resizeMode="contain" />
                            <Text style={{ color: '#005F94', fontSize: 12, marginLeft: 2 }}>Upload</Text>
                        </TouchableOpacity>
                        <Text style={{ fontSize: 12, color: 'black', marginBottom: 15 }}>Chungnhan.jpg</Text>
                    </View>

                    <View style={{ borderBottomWidth: 1, borderBottomColor: '#D6D6D6', flex: 1, marginBottom: 15 }}>
                        <Text style={{ fontSize: 12 }}>Giấy chứng nhận an toàn kỹ thuật</Text>
                        <TouchableOpacity style={{ backgroundColor: '#E5EFF4', width: 74, flexDirection: 'row', alignItems: 'center', paddingVertical: 3, justifyContent: 'center', borderRadius: 2, marginBottom: 15, marginTop: 10 }}>
                            <Image source={icons.upload} style={{ width: 12, height: 12 }} resizeMode="contain" />
                            <Text style={{ color: '#005F94', fontSize: 12, marginLeft: 2 }}>Upload</Text>
                        </TouchableOpacity>
                        <Text style={{ fontSize: 12, color: 'black', marginBottom: 15 }}>Chungnhan.jpg</Text>
                    </View>

                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 12 }}>Thiết bị định vị</Text>
                        <TouchableOpacity style={{ backgroundColor: '#E5EFF4', width: 74, flexDirection: 'row', alignItems: 'center', paddingVertical: 3, justifyContent: 'center', borderRadius: 2, marginBottom: 15, marginTop: 10 }}>
                            <Image source={icons.upload} style={{ width: 12, height: 12 }} resizeMode="contain" />
                            <Text style={{ color: '#005F94', fontSize: 12, marginLeft: 2 }}>Upload</Text>
                        </TouchableOpacity>
                        <Text style={{ fontSize: 12, color: 'black'}}>Chungnhan.jpg</Text>
                    </View>

                </View>
                {/* ô 2 */}
                <View style={{ backgroundColor: 'white', borderRadius: 6, paddingHorizontal: 12, paddingVertical: 20, marginTop: 20 }}>
                    <MyTextInput editable={true} header={'Nhà mạng cung cấp'} type={'delete'} value={soDangKy} setValue={setSoDangKy} />
                    <MyTextInput editable={true} header={'Seri'} type={'delete'} value={tenTau} setValue={setTenTau} />
                    <MyTextInput editable={true} header={'Trạng thái'} type={'delete'} value={tenTau} setValue={setTenTau} />
                    <MyTextInput editable={true} header={'Ngày đăng ký thiết bị'} type={'calendar'} value={tenTau} setValue={setTenTau} />
                </View>
                {/* nút tiếp tục */}
                <TouchableOpacity style={{ backgroundColor: 'white', borderRadius: 6, paddingVertical: 10, width: 173, alignSelf: 'center', alignItems: 'center', marginBottom: 25, marginTop: 20 }}
                    onPress={() => navigation.navigate('ChuSoHuuVaThuyenVien')}>
                    <Text style={{ color: '#005F94', fontWeight: 'bold' }}>Tiếp tục</Text>
                </TouchableOpacity>

            </ScrollView>
            {/* footer */}
        </View>
    )
}

export default ThongTinThietBiDinhViScreen