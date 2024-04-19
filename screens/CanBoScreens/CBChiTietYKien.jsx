import React, { useState } from "react";
import {
    View,
    TouchableOpacity,
    Text,
    Image,
    StatusBar,
    ScrollView,
    TextInput
} from 'react-native'
import { icons } from '../../constants/manager'
import MyTextInput from "../../components/mytextinput";

function CBChiTietYKienScreen({ navigation, route }) {
    const { item } = route.params
    return (
        <View style={{ flex: 1, marginHorizontal: 12, marginTop: 5 }}>
            {/* header */}
            <StatusBar barStyle={"dark-content"} backgroundColor={'#F5F5F5'} />

            <View style={{ marginBottom: 17 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}>
                        <Image source={icons.back} style={{ height: 20, width: 20, tintColor: 'black' }} />
                    </TouchableOpacity>

                    <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}>Chi tiết</Text>

                    <View style={{ width: 20, height: 20 }} />
                </View>
            </View>
            {/* body */}
            <ScrollView
                showsVerticalScrollIndicator={false}
            >

                <View style={{ backgroundColor: 'white', borderRadius: 6, paddingHorizontal: 12, paddingVertical: 20 }}>
                    <MyTextInput
                        header={'Tên tàu'}
                        value={item.tentau}
                        fontWeight={'bold'}
                    />
                    <View style={{ marginTop: 20 }}>
                        <MyTextInput
                            header={'Nội dung ý kiến'}
                            value={item.noidungykien}
                        />
                    </View>
                </View>

                {
                    item.trangthai === 'Đã phản hồi' && (
                        <View style={{ marginTop: 20 }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#3345CB' }}>Thông tin phản hồi</Text>
                            <View style={{ backgroundColor: 'white', borderRadius: 6, paddingHorizontal: 12, paddingVertical: 20, marginTop: 5 }}>
                                <MyTextInput
                                    header={'Nội dung phản hồi'}
                                    value={item.noidungphanhoi}
                                />
                                <View style={{ marginTop: 20 }}>
                                    <Text style={{ fontSize: 12, color: '#ADADAD' }}>File đính kèm</Text>
                                    <View style={{ marginTop: 10 }}>
                                        <TouchableOpacity>
                                            <Text style={{ fontSize: 12, color: '#3345CB', marginRight: 10 }}>Hình ảnh.png</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    )
                }



            </ScrollView>
            {/* footer */}
            <TouchableOpacity style={{ backgroundColor: 'white', borderRadius: 6, paddingVertical: 10, width: 173, alignSelf: 'center', alignItems: 'center', position: 'absolute', bottom: 25 }}
                onPress={() => navigation.goBack()}>
                <Text style={{ color: '#828282', fontWeight: 'bold' }}>Đóng</Text>
            </TouchableOpacity>

        </View>
    )
}

export default CBChiTietYKienScreen