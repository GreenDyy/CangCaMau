import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, FlatList, StatusBar, TextInput } from 'react-native'
import { icons, images } from '../../constants/manager'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from '@react-navigation/native';

const MAUTIM = '#2B13C0'

const DATA = [
    {
        title: 'Yêu cầu Xuất/Nhập bến',
        image: images.xuatnhapbencb,
        screen: 'YeuCauXuatNhapBen'
    },
    {
        title: 'Tàu cá',
        image: images.taucacb,
        screen: 'CBDanhSachTauCa'
    },
    {
        title: 'Thuyền viên',
        image: images.thuyenviencb,
        screen: 'CBDanhSachThuyenVien'
    },
    {
        title: 'Vi phạm',
        image: images.viphamcb,
        screen: 'CBLichSuViPham'
    },
    {
        title: 'Tai nạn',
        image: images.tainan,
        screen: 'CBDanhSachTaiNan'
    },
    {
        title: 'Thông báo',
        image: images.thongbao,
        screen: 'CBDanhSachThongBao'
    },
    {
        title: 'Hỏi ý kiến cấp trên',
        image: images.hoiykien,
        screen: 'CBHoiYKienCapTren'
    },
    {
        title: 'Tra cứu bến',
        image: images.tracuuben,
        screen: 'CBDanhSachCang'
    },
]
// ((id-id%2)/2)%2==0
const Item = ({ title, image, screen, id }) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity style={{
            alignItems: 'center',
            backgroundColor: id % 2 == 0 ? '#FFF4D7' : '#D6DAF5',
            borderRadius: 20,
            width: 105,
            height: 140,
            paddingVertical: 25,
            margin: 5.5
        }}
            onPress={() => navigation.navigate(screen)}>
            <View style={{ alignItems: 'center' }}>
                <Image source={image} style={{ height: 55, width: 55 }} resizeMode="contain" />
                <Text style={{ color: id % 2 == 0 ? '#FF820F' : '#2B13C0', fontWeight: 'bold', textAlign: 'center', marginTop: 15 }}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}


function CBHomeScreen({ navigation }) {
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
        <View style={{ flex: 1, backgroundColor: 'white' }}>

            <StatusBar backgroundColor={'white'} barStyle={'light-content'} />
            {/* header */}
            <View style={{
                flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', paddingBottom: 5, paddingBottom: 15, paddingHorizontal: 12,
                borderBottomWidth: 1, borderBottomColor: '#F5F5F5'
            }}>
                {/* searchbar */}
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', backgroundColor: '#E5E5E5', paddingHorizontal: 13, paddingVertical: 9, borderRadius: 6 }}>
                    <Image source={icons.search} style={{ width: 20, height: 20 }} />
                    <TextInput style={{ marginVertical: -30 }} placeholder="Nhập nội dung tìm kiếm" />
                </View>
                <Image source={icons.avatartv2} style={{ height: 36, width: 36, marginLeft: 10 }} resizeMode="contain" />
            </View>


            {/* body */}
            <View style={{ paddingHorizontal: 12 }}>
                <Text style={{ fontSize: 18, color: MAUTIM }}>Quản lý</Text>
                <Text style={{ fontSize: 28, fontWeight: 'bold', color: MAUTIM }}>TÀU CÁ CÀ MAU</Text>
            </View>

            <FlatList
                contentContainerStyle={{ alignItems: 'flex-start', marginTop: 10, alignSelf: 'center' }}
                showsVerticalScrollIndicator={false}
                numColumns={3}
                data={DATA}
                renderItem={({ item, index }) => (
                    <Item key={index} title={item.title} image={item.image} screen={item.screen} id={index + 1}
                    />)}
            />
        </View>
    )
}

export default CBHomeScreen