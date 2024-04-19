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
import {
    XuatBen, NhapBen, TrongBo, NgoaiBien, ChoXacNhanNhapBen, ChoXacNhanXuatBen,
    DuocTiepNhan, TuChoi, ChoTiepNhanYeuCau, KhongDuocNhapBen, KhongDuocXuatBen
} from '../../components/status'
import SelectDropdown from "react-native-select-dropdown";

const tabs = ['Danh sách', 'Phản hồi ý kiến']
const DANHSACH = [
    {
        tentau: '20302 - Maria',
        noidungykien: 'Sếp ăn cơm chưa',
        ngaygui: '23/09',
        hinhanhhoi: 'Hình ảnh đính kèm',
        trangthai: 'Chưa phản hồi'
    },
    {
        tentau: '20301 - Ragani',
        noidungykien: 'Mấy giờ họp',
        ngaygui: '23/09',
        hinhanhhoi: '#Hình ảnh đính kèm',
        noidungphanhoi: 'Ăn rồi ku',
        hinhanhphanhoi: '#Hình ảnh đính kèm',
        trangthai: 'Đã phản hồi'
    },
    {
        tentau: '20022 - Aurora',
        noidungykien: 'Đánh lol hong',
        ngaygui: '23/09',
        hinhanhhoi: '#Hình ảnh đính kèm',
        noidungphanhoi: 'oke ku',
        hinhanhphanhoi: '#Hình ảnh đính kèm',
        trangthai: 'Đã phản hồi'
    },

]
const DSCHOPHANHOI = [
    {

    }
]
const Item = ({ item, navigation, screen }) =>
(
    <TouchableOpacity style={{ flexDirection: 'row', borderRadius: 6, backgroundColor: 'white', paddingVertical: 15, marginHorizontal: 12, marginBottom: 5 }}
        onPress={() => navigation.navigate(screen, { item: item })}>
        {/* cột 1 */}
        <View style={{ paddingHorizontal: 10 }}>
            {
                item.trangthai === 'Chưa phản hồi' ?
                    <View style={{ borderRadius: 999, height: 16, width: 16, backgroundColor: '#D6D6D6', marginTop: 5 }} /> :
                    <Image source={icons.checkbox} style={{ height: 16, width: 16, marginTop: 5 }} />
            }
        </View>
        {/* cột 2 */}
        <View style={{ flex: 1 }}>
            <View style={{ paddingRight: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 16, color: 'black', fontWeight: 700 }}>{item.tentau}</Text>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 12 }}>{item.ngaygui}</Text>
                        <Image source={icons.forward} style={{ height: 12, width: 12, marginLeft: 3 }} />
                    </TouchableOpacity>
                </View>
                <Text style={{ fontSize: 12, color: 'black' }}>{item.noidungykien}</Text>
                <TouchableOpacity>
                    <Text style={{ fontSize: 12, color: '#3345CB' }}>#Hình ảnh đính kèm</Text>
                </TouchableOpacity>
            </View>

            {
                item.trangthai === 'Đã phản hồi' && (
                    <View>
                        <View style={{ borderBottomWidth: 1, marginVertical: 10, borderBottomColor: '#D6D6D6    ' }} />

                        <View style={{ paddingBottom: 10, paddingRight: 10 }}>
                            <Text style={{ fontSize: 12, color: 'black' }}>{item.noidungphanhoi}</Text>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 12, color: '#3345CB' }}>#Hình ảnh đính kèm</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )

            }


        </View>

    </TouchableOpacity>
)


