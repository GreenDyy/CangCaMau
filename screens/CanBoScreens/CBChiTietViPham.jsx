import React, { useState } from "react";
import {
    View,
    TouchableOpacity,
    Text,
    Image,
    StatusBar,
    ScrollView,
} from 'react-native'
import { icons } from '../../constants/manager'
import MyTextInput from "../../components/mytextinput";

function CBChiTietViPhamScreen({ navigation }) {
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

                    <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}>Chi tiết vi phạm</Text>

                    <View style={{ width: 20, height: 20 }} />
                </View>
            </View>
            {/* body */}
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={{ backgroundColor: 'white', borderRadius: 6, paddingHorizontal: 12, paddingBottom: 20, paddingTop: 30 }}>
                    <MyTextInput editable={false} header={'Tên tàu'} />
                    <MyTextInput editable={false} header={'Thời gian bị bắt'} />
                    <MyTextInput editable={false} header={'Số thuyền viên hiện hữu'} />
                    <MyTextInput editable={false} header={'Lực lượng bắt'} />
                    <MyTextInput editable={false} header={'Khu vực bị bắt'} />
                    <MyTextInput editable={false} header={'Đơn vị xử lý'} />
                    <MyTextInput editable={false} header={'Lý do bị bắt'} />
                    <MyTextInput editable={false} header={'Hình hức xử lý'} />
                    <MyTextInput editable={false} header={'Ghi chú'} />
                </View>

                <View style={{ backgroundColor: 'white', borderRadius: 6, paddingHorizontal: 12, paddingVertical: 15, marginTop: 12 }}>
                    <Text style={{ fontSize: 16, color: '#3345CB' }}>Người tạo</Text>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Image source={icons.avatarchard} style={{ width: 48, height: 48 }} resizeMode="contain" />
                        <View style={{ flex: 1, marginLeft: 10 }}>
                            <Text style={{ fontSize: 16, color: 'black', fontWeight: 700 }}>Lê Văn Kiển</Text>
                            <Text style={{ fontSize: 12, color: '#ADADAD' }}>Chuyên viên Đội Rạch Gốc</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            {/* footer */}
            <TouchableOpacity style={{ backgroundColor: 'white', borderRadius: 6, paddingVertical: 10, width: 173, alignSelf: 'center', alignItems: 'center', position: 'absolute', bottom: 15 }}
                onPress={() => navigation.goBack()}>
                <Text style={{ color: '#828282', fontWeight: 'bold' }}>Đóng</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CBChiTietViPhamScreen