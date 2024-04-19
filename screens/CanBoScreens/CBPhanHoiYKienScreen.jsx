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

function CBPhanHoiYKienScreen({ navigation, route }) {
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

                    <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}>Phản hồi ý kiến</Text>

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
                        editable={false}
                    />
                    <View style={{ marginTop: 20 }}>
                        <MyTextInput
                            header={'Nội dung ý kiến'}
                            value={item.noidungykien}
                            editable={false}
                        />
                    </View>
                </View>

                <View style={{ backgroundColor: 'white', borderRadius: 6, paddingHorizontal: 12, paddingVertical: 20, marginTop: 10 }}>
                    <MyTextInput
                        header={'Nội dung phản hồi'}
                        type={'delete'}
                        value={item.noidungphanhoi} />
                </View>

                <View style={{ backgroundColor: 'white', borderRadius: 6, paddingHorizontal: 12, paddingVertical: 20, marginTop: 10 }}>
                    <View >
                        <Text style={{ fontSize: 12, color: '#ADADAD' }}>File đính kèm</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity style={{ marginTop: 10, flexDirection: 'row', borderRadius: 2, backgroundColor: '#EBECFA', alignItems: 'center', paddingVertical: 4, paddingHorizontal: 11 }}>
                                <Image source={icons.addmini} style={{ height: 12, width: 12, marginRight: 2 }} />
                                <Text style={{ fontSize: 12, color: '#3345CB' }}>Upload</Text>
                            </TouchableOpacity>
                            <View></View>
                        </View>
                        {/* các ảnh đính kèm */}
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            {/* ảnh 1 */}
                            <View style={{ flexDirection: 'row', borderRadius: 2, backgroundColor: '#EBECFA', alignItems: 'center', paddingVertical: 4, paddingHorizontal: 11, marginRight: 10 }}>
                                <Text style={{ fontSize: 12, color: '#3345CB', marginRight: 3.5 }}>Hình ảnh.png</Text>
                                <TouchableOpacity>
                                    <Image source={icons.remove} style={{ height: 10, width: 10 }} resizeMode='contain' />
                                </TouchableOpacity>
                            </View>
                            {/* ảnh 2 */}
                            <View style={{ flexDirection: 'row', borderRadius: 2, backgroundColor: '#EBECFA', alignItems: 'center', paddingVertical: 4, paddingHorizontal: 11, marginRight: 10 }}>
                                <Text style={{ fontSize: 12, color: '#3345CB', marginRight: 3.5 }}>Hình ảnh2.png</Text>
                                <TouchableOpacity>
                                    <Image source={icons.remove} style={{ height: 10, width: 10 }} resizeMode='contain' />
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                </View>

            </ScrollView>
            {/* footer */}
            {/* 2 nút dưới */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, marginBottom: 25 }}>
                <TouchableOpacity style={{ paddingVertical: 10, backgroundColor: 'white', width: 160, height: 38, borderRadius: 6 }}
                    onPress={() => navigation.goBack()}>
                    <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>Hủy</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ paddingVertical: 10, backgroundColor: '#3345CB', width: 173, height: 38, borderRadius: 6 }}
                    onPress={() => { setShowPopUp(true) }}>
                    <Text style={{ fontWeight: 'bold', color: 'white', textAlign: 'center' }}>Gửi phản hồi</Text>
                </TouchableOpacity>
            </View>

        </View >
    )
}

export default CBPhanHoiYKienScreen