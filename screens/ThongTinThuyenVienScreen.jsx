import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    StatusBar,
    StyleSheet,
    Modal,
    TextInput,
    Button,
} from 'react-native'
import { icons, images } from '../constants/manager'
import MyTextInput from "../components/mytextinput";
import { Calendar } from 'react-native-calendars';
import SelectDropdown from 'react-native-select-dropdown'

const listquan = ['Bình Chánh', 'Bình Tân', 'Tân Phú']
const listthanhpho = ['TP HCM', 'Vũng Tàu', 'Thủ Đức']

function ThongTinThuyenVienScreen({ navigation, route }) {
    const [selectNgaySinh, setSelectNgaySinh] = useState('');
    const [selectNgayCap, setSelectNgayCap] = useState('');
    const [showCalendar, setShowCalendar] = useState(false)
    const [calendarFor, setCalendarFor] = useState('')

    const [quan, setQuan] = useState('')
    const [thanhPho, setThanhPho] = useState('')

    return (
        <View style={{ flex: 1, paddingHorizontal: 12, paddingTop: 5, paddingBottom: 15 }}>
            {/* header */}
            <StatusBar barStyle={"dark-content"} backgroundColor={'#F5F5F5'} />
            <View style={{ marginBottom: 15 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}>
                        <Image source={icons.back} style={{ height: 20, width: 20, tintColor: 'black' }} />
                    </TouchableOpacity>

                    <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}>Thông tin thuyền viên</Text>

                    <View style={{ width: 20, height: 20 }} />
                </View>
            </View>

            {/* body */}
            <ScrollView
                showsVerticalScrollIndicator={false}>
                {/* cập nhật avatar */}
                <View style={{ alignSelf: 'center' }}>
                    <TouchableOpacity style={{ borderRadius: 999 }}
                        onPress={() => Alert.alert('Cập nhật ảnh')}>
                        <Image source={icons.avatartv1} style={{ height: 80, width: 80 }} />
                        <Image source={icons.pencil} style={{ position: 'absolute', height: 24, width: 24, bottom: '5%', right: '0%' }} />
                    </TouchableOpacity>
                </View>

                <View style={{ backgroundColor: 'white', borderRadius: 6, paddingTop: 30, paddingBottom: 15, paddingHorizontal: 12, marginTop: 20 }}>

                    <MyTextInput header={'Họ và tên'} showButtonX={true} editable={true} />
                    <MyTextInput header={'CMND/CCCD'} showButtonX={true} editable={false} />

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <MyTextInput header={'Ngày sinh'} editable={true} inputText={selectNgaySinh} isDay={true} />

                        <TouchableOpacity style={{ alignSelf: 'center' }}
                            onPress={() => {
                                setShowCalendar(!showCalendar),
                                    setCalendarFor('ngaysinh')

                            }}>
                            <Image source={icons.calendar} resizeMode="contain" style={{ height: 16, width: 16, position: 'absolute', right: 0 }} />
                        </TouchableOpacity>
                    </View>

                    <MyTextInput header={'Phường/xã'} showButtonX={true} editable={false} />
                    {/* chọn quận */}
                    <View>
                        <MyTextInput header={'Quận/huyện'} editable={false} inputText={quan} />
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

                    {/* chọn thành phố */}
                    <View>
                        <MyTextInput header={'Tỉnh/Thành phố'} editable={false} inputText={thanhPho} />
                        <SelectDropdown
                            data={listthanhpho}
                            onSelect={(selectedItem, index) => {
                                setThanhPho(selectedItem)
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
                    <MyTextInput header={'Số điện thoại'} editable={false} inputText={'093828382'} />

                </View>
                {/* vùng trắng thứ 2 */}
                <View style={{ backgroundColor: 'white', borderRadius: 6, paddingTop: 30, paddingBottom: 15, paddingHorizontal: 12, marginTop: 20 }}>

                    <MyTextInput header={'Giấy chứng nhận chuyên môn'} showButtonX={true} editable={true} />
                    <MyTextInput header={'Cơ quan cấp'} showButtonX={true} editable={false} />

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <MyTextInput header={'Ngày cấp'} editable={true} inputText={selectNgayCap} isDay={true} />

                        <TouchableOpacity style={{ alignSelf: 'center' }}
                            onPress={() => {
                                setShowCalendar(!showCalendar),
                                    setCalendarFor('ngaycap')

                            }}>
                            <Image source={icons.calendar} resizeMode="contain" style={{ height: 16, width: 16, position: 'absolute', right: 0 }} />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* 2 bút dưới */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                    <TouchableOpacity
                        style={{ backgroundColor: '#FFFFFF', borderRadius: 6, paddingVertical: 10, width: 165, alignItems: 'center' }}
                      
                    >
                        <Text style={{ color: '#828282', fontWeight: 'bold' }}>Đóng</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{ backgroundColor: '#005F94', borderRadius: 6, paddingVertical: 10, width: 165, alignItems: 'center' }}
                      
                    >
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Cập nhật</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            {/* calendar */}
            <Modal
                animationType="fade"
                transparent={true}
                visible={showCalendar}>

                <View style={{ backgroundColor: 'gray', padding: 10, borderRadius: 30, marginTop: '40%', marginHorizontal: 20 }}>
                    <View>
                        <Calendar style={{ borderTopRightRadius: 30, borderTopLeftRadius: 30 }}
                            onDayPress={day => {
                                calendarFor === 'ngaysinh' && setSelectNgaySinh(day.dateString)
                                calendarFor === 'ngaycap' && setSelectNgayCap(day.dateString)
                            }}
                            markedDates={{
                                [calendarFor === 'ngaysinh' ? selectNgaySinh : selectNgayCap]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
                            }}

                        />
                    </View>

                    <TouchableOpacity style={{ marginTop: 10, borderRadius: 10, paddingVertical: 10, backgroundColor: 'white', marginHorizontal: 100 }}
                        onPress={() => setShowCalendar(!showCalendar)}>
                        <Text style={{ textAlign: 'center', fontWeight: 'bold', color: 'black' }}>Đóng</Text>
                    </TouchableOpacity>
                </View>
            </Modal>

        </View>
    )
}

export default ThongTinThuyenVienScreen