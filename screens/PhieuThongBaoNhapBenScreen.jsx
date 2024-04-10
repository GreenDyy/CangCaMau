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

const dataSanLuongKhaiThac = [
    {
        tenca: 'Cá thu',
        slbaocao: 1200,
        slthucte: 1233.37
    },
    {
        tenca: 'Cá thác lác',
        slbaocao: 2200,
        slthucte: 2199.53
    },
    {
        tenca: 'Cá ngừ',
        slbaocao: 3100,
        slthucte: 3099.8
    },
    {
        tenca: 'Cá bò da',
        slbaocao: 1100,
        slthucte: 1101.35
    },
]

const MyTextInput = ({ header }) => (
    <View>
        <Text>{header}</Text>
        <TextInput style={{ fontSize: 16, color: 'black', borderBottomWidth: 1, borderBottomColor: '#D6D6D6', bottom: 10, }} />
    </View>
)

const MyCheckBox = ({ text, state, setState }) => (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
        <TouchableOpacity style={state ? styles.touchableCheckBoxChecked : styles.touchableCheckBox}
            onPress={() => setState(!state)}
        >
            {
                state && <Image source={icons.check} resizeMode="contain" style={{ height: 10, width: 10, tintColor: 'white' }} />

            }
        </TouchableOpacity>
        <Text style={{ color: 'black', fontSize: 16, marginLeft: 5 }}>{text}</Text>
    </View>
)

