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
import { TrongBo, NgoaiBien } from '../components/status'
import { useNavigation } from '@react-navigation/native';

const DATATAINAN = [
    {
        id: 1,
        tieude: '06020 - Thái học 3',
        ngaytainan: '20/10/2021 10:31',
        ngaygui: '12/10/2022',
        noidung: '#Nguyên Nhân',
        isNew: true
    },
    {
        id: 2,
        tieude: 'CM-01030-TS',
        ngaytainan: '20/10/2021 10:31',
        ngaygui: '11/10/2022',
        noidung: '#Nguyên Nhân',
        isNew: false
    },
    {
        id: 3,
        tieude: '06020 - Thái học 3',
        ngaytainan: '20/10/2021 10:31',
        ngaygui: '11/10/2022',
        noidung: '#Nguyên Nhân',
        isNew: true
    },

]
const DATATAINANEMPTY = []

const MyItem = ({ tieude, ngaygui, ngaytainan, noidung, isNew }) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity style={{ flexDirection: 'row', flex: 100 }}
            onPress={() => navigation.navigate('ChiTietTaiNan')}>
            {/* dot tròn */}
            <View style={{ width: 20, flex: 6 }}>
                {isNew && <View style={{ width: 14, height: 14, backgroundColor: '#005F94', borderRadius: 999, marginTop: 20, alignSelf: 'center' }} />}
            </View>
            {/* nội dung item */}
            <View style={{ borderBottomColor: '#D6D6D6', borderBottomWidth: 1, paddingRight: 9, paddingVertical: 15, flex: 94 }}>
                {/* dòng 1 */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'black', marginRight: 5 }}>{tieude}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text>{ngaygui}</Text>
                        <Image source={icons.back} style={{ width: 12, height: 12, tintColor: 'gray', transform: [{ scaleX: -1 }], marginTop: 3 }} />
                    </View>
                </View>

                <Text style={{ fontSize: 12, color: 'black' }}>Thời gian tai nạn: {ngaytainan}</Text>
                <Text style={{ fontSize: 12 }}>{noidung}</Text>
            </View>
        </TouchableOpacity>
    )
}

function LichSuTaiNanScreen({ navigation }) {
    const [isNew, setIsNew] = useState(false)
    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor={'#459AC9'} barStyle={'light-content'} />
            {/* header */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#459AC9', paddingTop: 5, paddingBottom: 17, paddingHorizontal: 12, height: 41 }}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}>
                    <Image source={icons.back} style={{ tintColor: 'gray', height: 20, width: 20, tintColor: 'white' }} />
                </TouchableOpacity>
                <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 16 }}>Lịch sử tai nạn</Text>
                <View style={{ width: 18, height: 18 }} />
            </View>

            {/* body */}

            <ScrollView
                style={{ backgroundColor: 'white' }}
                showsVerticalScrollIndicator={false}
            >
                {
                    DATATAINAN.length > 0 ?
                        DATATAINAN.map((item, index) => (
                            <MyItem key={index} tieude={item.tieude} trangthai={item.trangthai} ngaygui={item.ngaygui} ngaytainan={item.ngaytainan} noidung={item.noidung} isNew={item.isNew} />
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

export default LichSuTaiNanScreen