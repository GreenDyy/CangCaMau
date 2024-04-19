import React, { useState, useEffect } from "react";
import moment from 'moment';
import {
    View,
    TouchableOpacity,
    Image,
    Text,
    StatusBar,
    Alert,
} from 'react-native'
import { images, icons } from '../../constants/manager'
import MyTextInput from "../../components/mytextinput";
import AsyncStorage from "@react-native-async-storage/async-storage";

function CBThongTinCaNhanScreen({ navigation }) {
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
                Alert.alert('Error', 'Lỗi khi get data từ AsyncStorage');
            }
        }
        getProfile()
    }, [])

    return (
        <View style={{ flex: 1 }}>
            {/* header */}
            <StatusBar backgroundColor={'#F5F5F5'} barStyle={'dark-content'} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 5, marginBottom: 17, paddingHorizontal: 12 }}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}>
                    <Image source={icons.back} style={{ tintColor: 'black' }} />
                </TouchableOpacity>
                <Text style={{ color: 'black', fontWeight: 'bold', textAlign: 'center', fontSize: 16 }}>Thông tin cá nhân</Text>
                {/* View này để căn chỉnh thôi  o-o-o */}
                <View style={{ width: 20, height: 20 }}></View>
            </View>

            {/* change avatar */}
            <View style={{ alignSelf: 'center', marginBottom: 20 }}>
                <TouchableOpacity style={{ borderRadius: 999 }}
                    onPress={() => Alert.alert('Cập nhật ảnh')}>
                    <Image source={images.avatarnullwhite} style={{ height: 80, width: 80 }} />
                    <Image source={icons.pencil} style={{ position: 'absolute', height: 24, width: 24, bottom: '5%', right: '0%' }} />
                </TouchableOpacity>
            </View>

            {/* //noi dung */}
            <View style={{ borderRadius: 6, backgroundColor: 'white', marginHorizontal: 12, paddingHorizontal: 12, paddingVertical: 20 }}>
                <MyTextInput
                    header={'Họ tên'}
                    type={'delete'}
                />
                <MyTextInput
                    header={'Chức vụ'}
                    type={'delete'}
                />
                <MyTextInput
                    header={'Đơn vị'}
                    type={'delete'}
                />

            </View>
        </View>

    )
}

export default CBThongTinCaNhanScreen