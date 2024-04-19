import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    StatusBar,
    StyleSheet,
    Alert
}
    from 'react-native'
import { icons } from '../../constants/manager'
import MyTextInput from "../../components/mytextinput";
import AsyncStorage from "@react-native-async-storage/async-storage";

function CBChiTietTauCaScreen({ navigation }) {
    const [thuGonThongTinTau, setThuGonThongTinTau] = useState(false)
    const [thuGonThongSoKyThuat, setThuGonThongSoKyThuat] = useState(false)
    const [thuGonGiayChungNhan, setThuGonGiayChungNhan] = useState(false)
    const [thuGonThietBi, setThuGonThietBi] = useState(false)
    const [thuGonFile, setThuGonFile] = useState(false)
    const [thuGonThuyenVien, setThuGonThuyenVien] = useState(false)

    const [userProfile, setUserProfile] = useState(null)

    useEffect(() => {
        const getProfile = async () => {
            try {
                const myData = await AsyncStorage.getItem('myProfile')
                const parseMyData = myData != null ? JSON.parse(myData) : null
                setUserProfile(parseMyData)
                console.log(parseMyData.chucvu)
            }
            catch (e) {
                console.error('Lỗi khi get data từ AsyncStorage: ', e);
                Alert.alert('Error', 'Lỗi khi get data từ AsyncStorage');
            }
        }
        getProfile()
    }, [])

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

                    <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}>Thông tin chi tiết</Text>

                    <View style={{ width: 20, height: 20 }} />
                </View>
            </View>

            {/* body */}
            <ScrollView
                showsVerticalScrollIndicator={false}>
                {/* thông tin tàu */}
                <View>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
                        <Text style={{ color: '#3345CB', fontSize: 16, fontWeight: 'bold' }}>Thông tin tàu</Text>
                        <Image source={icons.fill} style={{ width: 8, height: 6, marginLeft: 5, tintColor: '#3345CB' }} />
                    </TouchableOpacity>

                    <View style={{ backgroundColor: 'white', borderRadius: 6, paddingVertical: 20, paddingHorizontal: 12, marginBottom: 20 }}>
                        <MyTextInput header={'Số đăng ký'} />
                        <MyTextInput header={'Tên tàu'} />
                        <MyTextInput header={'Địa bàn đăng ký'} />
                        <MyTextInput header={'Ngành nghề'} />
                        <MyTextInput header={'Hô hiệu'} />
                        <MyTextInput header={'Loại tàu'} />
                        <MyTextInput header={'Ngày xuất xưởng'} />
                        <MyTextInput header={'Nơi đóng'} />
                        <MyTextInput header={'Mẫu thiết kế'} />
                        <MyTextInput header={'Cơ quan thiết kế'} />
                        <MyTextInput header={'Cảng biển đăng ký'} />
                        <MyTextInput header={'Cơ quan đăng kiểm'} />
                        <MyTextInput header={'Ngày hết hạn đăng kiểm'} />
                        <MyTextInput header={'Khu vực hoạt động'} />
                        <MyTextInput header={'Đơn vị quản lý'} />
                    </View>
                </View>

                {/* Thông số kỹ thuật*/}
                <View>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
                        <Text style={{ color: '#3345CB', fontSize: 16, fontWeight: 'bold' }}>Thông số kỹ thuật</Text>
                        <Image source={icons.fill} style={{ width: 8, height: 6, marginLeft: 5 }} />
                    </TouchableOpacity>

                    <View style={{ backgroundColor: 'white', borderRadius: 6, paddingVertical: 20, paddingHorizontal: 12, marginBottom: 20 }}>
                        <MyTextInput header={'Số lượng máy'} />
                        <MyTextInput header={'Tổng công suất'} />
                        <MyTextInput header={'Chiều dài Lmax(m)'} />
                        <MyTextInput header={'Chiều dài Ltk(m)'} />
                        <MyTextInput header={'Chiều rộng Bmax(m)'} />
                        <MyTextInput header={'Chiều rộng Btk(m)'} />
                        <MyTextInput header={'Chiều cao mạn D(m)'} />
                        <MyTextInput header={'Chiều chìm d(m)'} />
                        <MyTextInput header={'Mạn khô f(m)'} />
                        <MyTextInput header={'Vật liệu vỏ'} />
                        <MyTextInput header={'Tổng dung tích'} />
                        <MyTextInput header={'Sức chở tối đa (tấn)'} />
                        <MyTextInput header={'Tốc độ tự do (hải lý/h)'} />
                    </View>
                </View>

                {/* Thông tin giấy chứng nhận*/}
                <View>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
                        <Text style={{ color: '#3345CB', fontSize: 16, fontWeight: 'bold' }}>Thông tin giấy chứng nhận</Text>
                        <Image source={icons.fill} style={{ width: 8, height: 6, marginLeft: 5 }} />
                    </TouchableOpacity>

                    <View style={{ backgroundColor: 'white', borderRadius: 6, paddingVertical: 20, paddingHorizontal: 12, marginBottom: 20 }}>
                        <MyTextInput header={'Số giấy phép khai thác'} />
                        <MyTextInput header={'Ngày cấp GPKT'} />
                        <MyTextInput header={'Ngày hết hạn GPKT'} />
                        <MyTextInput header={'Đơn vị cấp GPKT'} />
                        <MyTextInput header={'Số giấy chứng nhận an toàn kỹ thuật'} />
                        <MyTextInput header={'Ngày cấp GCNATKT'} />
                        <MyTextInput header={'Ngày hết hạn GCNATKT'} />
                        <MyTextInput header={'Đơn vị cấp GCNATKT'} />
                        <MyTextInput header={'Ngày cấp số giấy đăng ký tàu cá'} />
                    </View>
                </View>

                {/* Thông tin thiết bị định vị*/}
                <View>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
                        <Text style={{ color: '#3345CB', fontSize: 16, fontWeight: 'bold' }}>Thông tin thiết bị định vị</Text>
                        <Image source={icons.fill} style={{ width: 8, height: 6, marginLeft: 5 }} />
                    </TouchableOpacity>

                    <View style={{ backgroundColor: 'white', borderRadius: 6, paddingVertical: 20, paddingHorizontal: 12, marginBottom: 20 }}>
                        <MyTextInput header={'Nhà mạng cung cấp'} />
                        <MyTextInput header={'Seri'} />
                        <MyTextInput header={'Trạng thái'} />
                        <MyTextInput header={'Ngày đăng ký thiết bị'} />
                    </View>
                </View>

                {/* File đính kèm*/}
                <View>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
                        <Text style={{ color: '#3345CB', fontSize: 16, fontWeight: 'bold' }}>File đính kèm</Text>
                        <Image source={icons.fill} style={{ width: 8, height: 6, marginLeft: 5 }} />
                    </TouchableOpacity>

                    <View style={{ backgroundColor: 'white', borderRadius: 6, paddingVertical: 20, paddingHorizontal: 12, marginBottom: 20 }}>
                        <MyTextInput header={'Giấy chứng nhận đăng ký tàu'} />
                        <MyTextInput header={'Giấy chứng nhận an toàn kỹ thuật'} />
                        <MyTextInput header={'Thiết bị định vị'} />
                    </View>
                </View>

                {/* Chủ sở hữu */}
                <Text style={{ fontSize: 16, fontWeight: 700, color: '#3345CB', marginBottom: 5 }}>Chủ sở hữu</Text>
                <TouchableOpacity style={{ borderRadius: 6, paddingVertical: 15, paddingHorizontal: 12, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between' }}>

                    <View style={{ height: 40, width: 40 }}>
                        <Image source={icons.avatartv3} style={{ height: 40, weight: 40, alignSelf: 'center' }} resizeMode="contain" />
                    </View>

                    <View style={{ flex: 1, marginLeft: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontSize: 16, color: 'black', fontWeight: 700 }}>Nguyễn Văn B</Text>
                            <Text style={{ fontSize: 12, color: '#3345CB', marginLeft: 5 }}>Chủ sở hữu</Text>
                        </View>

                        <Text style={{ color: 'black' }}>090 0000 090</Text>
                        <Text style={{ fontSize: 12 }}>Sào Lưới, Xã Khánh Bình Tây Bắc, Huyện Trần Văn Thời, Tỉnh Cà Mau</Text>
                    </View>

                </TouchableOpacity>
                {/* Thuyền viên */}
                <View>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}
                        onPress={() => setThuGonThuyenVien(!thuGonThuyenVien)}>
                        <Text style={{ fontSize: 16, fontWeight: 700, color: '#3345CB', marginBottom: 5, marginTop: 20 }}>Thuyền viên (3)</Text>
                        <Image source={icons.fill} style={{ width: 8, height: 6, marginLeft: 5, marginTop: 8, tintColor: '#3345CB' }} />
                    </TouchableOpacity>

                    {
                        !thuGonThuyenVien && (
                            <View style={{ borderRadius: 6, backgroundColor: 'white' }}>
                                <TouchableOpacity style={{ borderRadius: 6, paddingVertical: 15, paddingHorizontal: 12, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between' }}>

                                    <View style={{ height: 40, width: 40 }}>
                                        <Image source={icons.avatartv2} style={{ height: 40, weight: 40, alignSelf: 'center' }} resizeMode="contain" />
                                    </View>

                                    <View style={{ flex: 1, marginLeft: 10 }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Text style={{ fontSize: 16, color: 'black', fontWeight: 700 }}>Luffy</Text>
                                            <Text style={{ fontSize: 12, color: '#3345CB', marginLeft: 5 }}>Thuyền Trưởng</Text>
                                        </View>

                                        <Text style={{ color: 'black' }}>090 0000 090</Text>
                                        <Text style={{ fontSize: 12 }}>Sào Lưới, Xã Khánh Bình Tây Bắc, Huyện Trần Văn Thời, Tỉnh Cà Mau</Text>
                                    </View>

                                </TouchableOpacity>
                                <View style={{ borderBottomWidth: 1, borderBottomColor: '#D6D6D6', marginLeft: 12 }} />

                                <TouchableOpacity style={{ borderRadius: 6, paddingVertical: 15, paddingHorizontal: 12, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between' }}>

                                    <View style={{ height: 40, width: 40 }}>
                                        <Image source={icons.avatartv2} style={{ height: 40, weight: 40, alignSelf: 'center' }} resizeMode="contain" />
                                    </View>

                                    <View style={{ flex: 1, marginLeft: 10 }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Text style={{ fontSize: 16, color: 'black', fontWeight: 700 }}>Luffy</Text>
                                            <Text style={{ fontSize: 12, color: '#3345CB', marginLeft: 5 }}>Thuyền Trưởng</Text>
                                        </View>

                                        <Text style={{ color: 'black' }}>090 0000 090</Text>
                                        <Text style={{ fontSize: 12 }}>Sào Lưới, Xã Khánh Bình Tây Bắc, Huyện Trần Văn Thời, Tỉnh Cà Mau</Text>
                                    </View>

                                </TouchableOpacity>
                                <View style={{ borderBottomWidth: 1, borderBottomColor: '#D6D6D6', marginLeft: 12 }} />

                                <TouchableOpacity style={{ borderRadius: 6, paddingVertical: 15, paddingHorizontal: 12, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between' }}>

                                    <View style={{ height: 40, width: 40 }}>
                                        <Image source={icons.avatartv2} style={{ height: 40, weight: 40, alignSelf: 'center' }} resizeMode="contain" />
                                    </View>

                                    <View style={{ flex: 1, marginLeft: 10 }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Text style={{ fontSize: 16, color: 'black', fontWeight: 700 }}>Luffy</Text>
                                            <Text style={{ fontSize: 12, color: '#3345CB', marginLeft: 5 }}>Thuyền Trưởng</Text>
                                        </View>

                                        <Text style={{ color: 'black' }}>090 0000 090</Text>
                                        <Text style={{ fontSize: 12 }}>Sào Lưới, Xã Khánh Bình Tây Bắc, Huyện Trần Văn Thời, Tỉnh Cà Mau</Text>
                                    </View>

                                </TouchableOpacity>
                            </View>
                        )
                    }
                </View>

                <TouchableOpacity style={{ backgroundColor: '#FFFFFF', borderRadius: 6, paddingVertical: 10, alignItems: 'center', marginTop: 20, marginBottom: 25, width: 175, alignSelf: 'center' }}
                    onPress={() => navigation.goBack()}>
                    <Text style={{ color: '#828282', fontWeight: 'bold' }}>Đóng</Text>
                </TouchableOpacity>

            </ScrollView>

        </View>
    )
}

export default CBChiTietTauCaScreen