function CBHoiYKienCapTrenScreen({ navigation }) {
    const [typeTab, setTypeTab] = useState('Danh sách')
    const [showSearchBar, setShowSeachBar] = useState(false)

    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor={'#583CFF'} barStyle={'light-content'} />
            {/* header */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#583CFF', paddingTop: 5, paddingBottom: 17, paddingHorizontal: 12, height: 41 }}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}>
                    <Image source={icons.back} style={{ tintColor: 'gray', height: 20, width: 20, tintColor: 'white' }} />
                </TouchableOpacity>
                {
                    typeTab === tabs[0] && !showSearchBar && (
                        <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 16 }}>Danh sách ý kiến</Text>
                    )
                }
                {
                    typeTab === tabs[1] && !showSearchBar && (
                        <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 16 }}>Phản hồi ý kiến</Text>
                    )
                }
                {
                    showSearchBar && (
                        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, borderRadius: 17, height: 30, backgroundColor: '#7963FF', paddingLeft: 8, paddingRight: 21, paddingVertical: 9 }}>
                            <Image source={icons.search} style={{ height: 18, width: 18, tintColor: 'white' }} />
                            <TextInput style={{ flex: 1, height: 40, color: 'white' }} placeholder="Nhập đăng ký tàu, CMND/CCCD..." placeholderTextColor={'white'} />
                        </View>
                    )
                }

                {
                    !showSearchBar && (
                        <TouchableOpacity
                            onPress={() => { setShowSeachBar(!showSearchBar) }}>
                            <Image source={icons.search} style={{ height: 18, width: 18, tintColor: 'white' }} />
                        </TouchableOpacity>
                    )
                }

                {
                    showSearchBar && (
                        <View>
                            <TouchableOpacity onPress={
                                () => { setShowSeachBar(!showSearchBar) }}>
                                <Text style={{ color: 'white' }}>Đóng</Text>
                            </TouchableOpacity>

                        </View>
                    )
                }

            </View>

            {/* 2 nút */}
            {
                !showSearchBar && (
                    <View style={{ paddingHorizontal: 12, paddingTop: 15 }}>

                        <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#F5F5F5' }}>
                            {
                                tabs.map((tab, index) => (
                                    <TouchableOpacity key={index}
                                        onPress={() => setTypeTab(tab)}>
                                        <Text style={{
                                            fontSize: 14,
                                            fontWeight: 'bold',
                                            marginLeft: index != 0 ? 20 : 0,
                                            color: typeTab === tab ? '#005F94' : '#ADADAD',
                                            borderBottomWidth: typeTab === tab ? 1 : 0
                                        }}>{tab}</Text>
                                    </TouchableOpacity>
                                ))
                            }
                        </View>
                    </View>
                )
            }

            {
                showSearchBar && (
                    <View style={{ flexDirection: 'row', paddingTop: 15, paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: '#D6D6D6' }}>
                        <TouchableOpacity style={{ borderWidth: 1, width: 48, borderRadius: 4, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 12, padding: 5 }}
                            onPress={() => navigation.navigate('CBLocYKien')}
                        >
                            <Image source={icons.filter} style={{ width: 14, height: 14 }} />
                            <Text style={{ color: 'black', fontSize: 12, marginLeft: 3 }}>Lọc</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ padding: 5, borderRadius: 4, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 8, backgroundColor: '#EBEBEB' }}>
                            <Image source={icons.calendar} style={{ width: 14, height: 14 }} resizeMode="contain" />
                            <Text style={{ color: 'black', fontSize: 12 }}>Thời gian gửi</Text>
                        </TouchableOpacity>
                    </View>
                )
            }

            {typeTab === tabs[0] && (
                <ScrollView
                    contentContainerStyle={{ marginTop: 10 }}>
                    {
                        DANHSACH.map((item, index) => (
                            <Item key={index} item={item} navigation={navigation} screen={'CBChiTietYKien'} />

                        ))
                    }


                </ScrollView>
            )}
            {typeTab === tabs[1] && (
                <ScrollView
                    contentContainerStyle={{ marginTop: 10 }}>
                    {
                        DANHSACH.filter(tau => tau.trangthai === 'Chưa phản hồi').map((item, index) => (
                            <Item key={index} item={item} navigation={navigation} screen={'CBPhanHoiYKien'} />

                        ))
                    }


                </ScrollView>
            )}
            <TouchableOpacity style={{ position: 'absolute', bottom: 13, right: 12 }}
                onPress={() => navigation.navigate('ThemMoiYKien')}>
                <Image source={icons.add} style={{ width: 56, height: 56 }} resizeMode="contain" />
            </TouchableOpacity>
        </View>
    )
}

export default CBHoiYKienCapTrenScreen
