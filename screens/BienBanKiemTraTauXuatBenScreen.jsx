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

const MyTextInput = ({ header }) => (
    <View>
        <Text>{header}</Text>
        <TextInput style={{ fontSize: 16, color: 'black', borderBottomWidth: 1, borderBottomColor: '#D6D6D6', bottom: 10, }} placeholder="--" placeholderTextColor={'black'} />
    </View>
)

const MyCheckBox = ({ text, state, setState, color, fontWeight }) => (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
        <TouchableOpacity style={state ? styles.touchableCheckBoxChecked : styles.touchableCheckBox}
            onPress={() => setState(!state)}
        >
            {
                state && <Image source={icons.check} resizeMode="contain" style={{ height: 10, width: 10, tintColor: 'white' }} />

            }
        </TouchableOpacity>
        <Text style={{ color: !color ? 'black' : color, fontSize: 16, marginLeft: 5, fontWeight: !fontWeight ? 400 : fontWeight }}>{text}</Text>
    </View>
)

function BienBanKiemTraTauXuatBenScreen({ navigation }) {
    const [checkXacNhanBanGiao, setCheckXacNhanBanGiao] = useState(true)
    const [checkGiayChungNhanDangKyTauCa, setCheckGiayChungNhanDangKyTauCa] = useState(true)
    const [checkGiayPhepChungNhanAnToanKyThuatTauCa, setCheckGiayPhepChungNhanAnToanKyThuatTauCa] = useState(true)
    const [checkGiayPhepKhaiThacThuySan, setCheckGiayPhepKhaiThacThuySan] = useState(true)
    const [checkNhatKyKhaiThacThuySan, setCheckNhatKyKhaiThacThuySan] = useState(true)
    const [checkSoDanhBaThuyenVienTauCa, setCheckSoDanhBaThuyenVienTauCa] = useState(true)
    const [checkVanBangChungChiThuyenTruong, setCheckVanBangChungChiThuyenTruong] = useState(true)


    return (
        <View style={{ flex: 1, paddingHorizontal: 12 }}>
            {/* header */}
            <StatusBar barStyle={"dark-content"} backgroundColor={'#F5F5F5'} />
            <View style={{ marginBottom: 15 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                    <TouchableOpacity>
                        <Image source={icons.back} style={{ height: 20, width: 20, tintColor: 'black' }} />
                    </TouchableOpacity>

                    <Text style={styles.title}>Biên bản kiểm tra tàu xuất bến</Text>

                    <View style={{ width: 20, height: 20 }} />
                </View>
                <Text style={{ textAlign: 'center' }}>(16:19, 26/10/2022)</Text>
            </View>

            {/* main */}
            <ScrollView
                showsVerticalScrollIndicator={false}>

                <MyCheckBox color={'#005F94'} fontWeight={500} text={'Xác nhận bàn giao biên bản cho Biên phòng'} state={checkXacNhanBanGiao} setState={setCheckXacNhanBanGiao} />
                {/* Vị trì */}
                <View>
                    <Text style={styles.type}>Vị Trí</Text>
                    <View style={styles.childContainer}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Image source={icons.bendemo} style={styles.imagesquare} />

                            <View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.title}>Bến Đá Bạc</Text>
                                </View>
                                <Text style={styles.text}>Khóm 6B, Trần Văn Thời, Cà Mau</Text>
                            </View>
                        </View>
                    </View>
                </View>


                {/* 1 Đơn vị kiểm tra */}
                <View>
                    <Text style={{ color: '#005F94', fontWeight: 'bold', fontSize: 16 }}>1. Đơn vị kiểm tra: Văn phòng đại diện thanh tra, kiểm tra, kiểm soát tàu cá</Text>
                    <TouchableOpacity style={styles.childContainer}>
                        <View style={{ flexDirection: 'row', width: 280 }}>
                            <Image source={icons.avatarchard} style={styles.imagecircle} />
                            <View>
                                <Text style={styles.title}>Lê Hoàng Khánh</Text>
                                <Text style={[styles.text, {}]}>Đội trưởng đội Rạch Gốc</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.childContainer, { marginTop: 5 }]}>
                        <View style={{ flexDirection: 'row', width: 280 }}>
                            <Image source={icons.avatartv2} style={styles.imagecircle} />
                            <View>
                                <Text style={styles.title}>Lê Văn Kiển</Text>
                                <Text style={[styles.text, {}]}>Chuyên viên Đội Rạch Gốc</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                {/* 2 kiem tra tau*/}
                <View style={{ marginTop: 10 }}>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.type}>2. Kiểm tra tàu</Text>
                        <Image source={icons.fill} style={{ width: 8, height: 6, marginLeft: 5, marginTop: 8 }} />
                    </View>
                    <Text style={{ color: '#005F94', fontSize: 16 }}>2.1 Tàu cá</Text>
                    {/* ô trắng 1 */}
                    <View style={styles.childContainer}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Image source={icons.tau} style={styles.imagesquare} />

                            <View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.title}>06812 - Rạng Đông 1</Text>
                                    <Text style={styles.trangthai}>Ngoài biển</Text>
                                </View>
                                <Text style={styles.text}>Loại: Khai thác thúy sản</Text>
                                <Text style={styles.text}>Hạn đăng kiểm: 12/11/2022	</Text>
                            </View>
                        </View>
                        <Image source={icons.back} style={styles.backright} />
                    </View>

                    {/* Tên chủ tàu */}
                    <Text style={{ color: '#005F94', fontSize: 16 }}>2.2 Tên chủ tàu</Text>
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

                    {/* Tên thuyền trưởng */}
                    <Text style={{ color: '#005F94', fontSize: 16 }}>2.3 Tên thuyền trưởng</Text>
                    <TouchableOpacity style={styles.childContainer}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 280 }}>
                            <Image source={icons.avatarchard} style={styles.imagecircle} />

                            <View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.title}>Nguyễn Văn B</Text>
                                    <Text style={styles.role}>Thuyền trưởng</Text>
                                </View>

                                <Text style={styles.phone}>090 0000 090</Text>
                                <Text style={[styles.text, {}]}>Sào Lưới, Xã Khánh Bình Tây Bắc, Huyện Trần Văn Thời, Tỉnh Cà Mau</Text>
                            </View>
                        </View>

                        <Image source={icons.back} style={styles.backright} />

                    </TouchableOpacity>

                    {/* 3. Kiểm tra hờ sơ */}
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.type}>3. Kiểm tra hồ sơ</Text>
                        <Image source={icons.fill} style={{ width: 8, height: 6, marginLeft: 5, marginTop: 8 }} />
                    </View>

                    <View style={[styles.childContainer, { flexDirection: 'column' }]} >
                        <MyCheckBox text={'Giấy chứng nhận đăng ký tàu cá'} />
                        <View style={{ borderBottomWidth: 1, borderBlockColor: '#D6D6D6', marginVertical: 15 }} />

                        <MyCheckBox text={'Giấy phép chứng nhận an toàn kỹ thuật tàu cá'} />
                        <View style={{ borderBottomWidth: 1, borderBlockColor: '#D6D6D6', marginVertical: 15 }} />

                        <MyCheckBox text={'Giấy phép khai thác thủy sản'} />
                        <View style={{ borderBottomWidth: 1, borderBlockColor: '#D6D6D6', marginVertical: 15 }} />

                        <MyCheckBox text={'Nhật ký khai thác thủy sản'} />
                        <View style={{ borderBottomWidth: 1, borderBlockColor: '#D6D6D6', marginVertical: 15 }} />

                        <MyCheckBox text={'Số danh bạ thuyền viên tàu cá'} />
                        <View style={{ borderBottomWidth: 1, borderBlockColor: '#D6D6D6', marginVertical: 15 }} />

                        <MyCheckBox text={'Văn bằng, chứng chỉ thuyền trưởng'} />
                        <View style={{ borderBottomWidth: 1, borderBlockColor: '#D6D6D6', marginVertical: 15 }} />

                        <MyCheckBox text={'Văn bằng, chứng chỉ máy trưởng'} />
                        <View style={{ borderBottomWidth: 1, borderBlockColor: '#D6D6D6', marginVertical: 15 }} />

                        <MyCheckBox text={'Giấy chứng nhận ATTP theo quy định'} />
                        <View style={{ borderBottomWidth: 1, borderBlockColor: '#D6D6D6', marginVertical: 15 }} />

                    </View>

                    {/* 4. Kiểm tra thực tế*/}
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.type}>4. Kiểm tra thực tế(Check chọn nếu đủ (Đ), không check nếu thiếu (T))</Text>
                        <Image source={icons.fill} style={{ width: 8, height: 6, marginLeft: 5, marginTop: 8 }} />
                    </View>

                    <Text style={{ color: '#005F94', fontSize: 16 }}>4.1 Trang thiết bị trên tàu</Text>

                    <View style={[styles.childContainer, { flexDirection: 'column', marginBottom: 5 }]} >
                        <View style={{ marginBottom: 15 }}>
                            <MyCheckBox text={'Trang thiết bị hàng hải'} />
                        </View>
                        <MyTextInput header={'Diễn giải'} />
                    </View>

                    <View style={[styles.childContainer, { flexDirection: 'column', marginBottom: 5 }]} >
                        <View style={{ marginBottom: 15 }}>
                            <MyCheckBox text={'Thông tin liên lạc, tín hiệu'} />
                        </View>
                        <MyTextInput header={'Diễn giải'} />
                    </View>

                    <View style={[styles.childContainer, { flexDirection: 'column', marginBottom: 5 }]} >
                        <View style={{ marginBottom: 15 }}>
                            <MyCheckBox text={'Cứu sinh, cứu hỏa'} />
                        </View>
                        <MyTextInput header={'Diễn giải'} />
                    </View>

                    <View style={[styles.childContainer, { flexDirection: 'column', marginBottom: 5 }]} >
                        <View style={{ marginBottom: 15 }}>
                            <MyCheckBox text={'Giám sát hành trình'} />
                        </View>
                        <MyTextInput header={'Diễn giải'} />
                    </View>

                    {/* 4.2 */}
                    <Text style={{ color: '#005F94', fontSize: 16 }}>4.2 Loại nghề khai thác thủy sản và đánh dấu tàu cá</Text>
                    <View style={[styles.childContainer, { flexDirection: 'column' }]} >
                        <MyCheckBox text={'Lưới kéo'} />
                        <View style={{ borderBottomWidth: 1, borderBlockColor: '#D6D6D6', marginVertical: 15 }} />

                        <MyCheckBox text={'Lưới vây'} />
                        <View style={{ borderBottomWidth: 1, borderBlockColor: '#D6D6D6', marginVertical: 15 }} />

                        <MyCheckBox text={'Nghề chụp'} />
                        <View style={{ borderBottomWidth: 1, borderBlockColor: '#D6D6D6', marginVertical: 15 }} />

                        <MyCheckBox text={'Dịch vụ hậu cần'} />
                        <View style={{ borderBottomWidth: 1, borderBlockColor: '#D6D6D6', marginVertical: 15 }} />

                        <MyCheckBox text={'Nghề câu'} />
                        <View style={{ borderBottomWidth: 1, borderBlockColor: '#D6D6D6', marginVertical: 15 }} />

                        <MyCheckBox text={'Lưới rê'} />
                        <View style={{ borderBottomWidth: 1, borderBlockColor: '#D6D6D6', marginVertical: 15 }} />

                        <MyCheckBox text={'Nghề lồng, bẫy'} />
                        <View style={{ borderBottomWidth: 1, borderBlockColor: '#D6D6D6', marginVertical: 15 }} />

                        <MyCheckBox text={'Đánh dấu tàu cá'} />
                        <View style={{ borderBottomWidth: 1, borderBlockColor: '#D6D6D6', marginVertical: 15 }} />

                    </View>

                    {/* 4.3 */}
                    <Text style={{ color: '#005F94', fontSize: 16 }}>4.3 Số lượng thuyền viên tàu cá</Text>
                    <View style={[styles.childContainer, { flexDirection: 'column' }]} >
                        <MyTextInput header={'Số lượng thuyền viên tàu cá'} />

                    </View>

                    {/* 5. Đã nộp báo cáo, nhật ký khai thác chuyến trước*/}
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.type}>5. Đã nộp báo cáo, nhật ký khai thác chuyến trước</Text>
                    </View>

                    <View style={[styles.childContainer, { flexDirection: 'column' }]} >
                        <MyCheckBox text={'Báo cáo khai thác thủy sản'} />
                        <View style={{ borderBottomWidth: 1, borderBlockColor: '#D6D6D6', marginVertical: 15 }} />

                        <MyCheckBox text={'Nhật ký khai thác thủy sản'} />
                        <View style={{ borderBottomWidth: 1, borderBlockColor: '#D6D6D6', marginVertical: 15 }} />
                    </View>

                    {/* 6. Kết luận kiểm tra*/}
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.type}>6. Kết luận kiểm tra</Text>
                    </View>
                    <View style={[styles.childContainer, { flexDirection: 'column' }]} >
                        <MyTextInput header={'Kết luận kiểm tra'} />

                    </View>


                </View>
                {/* nút đóng */}
                <TouchableOpacity style={{ backgroundColor: 'white', borderRadius: 6, paddingVertical: 10, width: 173, alignSelf: 'center', alignItems: 'center', marginBottom: 25, marginTop: 20 }}
                    onPress={() => navigation.goBack()}>
                    <Text style={{ color: 'black', fontWeight: 'bold' }}>Đóng</Text>
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

export default BienBanKiemTraTauXuatBenScreen