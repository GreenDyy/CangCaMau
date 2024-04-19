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
import moment from 'moment'

const listTinhTrang = [
    'Tất cả tình trạng',
    'Trong bờ',
    'Ngoài biển',
]

const listHanDangKiem = [
    'Tất cả',
    'Hết hạn',
    'Gần hết hạn',
    'Còn hạn'
]

const filter = {
    tinhtrang: 'Trong bờ',
    handangkiem: 'Hết hạn',
}

function CBLocKetQuaScreen({ navigation }) {
    const [tinhTrangDuyet, setTinhTrangDuyet] = useState('Tất cả tình trạng')
    const [hanDangKiem, setHanDangKiem] = useState('Tất cả')
    const [thoiGian, setThoiGian] = useState('Tất cả thời gian')
    const [showCalendar, setShowCalendar] = useState(false)
    const [calendarFor, setCalendarFor] = useState('')
    const [tuNgay, setTuNgay] = useState('')
    const [denNgay, setDenNgay] = useState('')


    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor={'#583CFF'} barStyle={'light-content'} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 12, paddingTop: 5, paddingBottom: 17, backgroundColor: '#583CFF' }}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}>
                    <Image source={icons.close} style={{ tintColor: 'gray', height: 20, width: 20, tintColor: 'white' }} />
                </TouchableOpacity>

                <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 16 }}>Lọc kết quả</Text>
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
                                        onPress={() => { setTinhTrangDuyet(item) }}>
                                        {
                                            tinhTrangDuyet === item ? <Image source={icons.checkcircle} style={{ height: 16, width: 16, marginRight: 10 }} /> :
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
                            listHanDangKiem.map((item, index) => (
                                <View key={index} style={{ flexDirection: 'row', alignItems: 'stretch' }}>
                                    <TouchableOpacity
                                        onPress={() => { setHanDangKiem(item) }}>
                                        {
                                            hanDangKiem === item ? <Image source={icons.checkcircle} style={{ height: 16, width: 16, marginRight: 10 }} /> :
                                                <View style={{ height: 16, width: 16, backgroundColor: '#F5F5F5', borderRadius: 999, borderWidth: 1, borderColor: 'gray', marginRight: 10 }} />
                                        }
                                    </TouchableOpacity>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ color: 'black' }}>{item}</Text>
                                        {
                                            index !== listHanDangKiem.length - 1 && <View style={{ borderBottomWidth: 1, borderBottomColor: '#D6D6D6', marginVertical: 15 }} />

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

                {/* 2 nút dưới */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 29 }}>
                    <TouchableOpacity style={{ paddingVertical: 10, backgroundColor: 'white', width: 173, height: 38, borderRadius: 6 }}
                        onPress={() => {
                            setHanDangKiem('Tất cả')
                            setTinhTrangDuyet('Tất cả tình trạng')
                        }}>
                        <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>Đặt lại</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ paddingVertical: 10, backgroundColor: '#005F94', width: 173, height: 38, borderRadius: 6 }}
                        onPress={() => navigation.navigate({
                            name: 'CBDanhSachTauCa',
                            params: { handangkiem: hanDangKiem, tinhtrangduyet: tinhTrangDuyet },
                            merge: true
                        })}>
                        <Text style={{ fontWeight: 'bold', color: 'white', textAlign: 'center' }}>Áp dụng</Text>
                    </TouchableOpacity>
                </View>


            </ScrollView>



        </View>
    )
}

export default CBLocKetQuaScreen
