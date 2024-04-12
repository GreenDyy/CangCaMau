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

function ThongTinChiTietScreen({ navigation }) {
    const [thuGonThongTinTau, setThuGonThongTinTau] = useState(false)
    const [thuGonThongSoKyThuat, setThuGonThongSoKyThuat] = useState(false)
    const [thuGonGiayChungNhan, setThuGonGiayChungNhan] = useState(false)
    const [thuGonThietBi, setThuGonThietBi] = useState(false)
    const [thuGonFile, setThuGonFile] = useState(false)
    const [thuGonThuyenVien, setThuGonThuyenVien] = useState(false)
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
                        <Text style={{ color: '#005F94', fontSize: 16, fontWeight: 'bold' }}>Thông tin tàu</Text>
                        <Image source={icons.fill} style={{ width: 8, height: 6, marginLeft: 5 }} />
                    </TouchableOpacity>

                    <View style={{ backgroundColor: 'white', borderRadius: 6, paddingVertical: 20, paddingHorizontal: 12 }}>
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
                    <TouchableOpacity style={{ marginBottom: 20 }}>
                        <Text style={{ color: '#FF820F', fontSize: 12, marginTop: 10, borderBottomWidth: 1, borderBottomColor: '#FF820F', width: 48, textAlign: 'center' }}>Cập nhật</Text>
                    </TouchableOpacity>
                </View>

                {/* Thông số kỹ thuật*/}
                <View>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
                        <Text style={{ color: '#005F94', fontSize: 16, fontWeight: 'bold' }}>Thông số kỹ thuật</Text>
                        <Image source={icons.fill} style={{ width: 8, height: 6, marginLeft: 5 }} />
                    </TouchableOpacity>

                    <View style={{ backgroundColor: 'white', borderRadius: 6, paddingVertical: 20, paddingHorizontal: 12 }}>
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
                    <TouchableOpacity style={{ marginBottom: 20 }}>
                        <Text style={{ color: '#FF820F', fontSize: 12, marginTop: 10, borderBottomWidth: 1, borderBottomColor: '#FF820F', width: 48, textAlign: 'center' }}>Cập nhật</Text>
                    </TouchableOpacity>
                </View>

                {/* Thông tin giấy chứng nhận*/}
                <View>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
                        <Text style={{ color: '#005F94', fontSize: 16, fontWeight: 'bold' }}>Thông tin giấy chứng nhận</Text>
                        <Image source={icons.fill} style={{ width: 8, height: 6, marginLeft: 5 }} />
                    </TouchableOpacity>

                    <View style={{ backgroundColor: 'white', borderRadius: 6, paddingVertical: 20, paddingHorizontal: 12 }}>
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
                    <TouchableOpacity style={{ marginBottom: 20 }}>
                        <Text style={{ color: '#FF820F', fontSize: 12, marginTop: 10, borderBottomWidth: 1, borderBottomColor: '#FF820F', width: 48, textAlign: 'center' }}>Cập nhật</Text>
                    </TouchableOpacity>
                </View>

                {/* Thông tin thiết bị định vị*/}
                <View>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
                        <Text style={{ color: '#005F94', fontSize: 16, fontWeight: 'bold' }}>Thông tin thiết bị định vị</Text>
                        <Image source={icons.fill} style={{ width: 8, height: 6, marginLeft: 5 }} />
                    </TouchableOpacity>

                    <View style={{ backgroundColor: 'white', borderRadius: 6, paddingVertical: 20, paddingHorizontal: 12 }}>
                        <MyTextInput header={'Nhà mạng cung cấp'} />
                        <MyTextInput header={'Seri'} />
                        <MyTextInput header={'Trạng thái'} />
                        <MyTextInput header={'Ngày đăng ký thiết bị'} />
                    </View>

                    <TouchableOpacity style={{ marginBottom: 20 }}>
                        <Text style={{ color: '#FF820F', fontSize: 12, marginTop: 10, borderBottomWidth: 1, borderBottomColor: '#FF820F', width: 48, textAlign: 'center' }}>Cập nhật</Text>
                    </TouchableOpacity>
                </View>

                {/* File đính kèm*/}
                <View>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
                        <Text style={{ color: '#005F94', fontSize: 16, fontWeight: 'bold' }}>File đính kèm</Text>
                        <Image source={icons.fill} style={{ width: 8, height: 6, marginLeft: 5 }} />
                    </TouchableOpacity>

                    <View style={{ backgroundColor: 'white', borderRadius: 6, paddingVertical: 20, paddingHorizontal: 12, marginBottom: 20 }}>
                        <MyTextInput header={'Giấy chứng nhận đăng ký tàu'} />
                        <MyTextInput header={'Giấy chứng nhận an toàn kỹ thuật'} />
                        <MyTextInput header={'Thiết bị định vị'} />
                    </View>
                </View>

                {/* Chủ sở hữu */}
                <Text style={styles.type}>Chủ sở hữu</Text>
                {/* ô trắng 1 */}
                <TouchableOpacity style={styles.childContainer}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 280 }}>
                        <Image source={icons.avatarchard} style={styles.imagecircle} />

                        <View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.title}>Nguyễn Văn B</Text>
                                <Text style={styles.role}>Chủ tàu</Text>
                            </View>

                            <Text style={styles.phone}>090 0000 090</Text>
                            <Text style={[styles.text, {}]}>Sào Lưới, Xã Khánh Bình Tây Bắc, Huyện Trần Văn Thời, Tỉnh Cà Mau</Text>
                        </View>
                    </View>

                    <Image source={icons.back} style={styles.backright} />

                </TouchableOpacity>

                {/* Thuyền viên */}
                <View>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}
                        onPress={() => setThuGonThuyenVien(!thuGonThuyenVien)}>
                        <Text style={styles.type}>Thuyền viên (3)</Text>
                        <Image source={icons.fill} style={{ width: 8, height: 6, marginLeft: 5, marginTop: 8 }} />
                    </TouchableOpacity>

                    {
                        !thuGonThuyenVien && (
                            <View>
                                {/* ô trắng 1 */}
                                <TouchableOpacity style={styles.childContainer}>

                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 280 }}>
                                        <Image source={icons.avatartv1} style={styles.imagecircle} />

                                        <View>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Text style={styles.title}>Luffy</Text>
                                                <Text style={styles.role}>Thuyền Trưởng</Text>
                                            </View>

                                            <Text style={styles.phone}>090 0000 090</Text>
                                            <Text style={[styles.text, {}]}>Sào Lưới, Xã Khánh Bình Tây Bắc, Huyện Trần Văn Thời, Tỉnh Cà Mau</Text>
                                        </View>
                                    </View>
                                    <Image source={icons.back} style={styles.backright} />

                                </TouchableOpacity>
                                <View style={{ borderBottomWidth: 1, borderBottomColor: '#D6D6D6', marginLeft: 12 }} />
                                {/* ô trắng 1 */}
                                <TouchableOpacity style={styles.childContainer}>

                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 280 }}>
                                        <Image source={icons.avatartv2} style={styles.imagecircle} />

                                        <View>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Text style={styles.title}>Sanji</Text>
                                                <Text style={styles.role}>Thuyền Viên</Text>
                                            </View>

                                            <Text style={styles.phone}>090 0000 090</Text>
                                            <Text style={[styles.text, {}]}>Sào Lưới, Xã Khánh Bình Tây Bắc, Huyện Trần Văn Thời, Tỉnh Cà Mau</Text>
                                        </View>
                                    </View>

                                    <Image source={icons.back} style={styles.backright} />

                                </TouchableOpacity>
                                <View style={{ borderBottomWidth: 1, borderBottomColor: '#D6D6D6', marginLeft: 12 }} />
                                {/* ô trắng 1 */}
                                <TouchableOpacity style={styles.childContainer}>

                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 280 }}>
                                        <Image source={icons.avatartv3} style={styles.imagecircle} />

                                        <View>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Text style={styles.title}>Ksante</Text>
                                                <Text style={styles.role}>Tổ Máy</Text>
                                            </View>

                                            <Text style={styles.phone}>090 0000 090</Text>
                                            <Text style={[styles.text, {}]}>Sào Lưới, Xã Khánh Bình Tây Bắc, Huyện Trần Văn Thời, Tỉnh Cà Mau</Text>
                                        </View>
                                    </View>

                                    <Image source={icons.back} style={styles.backright} />

                                </TouchableOpacity>
                            </View>
                        )
                    }
                </View>
                <TouchableOpacity>
                    <Text style={{ color: '#FF820F', fontSize: 12, marginTop: 10, borderBottomWidth: 1, borderBottomColor: '#FF820F', width: 48, textAlign: 'center' }}>Cập nhật</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: '#005F94', borderRadius: 6, paddingVertical: 10, alignItems: 'center', marginTop: 20, marginBottom: 25, width: 175, alignSelf: 'center' }}
                    onPress={() => navigation.navigate('TauCa')}>
                    <Text style={{ color: 'white', fontWeight: 'bold',  }}>Xác nhận</Text>
                </TouchableOpacity>

            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    childContainer: {
        borderRadius: 6,
        paddingVertical: 15,
        paddingHorizontal: 12,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    imagesquare: {
        height: 40, width: 40,
        borderRadius: 4,
        marginRight: 10,
    },
    imagecircle: {
        height: 40, width: 40,
        borderRadius: 999,
        marginRight: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },
    text: {
        fontSize: 12,
    },
    type: {
        fontSize: 16,
        color: '#005F94',
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 5,
    },
    trangthai: {
        backgroundColor: '#459AC9',
        fontSize: 10,
        alignSelf: 'center',
        borderRadius: 8,
        marginLeft: 5,
        paddingHorizontal: 8,
        color: 'white'
    },
    role: {
        color: '#005F94',
        fontSize: 12,
        marginLeft: 5,
        alignSelf: 'center'
    },
    backright: {
        width: 12,
        height: 12,
        tintColor: 'gray',
        transform: [{ scaleX: -1 }],
        marginTop: 3
    },
    phone: {
        color: 'black',
    },
    touchableCheckBox: {
        borderRadius: 4,
        borderWidth: 1,
        width: 15,
        height: 15,
        marginRight: 3,
        borderColor: '#005F94',
        justifyContent: 'center',
        alignItems: 'center'
    },

    touchableCheckBoxChecked: {
        borderRadius: 4,
        borderWidth: 1,
        width: 15,
        height: 15,
        marginRight: 3,
        borderColor: '#005F94',
        backgroundColor: '#005F94',
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default ThongTinChiTietScreen