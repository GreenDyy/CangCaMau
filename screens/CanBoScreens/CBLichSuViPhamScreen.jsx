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

const tabs = ['Danh sách', 'Lịch sử tạo']
const DANHSACH = [
    {
        title: 'CM-01030-TS',
        tinhtrang: 'Ngoài biển',
        thoigianbibat: '20/10/2021 10:31',
        ngaygui: '10/10/2022',
        noidung: 'Đề nghị quay lại bờ và phạt hành chính 20 triệu'
    },
    {
        title: 'CM-01030-TS',
        tinhtrang: 'Trong bờ',
        thoigianbibat: '20/10/2021 10:31',
        ngaygui: '10/10/2022',
        noidung: 'Đề nghị quay lại bờ và phạt hành chính 20 triệu'
    },

]

const LICHSUTAO = [
    {
        title: 'TV-96077-TS - Thái học 3',
        avatar: icons.avatartv1,
        trangthai: 'Xuất bến',
        tinhtrang: 'Được tiếp nhận',
        ngaygui: '10/10/2022',
        noidung: 'Phan Văn Tiến, CMND: , SDT: 0984042497, Địa chỉ: k1, Xã Long Đức, Thành phố Trà Vinh, Tỉnh Trà Vinh',
        lydotuchoi: ''
    },
    {
        title: 'TV-96077-TS - Thái học 3',
        avatar: icons.avatartv1,
        trangthai: 'Nhập bến',
        tinhtrang: 'Được tiếp nhận',
        ngaygui: '10/10/2022',
        noidung: 'Phan Văn Tiến, CMND: , SDT: 0984042497, Địa chỉ: k1, Xã Long Đức, Thành phố Trà Vinh, Tỉnh Trà Vinh',
        lydotuchoi: ''
    },
    {
        title: 'TV-96077-TS - Thái học 3',
        avatar: icons.avatartv1,
        trangthai: 'Xuất bến',
        tinhtrang: 'Từ chối',
        ngaygui: '10/10/2022',
        noidung: 'Phan Văn Tiến, CMND: , SDT: 0984042497, Địa chỉ: k1, Xã Long Đức, Thành phố Trà Vinh, Tỉnh Trà Vinh',
        lydotuchoi: 'Tình hình biển động. Yêu cầu chủ tàu không được phép ra khơi vào lúc này'
    },
    {
        title: 'TV-96077-TS - Thái học 3',
        avatar: icons.avatartv1,
        trangthai: 'Nhập bến',
        tinhtrang: 'Từ chối',
        ngaygui: '10/10/2022',
        noidung: 'Phan Văn Tiến, CMND: , SDT: 0984042497, Địa chỉ: k1, Xã Long Đức, Thành phố Trà Vinh, Tỉnh Trà Vinh',
        lydotuchoi: 'Tình hình biển động. Yêu cầu chủ tàu không được phép ra khơi vào lúc này'
    },
]

const Item = ({ item, navigation }) =>
(
    <View>
        <TouchableOpacity style={{ paddingHorizontal: 12, paddingVertical: 15 }} onPress={() => navigation.navigate('CBChiTietViPham')}>
            {/* dòng 1 */}
            <View style={{ flexDirection: 'row', justifyContent: "space-between", flex: 1, alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black', marginRight: 5 }}>{item.title}</Text>
                    {item.tinhtrang === 'Trong bờ' && <TrongBo />}
                    {item.tinhtrang === 'Ngoài biển' && <NgoaiBien />}
                </View>

                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontSize: 12 }}>{item.ngaygui}</Text>
                    <Image source={icons.forward} style={{ height: 12, width: 12, marginLeft: 3 }} />
                </TouchableOpacity>
            </View>
            {/* dòng 2 */}
            <View style={{ flexDirection: 'row', marginTop: 5 }}>
                <Text style={{ fontSize: 12, color: 'black' }}>Người tạo: </Text>
                <Image source={icons.avatartv2} style={{ width: 20, height: 20 }} resizeMode="contain" />
            </View>
            <Text style={{ fontSize: 12, color: 'black', marginTop: 5 }}>Thời gian bị bắt: {item.thoigianbibat}</Text>
            <Text style={{ fontSize: 12, marginTop: 5 }}>{item.noidung}</Text>
        </TouchableOpacity>
        <View style={{ borderBottomWidth: 1, marginLeft: 12, borderBottomColor: '#D6D6D6' }} />
    </View>
)

const ItemLichSu = ({ item, navigation }) =>
(
    <View>
        <TouchableOpacity style={{ paddingHorizontal: 12, paddingVertical: 15 }} onPress={() => NavigateToOtherScreen({ item, navigation })}>
            <View style={{ flexDirection: 'row', justifyContent: "space-between", flex: 1, alignItems: 'center' }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>{item.title}</Text>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontSize: 12 }}>{item.ngaygui}</Text>
                    <Image source={icons.forward} style={{ height: 12, width: 12, marginLeft: 3 }} />
                </TouchableOpacity>
            </View>
            {/* Status bar */}
            <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', marginTop: 5 }}>
                <Image source={item.avatar} style={{ width: 20, height: 20, marginRight: 5 }} resizeMode="contain" />
                {/* trangthai */}
                {item.trangthai === 'Nhập bến' && <NhapBen />}
                {item.trangthai === 'Xuất bến' && <XuatBen />}
                {/* tình trạng */}
                {item.tinhtrang === 'Trong bờ' && <TrongBo />}
                {item.tinhtrang === 'Ngoài biển' && <NgoaiBien />}
                {item.tinhtrang === 'Chờ xác nhận xuất bến' && <ChoXacNhanXuatBen />}
                {item.tinhtrang === 'Chờ xác nhận nhập bến' && <ChoXacNhanNhapBen />}
                {item.tinhtrang === 'Được tiếp nhận' && <DuocTiepNhan />}
                {item.tinhtrang === 'Từ chối' && <TuChoi />}
                {item.tinhtrang === 'Chờ tiếp nhận yêu cầu' && <ChoTiepNhanYeuCau />}
                {item.tinhtrang === 'Không được xuất bến' && <KhongDuocXuatBen />}
                {item.tinhtrang === 'Không được nhập bến' && <KhongDuocNhapBen />}
            </View>

            <Text style={{ fontSize: 12, marginTop: 5 }}>{item.noidung}</Text>
            {item.lydotuchoi &&
                <Text
                    numberOfLines={1}
                    style={{ fontSize: 16, color: 'black' }}>{item.lydotuchoi}</Text>}
        </TouchableOpacity>
        <View style={{ borderBottomWidth: 1, marginLeft: 12, borderBottomColor: '#D6D6D6' }} />
    </View>
)

