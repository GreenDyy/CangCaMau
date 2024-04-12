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

function ThongTinTauScreen({ navigation }) {
    const [soDangKy, setSoDangKy] = useState('')
    const [tenTau, setTenTau] = useState('')
    return (
        <View style={{ flex: 1, marginHorizontal: 12, marginTop: 5 }}>
            {/* header */}
            <StatusBar backgroundColor={'#F5F5F5'} barStyle={'dark-content'} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text>Đóng</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}>Thông tin tàu</Text>
                <View style={{ height: 10, width: 30 }} />
            </View>
            {/* body */}
            <ScrollView
                contentContainerStyle={{ paddingBottom: 10 }}
            >

                <View style={{ backgroundColor: 'white', borderRadius: 6, paddingHorizontal: 12, paddingVertical: 20, marginTop: 15 }}>
                    <MyTextInput editable={true} header={'Số đăng ký'} type={'delete'} value={soDangKy} setValue={setSoDangKy} />
                    <MyTextInput editable={true} header={'Tên tàu'} type={'delete'} value={tenTau} setValue={setTenTau} />
                    <View>
                        <MyTextInput editable={true} header={'Địa bàn đăng ký'} showButtonX={true} />
                        <SelectDropdown
                            data={listquan}
                            onSelect={(selectedItem, index) => {
                                setQuan(selectedItem)
                            }}
                            renderButton={(selectedItem, isOpened) => {
                                return (
                                    <TouchableOpacity>
                                        <Image source={icons.fill} style={{ width: 10, height: 6, tintColor: 'black', position: 'absolute', right: 0, bottom: 10 }} resizeMode="contain" />
                                    </TouchableOpacity>
                                );
                            }}
                            renderItem={(item, index, isSelected) => {
                                return (
                                    <View style={{ backgroundColor: isSelected ? 'gray' : '' }}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <Text>{item}</Text>
                                        </View>
                                    </View>
                                );
                            }}
                            showsVerticalScrollIndicator={false}
                            dropdownStyle={{ borderBottomLeftRadius: 6, borderBottomRightRadius: 6, padding: 10 }}
                        />
                    </View>

                    <View>
                        <MyTextInput editable={true} header={'Ngành nghề'} showButtonX={true} />
                        <SelectDropdown
                            data={listquan}
                            onSelect={(selectedItem, index) => {
                                setQuan(selectedItem)
                            }}
                            renderButton={(selectedItem, isOpened) => {
                                return (
                                    <TouchableOpacity>
                                        <Image source={icons.fill} style={{ width: 10, height: 6, tintColor: 'black', position: 'absolute', right: 0, bottom: 10 }} resizeMode="contain" />
                                    </TouchableOpacity>
                                );
                            }}
                            renderItem={(item, index, isSelected) => {
                                return (
                                    <View style={{ backgroundColor: isSelected ? 'gray' : '' }}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <Text>{item}</Text>
                                        </View>
                                    </View>
                                );
                            }}
                            showsVerticalScrollIndicator={false}
                            dropdownStyle={{ borderBottomLeftRadius: 6, borderBottomRightRadius: 6, padding: 10 }}
                        />
                    </View>

                    <MyTextInput editable={true} header={'Hô hiệu'} showButtonX={true} />
                    <View>
                        <MyTextInput editable={true} header={'Loại tàu'} showButtonX={true} />
                        <SelectDropdown
                            data={listquan}
                            onSelect={(selectedItem, index) => {
                                setQuan(selectedItem)
                            }}
                            renderButton={(selectedItem, isOpened) => {
                                return (
                                    <TouchableOpacity>
                                        <Image source={icons.fill} style={{ width: 10, height: 6, tintColor: 'black', position: 'absolute', right: 0, bottom: 10 }} resizeMode="contain" />
                                    </TouchableOpacity>
                                );
                            }}
                            renderItem={(item, index, isSelected) => {
                                return (
                                    <View style={{ backgroundColor: isSelected ? 'gray' : '' }}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <Text>{item}</Text>
                                        </View>
                                    </View>
                                );
                            }}
                            showsVerticalScrollIndicator={false}
                            dropdownStyle={{ borderBottomLeftRadius: 6, borderBottomRightRadius: 6, padding: 10 }}
                        />
                    </View>

                    <MyTextInput editable={true} header={'Ngày xuất xưởng'} type={'calendar'} />
                    <MyTextInput editable={true} header={'Nơi đóng'} type={'delete'} />
                    <MyTextInput editable={true} header={'Mẫu thiết kế'} type={'delete'} />
                    <MyTextInput editable={true} header={'Cơ quan thiết kế'} type={'delete'} />
                    <View>
                        <MyTextInput editable={true} header={'Cảng biển đăng ký'} />
                        <SelectDropdown
                            data={listquan}
                            onSelect={(selectedItem, index) => {
                                setQuan(selectedItem)
                            }}
                            renderButton={(selectedItem, isOpened) => {
                                return (
                                    <TouchableOpacity>
                                        <Image source={icons.fill} style={{ width: 10, height: 6, tintColor: 'black', position: 'absolute', right: 0, bottom: 10 }} resizeMode="contain" />
                                    </TouchableOpacity>
                                );
                            }}
                            renderItem={(item, index, isSelected) => {
                                return (
                                    <View style={{ backgroundColor: isSelected ? 'gray' : '' }}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <Text>{item}</Text>
                                        </View>
                                    </View>
                                );
                            }}
                            showsVerticalScrollIndicator={false}
                            dropdownStyle={{ borderBottomLeftRadius: 6, borderBottomRightRadius: 6, padding: 10 }}
                        />
                    </View>

                    <MyTextInput editable={true} header={'Cơ quan đăng kiểm'} type={'delete'} />
                    <MyTextInput editable={true} header={'Ngày hết hạn đăng kiểm'} type={'calendar'} />
                    <MyTextInput editable={true} header={'Khu vực hoạt động'} type={'delete'} />
                    <View>
                        <MyTextInput editable={true} header={'Đơn vị quản lý'} showButtonX={true} />
                        <SelectDropdown
                            data={listquan}
                            onSelect={(selectedItem, index) => {
                                setQuan(selectedItem)
                            }}
                            renderButton={(selectedItem, isOpened) => {
                                return (
                                    <TouchableOpacity>
                                        <Image source={icons.fill} style={{ width: 10, height: 6, tintColor: 'black', position: 'absolute', right: 0, bottom: 10 }} resizeMode="contain" />
                                    </TouchableOpacity>
                                );
                            }}
                            renderItem={(item, index, isSelected) => {
                                return (
                                    <View style={{ backgroundColor: isSelected ? 'gray' : '' }}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <Text>{item}</Text>
                                        </View>
                                    </View>
                                );
                            }}
                            showsVerticalScrollIndicator={false}
                            dropdownStyle={{ borderBottomLeftRadius: 6, borderBottomRightRadius: 6, padding: 10 }}
                        />
                    </View>
                </View>



                {/* nút đóng */}
                <TouchableOpacity style={{ backgroundColor: 'white', borderRadius: 6, paddingVertical: 10, width: 173, alignSelf: 'center', alignItems: 'center', marginBottom: 25, marginTop: 20 }}
                    onPress={() => navigation.navigate('ThongSoKyThuat')}>
                    <Text style={{ color: '#005F94', fontWeight: 'bold' }}>Tiếp tục</Text>
                </TouchableOpacity>

            </ScrollView>
            {/* footer */}
        </View>
    )
}

export default ThongTinTauScreen