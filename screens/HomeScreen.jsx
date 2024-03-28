import React, {useState} from "react";
import { View, Text, TouchableOpacity, SafeAreaView, Image, ScrollView, FlatList, Dimensions } from 'react-native'
import { images, icons } from '../constants/manager'

const DATA = [
    {
        title: 'Xuất,Nhập bến',
        image: images.xuatnhapben,
        textcolor: '#005F94',
        bgcolor: '#8DD4FC'
    },
    {
        title: 'Tàu cá',
        image: images.tauca,
        textcolor: '#FF820F',
        bgcolor: '#FFCFA2'
    },
    {
        title: 'Thuyền viên',
        image: images.thuyenvien,
        textcolor: '#FF820F',
        bgcolor: '#FFCFA2'
    },
    {
        title: 'Lịch sử vi phạm',
        image: images.lichsuvipham,
        textcolor: '#005F94',
        bgcolor: '#8DD4FC'
    },
    {
        title: 'Lịch sử tai nạn',
        image: images.lichsutainan,
        textcolor: '#005F94',
        bgcolor: '#8DD4FC'
    },
    {
        title: 'Cảnh báo',
        image: images.canhbao,
        textcolor: '#FF820F',
        bgcolor: '#FFCFA2'
    },
]

const Item = ({ title, image, textcolor, bgcolor }) => (
    <TouchableOpacity style={{ alignItems: 'center', padding: 30, margin: 5, backgroundColor: bgcolor, borderRadius: 30 }}>
        <View style={{ alignItems: 'center', width: 100 }}>
            <Image source={image} style={{ height: 60, width: 60 }} />
            <Text style={{ color: textcolor, fontWeight: 'bold', textAlign: 'center', marginTop: 10 }}>{title}</Text>
        </View>
    </TouchableOpacity>
)

function HomeScreen({navigation}) {
   
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', marginBottom: 10, margin: 10 }}>
                <Image source={images.avatar} style={{ height: 40, width: 40 }} />
                <View style={{ marginLeft: 10 }}>
                    <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}>Huỳnh Khánh Duy</Text>
                    <Text style={{ fontSize: 12, color: '#005F94' }}>Thuyền trưởng</Text>
                </View>
            </View>
            {/* gạch chân */}
            <View style={{ borderBottomWidth: 1, color: 'gray' }}></View>

            <FlatList style={{ margin: 10 }}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                data={DATA}
                renderItem={({ item, index }) => (<Item title={item.title} image={item.image} textcolor={item.textcolor} bgcolor={item.bgcolor} />)}
                keyExtractor={(item, index) => index.toString()}
            >
            </FlatList>
        </View>
    )
}

export default HomeScreen