function PhieuThongBaoNhapBenScreen({ navigation }) {
    const [checkNhatKyKhaiThac, setCheckNhatKyKhaiThac] = useState(true)
    const [checkBienBanKiemTra, setCheckBienBanKiemTra] = useState(true)
    const [checkSoDanhBa, setCheckSoDanhBa] = useState(true)
    const [checkBangThuyenTruong, setCehckBangThuyenTruong] = useState(true)
    const [checkGiayPhepKhaiThac, setCheckGiayPhepKhaiThac] = useState(true)
    const [checkDangKyDangKiem, setCheckDangKyDangkiem] = useState(true)

    return (
        <View style={{ flex: 1, paddingHorizontal: 12 }}>
            {/* header */}
            <StatusBar barStyle={"dark-content"} backgroundColor={'#F5F5F5'} />
            <View style={{ marginBottom: 15 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}>
                        <Image source={icons.back} style={{ height: 20, width: 20, tintColor: 'black' }} />
                    </TouchableOpacity>

                    <Text style={styles.title}>Phiếu thông báo tàu cá nhập bến</Text>

                    <View style={{ width: 20, height: 20 }} />
                </View>
                <Text style={{ color: '#005F94', textAlign: 'center' }}>TB0069/1022</Text>
            </View>

            {/* main */}
            <ScrollView
                showsVerticalScrollIndicator={false}>
                {/* 1 tên tàu */}
                <View>
                    <Text style={{ color: '#005F94', fontWeight: 'bold', fontSize: 16 }}>1. Tên tàu</Text>
                    <View style={{ borderRadius: 6, backgroundColor: 'white', paddingHorizontal: 12, paddingVertical: 20 }}>
                        <MyTextInput header={'Tên phương tiện'} />
                        <MyTextInput header={'Số đăng ký'} />
                    </View>
                </View>

                {/* 2 Tên chủ tàu*/}
                <View style={{ marginTop: 10 }}>
                    <Text style={{ color: '#005F94', fontWeight: 'bold', fontSize: 16 }}>2. Tên chủ tàu</Text>
                    {/* ô trắng 1 */}
                    <TouchableOpacity style={styles.childContainer}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 280 }}>
                            <Image source={icons.avatarchard} style={styles.imagecircle} />

                            <View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={styles.title}>Nguyễn Văn B</Text>
                                    <Text style={styles.role}>Chủ tàu</Text>
                                    <Image source={icons.infor} style={{ height: 16, width: 16, marginLeft: 5 }} />
                                </View>

                                <Text style={styles.phone}>090 0000 090</Text>
                                <Text style={[styles.text, {}]}>Sào Lưới, Xã Khánh Bình Tây Bắc, Huyện Trần Văn Thời, Tỉnh Cà Mau</Text>
                            </View>
                        </View>

                        <Image source={icons.back} style={styles.backright} />

                    </TouchableOpacity>
                </View>

                {/* 3 Tên thuyền trưởng*/}
                <View style={{ marginTop: 10 }}>
                    <Text style={{ color: '#005F94', fontWeight: 'bold', fontSize: 16 }}>3. Tên thuyền trưởng</Text>
                    {/* ô trắng 1 */}
                    <TouchableOpacity style={styles.childContainer}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 280 }}>
                            <Image source={icons.avatarchard} style={styles.imagecircle} />

                            <View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={styles.title}>Nguyễn Văn B</Text>
                                    <Text style={styles.role}>Chủ tàu</Text>
                                    <Image source={icons.infor} style={{ height: 16, width: 16, marginLeft: 5 }} />
                                </View>

                                <Text style={styles.phone}>090 0000 090</Text>
                                <Text style={[styles.text, {}]}>Sào Lưới, Xã Khánh Bình Tây Bắc, Huyện Trần Văn Thời, Tỉnh Cà Mau</Text>
                            </View>
                        </View>

                        <Image source={icons.back} style={styles.backright} />

                    </TouchableOpacity>
                </View>


                {/* 4 thời gian cập cảng */}
                <View style={{ marginTop: 10 }}>
                    <Text style={{ color: '#005F94', fontWeight: 'bold', fontSize: 16 }}>4. Thời gian cập cảng</Text>
                    <View style={{ borderRadius: 6, backgroundColor: 'white', paddingHorizontal: 12, paddingVertical: 20 }}>
                        <MyTextInput header={'Thời gian'} />
                    </View>
                </View>

                {/* 5. Nhu cầu cập cảng */}
                <View style={{ marginTop: 10 }}>
                    <Text style={{ color: '#005F94', fontWeight: 'bold', fontSize: 16 }}>5. Nhu cầu cập cảng</Text>
                    <View style={{ borderRadius: 6, backgroundColor: 'white', paddingHorizontal: 12, paddingVertical: 20 }}>
                        <MyTextInput header={'Nhu cầu cập cảng'} />
                    </View>
                </View>

                {/* 6. Kiểm tra hồ sơ */}
                <View style={{ marginTop: 10 }}>
                    <Text style={{ color: '#005F94', fontWeight: 'bold', fontSize: 16 }}>6. Kiểm tra hồ sơ</Text>
                    <View style={{ borderRadius: 6, backgroundColor: 'white', paddingHorizontal: 12, paddingVertical: 20 }}>
                        <MyTextInput header={'Kiểm tra hồ sơ'} />

                        <MyTextInput header={'Ngành nghề'} />

                        <MyTextInput header={'Chiều dài'} />

                        <MyTextInput header={'Công xuất'} />

                        <MyTextInput header={'Số GPKT'} />

                        <MyTextInput header={'Ngày hết hạn đăng kiểm'} />

                        <MyCheckBox text={'Nhật ký khai thác/ thu mua chuyển tải thủy sản chuyến trước'} state={checkNhatKyKhaiThac} setState={setCheckNhatKyKhaiThac} />
                    </View>

                    <View style={{ borderRadius: 6, backgroundColor: 'white', paddingHorizontal: 12, paddingVertical: 20, marginTop: 5 }}>
                        <MyTextInput header={'Kiểm tra nội dung nhật ký'} />
                    </View>

                    {/* 7. Kiểm tra sản lượng khai thác */}
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ color: '#005F94', fontWeight: 'bold', fontSize: 16 }}>7. Kiểm tra sản lượng khai thác</Text>
                        {/* header table */}
                        <View style={{ flexDirection: 'row', width: '100%', backgroundColor: '#459AC9', borderTopRightRadius: 6, borderTopLeftRadius: 6, paddingVertical: 10, paddingLeft: 12, paddingRight: 16, alignItems: 'center' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 13, color: 'white', width: '40%' }}>Tên loại thủy sản</Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 13, color: 'white', width: '30%', textAlign: 'center', paddingHorizontal: 12 }}>Sản lượng báo cáo (kg)</Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 13, color: 'white', width: '30%', textAlign: 'center', paddingHorizontal: 12 }}>Sản lượng thực tế (kg)</Text>
                        </View>
                        {/* body table */}
                        <View style={{ backgroundColor: 'white' }}>
                            {
                                dataSanLuongKhaiThac.map((item, index) => {

                                    return (
                                        <View key={index} style={{
                                            borderBottomLeftRadius: index === dataSanLuongKhaiThac.length - 1 ? 6 : 0,
                                            borderBottomRightRadius: index === dataSanLuongKhaiThac.length - 1 ? 6 : 0,
                                        }}>
                                            <View style={{
                                                flexDirection: 'row',
                                                backgroundColor: 'white',
                                                paddingLeft: 12,
                                                paddingRight: 16,
                                            }}>
                                                <Text style={{ fontSize: 13, color: 'black', width: '40%', paddingVertical: 15 }}>{item.tenca}</Text>
                                                <Text style={{ fontSize: 13, color: 'black', width: '30%', paddingVertical: 15, textAlign: 'center' }}>{item.slbaocao}</Text>
                                                <Text style={{ fontSize: 13, color: '#005F94', width: '30%', paddingVertical: 15, textAlign: 'center' }}>{item.slthucte}</Text>
                                            </View>
                                            {index !== dataSanLuongKhaiThac.length - 1 &&
                                                <View style={{ borderBottomWidth: 1, borderBottomColor: '#D6D6D6' }} />}
                                        </View>
                                    )
                                })
                            }
                        </View>
                        {/* footer table */}
                        <View style={{ flexDirection: 'row', width: '100%', backgroundColor: 'white', borderTopRightRadius: 6, borderTopLeftRadius: 6, paddingVertical: 10, paddingLeft: 12, paddingRight: 16, alignItems: 'center' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 13, color: 'black', width: '40%' }}>TỔNG CỘNG</Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 13, color: 'black', width: '30%', textAlign: 'center', paddingHorizontal: 12 }}>7600</Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 13, color: '#005F94', width: '30%', textAlign: 'center', paddingHorizontal: 12 }}>7,634.05</Text>
                        </View>


                    </View>

                    {/* 8.Kết luận */}
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ color: '#005F94', fontWeight: 'bold', fontSize: 16 }}>8.Kết luận</Text>
                        <View style={{ borderRadius: 6, backgroundColor: 'white', paddingHorizontal: 12, paddingVertical: 20 }}>
                            <MyTextInput header={'Thời gian'} />

                        </View>
                    </View>
                    {/* các checkbox */}
                    <View style={{ marginVertical: 20 }}>
                        <MyCheckBox text={'Biên bản kiểm tra đối chiếu sản lượng thủy sản bốc dỡ qua cảng'} state={checkBienBanKiemTra} setState={setCheckBienBanKiemTra} />
                        <View style={{ marginTop: 15 }}>
                            <MyCheckBox text={'Sổ danh bạ thuyền viên'} state={checkSoDanhBa} setState={setCheckSoDanhBa} />
                        </View>

                        <View style={{ marginTop: 15 }}>
                            <MyCheckBox text={'Bằng thuyền trưởng máy trưởng'} state={checkBangThuyenTruong} setState={setCehckBangThuyenTruong} />

                        </View>

                        <View style={{ marginTop: 15 }}>
                            <MyCheckBox text={'Giấy phép khai thác thủy sản'} state={checkGiayPhepKhaiThac} setState={setCheckGiayPhepKhaiThac} />

                        </View>

                        <View style={{ marginTop: 15 }}>
                            <MyCheckBox text={'Đăng ký đăng kiểm tàu cá'} state={checkDangKyDangKiem} setState={setCheckDangKyDangkiem} />

                        </View>
                    </View>

                </View>
                {/* nút đóng */}
                <TouchableOpacity style={{ backgroundColor: 'white', borderRadius: 6, paddingVertical: 10, width: 173, alignSelf: 'center', alignItems: 'center', marginBottom: 25 }}
                    onPress={() => navigation.goBack()}>
                    <Text style={{ color: 'black', fontWeight: 'bold' }}>Đóng</Text>
                </TouchableOpacity>

            </ScrollView >



        </View >
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
        transform: [{ scaleX: -1 }]
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

export default PhieuThongBaoNhapBenScreen