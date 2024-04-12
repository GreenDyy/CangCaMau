import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, SafeAreaView, Image, ScrollView, FlatList, Dimensions } from 'react-native'
import { images } from '../constants/manager'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from '@react-navigation/native';

const DATA = [
    {
        title: 'Xuất,Nhập bến',
        image: images.xuatnhapben,
        screen: 'XuatNhapBen'
    },
    {
        title: 'Tàu cá',
        image: images.tauca,
        screen: 'TauCa'
    },
    {
        title: 'Thuyền viên',
        image: images.thuyenvien,
        screen: 'TabThuyenVien'
    },
    {
        title: 'Lịch sử vi phạm',
        image: images.lichsuvipham,
        screen: 'LichSuViPham'
    },
    {
        title: 'Lịch sử tai nạn',
        image: images.lichsutainan,
        screen: 'LichSuTaiNan'
    },
    {
        title: 'Cảnh báo',
        image: images.canhbao,
        screen: 'CanhBao'
    },
]

const Item = ({ id, title, image, screen }) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity style={{
            width: 166,
            alignItems: 'center',
            backgroundColor: ((id - id % 2) / 2) % 2 == 0 ? '#E8F6FE' : '#FFF5EC',
            borderRadius: 20,
            paddingVertical: 25,
            marginVertical: 6,
            marginHorizontal: 5.5
        }}
            onPress={() => navigation.navigate(screen)}>
            <View style={{ alignItems: 'center' }}>
                <Image source={image} style={{ width: id !== 3 ? 60 : 75, height: 60 }} />
                <Text style={{ color: ((id - id % 2) / 2) % 2 == 0 ? '#005F94' : '#FF820F', fontWeight: 'bold', textAlign: 'center', marginTop: 10 }}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}


function HomeScreen({ navigation }) {

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
            {/* header */}
            <View style={{ flexDirection: 'row', marginBottom: 15, paddingHorizontal: 12, paddingBottom: 5, borderBottomWidth: 1, borderBottomColor: '#F5F5F5' }}>
                <Image source={userProfile ? userProfile.avatar : images.avatar} style={{ height: 40, width: 40 }} />
                <View style={{ marginLeft: 10 }}>
                    <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}>{userProfile && userProfile.ten}</Text>
                    <Text style={{ fontSize: 12, color: '#005F94' }}>{userProfile && userProfile.loaithuyenvien}</Text>
                </View>
            </View>
            {/* body */}
            <View style={{ paddingHorizontal: 12 }}>
                <Text style={{ fontSize: 18, color: '#005F94' }}>Quản lý</Text>
                <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#005F94' }}>TÀU CÁ CÀ MAU</Text>
            </View>

            <FlatList style={{ margin: 10 }}
                contentContainerStyle={{ alignItems: 'center', alignSelf: 'center' }}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                data={DATA}
                renderItem={({ item, index }) => (<Item id={index + 1} title={item.title} image={item.image} screen={item.screen} />)}
            // keyExtractor={}
            />
        </View>
    )
}

export default HomeScreen