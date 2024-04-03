import React, { useState } from "react";
import {
    View,
    TouchableOpacity,
    Text,
    Image,
    StatusBar,
    ScrollView,
    TextInput,
    Modal
} from 'react-native'
import { icons } from '../constants/manager'
import { Calendar } from 'react-native-calendars';

const listTinhTrang = [
    'Tất cả tình trạng',
    'Trong bờ',
    'Ngoài biển',
    'Không được nhập bến',
    'Không được xuất bến',
    'Chờ xác nhận xuất bến',
    'Chờ xác nhận nhập bến',
    'Được tiếp nhận',
    'Từ chối',
    'Chờ tiếp nhận yêu cầu']

const listTrangThai = [
    'Tất cả thao tác',
    'Xuất bến',
    'Nhập bến'
]

function LocKetQuaScreen({ navigation }) {
    const [tinhTrang, setTinhTrang] = useState('Tất cả tình trạng')
    const [trangThai, setTrangThai] = useState('Tất cả thao tác')
    const [thoiGian, setThoiGian] = useState('Tất cả thời gian')

    const [selectDay, setSelected] = useState('');
    const [showCalendar, setShowCalendar] = useState(false)
    const [calendarFor, setCalendarFor] = useState('')

    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor={'#459AC9'} barStyle={'light-content'} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, backgroundColor: '#459AC9' }}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}>
                    <Image source={icons.back} style={{ tintColor: 'gray', height: 20, width: 20, tintColor: 'white' }} />
                </TouchableOpacity>

                <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 16 }}>Lọc kết quả</Text>
                <View style={{ width: 18, height: 18 }} />

            </View>

            <ScrollView>
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

                {/* Trạng thái */}
                <View style={{ marginHorizontal: 12 }}>
                    <Text style={{ color: '#005F94', fontSize: 16, fontWeight: 'bold', marginBottom: 5, marginTop: 15 }}>Trạng thái</Text>

                    <View style={{ borderRadius: 6, backgroundColor: 'white', paddingLeft: 12, paddingTop: 15, paddingBottom: 20 }}>
                        {
                            listTrangThai.map((item, index) => (
                                <View key={index} style={{ flexDirection: 'row', alignItems: 'stretch' }}>
                                    <TouchableOpacity
                                        onPress={() => { setTrangThai(item) }}>
                                        {
                                            trangThai === item ? <Image source={icons.checkcircle} style={{ height: 16, width: 16, marginRight: 10 }} /> :
                                                <View style={{ height: 16, width: 16, backgroundColor: '#F5F5F5', borderRadius: 999, borderWidth: 1, borderColor: 'gray', marginRight: 10 }} />
                                        }
                                    </TouchableOpacity>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ color: 'black' }}>{item}</Text>
                                        {
                                            index !== listTrangThai.length - 1 && <View style={{ borderBottomWidth: 1, borderBottomColor: '#D6D6D6', marginVertical: 15 }} />

                                        }
                                    </View>
                                </View>
                            ))
                        }
                    </View>
                </View>

                {/* Thời gian gửi */}
                <View style={{ marginHorizontal: 12 }}>
                    <Text style={{ color: '#005F94', fontSize: 16, fontWeight: 'bold', marginBottom: 5, marginTop: 15 }}>Thời gian gửi</Text>

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
                            <View style={{ flex: 1, flexDirection: 'row' }}>

                                <TouchableOpacity style={{ flexDirection: 'row', borderBottomWidth: 1, width: 119, alignItems: 'center', borderBottomColor: '#D6D6D6' }}
                                    onPress={() => {
                                        setShowCalendar(!showCalendar),
                                            setCalendarFor('ngaysinh')

                                    }}>
                                    <Image source={icons.calendar} style={{ height: 14, width: 14, marginRight: 2 }} resizeMode="contain" />
                                    <Text style={{ color: 'black' }}>Từ ngày</Text>
                                </TouchableOpacity>

                                <View style={{ marginHorizontal: 12 }}>
                                    <Text style={{ color: 'black' }}>-</Text>
                                </View>

                                <View style={{ flexDirection: 'row', borderBottomWidth: 1, flex: 1, marginRight: 11, alignItems: 'center', borderBottomColor: '#D6D6D6' }}>
                                    <Image source={icons.calendar} style={{ height: 14, width: 14, marginRight: 2 }} resizeMode="contain" />
                                    <Text style={{ color: 'black' }}>Đến ngày</Text>
                                </View>

                            </View>
                        </View>
                    </View>

                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={showCalendar}>

                        <View style={{ backgroundColor: 'gray', padding: 10, borderRadius: 30, marginTop: '40%', marginHorizontal: 20 }}>
                            <View>
                                <Calendar style={{ borderTopRightRadius: 30, borderTopLeftRadius: 30 }}
                                    onDayPress={day => {
                                        setSelected(day.dateString);
                                        // setUserProfile({ ...userProfile, [calendarFor === 'tungay' ? 'tungay' : 'denngay']: moment(day.dateString).format('DD, MM, YYYY') })
                                    }}
                                    markedDates={{
                                        [selectDay]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
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


            </ScrollView>

        </View>
    )
}

export default LocKetQuaScreen
