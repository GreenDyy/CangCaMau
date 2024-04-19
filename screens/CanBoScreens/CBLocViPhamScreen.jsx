import React, { useState } from "react";
import {
    View,
    TouchableOpacity,
    Text,
    Image,
    StatusBar,
    ScrollView,
    Modal
} from 'react-native'
import { icons } from '../../constants/manager'
import { Calendar } from 'react-native-calendars';
import SelectDropdown from "react-native-select-dropdown";
import moment from "moment";

const DSNGUOITAO = ['Duy', 'Duy']

function CBLocViPhamScreen({ navigation }) {
    const [showCalendar, setShowCalendar] = useState(false)
    const [calendarFor, setCalendarFor] = useState('')
    const [thoiGian, setThoiGian] = useState('Tất cả thời gian')
    const [tuNgay, setTuNgay] = useState('')
    const [denNgay, setDenNgay] = useState('')

    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor={'#583CFF'} barStyle={'light-content'} />
            {/* header */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 12, paddingTop: 5, paddingBottom: 17, backgroundColor: '#583CFF' }}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}>
                    <Image source={icons.close} style={{ tintColor: 'gray', height: 20, width: 20, tintColor: 'white' }} />
                </TouchableOpacity>

                <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 16 }}>Lọc kết quả</Text>
                <View style={{ width: 18, height: 18 }} />

            </View>
            {/* body */}
            <View style={{ paddingTop: 15, paddingHorizontal: 12 }}>
                <View>
                    <Text style={{ fontSize: 16, fontWeight: 700, color: '#3345CB' }}>Tình trạng duyệt đề nghị</Text>
                    <View style={{ borderRadius: 6, backgroundColor: 'white', marginTop: 5, paddingHorizontal: 12, paddingVertical: 15, marginBottom: 20 }}>
                        <Text style={{ fontSize: 12, marginBottom: 5 }}>Người tạo</Text>
                        {/* hạn đăng kiểm */}
                        <SelectDropdown
                            dropdownStyle={{ borderRadius: 6 }}
                            data={DSNGUOITAO}

                            onSelect={(selectedItem, index) => {

                            }}
                            renderButton={(selectedItem) => {
                                return (
                                    !selectedItem ?
                                        <View style={{ borderBottomWidth: 1, borderBottomColor: '#D6D6D6', borderRadius: 4, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <Text style={{ color: 'black', fontSize: 16, fontWeight: 700 }}>Tất cả</Text>
                                            <Image source={icons.dropdown} style={{ width: 10, height: 6 }} />
                                        </View>
                                        :
                                        <View style={{ borderBottomWidth: 1, borderBottomColor: '#D6D6D6', borderRadius: 4, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <Text style={{ color: 'black', fontSize: 16, fontWeight: 700 }}>{selectedItem}</Text>
                                            <Image source={icons.dropdown} style={{ width: 10, height: 6 }} />
                                        </View>
                                );
                            }}
                            renderItem={(item, index, isSelected) => {
                                return (
                                    <View style={{ padding: 5, backgroundColor: isSelected && 'lightgreen' }}>
                                        <Text style={{ borderBottomWidth: 1, fontSize: 12 }}>{item}</Text>
                                    </View>
                                );
                            }}
                        />
                    </View>
                </View>

                {/* ô 2 */}
                <View>
                    <Text style={{ color: '#3345CB', fontSize: 16, fontWeight: 'bold', marginBottom: 5 }}>Thời gian bị bắt</Text>

                    <View style={{ borderRadius: 6, backgroundColor: 'white', paddingLeft: 12, paddingTop: 15, paddingBottom: 20 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'stretch' }}>
                            <TouchableOpacity
                                onPress={() => { setThoiGian('Tất cả thời gian') }}>
                                {
                                    thoiGian === 'Tất cả thời gian' ? <Image source={icons.checkcircle} style={{ height: 16, width: 16, marginRight: 10 }} /> :
                                        <View style={{ height: 16, width: 16, backgroundColor: '#F5F5F5', borderRadius: 999, borderWidth: 1, borderColor: 'gray', marginRight: 10 }} />
                                }
                            </TouchableOpacity>
                            <View style={{ flex: 1 }}>
                                <Text style={{ color: 'black' }}>Tất cả thời gian</Text>
                                <View style={{ borderBottomWidth: 1, borderBottomColor: '#D6D6D6', marginVertical: 15 }} />
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'stretch' }}>
                            <TouchableOpacity
                                onPress={() => { setThoiGian('Theo ngày') }}>
                                {
                                    thoiGian === 'Theo ngày' ? <Image source={icons.checkcircle} style={{ height: 16, width: 16, marginRight: 10 }} /> :
                                        <View style={{ height: 16, width: 16, backgroundColor: '#F5F5F5', borderRadius: 999, borderWidth: 1, borderColor: 'gray', marginRight: 10 }} />
                                }
                            </TouchableOpacity>
                            {/* 2 nút lịch */}
                            <View style={{ flex: 1, flexDirection: 'row' }}>

                                <TouchableOpacity style={{ flexDirection: 'row', borderBottomWidth: 1, width: 119, alignItems: 'center', borderBottomColor: '#D6D6D6' }}
                                    onPress={() => {
                                        setShowCalendar(!showCalendar),
                                            setCalendarFor('tungay')

                                    }}>
                                    <Image source={icons.calendar} style={{ height: 14, width: 14, marginRight: 2 }} resizeMode="contain" />
                                    <Text style={{ color: 'black' }}>{tuNgay !== '' ? tuNgay : 'Từ ngày'}</Text>
                                </TouchableOpacity>

                                <View style={{ marginHorizontal: 12 }}>
                                    <Text style={{ color: 'black' }}>-</Text>
                                </View>

                                <TouchableOpacity style={{ flexDirection: 'row', borderBottomWidth: 1, flex: 1, marginRight: 11, alignItems: 'center', borderBottomColor: '#D6D6D6' }}
                                    onPress={() => {
                                        setShowCalendar(!showCalendar),
                                            setCalendarFor('denngay')
                                    }}>
                                    <Image source={icons.calendar} style={{ height: 14, width: 14, marginRight: 2 }} resizeMode="contain" />
                                    <Text style={{ color: 'black' }}>{denNgay !== '' ? denNgay : 'Đến ngày'}</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                    </View>

                    <Modal
                        animationType="slidex"
                        transparent={true}
                        visible={showCalendar}>

                        <View style={{ backgroundColor: 'gray', padding: 10, borderRadius: 30, marginTop: '40%', marginHorizontal: 20 }}>
                            <View>
                                <Calendar style={{ borderTopRightRadius: 30, borderTopLeftRadius: 30 }}
                                    onDayPress={day => {
                                        calendarFor === 'tungay' ? setTuNgay(moment(day.dateString).format('DD/MM/YYYY')) : setDenNgay(moment(day.dateString).format('DD/MM/YYYY'))
                                        setShowCalendar(false);
                                    }}
                                    markedDates={{
                                        [calendarFor === 'tungay' ? tuNgay : denNgay]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
                                    }}

                                />
                            </View>

                            <TouchableOpacity style={{ marginTop: 10, borderRadius: 10, paddingVertical: 10, backgroundColor: 'white', marginHorizontal: 100 }}
                                onPress={() => setShowCalendar(false)}>
                                <Text style={{ textAlign: 'center', fontWeight: 'bold', color: 'black' }}>Đóng</Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>

                </View>
            </View>
            {/* footer */}
            {/* 2 nút dưới */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', position: 'absolute', bottom: 15, alignSelf: 'center' }}>
                <TouchableOpacity style={{ paddingVertical: 10, backgroundColor: 'white', width: 173, height: 38, borderRadius: 6 }}
                    onPress={() => {
                    
                    }}>
                    <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>Đặt lại</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ paddingVertical: 10, backgroundColor: '#3345CB', width: 173, height: 38, borderRadius: 6 }}
                    // onPress={() => navigation.navigate({
                    //     name: 'CBDanhSachTauCa',
                    //     params: { handangkiem: hanDangKiem, tinhtrangduyet: tinhTrangDuyet },
                    //     merge: true
                    // })}
                    >
                    <Text style={{ fontWeight: 'bold', color: 'white', textAlign: 'center' }}>Áp dụng</Text>
                </TouchableOpacity>
            </View>
        </View >

    )
}

export default CBLocViPhamScreen