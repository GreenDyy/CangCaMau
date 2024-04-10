import React, { useState } from "react";
import {
    View,
    TouchableOpacity,
    Text,
    Image,
    StatusBar,
    ScrollView,
    TextInput,
    FlatList,
} from 'react-native'
import { icons, images } from '../constants/manager'
import {
    XuatBen, NhapBen, TrongBo, NgoaiBien, ChoXacNhanNhapBen, ChoXacNhanXuatBen,
    DuocTiepNhan, TuChoi, ChoTiepNhanYeuCau, KhongDuocNhapBen, KhongDuocXuatBen
} from '../components/status'
import MyTextInput from "../components/mytextinput";

const DANHSACHTAUCA = [
    {
        tentauca: '06020 - Thái học 3',
        loaitau: 'Khai thác thúy sản',
        handangkiem: '12/11/2022',
        trangthai: 'Trong bờ'
    },
    {
        tentauca: '06776 - Thái học 2',
        loaitau: 'Khai thác thúy sản',
        handangkiem: '12/11/2022',
        trangthai: 'Ngoài biển'
    },
    {
        tentauca: '06811 - Thái học 1',
        loaitau: 'Khai thác thúy sản',
        handangkiem: '12/11/2022',
        trangthai: 'Trong bờ'
    },
    {
        tentauca: '06812 - Rạng Đông 1',
        loaitau: 'Khai thác thúy sản',
        handangkiem: '12/11/2022',
        trangthai: 'Ngoài biển'
    },
]


function TauCaScreen({ navigation, route }) {
    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor={'#459AC9'} barStyle={'light-content'} />
            {/* header */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#459AC9', paddingTop: 5, paddingBottom: 17, paddingHorizontal: 12, height: 41 }}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}>
                    <Image source={icons.back} style={{ tintColor: 'gray', height: 20, width: 20, tintColor: 'white' }} />
                </TouchableOpacity>

                <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 16 }}>Tàu cá sở hữu</Text>

                <View style={{ width: 18, height: 18 }} />
            </View>

            <FlatList
                data={DANHSACHTAUCA}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('ChiTietTauCa')}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 15, paddingHorizontal: 10 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={icons.tau} style={{ height: 40, width: 40, marginRight: 10 }} />
                                <View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black', marginRight: 5 }}>{item.tentauca}</Text>
                                        {item.trangthai === 'Trong bờ' ? <TrongBo /> : <NgoaiBien />}
                                    </View>
                                    <Text>Loại: {item.loaitau}</Text>
                                    <Text>Hạn đăng kiểm: {item.handangkiem}</Text>
                                </View>
                            </View>
                            <Image source={icons.back} style={{ tintColor: '#828282', height: 12, width: 12, transform: [{ scaleX: -1 }] }} />
                        </View>
                        <View style={{ borderBottomWidth: 1, borderBottomColor: '#D6D6D6', marginLeft: 10 }} />
                    </TouchableOpacity>
                )}
            >
            </FlatList>
            <TouchableOpacity style={{marginHorizontal: 12, marginBottom: 12, backgroundColor:'#459AC9', borderRadius: 6, paddingHorizontal: 85, paddingVertical: 10}}
            onPress={()=>navigation.navigate('ThongTinTau')}>
                <Text style={{color:'white', fontWeight:'bold', textAlign:'center'}}>Thêm phương tiện</Text>
            </TouchableOpacity>

        </View>
    )
}

export default TauCaScreen