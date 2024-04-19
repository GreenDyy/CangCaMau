import React, { useState } from "react";
import {
    View,
    TouchableOpacity,
    Text,
    Image,
    StatusBar,
    ScrollView,
    TextInput,
} from 'react-native'
import { icons, images } from '../../constants/manager'
import DANHSACHTAUCA from "../../datas/danhsachcactau";

const DSBEN = [
    {
        id: 1,
        ten: 'Bến Nhà Rồng',
        vitri: 'Khóm 6B, Trần Văn Thời, Cà Mau',
        hinhanh: icons.bendemo,
        soluongtau: 40
    },
    {
        id: 2,
        ten: 'Bến Hạ Long',
        vitri: 'Khóm 6B, Trần Văn Thời, Cà Mau',
        hinhanh: icons.bendemo,
        soluongtau: 20
    },
    {
        id: 3,
        ten: 'Bến Signey',
        vitri: 'Khóm 6B, Trần Văn Thời, Cà Mau',
        hinhanh: icons.bendemo,
        soluongtau: 23
    },
    {
        id: 4,
        ten: 'Bến Cà Mau',
        vitri: 'Khóm 6B, Trần Văn Thời, Cà Mau',
        hinhanh: icons.bendemo,
        soluongtau: 8
    },
]

const DemSoLuongTauCaTrongBen = (idBen) => {
    const danhSachMoi = DANHSACHTAUCA.filter(tauca => tauca.idBenHienTai === idBen)
    const soLuongTauCa = danhSachMoi.length
    console.log(soLuongTauCa)
    return soLuongTauCa
}

const Item = ({ item, navigation, screen }) => {
    const soLuongTauTaiBen = DemSoLuongTauCaTrongBen(item.id)
    const danhSachTauTaiBen = DANHSACHTAUCA.filter(tauca => tauca.idBenHienTai === item.id)
    return (
        <TouchableOpacity style={{ flexDirection: 'row', marginLeft: 12, paddingRight: 12, paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#D6D6D6' }}
            onPress={() => navigation.navigate(screen, {danhSachTau: danhSachTauTaiBen, cang: item})}>
            <Image source={item.hinhanh} style={{ height: 40, width: 40, borderRadius: 4, marginRight: 10 }} />
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ fontSize: 16, fontWeight: 700, color: 'black' }}>{item.ten} ({soLuongTauTaiBen})</Text>
                    <Image source={icons.back} style={{ tintColor: '#828282', height: 12, width: 12, transform: [{ scaleX: -1 }] }} />
                </View>
                <Text style={{ fontSize: 12 }}>{item.vitri}</Text>
            </View>
        </TouchableOpacity>
    )
}

function CBDanhSachCangScreen({ navigation }) {
    const [showSearchBar, setShowSeachBar] = useState(false)

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar backgroundColor={'#583CFF'} barStyle={'light-content'} />
            {/* header */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#583CFF', paddingTop: 5, paddingBottom: 17, paddingHorizontal: 12 }}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}>
                    <Image source={icons.back} style={{ tintColor: 'gray', height: 20, width: 20, tintColor: 'white' }} />
                </TouchableOpacity>
                <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 16 }}>Tra cứu bến</Text>

                <TouchableOpacity
                    onPress={() => { setShowSeachBar(!showSearchBar) }}>
                    <Image source={icons.search} style={{ height: 18, width: 18, tintColor: 'white' }} />
                </TouchableOpacity>
            </View>

            {/* search bar */}
            <View style={{ flexDirection: 'row', alignItems: 'center', borderRadius: 6, marginLeft: 20, marginRight: 12, marginVertical: 10, paddingHorizontal: 12, paddingVertical: 9, backgroundColor: '#EBEBEB' }}>
                <Image source={icons.search} style={{ height: 20, width: 20 }} />
                <TextInput style={{ flex: 1, paddingLeft: 5, marginVertical: -15, }} placeholder="Nhập nội dung tìm kiếm" />
            </View>

            <View style={{ borderBottomWidth: 1, borderBottomColor: '#D6D6D6' }} />

            {/* body */}
            <ScrollView>
                {
                    DSBEN.map((item) => (
                        <Item key={item.id} item={item} navigation={navigation} screen={'ChiTietBen'} />
                    ))
                }

            </ScrollView>


        </View>
    )
}

export default CBDanhSachCangScreen