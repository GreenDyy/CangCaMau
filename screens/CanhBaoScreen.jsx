import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    StatusBar,
} from 'react-native'
import { icons, images } from '../constants/manager'
import { useNavigation } from '@react-navigation/native';

const DATACANHBAO = [
    {
        id: 1,
        tieude: '06020 - Thái học 3',
        ngaygui: '12/10/2022',
        loai: 'Khai thác thúy sản',
        handangkiem: '26/10/2022',
    },
    {
        id: 2,
        tieude: '06776 - Thái học 2',
        ngaygui: '12/10/2022',
        loai: 'Khai thác thúy sản',
        handangkiem: '26/10/2022',
    },
    {
        id: 3,
        tieude: '06020 - Thái học 3',
        ngaygui: '12/10/2022',
        loai: 'Khai thác thúy sản',
        handangkiem: '26/10/2022',
    },

]
const DATACANHBAOEMPTY = []

const MyItem = ({ tieude, ngaygui, loai, handangkiem }) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity style={{ flex: 100 }}
            onPress={() => navigation.navigate('XemThongTinTau')}>
            {/* nội dung item */}
            <View style={{ flexDirection: 'row', paddingVertical: 15, paddingRight: 9, borderBottomWidth: 1, marginLeft: 12, borderBottomColor: '#D6D6D6' }}>
                <Image source={icons.tau} style={{ width: 40, height: 40, marginRight: 10 }} resizeMode="contain" />
                <View style={{ flex: 1 }}>
                    {/* dòng 1 */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'black', marginRight: 5 }}>{tieude}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text>{ngaygui}</Text>
                            <Image source={icons.back} style={{ width: 12, height: 12, tintColor: 'gray', transform: [{ scaleX: -1 }], marginTop: 3 }} />
                        </View>
                    </View>

                    <Text style={{ fontSize: 12, color: 'black' }}>Loại: {loai}</Text>
                    <Text style={{ fontSize: 12, color: '#FF820F' }}>Hạn đăng kiểm: {handangkiem}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

function CanhBaoScreen({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor={'#459AC9'} barStyle={'light-content'} />
            {/* header */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#459AC9', paddingTop: 5, paddingBottom: 17, paddingHorizontal: 12, height: 41 }}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}>
                    <Image source={icons.back} style={{ tintColor: 'gray', height: 20, width: 20, tintColor: 'white' }} />
                </TouchableOpacity>
                <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 16 }}>Cảnh báo</Text>
                <View style={{ width: 18, height: 18 }} />
            </View>

            {/* body */}

            <ScrollView
                style={{ backgroundColor: 'white' }}
                showsVerticalScrollIndicator={false}
            >
                {
                    DATACANHBAO.length > 0 ?
                        DATACANHBAO.map((item, index) => (
                            <MyItem
                                key={index}
                                tieude={item.tieude}
                                loai={item.loai}
                                ngaygui={item.ngaygui}
                                handangkiem={item.handangkiem}
                            />
                        )) :
                        <View style={{ marginTop: 115 }}>
                            <Image source={images.empty} style={{ width: 203, height: 160, alignSelf: 'center', opacity: 0.6 }} resizeMode="contain" />
                            <Text style={{ fontSize: 16, color: '#D6D6D6', textAlign: 'center', marginTop: 15 }}>Không có dữ liệu</Text>
                        </View>
                }
            </ScrollView>
        </View>
    )
}

export default CanhBaoScreen