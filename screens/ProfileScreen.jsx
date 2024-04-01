import React, {useState, useEffect} from "react";
import {
    View,
    TouchableOpacity,
    Image,
    Text,
    ScrollView,
    TextInput,
    StatusBar,
} from 'react-native'
import { images, icons } from '../constants/manager'
import AsyncStorage from "@react-native-async-storage/async-storage";


function ProfileScreen({ navigation }) {
    const [userProfile, setUserProfile] = useState(null)

    useEffect(() => {
        console.log('Idle Home')
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
            <StatusBar backgroundColor={'#459AC9'} barStyle={'light-content'} />
            <View style={{ backgroundColor: '#459AC9', paddingBottom: 20 }}>
                <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 16 }}>Cá nhân</Text>
            </View>
            {/* Tên chủ */}
            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, backgroundColor: 'white', marginBottom: 3 }}
            onPress={()=>{
                navigation.navigate('InforProfile')
            }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={userProfile ? userProfile.avatar : images.avatar} style={{ height: 48, width: 48 }} />
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}>{userProfile && userProfile.name}</Text>
                        <Text style={{ fontSize: 12 }}>{userProfile && userProfile.sdt}</Text>
                        <Text style={{ fontSize: 12 }}>{userProfile && userProfile.chucvu}</Text>
                    </View>
                </View>

                <Image source={icons.forward} style={{ height: 12, width: 12 }} />
            </TouchableOpacity>

            <TouchableOpacity style={{ backgroundColor: 'white', marginTop: 2, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={icons.version} style={{ height: 20, width: 20, marginRight: 5 }} />
                    <Text style={{ color: 'black', fontSize: 16 }}>Phiên bản</Text>
                </View>
                <Text style={{ color: 'black' }}>2.0.1.1</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ backgroundColor: 'white', marginTop: 2, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={icons.guige} style={{ height: 20, width: 20, marginRight: 5 }} />
                    <Text style={{ color: 'black', fontSize: 16 }}>Giới thiệu và hướng dẫn</Text>
                </View>
                <Image source={icons.forward} style={{ height: 12, width: 12 }} />
            </TouchableOpacity>

            <TouchableOpacity style={{ backgroundColor: 'white', marginTop: 2, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={icons.setting} style={{ height: 20, width: 20, marginRight: 5 }} />
                    <Text style={{ color: 'black', fontSize: 16 }}>Cài đặt</Text>
                </View>
                <Image source={icons.forward} style={{ height: 12, width: 12 }} />
            </TouchableOpacity>

            <TouchableOpacity style={{ backgroundColor: 'white', marginTop: 2, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}
            onPress={()=>navigation.navigate('ChangePass')}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={icons.changepassword} style={{ height: 20, width: 20, marginRight: 5 }} />
                    <Text style={{ color: 'black', fontSize: 16 }}>Đổi mật khẩu</Text>
                </View>
                <Image source={icons.forward} style={{ height: 12, width: 12 }} />
            </TouchableOpacity>

            <TouchableOpacity style={{marginTop : 10, marginHorizontal: 20, paddingVertical: 10, backgroundColor:'white', borderRadius:10}}>
                <Text style={{textAlign:'center', color:'#005F94', fontWeight:'bold'}}>Đăng xuất</Text>
            </TouchableOpacity>

        </View>

    )
}

export default ProfileScreen