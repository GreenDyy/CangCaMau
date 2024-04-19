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

// con tàu cá
const Item = ({item, navigation, screen}) => (
    <TouchableOpacity style={{ flexDirection: 'row', marginLeft: 12, paddingRight: 12, paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#D6D6D6' }}
        onPress={() => navigation.navigate(screen)}>
        <Image source={icons.tau} style={{ height: 40, width: 40, borderRadius: 4, marginRight: 10 }} />
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ fontSize: 16, fontWeight: 700, color: 'black' }}>{item.ten}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontSize: 12, color: '#ADADAD' }}>{item.ngayCapBen}</Text>
                    <Image source={icons.back} style={{ tintColor: '#828282', height: 12, width: 12, transform: [{ scaleX: -1 }] }} />
                </View>
            </View>
            <Text style={{ fontSize: 12 }} numberOfLines={2} >{item.noiDung}</Text>
            <Text style={{ fontSize: 12 }}>Hạn đăng kiểm: {item.hanDangKiem}</Text>

        </View>
    </TouchableOpacity>
)

function ChiTietBenScreen({ navigation, route }) {
    const {danhSachTau, cang} = route.params
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

                    <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}>Chi tiết bến</Text>

                    <View style={{ width: 20, height: 20 }} />
                </View>
            </View>
            {/* body */}
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={{ backgroundColor: 'white', borderRadius: 6, paddingHorizontal: 12, paddingVertical: 20 }}>
                    <MyTextInput header={'Tên cảng biển'} value={cang.ten}/>
                    <View style={{ marginTop: 15 }}>
                        <MyTextInput header={'Địa chỉ'} value={cang.vitri}/>
                    </View>

                    <View style={{ marginTop: 15 }}>
                        <MyTextInput header={'Ghi chú'} />
                    </View>
                </View>

                <Text style={{ fontSize: 16, fontWeight: 700, color: '#3345CB', marginTop: 20, marginBottom: 5 }}>Tàu cá ({danhSachTau.length})</Text>

                <ScrollView>
                    {/* //==card chứa các tàu */}
                    <View style={{ backgroundColor: 'white', borderRadius: 6, paddingTop: 5, marginTop: 5, paddingBottom: 10 }}>
                        {
                            danhSachTau.map((item)=>{
                                return (
                                    <Item key={item.id} item={item} navigation = {navigation} screen={'CBChiTietTauCa'} />
                                )
                            })
                        }
                    </View>
                </ScrollView>

            </ScrollView>


        </View>
    )
}

export default ChiTietBenScreen