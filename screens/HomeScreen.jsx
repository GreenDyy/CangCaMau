import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, SafeAreaView, Image, ScrollView, FlatList, Dimensions } from 'react-native'
import { images } from '../constants/manager'
import AsyncStorage from "@react-native-async-storage/async-storage";

const DATA = [
    {
        id: '1',
        title: 'Xuất,Nhập bến',
        image: images.xuatnhapben,
        textcolor: '#005F94',
        bgcolor: '#8DD4FC',
        screen: 'XuatNhapBen'
    },
    {
        id: '2',
        title: 'Tàu cá',
        image: images.tauca,
        textcolor: '#FF820F',
        bgcolor: '#FFCFA2',
        screen: 'TrongBo'
    },
    {
        id: '3',
        title: 'Thuyền viên',
        image: images.thuyenvien,
        textcolor: '#FF820F',
        bgcolor: '#FFCFA2',
        screen: 'NgoaiBien'
    },
    {
        id: '4',
        title: 'Lịch sử vi phạm',
        image: images.lichsuvipham,
        textcolor: '#005F94',
        bgcolor: '#8DD4FC',
        screen: 'XuatNhapBen'
    },
    {
        id: '5',
        title: 'Lịch sử tai nạn',
        image: images.lichsutainan,
        textcolor: '#005F94',
        bgcolor: '#8DD4FC',
        screen: 'XuatNhapBen'
    },
    {
        id: '6',
        title: 'Cảnh báo',
        image: images.canhbao,
        textcolor: '#FF820F',
        bgcolor: '#FFCFA2',
        screen: 'XuatNhapBen'
    },
]

const Item = ({ title, image, textcolor, bgcolor, screen, navigation }) => (
    <TouchableOpacity style={{ alignItems: 'center', padding: 30, margin: 5, backgroundColor: bgcolor, borderRadius: 30 }}
        onPress={() => navigation.navigate(screen)}>
        <View style={{ alignItems: 'center', width: 100 }}>
            <Image source={image} style={{ height: 60, width: 60 }} />
            <Text style={{ color: textcolor, fontWeight: 'bold', textAlign: 'center', marginTop: 10 }}>{title}</Text>
        </View>
    </TouchableOpacity>
)


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
        <View style={{ flex: 1 }}>

            <View style={{ flexDirection: 'row', marginBottom: 10, margin: 10 }}>
                <Image source={userProfile ? userProfile.avatar : images.avatar} style={{ height: 40, width: 40 }} />
                <View style={{ marginLeft: 10 }}>
                    <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}>{userProfile && userProfile.ten}</Text>
                    <Text style={{ fontSize: 12, color: '#005F94' }}>{userProfile && userProfile.loaithuyenvien}</Text>
                </View>
            </View>
            {/* gạch chân */}
            <View style={{ borderBottomWidth: 1, borderBottomColor: '#F5F5F5', elevation: 5 }}></View>
            <View style={{ margin: 10 }}>
                <Text style={{ fontSize: 18, color: '#005F94' }}>Quản lý</Text>
                <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#005F94' }}>TÀU CÁ CÀ MAU</Text>
            </View>

            <FlatList style={{ margin: 10 }}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                data={DATA}
                renderItem={({ item }) => (<Item title={item.title} image={item.image} textcolor={item.textcolor} bgcolor={item.bgcolor} screen={item.screen} navigation={navigation} />)}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export default HomeScreen