function CBLichSuViPhamScreen({ navigation }) {
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
                    typeTab === tabs[1] && !showSearchBar && (
                        <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 16 }}>Lịch sử tạo</Text>
                    )
                }
                {
                    typeTab === tabs[0] && !showSearchBar && (
                        <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 16 }}>Lịch sử vi phạm</Text>
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
                        onPress={()=>navigation.navigate('CBLocViPham')}
                        >
                            <Image source={icons.filter} style={{ width: 14, height: 14 }} />
                            <Text style={{ color: 'black', fontSize: 12, marginLeft: 3 }}>Lọc</Text>
                        </TouchableOpacity>

                        {/* tình trạng */}
                        <SelectDropdown
                            dropdownStyle={{ borderRadius: 6 }}


                            onSelect={(selectedItem, index) => {

                            }}
                            renderButton={(selectedItem, isOpened) => {
                                return (
                                    !selectedItem ?
                                        <View style={{ marginLeft: 5, borderWidth: 1, width: 116, borderRadius: 4, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 5 }}>
                                            <Text style={{ color: 'black', fontSize: 12, marginRight: 3 }}>Tất cả tình trạng</Text>
                                            <Image source={icons.dropdown} style={{ width: 10, height: 6 }} />
                                        </View>
                                        :
                                        <View style={{ marginLeft: 5, borderWidth: 1, width: 116, borderRadius: 4, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 5 }}>
                                            <Text style={{ color: 'black', fontSize: 12, marginRight: 3 }}>{selectedItem}</Text>
                                            <Image source={icons.dropdown} style={{ width: 10, height: 6 }} />
                                        </View>
                                );
                            }}
                            renderItem={(item, index, isSelected) => {
                                return (
                                    <View style={{ padding: 5, backgroundColor: isSelected && 'lightgreen' }}>
                                        <Text style={{ borderBottomWidth: 1, fontSize: 12 }}>{item}</Text>
                                    </View>
                                );
                            }}
                        />

                        {/* hạn đăng kiểm */}
                        <SelectDropdown
                            dropdownStyle={{ borderRadius: 6 }}


                            onSelect={(selectedItem, index) => {

                            }}
                            renderButton={(selectedItem, isOpened) => {
                                return (
                                    !selectedItem ?
                                        <View style={{ marginLeft: 5, borderWidth: 1, width: 116, borderRadius: 4, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 5 }}>
                                            <Text style={{ color: 'black', fontSize: 12 }}>Tất cả</Text>
                                            <Image source={icons.dropdown} style={{ width: 10, height: 6 }} />
                                        </View>
                                        :
                                        <View style={{ marginLeft: 5, borderWidth: 1, width: 116, borderRadius: 4, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 5 }}>
                                            <Text style={{ color: 'black', fontSize: 12, marginRight: 3 }}>{selectedItem}</Text>
                                            <Image source={icons.dropdown} style={{ width: 10, height: 6 }} />
                                        </View>
                                );
                            }}
                            renderItem={(item, index, isSelected) => {
                                return (
                                    <View style={{ padding: 5, backgroundColor: isSelected && 'lightgreen' }}>
                                        <Text style={{ borderBottomWidth: 1, fontSize: 12 }}>{item}</Text>
                                    </View>
                                );
                            }}
                        />
                        <TouchableOpacity style={{ padding: 5, borderRadius: 4, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 5, backgroundColor: '#D6D6D6' }}>
                            <Image source={icons.calendar} style={{ width: 14, height: 14 }} resizeMode="contain" />
                            <Text style={{ color: 'black', fontSize: 12 }}>Thời gian</Text>
                        </TouchableOpacity>
                    </View>
                )
            }

            {typeTab === tabs[0] && (
                <ScrollView style={{ flex: 1 }}>
                    {
                        DANHSACH.map((item, index) => (
                            <Item key={index} item={item} navigation={navigation} />

                        ))
                    }
                </ScrollView>
            )}
            {typeTab === tabs[1] && (
                <View style={{ flex: 1 }}>
                    <ScrollView>
                        {
                            LICHSUTAO.map((item, index) => (
                                <ItemLichSu key={index} item={item} navigation={navigation} />

                            ))
                        }
                    </ScrollView>
                </View>


            )}
            <TouchableOpacity style={{ position: 'absolute', bottom: 13, right: 12 }}
            onPress={()=> navigation.navigate('ThemMoiViPham')}>
                <Image source={icons.add} style={{ width: 56, height: 56 }} resizeMode="contain" />
            </TouchableOpacity>
        </View>
    )
}

export default CBLichSuViPhamScreen
