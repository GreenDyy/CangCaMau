import React, { useState, useEffect } from "react";
import moment from 'moment';
import {
    View,
    TouchableOpacity,
    Image,
    Text,
    ScrollView,
    TextInput,
    StatusBar,
    Alert,
    Modal
} from 'react-native'
import { images, icons } from '../constants/manager'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Calendar } from 'react-native-calendars';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

const Lich = () => (
    <Modal
        animationType="fade"
        transparent={true}
        visible={showCalendar}>

        <View style={{ backgroundColor: 'gray', padding: 10, borderRadius: 30, marginTop: '40%', marginHorizontal: 20 }}>
            <View>
                <Calendar style={{ borderTopRightRadius: 30, borderTopLeftRadius: 30 }}
                    onDayPress={day => {
                        setSelectDay(day.dateString);
                        setUserProfile({ ...userProfile, [calendarFor === 'ngaysinh' ? 'ngaysinh' : 'ngaycap']: moment(day.dateString).format('DD/MM/YYYY') })
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
)

function UpdateProfileScreen({ navigation }) {

    const [userProfile, setUserProfile] = useState(null)

    const [selectDay, setSelectDay] = useState('');
    const [showCalendar, setShowCalendar] = useState(false)
    const [calendarFor, setCalendarFor] = useState('')

    useEffect(() => {
        const getProfile = async () => {
            try {
                const myData = await AsyncStorage.getItem('myProfile')
                const parseMyData = myData ? JSON.parse(myData) : null
                setUserProfile(parseMyData)
            }
            catch (e) {
                console.error('Lỗi khi get data từ AsyncStorage: ', e);
                Alert.alert('Error', 'Lỗi khi get data từ AsyncStorage');
            }
        }
        getProfile()
    }, [])

    const handleUpdate = async () => {
        try {
            // Tạo một bản sao mới của userProfile để cập nhật dữ liệu mới
            const newProfile = { ...userProfile };

            // Cập nhật dữ liệu từ các trường TextInput
            newProfile.name = userProfile.name; // Lấy từ state 'ten', bạn cần cập nhật state 'ten' khi TextInput thay đổi

            // Lưu cập nhật vào AsyncStorage
            await AsyncStorage.setItem('myProfile', JSON.stringify(newProfile));

            Alert.alert('Success', 'Thông tin cá nhân đã được cập nhật thành công');

            navigation.goBack();
        }
        catch (e) {
            console.error('Lỗi khi update du lieu: ', e);
            Alert.alert('Error', 'Lỗi khi update du lieu');
        }
    }

    return (
        <View style={{ flex: 1 }}>
            {/* header */}
            <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 10 }}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}>
                    <Image source={icons.back} style={{ tintColor: 'gray' }} />
                </TouchableOpacity>
                <Text style={{ color: 'black', fontWeight: 'bold', textAlign: 'center', fontSize: 16 }}>Thông tin cá nhân</Text>
                {/* View này để căn chỉnh thôi  o-o-o */}
                <View style={{ width: 20, height: 20 }}></View>
            </View>

            <ScrollView style={{ flex: 1, marginTop: 10 }}
                contentContainerStyle={{ paddingBottom: 30 }}>
                {/* cập nhật avatar */}
                <View style={{ alignSelf: 'center' }}>
                    <TouchableOpacity style={{ borderRadius: 999 }}
                        onPress={() => Alert.alert('Cập nhật ảnh')}>
                        <Image source={images.avatar} style={{ height: 80, width: 80 }} />
                        <Image source={icons.pencil} style={{ position: 'absolute', height: 24, width: 24, bottom: '5%', right: '0%' }} />
                    </TouchableOpacity>
                </View>


                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: 10 }}
                    onPress={() => Alert.alert('Quét QR tren chip')}>
                    <Image source={icons.qr} style={{ height: 16, width: 16 }} />
                    <Text style={{ color: '#005F94', textAlign: 'center', fontSize: 12, borderBottomWidth: 0.2, marginLeft: 5, borderBottomColor: '#005F94' }}>Đăng ký bằng CCCD gắn chíp</Text>
                </TouchableOpacity>
                {/* content */}
                <View style={{ flex: 1, backgroundColor: 'white', borderRadius: 10, marginHorizontal: 10, paddingHorizontal: 10, paddingVertical: 15 }}>
                    <Text style={{ fontSize: 12 }}>Họ và tên</Text>
                    <TextInput style={{ top: -10 }} multiline={true}
                        value={userProfile && userProfile.name}
                        onChangeText={(text) => setUserProfile({ ...userProfile, name: text })} />
                    <View style={{ borderBottomWidth: 1, top: -20 }} />

                    <Text style={{ fontSize: 12 }}>CMND/CCCD</Text>
                    <TextInput style={{ top: -10 }} multiline={true} />
                    <View style={{ borderBottomWidth: 1, top: -20 }} />

                    <Text style={{ fontSize: 12 }}>Ngày sinh</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TextInput style={{ top: -10, width: '97%' }} multiline={true}
                            value={userProfile && userProfile.ngaysinh} />
                        <TouchableOpacity style={{ alignSelf: 'center' }}
                            onPress={() => {
                                setShowCalendar(!showCalendar),
                                    setCalendarFor('ngaysinh')

                            }}>
                            <Image source={icons.calendar} resizeMode="contain" style={{ height: 16, width: 16, position: 'absolute', bottom: 0, right: 0 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ borderBottomWidth: 1, top: -20 }} />

                    <Text style={{ fontSize: 12 }}>Địa chỉ</Text>
                    <TextInput style={{ top: -10 }} multiline={true} />
                    <View style={{ borderBottomWidth: 1, top: -20 }} />

                    <Text style={{ fontSize: 12 }}>Phường/xã</Text>
                    <TextInput style={{ top: -10 }} multiline={true} />
                    <View style={{ borderBottomWidth: 1, top: -20 }} />

                    <Text style={{ fontSize: 12 }}>Quận/huyện</Text>
                    <TextInput style={{ top: -10 }} multiline={true} />
                    <View style={{ borderBottomWidth: 1, top: -20 }} />

                    <Text style={{ fontSize: 12 }}>Tỉnh/Thành phố</Text>
                    <TextInput style={{ top: -10 }} multiline={true} />
                    <View style={{ borderBottomWidth: 1, top: -20 }} />

                    <Text style={{ fontSize: 12 }}>Số điện thoại</Text>
                    <TextInput style={{ top: -10 }} multiline={true}
                        value={userProfile && userProfile.sdt}
                        onChangeText={(text) => setUserProfile({ ...userProfile, sdt: text })} />
                    <View style={{ borderBottomWidth: 1, top: -20 }} />

                    <Text style={{ fontSize: 12 }}>Loại thuyền viên</Text>
                    <TextInput style={{ top: -10 }} multiline={true}
                        value={userProfile && userProfile.loaithuyenvien} />
                    <View style={{ borderBottomWidth: 1, top: -20 }} />
                </View>

                <View style={{ flex: 1, backgroundColor: 'white', borderRadius: 10, marginHorizontal: 10, paddingHorizontal: 10, paddingVertical: 15, marginTop: 10 }}>
                    <Text style={{ fontSize: 12 }}>Giấy chứng nhận chuyên môn</Text>
                    <TextInput style={{ top: -10 }} multiline={true} />
                    <View style={{ borderBottomWidth: 1, top: -20 }} />

                    <Text style={{ fontSize: 12 }}>Cơ quan cấp</Text>
                    <TextInput style={{ top: -10 }} multiline={true} />
                    <View style={{ borderBottomWidth: 1, top: -20 }} />

                    <Text style={{ fontSize: 12 }}>Ngày cấp</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TextInput style={{ top: -10, width: '97%' }} multiline={true}
                            value={userProfile && userProfile.ngaycap} />
                        <TouchableOpacity style={{ alignSelf: 'center' }}
                            onPress={() => {
                                setShowCalendar(!showCalendar)
                                setCalendarFor('ngaycap')

                            }}>
                            <Image source={icons.calendar} resizeMode="contain" style={{ height: 16, width: 16, position: 'absolute', bottom: 0, right: 0 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ borderBottomWidth: 1, top: -20 }} />
                </View>
                {/* Button? */}
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginHorizontal: 10, marginVertical: 20 }}>
                    <TouchableOpacity style={{ backgroundColor: '#005F94', borderRadius: 10, paddingVertical: 10, width: '48%' }}
                        onPress={() => handleUpdate()}>
                        <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Xác nhận</Text>
                    </TouchableOpacity>



                </View>

            </ScrollView>

        </View>

    )
}

export default UpdateProfileScreen