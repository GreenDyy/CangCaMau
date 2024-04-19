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
import { icons, images } from '../../constants/manager'
import MyTextInput from "../../components/mytextinput";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SelectDropdown from 'react-native-select-dropdown'

const listquan = ['Bình Chánh', 'Bình Tân', 'Tân Phú']
const listthanhpho = ['TP HCM', 'Vũng Tàu', 'Thủ Đức']

function CBChiTietThuyenVienScreen({ navigation, route }) {
    const [showPopUp, setShowPopUp] = useState(false)
    const [quan, setQuan] = useState('')
    const [thanhPho, setThanhPho] = useState('')
    const [userProfile, setUserProfile] = useState(null)

    useEffect(() => {
        const getProfile = async () => {
            try {
                const myData = await AsyncStorage.getItem('myProfile')
                const parseMyData = myData != null ? JSON.parse(myData) : null
                setUserProfile(parseMyData)
            }
            catch (e) {
                console.error('Lỗi khi get data từ AsyncStorage: ', e);
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

                    <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}>Thông tin thuyền viên</Text>

                    <View style={{ width: 20, height: 20 }} />
                </View>
            </View>

            {/* body */}
            <ScrollView
                showsVerticalScrollIndicator={false}>
                <View style={{ alignSelf: 'center' }}>
                    <View style={{ borderRadius: 999 }}>
                        <Image source={icons.avatartv1} style={{ height: 80, width: 80 }} />
                        <Text style={{ fontSize: 10, color: 'white', textAlign: 'center', paddingVertical: 2, paddingHorizontal: 4, backgroundColor: '#4DBFFF', borderRadius: 2, marginTop: 5 }}>
                            Rạng đông 1
                        </Text>
                    </View>
                </View>

                <View style={{ backgroundColor: 'white', borderRadius: 6, paddingTop: 30, paddingBottom: 15, paddingHorizontal: 12, marginTop: 10 }}>

                    <MyTextInput
                        header={'Họ và tên'}
                        editable={false}

                    />
                    <MyTextInput
                        header={'CMND/CCCD'}
                        editable={false}

                    />
                    <MyTextInput
                        header={'Ngày sinh'}
                        editable={false}

                    />
                    <MyTextInput
                        header={'Địa chỉ'}
                        editable={false}

                    />
                    <MyTextInput
                        header={'Phường/xã'}
                        editable={false}

                    />
                    <MyTextInput header={'Quận/huyện'} editable={false} value={quan} />

                    <MyTextInput header={'Tỉnh/Thành phố'} editable={false} value={thanhPho} />
                    <MyTextInput header={'Số điện thoại'} editable={false} value={'093828382'} />

                </View>
                {/* vùng trắng thứ 2 */}
                <View style={{ backgroundColor: 'white', borderRadius: 6, paddingTop: 30, paddingBottom: 15, paddingHorizontal: 12, marginTop: 20 }}>
                    <MyTextInput
                        header={'Giấy chứng nhận chuyên môn'}
                        editable={false}
                    />
                    <MyTextInput
                        header={'Cơ quan cấp'}
                        editable={false}
                    />
                    <MyTextInput
                        header={'Ngày cấp'}
                        editable={false}
                    />
                </View>

                <TouchableOpacity
                    style={{ backgroundColor: '#FFFFFF', borderRadius: 6, paddingVertical: 10, width: 165, alignItems: 'center', marginTop: 20, alignSelf: 'center' }}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={{ color: '#828282', fontWeight: 'bold' }}>Đóng</Text>
                </TouchableOpacity>
            </ScrollView>

        </View>
    )
}

export default CBChiTietThuyenVienScreen