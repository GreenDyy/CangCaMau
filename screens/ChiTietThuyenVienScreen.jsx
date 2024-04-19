import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    StatusBar,
    Modal,
} from 'react-native'
import { icons, images } from '../constants/manager'
import MyTextInput from "../components/mytextinput";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SelectDropdown from 'react-native-select-dropdown'

const listquan = ['Bình Chánh', 'Bình Tân', 'Tân Phú']
const listthanhpho = ['TP HCM', 'Vũng Tàu', 'Thủ Đức']

function ChiTietThuyenVienScreen({ navigation, route }) {
    const [screenCapNhat, setScreenCapNhat] = useState(false)
    const [showPopUp, setShowPopUp] = useState(false)
    const [quan, setQuan] = useState('')
    const [thanhPho, setThanhPho] = useState('')

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

                    <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}>Thông tin thuyền viên</Text>

                    <View style={{ width: 20, height: 20 }} />
                </View>
            </View>

            {/* body */}
            <ScrollView
                showsVerticalScrollIndicator={false}>
                {/* cập nhật avatar */}
                {
                    screenCapNhat ? (
                        <View style={{ alignSelf: 'center' }}>
                            <TouchableOpacity style={{ borderRadius: 999 }}
                            >
                                <Image source={icons.avatartv2} style={{ height: 80, width: 80 }} />
                                <Image source={icons.pencil} style={{ position: 'absolute', height: 24, width: 24, bottom: '5%', right: '0%' }} />
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <View style={{ alignSelf: 'center' }}>
                            <View style={{ borderRadius: 999 }}>
                                <Image source={icons.avatartv1} style={{ height: 80, width: 80 }} />
                                <Text style={{ fontSize: 10, color: 'white', textAlign: 'center', paddingVertical: 2, paddingHorizontal: 4, backgroundColor: '#4DBFFF', borderRadius: 2, marginTop: 5 }}>
                                    Rạng đông 1
                                </Text>
                            </View>
                        </View>
                    )
                }

                <View style={{ backgroundColor: 'white', borderRadius: 6, paddingTop: 30, paddingBottom: 15, paddingHorizontal: 12, marginTop: 10 }}>

                    <MyTextInput
                        header={'Họ và tên'}
                        editable={screenCapNhat ? true : false}
                        type={screenCapNhat && 'delete'}
                    />
                    <MyTextInput
                        header={'CMND/CCCD'}
                        editable={screenCapNhat ? true : false}
                        type={screenCapNhat && 'delete'}
                    />
                    <MyTextInput
                        header={'Ngày sinh'}
                        editable={screenCapNhat ? true : false}
                        type={screenCapNhat && 'calendar'}
                    />
                    <MyTextInput
                        header={'Địa chỉ'}
                        editable={screenCapNhat ? true : false}
                        type={screenCapNhat && 'delete'}
                    />
                    <MyTextInput
                        header={'Phường/xã'}
                        editable={screenCapNhat ? true : false}
                        type={screenCapNhat && 'delete'}
                    />
                    {/* chọn quận */}
                    <View>
                        <MyTextInput header={'Quận/huyện'} editable={false} value={quan} />
                        {screenCapNhat && (
                            <SelectDropdown
                                data={listquan}
                                onSelect={(selectedItem, index) => {
                                    setQuan(selectedItem)
                                }}
                                renderButton={(selectedItem, isOpened) => {
                                    return (
                                        <TouchableOpacity>
                                            <Image source={icons.fill} style={{ width: 10, height: 6, tintColor: 'black', position: 'absolute', right: 0, bottom: 10 }} resizeMode="contain" />
                                        </TouchableOpacity>
                                    );
                                }}
                                renderItem={(item, index, isSelected) => {
                                    return (
                                        <View style={{ backgroundColor: isSelected ? 'gray' : '' }}>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <Text>{item}</Text>
                                            </View>
                                        </View>
                                    );
                                }}
                                showsVerticalScrollIndicator={false}
                                dropdownStyle={{ borderBottomLeftRadius: 6, borderBottomRightRadius: 6, padding: 10 }}
                            />
                        )}
                    </View>

                    {/* chọn thành phố */}
                    <View>
                        <MyTextInput header={'Tỉnh/Thành phố'} editable={false} value={thanhPho} />
                        {screenCapNhat && (
                            <SelectDropdown
                                data={listthanhpho}
                                onSelect={(selectedItem, index) => {
                                    setThanhPho(selectedItem)
                                }}
                                renderButton={(selectedItem, isOpened) => {
                                    return (
                                        <TouchableOpacity>
                                            <Image source={icons.fill} style={{ width: 10, height: 6, tintColor: 'black', position: 'absolute', right: 0, bottom: 10 }} resizeMode="contain" />
                                        </TouchableOpacity>
                                    );
                                }}
                                renderItem={(item, index, isSelected) => {
                                    return (
                                        <View style={{ backgroundColor: isSelected ? 'gray' : '' }}>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <Text>{item}</Text>
                                            </View>
                                        </View>
                                    );
                                }}
                                showsVerticalScrollIndicator={false}
                                dropdownStyle={{ borderBottomLeftRadius: 6, borderBottomRightRadius: 6, padding: 10 }}
                            />
                        )}
                    </View>
                    <MyTextInput header={'Số điện thoại'} editable={false} value={'093828382'} />

                </View>
                {/* vùng trắng thứ 2 */}
                <View style={{ backgroundColor: 'white', borderRadius: 6, paddingTop: 30, paddingBottom: 15, paddingHorizontal: 12, marginTop: 20 }}>
                    <MyTextInput
                        header={'Giấy chứng nhận chuyên môn'}
                        editable={screenCapNhat ? true : false}
                        type={screenCapNhat && 'delete'}
                    />
                    <MyTextInput
                        header={'Cơ quan cấp'}
                        editable={screenCapNhat ? true : false}
                        type={screenCapNhat && 'delete'}
                    />
                    <MyTextInput
                        header={'Ngày cấp'}
                        editable={screenCapNhat ? true : false}
                        type={screenCapNhat && 'calendar'}
                    />
                </View>

                {
                    screenCapNhat ? (
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                            <TouchableOpacity
                                style={{ backgroundColor: '#FFC737', borderRadius: 6, paddingVertical: 10, width: 165, alignItems: 'center' }}
                            >
                                <Text style={{ color: 'white', fontWeight: 'bold' }}>Xóa</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={{ backgroundColor: '#005F94', borderRadius: 6, paddingVertical: 10, width: 165, alignItems: 'center' }}
                                onPress={() => setShowPopUp(true)}
                            >
                                <Text style={{ color: 'white', fontWeight: 'bold' }}>Lưu</Text>
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <TouchableOpacity
                            style={{ backgroundColor: '#005F94', borderRadius: 6, paddingVertical: 10, width: 165, alignItems: 'center', marginTop: 20, alignSelf: 'center' }}
                            onPress={() => setScreenCapNhat(!screenCapNhat)}
                        >
                            <Text style={{ color: 'white', fontWeight: 'bold' }}>Cập nhật</Text>
                        </TouchableOpacity>
                    )
                }
            </ScrollView>

            {/* popup xác nhận xuất bến */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={showPopUp}
                statusBarTranslucent={true}
            >
                <View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: '#454545' }}>

                    <View style={{ backgroundColor: 'white', borderTopEndRadius: 15, borderTopStartRadius: 15 }}>
                        <View style={{ paddingHorizontal: 12, paddingBottom: 37, paddingTop: 30 }}>
                            <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold', color: 'black' }}>Xác nhận đóng</Text>
                            <Text style={{ color: 'black', fontSize: 16, textAlign: 'center', marginTop: 20, marginBottom: 50 }}>
                                Chắc chưa?
                            </Text>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <TouchableOpacity
                                    style={{ backgroundColor: '#FFFFFF', borderRadius: 6, paddingVertical: 10, width: 165, alignItems: 'center', marginTop: 20 }}
                                    onPress={() => setShowPopUp(false)}
                                >
                                    <Text style={{ color: '#828282', fontWeight: 'bold' }}>Đóng</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={{ backgroundColor: '#005F94', borderRadius: 6, paddingVertical: 10, width: 165, alignItems: 'center', marginTop: 20 }}
                                    onPress={() => navigation.navigate('TabThuyenVien')}
                                >
                                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Xác nhận</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>

                </View>
            </Modal>

        </View>
    )
}

export default ChiTietThuyenVienScreen