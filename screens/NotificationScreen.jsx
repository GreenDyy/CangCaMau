import React from "react";
import {
    View,
    TouchableOpacity,
    Image,
    Text,
    ScrollView,
    TextInput,
    FlatList,
} from 'react-native'
import { images, icons } from '../constants/manager'

const DATA = [
    {
        id: '1',
        title: 'Cảnh báo',
        icon: icons.warning,
        content: 'Cảnh báo thời hạn hết hạn đăng kiểm của tàu/thuyền hết hạn ngày 10 tháng 10 2022',
        date: '09/10/2022',
        desc: 'Duy dep trai',
    },
    {
        id: '2',
        title: 'Xem xét',
        icon: icons.haiquan,
        content: 'Đánh giá tình hình biển đông trước ngày 12 tháng 10 2022',
        date: '11/10/2022',
        desc: 'Duy dep trai',
    },
    {
        id: '3',
        title: 'Cảnh báo',
        icon: icons.warning,
        content: 'Cảnh báo thời hạn hết hạn đăng kiểm của tàu/thuyền hết hạn ngày 10 tháng 10 2022',
        date: '09/10/2022',
        desc: 'Duy dep trai',
    },
    {
        id: '4',
        title: 'Xem xét',
        icon: icons.haiquan,
        content: 'Đánh giá tình hình biển đông trước ngày 12 tháng 10 2022',
        date: '11/10/2022',
        desc: 'Duy dep trai',
    },
    {
        id: '5',
        title: 'Cảnh báo',
        icon: icons.warning,
        content: 'Cảnh báo thời hạn hết hạn đăng kiểm của tàu/thuyền hết hạn ngày 10 tháng 10 2022',
        date: '09/10/2022',
        desc: 'Duy dep trai',
    },
    {
        id: '6',
        title: 'Xem xét',
        icon: icons.haiquan,
        content: 'Đánh giá tình hình biển đông trước ngày 12 tháng 10 2022',
        date: '11/10/2022',
        desc: 'Duy dep trai',
    },
    {
        id: '7',
        title: 'Cảnh báo',
        icon: icons.warning,
        content: 'Cảnh báo thời hạn hết hạn đăng kiểm của tàu/thuyền hết hạn ngày 10 tháng 10 2022',
        date: '09/10/2022',
        desc: 'Duy dep trai',
    },
    {
        id: '8',
        title: 'Xem xét',
        icon: icons.haiquan,
        content: 'Đánh giá tình hình biển đông trước ngày 12 tháng 10 2022',
        date: '11/10/2022',
        desc: 'Duy dep trai',
    },
]

const Item = ({ title, icon, content, date }) => (
    <TouchableOpacity style={{flex:1}}>
        <View style={{ flexDirection: 'row', margin: 10, paddingVertical: 10 }}>
            <Image source={icon} style={{ height: 40, width: 40 }} />
            <View style={{ marginLeft: 10, width: '87%' }}>

                <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>{title}</Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 12, color: '#ADADAD' }}>{date}</Text>
                        <TouchableOpacity>
                            <Image source={icons.forward} style={{ height: 12, width: 12, marginLeft: 3 }} />
                        </TouchableOpacity>
                    </View>

                </View>

                <Text style={{ fontSize: 12, color: 'black' }}>{content}</Text>
            </View>
        </View>

        <View style={{ borderBottomWidth: 0.5, marginLeft: 10 }} />
    </TouchableOpacity>
)

function NotificationScreen({ navigation }) {
    
    return (
        <View style={{ flex: 1 }}>
            <Text style={{ color: 'black', fontWeight: 'bold', textAlign: 'center', fontSize: 16 }}>Thông báo</Text>
            {/* searchbar */}
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, margin: 10, borderRadius: 10, backgroundColor: '#DDDDDD' }}>
                <Image source={icons.search} style={{ height: 20, width: 20 }} />
                <TextInput style={{ color: 'black', flex: 1 }} placeholder="Nhập nội dung tìm kiếm" placeholderTextColor={'#ADADAD'} />
            </TouchableOpacity>
            {/* content */}
            <View style={{ borderBottomWidth: 0.5, marginLeft: 10 }} />


            <FlatList
                data={DATA}
                contentContainerStyle={{
                    paddingBottom: 100
                }}
                numColumns={1}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Item title={item.title} icon={item.icon} content={item.content} date={item.date} />
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export default NotificationScreen