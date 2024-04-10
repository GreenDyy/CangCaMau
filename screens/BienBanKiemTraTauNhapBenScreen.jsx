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
import SelectDropdown from 'react-native-select-dropdown'

const listcang = [
    {
        tencang: 'Bến Đà Lạt',
        diachi: 'Khóm 6B, Trần Văn Thời, Cà Mau',
        icon: icons.bendemo
    },
    {
        tencang: 'Bến Đà Lợp',
        diachi: 'Khóm 6B, Trần Văn Thời, Cà Mau',
        icon: icons.bendemo
    },
    {
        tencang: 'Bến Đà Cạp',
        diachi: 'Khóm 6B, Trần Văn Thời, Cà Mau',
        icon: icons.bendemo
    },
]

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

function BienBanKiemTraTauNhapBenScreen({ navigation }) {
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
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}>
                        <Image source={icons.back} style={{ height: 20, width: 20, tintColor: 'black' }} />
                    </TouchableOpacity>

                    <Text style={styles.title}>Biên bản kiểm tra tàu nhập bến</Text>

                    <View style={{ width: 20, height: 20 }} />
                </View>
                <Text style={{ textAlign: 'center' }}>(16:19, 26/10/2022)</Text>
            </View>

            {/* main */}
            <ScrollView
                showsVerticalScrollIndicator={false}>

                <MyCheckBox color={'#005F94'} fontWeight={500} text={'Xác nhận hoàn thành kiểm tra'} state={checkXacNhanBanGiao} setState={setCheckXacNhanBanGiao} />
                {/* Vị trì */}
                <View>
                    <Text style={styles.type}>Vị Trí</Text>
                    <View style={styles.childContainer}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Image source={icons.bendemo} style={styles.imagesquare} />

                            <View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={styles.title}>Bến Đá Bạc</Text>
                                    <Text style={{ color: '#005F94', fontSize: 12, marginLeft: 5 }}>X0165/1022</Text>
                                </View>
                                <Text style={styles.text}>Khóm 6B, Trần Văn Thời, Cà Mau</Text>
                            </View>
                        </View>
                        <Image source={icons.back} style={styles.backright} />
                    </View>
                </View>


                {/* 1 Đơn vị kiểm tra */}
                <View>
                    <Text style={{ color: '#005F94', fontWeight: 'bold', fontSize: 16, marginTop: 20 }}>1. Đơn vị kiểm tra: Văn phòng đại diện thanh tra, kiểm tra, kiểm soát tàu cá</Text>
                    <View style={[styles.childContainer, { flexDirection: 'column' }]}>
                        <Text style={{ fontSize: 12 }}>Người kiểm tra</Text>
                        <SelectDropdown
                            data={listcang}
                            onSelect={(selectedItem, index) => {
                                console.log(selectedItem.tencang, index);
                            }}
                            renderButton={(selectedItem, isOpened) => {
                                return (
                                    selectedItem ?
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-betweens', flex: 1 }}>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <Image source={selectedItem.icon} style={styles.imagesquare} />
                                                <View>
                                                    <View style={{ flexDirection: 'row' }}>
                                                        <Text style={styles.title}>{selectedItem.tencang}</Text>
                                                    </View>
                                                    <Text style={[styles.text, { width: '100%' }]}>{selectedItem.diachi}</Text>
                                                </View>
                                            </View>
                                            <Image source={icons.fill} style={{ width: 10, height: 6, tintColor: 'black', position: 'absolute', right: 0, top: 15 }} resizeMode="contain" />
                                        </View> :

                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1, alignItems: 'center' }}>
                                            <Text style={{ color: 'black', fontSize: 16 }}>{selectedItem ? selectedItem.tencang : '- Chọn người kiểm tra 1 -'}</Text>

                                        </View>
                                );
                            }}
                            renderItem={(item, index, isSelected) => {
                                return (
                                    <View style={[styles.childContainer, { backgroundColor: isSelected ? 'gray' : '' }]}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <Image source={item.icon} style={styles.imagesquare} />

                                            <View>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text style={styles.title}>{item.tencang}</Text>
                                                </View>
                                                <Text style={styles.text}>{item.diachi}</Text>
                                            </View>
                                        </View>
                                    </View>
                                );
                            }}
                            showsVerticalScrollIndicator={false}
                            dropdownStyle={{ borderBottomLeftRadius: 6, borderBottomRightRadius: 6, padding: 10 }}
                        />
                    </View>

                    {/* nguoi kiem tra 2 */}
                    <View style={[styles.childContainer, { flexDirection: 'column', marginTop: 5 }]}>
                        <Text style={{ fontSize: 12 }}>Người kiểm tra</Text>
                        <SelectDropdown
                            data={listcang}
                            onSelect={(selectedItem, index) => {
                                console.log(selectedItem.tencang, index);
                            }}
                            renderButton={(selectedItem, isOpened) => {
                                return (
                                    selectedItem ?
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-betweens', flex: 1 }}>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <Image source={selectedItem.icon} style={styles.imagesquare} />
                                                <View>
                                                    <View style={{ flexDirection: 'row' }}>
                                                        <Text style={styles.title}>{selectedItem.tencang}</Text>
                                                    </View>
                                                    <Text style={[styles.text, { width: '100%' }]}>{selectedItem.diachi}</Text>
                                                </View>
                                            </View>
                                            <Image source={icons.fill} style={{ width: 10, height: 6, tintColor: 'black', position: 'absolute', right: 0, top: 15 }} resizeMode="contain" />
                                        </View> :

                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1, alignItems: 'center' }}>
                                            <Text style={{ color: 'black', fontSize: 16 }}>{selectedItem ? selectedItem.tencang : '- Chọn người kiểm tra 2 -'}</Text>

                                        </View>
                                );
                            }}
                            renderItem={(item, index, isSelected) => {
                                return (
                                    <View style={[styles.childContainer, { backgroundColor: isSelected ? 'gray' : '' }]}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <Image source={item.icon} style={styles.imagesquare} />

                                            <View>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text style={styles.title}>{item.tencang}</Text>
                                                </View>
                                                <Text style={styles.text}>{item.diachi}</Text>
                                            </View>
                                        </View>
                                    </View>
                                );
                            }}
                            showsVerticalScrollIndicator={false}
                            dropdownStyle={{ borderBottomLeftRadius: 6, borderBottomRightRadius: 6, padding: 10 }}
                        />
                    </View>
                </View>

                {/* 2 kiem tra tau*/}
                <View style={{ marginTop: 10 }}>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.type}>2. Kiểm tra tàu</Text>
                        <Image source={icons.fill} style={{ width: 8, height: 6, marginLeft: 5, marginTop: 8 }} />
                    </View>

                    <View style={{ backgroundColor: 'white', paddingVertical: 20, paddingHorizontal: 12, borderRadius: 6 }}>
                        <MyTextInput header={'Tên phương tiện'} />
                        <MyTextInput header={'Số đăng ký'} />
                        <MyTextInput header={'Ngành nghề'} />
                    </View>

                    {/* Tên chủ tàu */}
                    <Text style={{ color: '#005F94', fontSize: 16, marginTop: 10, marginBottom: 5 }}>2.1 Tên chủ tàu</Text>
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
                    <Text style={{ color: '#005F94', fontSize: 16, marginTop: 10, marginBottom: 5 }}>2.2 Tên thuyền trưởng</Text>
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
                        <MyCheckBox text={'Báo cáo khai thác thủy sản'} />
                        <View style={{ borderBottomWidth: 1, borderBlockColor: '#D6D6D6', marginVertical: 15 }} />

                        <MyCheckBox text={'Nhật ký khai thác thủy sản'} />
                    </View>

                    {/* 4. Kiểm tra sản lượng khai thác*/}
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.type}>4. Kiểm tra sản lượng khai thác</Text>
                        <Image source={icons.fill} style={{ width: 8, height: 6, marginLeft: 5, marginTop: 8 }} />
                    </View>

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

export default BienBanKiemTraTauNhapBenScreen