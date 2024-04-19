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
import { images, icons } from '../constants/manager'
import MyTextInput from "../components/mytextinput";
import AsyncStorage from "@react-native-async-storage/async-storage";

function ChangePassScreen({ navigation }) {
    const [userProfile, setUserProfile] = useState(null)
    const [oldPass, setOldPass] = useState('')
    const [newPass, setNewPass] = useState('')
    const [rePass, setRePass] = useState('')

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
                <Text style={{ color: 'black', fontWeight: 'bold', textAlign: 'center', fontSize: 16 }}>Đổi mật khẩu</Text>
                {/* View này để căn chỉnh thôi  o-o-o */}
                <View style={{ width: 20, height: 20 }}></View>
            </View>

            {/* //noi dung */}
            <View style={{ borderRadius: 6, backgroundColor: 'white', marginHorizontal: 12, paddingHorizontal: 12, paddingVertical: 20 }}>
                {userProfile && userProfile.chucvu === 'Cán bộ' &&
                    <MyTextInput
                        header={'Tên đăng nhập'}
                        type={'delete'}
                    />}
                <MyTextInput
                    header={'Nhập mật khẩu củ'}
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

            <TouchableOpacity style={{ borderRadius: 6, backgroundColor: '#3345CB', paddingVertical: 10, paddingHorizontal: 42, marginTop: 30, alignSelf: 'center' }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Đổi mật khẩu</Text>
            </TouchableOpacity>
        </View>

    )
}

export default ChangePassScreen