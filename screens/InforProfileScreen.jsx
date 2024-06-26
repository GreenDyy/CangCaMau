import React, { useState, useEffect } from "react";
import {
    View,
    TouchableOpacity,
    Image,
    Text,
    ScrollView,
    TextInput,
    StatusBar,
    Alert,
} from 'react-native'
import { images, icons } from '../constants/manager'
import AsyncStorage from "@react-native-async-storage/async-storage";

function InforProfileScreen({ navigation, route }) {
    const [userProfile, setUserProfile] = useState(null)

    //lấy tt CCCD sau khi quét
    useEffect(() => {
        if (route.params?.CCCD) {
            const arr = route.params?.CCCD.split('|')
            //cat ra thành như này [    "ma",    "",    "ten",    "ns",    "gt",    "dc",    "ngay cap"]

            const yourCCCD = {
                ma: arr[0],
                ten: arr[2],
                ngaysinh: arr[3],
                gioitinh: arr[4],
                diachi: arr[5],
                ngaycap: arr[6]
            }
            const newProfile = { ...userProfile }

            newProfile.ma = yourCCCD.ma
            newProfile.ten = yourCCCD.ten
            newProfile.ngaysinh = yourCCCD.ngaysinh.replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3");
            newProfile.gioitinh = yourCCCD.gioitinh
            newProfile.diachi = yourCCCD.diachi
            newProfile.ngaycap = yourCCCD.ngaycap.replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3");

            AsyncStorage.setItem('myProfile', JSON.stringify(newProfile));
            console.log('lúc này update xong')
        }
    }, [route.params?.CCCD]);

    
    useEffect(() => {
        console.log('lúc này lấy data')
        const getProfile = async () => {
            try {
                const myData = await AsyncStorage.getItem('myProfile')
                const parseMyData = myData ? JSON.parse(myData) : null
                setUserProfile(parseMyData)
                console.log(parseMyData)
            }
            catch (e) {
                console.error('Lỗi khi get data từ AsyncStorage: ', e);
                Alert.alert('Error', 'Lỗi khi get data từ AsyncStorage');
            }
        }
        getProfile()
    }, [route.params?.CCCD])


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
                    onPress={() => { navigation.navigate('QRCode') }}>
                    <Image source={icons.qr} style={{ height: 16, width: 16 }} />
                    <Text style={{ color: '#005F94', textAlign: 'center', fontSize: 12, borderBottomWidth: 0.2, marginLeft: 5, borderBottomColor: '#005F94' }}>Đăng ký bằng CCCD gắn chíp</Text>
                </TouchableOpacity>
                {/* content */}
                <View style={{ flex: 1, backgroundColor: 'white', borderRadius: 10, marginHorizontal: 10, paddingHorizontal: 10, paddingVertical: 15 }}>
                    <Text style={{ fontSize: 12 }}>Họ và tên</Text>
                    <TextInput style={{ top: -10, color: 'black' }} multiline={true} editable={false}
                        value={userProfile && userProfile.ten} />
                    <View style={{ borderBottomWidth: 1, top: -20 }} />

                    <Text style={{ fontSize: 12 }}>CMND/CCCD</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TextInput style={{ top: -10, width: '97%', color: 'black' }} multiline={true} editable={false}
                            value={userProfile && userProfile.ma} />
                        <TouchableOpacity style={{ alignSelf: 'center' }}
                            onPress={() => { navigation.navigate('QRCode') }}>
                            <Image source={icons.qr} style={{ height: 16, width: 16, position: 'absolute', bottom: 0, right: 0 }} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ borderBottomWidth: 1, top: -20 }} />

                    <Text style={{ fontSize: 12 }}>Ngày sinh</Text>
                    <TextInput style={{ top: -10, color: 'black' }} multiline={true} editable={false}
                        value={userProfile && userProfile.ngaysinh} />
                    <View style={{ borderBottomWidth: 1, top: -20 }} />

                    <Text style={{ fontSize: 12 }}>Địa chỉ</Text>
                    <TextInput style={{ top: -10, color: 'black' }} multiline={true} editable={false}
                        value={userProfile && userProfile.diachi}
                    />
                    <View style={{ borderBottomWidth: 1, top: -20 }} />

                    <Text style={{ fontSize: 12 }}>Phường/xã</Text>
                    <TextInput style={{ top: -10, color: 'black' }} multiline={true} editable={false} />
                    <View style={{ borderBottomWidth: 1, top: -20 }} />

                    <Text style={{ fontSize: 12 }}>Quận/huyện</Text>
                    <TextInput style={{ top: -10, color: 'black' }} multiline={true} editable={false} />
                    <View style={{ borderBottomWidth: 1, top: -20 }} />

                    <Text style={{ fontSize: 12 }}>Tỉnh/Thành phố</Text>
                    <TextInput style={{ top: -10, color: 'black' }} multiline={true} editable={false} />
                    <View style={{ borderBottomWidth: 1, top: -20 }} />

                    <Text style={{ fontSize: 12 }}>Số điện thoại</Text>
                    <TextInput style={{ top: -10, color: 'black' }} multiline={true} editable={false}
                        value={userProfile && userProfile.sdt}
                    />
                    <View style={{ borderBottomWidth: 1, top: -20 }} />

                    <Text style={{ fontSize: 12 }}>Loại thuyền viên</Text>
                    <TextInput style={{ top: -10, color: 'black' }} multiline={true} editable={false}
                        value={userProfile && userProfile.loaithuyenvien} />
                    <View style={{ borderBottomWidth: 1, top: -20 }} />
                </View>

                <View style={{ flex: 1, backgroundColor: 'white', borderRadius: 10, marginHorizontal: 10, paddingHorizontal: 10, paddingVertical: 15, marginTop: 10 }}>
                    <Text style={{ fontSize: 12 }}>Giấy chứng nhận chuyên môn</Text>
                    <TextInput style={{ top: -10, color: 'black' }} multiline={true} editable={false} />
                    <View style={{ borderBottomWidth: 1, top: -20 }} />

                    <Text style={{ fontSize: 12 }}>Cơ quan cấp</Text>
                    <TextInput style={{ top: -10, color: 'black' }} multiline={true} editable={false} />
                    <View style={{ borderBottomWidth: 1, top: -20 }} />

                    <Text style={{ fontSize: 12 }}>Ngày cấp</Text>
                    <TextInput style={{ top: -10, color: 'black' }} multiline={true} editable={false}
                        value={userProfile && userProfile.ngaycap} />
                    <View style={{ borderBottomWidth: 1, top: -20 }} />
                </View>
                {/* Button? */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginVertical: 20 }}>
                    <TouchableOpacity style={{ backgroundColor: '#F62825', borderRadius: 10, paddingVertical: 10, width: '48%' }}>
                        <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Xóa tài khoản</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ backgroundColor: '#005F94', borderRadius: 10, paddingVertical: 10, width: '48%' }}
                        onPress={() => navigation.navigate('UpdateProfile')}>
                        <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Cập nhật</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>

        </View>

    )
}

export default InforProfileScreen