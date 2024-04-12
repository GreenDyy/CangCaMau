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

const DATAVIPHAM = [
    {
        id: 1,
        tieude: '06020 - Thái học 3',
        trangthai: 'Trong bờ',
        ngaybibat: '20/10/2021 10:31',
        ngaygui: '11/10/2022',
        noidung: '#Hình thức xử phạt',
        isNew: true
    },
    {
        id: 2,
        tieude: '06020 - Thái học 3',
        trangthai: 'Ngoài bờ',
        ngaybibat: '20/10/2021 10:31',
        ngaygui: '11/10/2022',
        noidung: '#Hình thức xử phạt',
        isNew: false
    },
    {
        id: 3,
        tieude: '06020 - Thái học 3',
        trangthai: 'Trong bờ',
        ngaybibat: '20/10/2021 10:31',
        ngaygui: '11/10/2022',
        noidung: '#Hình thức xử phạt',
        isNew: true
    },

]
const DATAVIPHAMEMPTY = []

const MyItem = ({ tieude, trangthai, ngaygui, ngaybibat, noidung, isNew }) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity style={{ flexDirection: 'row', flex: 100 }}
            onPress={() => navigation.navigate('ChiTietViPham')}>
            {/* dot tròn */}
            <View style={{ width: 20, flex: 6 }}>
                {isNew && <View style={{ width: 14, height: 14, backgroundColor: '#005F94', borderRadius: 999, marginTop: 20, alignSelf: 'center' }} />}
            </View>
            {/* nội dung item */}
            <View style={{ borderBottomColor: '#D6D6D6', borderBottomWidth: 1, paddingRight: 9, paddingVertical: 15, flex: 94 }}>
                {/* dòng 1 */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'black', marginRight: 5 }}>{tieude}</Text>
                        {trangthai === 'Trong bờ' ? <TrongBo /> : <NgoaiBien />}
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Text>{ngaygui}</Text>
                        <Image source={icons.back} style={{ width: 12, height: 12, tintColor: 'gray', transform: [{ scaleX: -1 }], marginTop: 3 }} />
                    </View>
                </View>

                <Text style={{ fontSize: 12, color: 'black' }}>Thời gian bị bắt: {ngaybibat}</Text>
                <Text style={{ fontSize: 12 }}>{noidung}</Text>
            </View>
        </TouchableOpacity>
    )
}

function LichSuViPhamScreen({ navigation }) {
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

                <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 16 }}>Lịch sử vi phạm</Text>


                <View style={{ width: 18, height: 18 }} />

            </View>
            {/* body */}
            <ScrollView
                style={{ backgroundColor: 'white' }}
                showsVerticalScrollIndicator={false}
            >
                {
                    DATAVIPHAMEMPTY.length > 0 ?
                        DATAVIPHAM.map((item, index) => (
                            <MyItem key={index} tieude={item.tieude} trangthai={item.trangthai} ngaygui={item.ngaygui} ngaybibat={item.ngaybibat} noidung={item.noidung} isNew={item.isNew} />
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

export default LichSuViPhamScreen