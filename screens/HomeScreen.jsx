import React from "react";
import { View, Text, TouchableOpacity, SafeAreaView, Image, ScrollView } from 'react-native'
import { images, icons } from '../constants/manager'

const DATA = [
    {
        title: 'cs',
        image: images.lichsutainan,
    },
    {
        title: 'cc',
        image: images.lichsutainan,
    },
]

function HomeScreen(navigation) {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', marginBottom: 10, margin: 10  }}>
                <Image source={images.avatar} style={{ height: 40, width: 40 }} />
                <View style={{marginLeft: 10}}>
                    <Text style={{fontSize:16, color: 'black', fontWeight:'bold'}}>Huỳnh Khánh Duy</Text>
                    <Text style={{fontSize:12, color:'# 005F94'}}>Thuyền trưởng</Text>
                </View>
              

            </View>
            {/* gạch chân */}
            <View style={{borderBottomWidth: 1, color:'gray8b '}}></View>

            <ScrollView style={{margin: 10 }}>
                <View style={{ flex: 0.1, backgroundColor: 'green' }}>

                </View>

                <View style={{ }}>
                    <Text style={{ fontSize: 18, color: '#005F94' }}>Quản lý</Text>
                    <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#005F94' }}>TÀU CÁ CÀ MAU</Text>

                    {/* catagory */}
                    <View>
                        {/* hàng 1 */}
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                            <View style={{ backgroundColor: '#8DD4FC', borderRadius: 30, alignItems: 'center', justifyContent: 'center', width: '48%', aspectRatio: 1 }}>
                                <Image source={images.xuatnhapben} style={{ height: 60, width: 60 }} />
                                <Text style={{ color: '#005F94', fontWeight: 'bold', textAlign: 'center', marginTop: 10 }}>Xuất/Nhập bến</Text>
                            </View>

                            <View style={{ backgroundColor: '#FFCFA2', borderRadius: 30, alignItems: 'center', justifyContent: 'center', width: '48%', aspectRatio: 1 }}>
                                <Image source={images.tauca} style={{ height: 60, width: 60 }} />
                                <Text style={{ color: '#FF820F', fontWeight: 'bold', textAlign: 'center', marginTop: 10 }}>Tàu cá</Text>
                            </View>
                        </View>

                        {/* hàng 2 */}
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                            <View style={{ backgroundColor: '#FFCFA2', borderRadius: 30, alignItems: 'center', justifyContent: 'center', width: '48%', aspectRatio: 1 }}>
                                <Image source={images.thuyenvien} style={{ height: 60, width: 60 }} />
                                <Text style={{ color: '#FF820F', fontWeight: 'bold', textAlign: 'center', marginTop: 10 }}>Thuyền viên</Text>
                            </View>
                            <View style={{ backgroundColor: '#8DD4FC', borderRadius: 30, alignItems: 'center', justifyContent: 'center', width: '48%', aspectRatio: 1 }}>
                                <Image source={images.lichsuvipham} style={{ height: 60, width: 60 }} />
                                <Text style={{ color: '#005F94', fontWeight: 'bold', textAlign: 'center', marginTop: 10 }}>Lịch sử vi phạm</Text>
                            </View>


                        </View>
                        {/* hàng 2 */}
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                            <View style={{ backgroundColor: '#8DD4FC', borderRadius: 30, alignItems: 'center', justifyContent: 'center', width: '48%', aspectRatio: 1 }}>
                                <Image source={images.lichsutainan} style={{ height: 60, width: 60 }} />
                                <Text style={{ color: '#005F94', fontWeight: 'bold', textAlign: 'center', marginTop: 10 }}>Lịch sử tại nạn</Text>
                            </View>

                            <View style={{ backgroundColor: '#FFCFA2', borderRadius: 30, alignItems: 'center', justifyContent: 'center', width: '48%', aspectRatio: 1 }}>
                                <Image source={images.canhbao} style={{ height: 60, width: 60 }} />
                                <Text style={{ color: '#FF820F', fontWeight: 'bold', textAlign: 'center', marginTop: 10 }}>Cảnh báo</Text>
                            </View>
                        </View>


                    </View>

                </View>
            </ScrollView>
        </View>

    )
}

export default HomeScreen