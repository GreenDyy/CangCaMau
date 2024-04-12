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
import { icons } from '../constants/manager'
import { Calendar } from 'react-native-calendars';
import moment from 'moment'

const listTinhTrang = [
    'Tất cả thuyền viên',
    'Thuyền trưởng',
    'Thuyền viên',
    'Tổ máy',
    'Khác',
]

function LocKetQuaThuyenVienScreen({ navigation }) {
    const [tinhTrang, setTinhTrang] = useState('Tất cả tình trạng')
    const [trangThai, setTrangThai] = useState('Tất cả thao tác')
    const [thoiGian, setThoiGian] = useState('Tất cả thời gian')
    const [showCalendar, setShowCalendar] = useState(false)
    const [calendarFor, setCalendarFor] = useState('')
    const [tuNgay, setTuNgay] = useState('')
    const [denNgay, setDenNgay] = useState('')


    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor={'#459AC9'} barStyle={'light-content'} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, backgroundColor: '#459AC9' }}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}>
                    <Image source={icons.close} style={{ tintColor: 'gray', height: 20, width: 20, tintColor: 'white' }} />
                </TouchableOpacity>

                <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 16 }}>Lọc kết quả1</Text>
                <View style={{ width: 18, height: 18 }} />

            </View>

            <ScrollView
                contentContainerStyle={{ paddingBottom: 10 }}
                showsVerticalScrollIndicator={false}>
                {/* Tình trạng duyệt đề nghị */}
                <View style={{ marginHorizontal: 12 }}>
                    <Text style={{ color: '#005F94', fontSize: 16, fontWeight: 'bold', marginBottom: 5, marginTop: 15 }}>Tình trạng duyệt đề nghị</Text>

                    <View style={{ borderRadius: 6, backgroundColor: 'white', paddingLeft: 12, paddingTop: 15, paddingBottom: 20 }}>
                        {
                            listTinhTrang.map((item, index) => (
                                <View key={index} style={{ flexDirection: 'row', alignItems: 'stretch' }}>
                                    <TouchableOpacity
                                        onPress={() => { setTinhTrang(item) }}>
                                        {
                                            tinhTrang === item ? <Image source={icons.checkcircle} style={{ height: 16, width: 16, marginRight: 10 }} /> :
                                                <View style={{ height: 16, width: 16, backgroundColor: '#F5F5F5', borderRadius: 999, borderWidth: 1, borderColor: 'gray', marginRight: 10 }} />
                                        }
                                    </TouchableOpacity>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ color: 'black' }}>{item}</Text>
                                        {
                                            index !== listTinhTrang.length - 1 && <View style={{ borderBottomWidth: 1, borderBottomColor: '#D6D6D6', marginVertical: 15 }} />

                                        }
                                    </View>
                                </View>
                            ))
                        }
                    </View>
                </View>

                {/* 2 nút dưới */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 29 }}>
                    <TouchableOpacity style={{ paddingVertical: 10, backgroundColor: 'white', width: 173, height: 38, borderRadius: 6 }}>
                        <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>Đặt lại</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ paddingVertical: 10, backgroundColor: '#005F94', width: 173, height: 38, borderRadius: 6 }}
                        onPress={() => navigation.goBack()}>
                        <Text style={{ fontWeight: 'bold', color: 'white', textAlign: 'center' }}>Áp dụng</Text>
                    </TouchableOpacity>
                </View>


            </ScrollView>



        </View>
    )
}

export default LocKetQuaThuyenVienScreen
