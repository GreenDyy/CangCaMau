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
import { icons, images } from '../constants/manager'
import {
    XuatBen, NhapBen, TrongBo, NgoaiBien, ChoXacNhanNhapBen, ChoXacNhanXuatBen,
    DuocTiepNhan, TuChoi, ChoTiepNhanYeuCau, KhongDuocNhapBen, KhongDuocXuatBen
} from '../components/status'
import SelectDropdown from "react-native-select-dropdown";
// for dropdown
const DSTINHTRANG = ['Tất cả tình trạng', 'Trong bờ', 'Ngoài biển']
const DSHANDANGKIEM = ['Tất cả', 'Hết hạn', 'Gần hết hạn', 'Còn hạng']

const tabs = ['Danh sách', 'Lịch sử yêu cầu']
const DANHSACH = [
    {
        title: '06020 - Thái học 3',
        trangthai: 'Xuất bến',
        tinhtrang: 'Chờ tiếp nhận yêu cầu',
        ngayxuatben: '',
        ngaynhapben: '',
        noidung: 'Phan Văn Tiến, CMND: , SDT: 0984042497, Địa chỉ: k1, Xã Long Đức, Thành phố Trà Vinh, Tỉnh Trà Vinh'
    },
    {
        title: '06776 - Thái học 2',
        trangthai: '',
        tinhtrang: 'Trong bờ',
        ngayxuatben: '10:24 10/10/2022',
        ngaynhapben: '14:10 18/10/2022',
        noidung: 'Phan Văn Tiến, CMND: , SDT: 0984042497, Địa chỉ: k1, Xã Long Đức, Thành phố Trà Vinh, Tỉnh Trà Vinh'
    },

    {
        title: '06811 - Thái học 1',
        trangthai: 'Nhập bến',
        tinhtrang: 'Chờ tiếp nhận yêu cầu',
        ngayxuatben: '',
        ngaynhapben: '',
        noidung: 'Phan Văn Tiến, CMND: , SDT: 0984042497, Địa chỉ: k1, Xã Long Đức, Thành phố Trà Vinh, Tỉnh Trà Vinh'
    },
    {
        title: '06812 - Rạng Đông 1',
        trangthai: '',
        tinhtrang: 'Ngoài biển',
        ngayxuatben: '10:24 10/10/2022',
        ngaynhapben: '',
        noidung: 'Phan Văn Tiến, CMND: , SDT: 0984042497, Địa chỉ: k1, Xã Long Đức, Thành phố Trà Vinh, Tỉnh Trà Vinh'
    },

    {
        title: '06020 - Xuất Được',
        trangthai: 'Xuất bến',
        tinhtrang: 'Được tiếp nhận',
        ngayxuatben: '10:24 10/10/2022',
        ngaynhapben: '',
        noidung: 'Phan Văn Tiến, CMND: , SDT: 0984042497, Địa chỉ: k1, Xã Long Đức, Thành phố Trà Vinh, Tỉnh Trà Vinh'
    },

    {
        title: '06020 - Nhập Được',
        trangthai: 'Nhập bến',
        tinhtrang: 'Được tiếp nhận',
        ngayxuatben: '10:24 10/10/2022',
        ngaynhapben: '',
        noidung: 'Phan Văn Tiến, CMND: , SDT: 0984042497, Địa chỉ: k1, Xã Long Đức, Thành phố Trà Vinh, Tỉnh Trà Vinh'
    },

    {
        title: '06020 - Xuất Từ',
        trangthai: 'Xuất bến',
        tinhtrang: 'Từ chối',
        ngayxuatben: '10:24 10/10/2022',
        ngaynhapben: '',
        noidung: 'Phan Văn Tiến, CMND: , SDT: 0984042497, Địa chỉ: k1, Xã Long Đức, Thành phố Trà Vinh, Tỉnh Trà Vinh'
    },

    {
        title: '06020 - Nhập Từ',
        trangthai: 'Nhập bến',
        tinhtrang: 'Từ chối',
        ngayxuatben: '10:24 10/10/2022',
        ngaynhapben: '',
        noidung: 'Phan Văn Tiến, CMND: , SDT: 0984042497, Địa chỉ: k1, Xã Long Đức, Thành phố Trà Vinh, Tỉnh Trà Vinh'
    },

    {
        title: '06020 - Nhập Chờ',
        trangthai: 'Nhập bến',
        tinhtrang: 'Chờ xác nhận nhập bến',
        ngayxuatben: '10:24 10/10/2022',
        ngaynhapben: '',
        noidung: 'Phan Văn Tiến, CMND: , SDT: 0984042497, Địa chỉ: k1, Xã Long Đức, Thành phố Trà Vinh, Tỉnh Trà Vinh'
    },

    {
        title: '06020 - Xuất Chờ',
        trangthai: 'Xuất bến',
        tinhtrang: 'Chờ xác nhận xuất bến',
        ngayxuatben: '10:24 10/10/2022',
        ngaynhapben: '',
        noidung: 'Phan Văn Tiến, CMND: , SDT: 0984042497, Địa chỉ: k1, Xã Long Đức, Thành phố Trà Vinh, Tỉnh Trà Vinh'
    },

    {
        title: '06020 - Xuất Không Được',
        trangthai: 'Xuất bến',
        tinhtrang: 'Không được xuất bến',
        ngayxuatben: '10:24 10/10/2022',
        ngaynhapben: '',
        noidung: 'Phan Văn Tiến, CMND: , SDT: 0984042497, Địa chỉ: k1, Xã Long Đức, Thành phố Trà Vinh, Tỉnh Trà Vinh'
    },
    {
        title: '06020 - Nhập Không Được',
        trangthai: 'Nhập bến',
        tinhtrang: 'Không được nhập bến',
        ngayxuatben: '10:24 10/10/2022',
        ngaynhapben: '',
        noidung: 'Phan Văn Tiến, CMND: , SDT: 0984042497, Địa chỉ: k1, Xã Long Đức, Thành phố Trà Vinh, Tỉnh Trà Vinh'
    },
    {
        title: '06020 - Xuất Ngoài Biển',
        trangthai: 'Xuất bến',
        tinhtrang: 'Ngoài biển',
        ngayxuatben: '10:24 10/10/2022',
        ngaynhapben: '',
        noidung: 'Phan Văn Tiến, CMND: , SDT: 0984042497, Địa chỉ: k1, Xã Long Đức, Thành phố Trà Vinh, Tỉnh Trà Vinh'
    },
    {
        title: '06020 - Nhập Trong Bờ',
        trangthai: 'Nhập bến',
        tinhtrang: 'Trong bờ',
        ngayxuatben: '10:24 10/10/2022',
        ngaynhapben: '',
        noidung: 'Phan Văn Tiến, CMND: , SDT: 0984042497, Địa chỉ: k1, Xã Long Đức, Thành phố Trà Vinh, Tỉnh Trà Vinh'
    },

]

function XuatNhapBenScreen({ navigation }) {
    const [typeTab, setTypeTab] = useState('Danh sách')
    const [showSearchBar, setShowSeachBar] = useState(false)

    const NavigateToOtherScreen = (item) => {
        // tức là chỉ có mỗi tình trạng thôi
        if (item.trangthai === '' && item.tinhtrang === 'Trong bờ')
            navigation.navigate('TrongBo', { item: item })
        else if (item.trangthai === '' && item.tinhtrang === 'Ngoài biển')
            navigation.navigate('NgoaiBien', { item: item })
        else if (item.trangthai === 'Xuất bến')
            navigation.navigate('AllStateXuatBen', { item: item })
        else if (item.trangthai === 'Nhập bến')
            navigation.navigate('AllStateNhapBen', { item: item })
    }

    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor={'#459AC9'} barStyle={'light-content'} />
            {/* header */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#459AC9', paddingTop: 5, paddingBottom: 17, paddingHorizontal: 12, height: 41 }}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}>
                    <Image source={icons.back} style={{ tintColor: 'gray', height: 20, width: 20, tintColor: 'white' }} />
                </TouchableOpacity>

                {
                    typeTab === tabs[1] && !showSearchBar && (
                        <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 16 }}>Thông tin xuất nhập bến</Text>
                    )
                }
                {
                    typeTab === tabs[1] && showSearchBar && (
                        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, borderRadius: 17, height: 30, backgroundColor: '#6AAED4', paddingLeft: 8, paddingRight: 21, paddingVertical: 9 }}>
                            <Image source={icons.search} style={{ height: 18, width: 18, tintColor: 'white' }} />
                            <TextInput style={{ flex: 1, height: 40, color: 'white' }} placeholder="Nhập đăng ký tàu, CMND/CCCD" placeholderTextColor={'white'} />
                        </View>
                    )
                }
                {
                    typeTab === tabs[0] && (
                        <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 16 }}>Thông tin xuất nhập bến</Text>
                    )
                }
                {
                    typeTab === tabs[1] && !showSearchBar ? (
                        <TouchableOpacity
                            onPress={() => { setShowSeachBar(!showSearchBar) }}>
                            <Image source={icons.search} style={{ height: 18, width: 18, tintColor: 'white' }} />
                        </TouchableOpacity>
                    )
                        : <View style={{ width: 18, height: 18 }} />
                }

                {
                    typeTab === tabs[1] && showSearchBar && (
                        <View>
                            <TouchableOpacity onPress={
                                () => { setShowSeachBar(!showSearchBar) }}>
                                <Text style={{ color: 'white' }}>Đóng</Text>
                            </TouchableOpacity>

                        </View>
                    )
                }

            </View>

            {
                !showSearchBar &&
                <View style={{ margin: 10 }}>
                    {/* 2 nút */}
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
            }

            {typeTab === 'Danh sách' && (
                <ScrollView style={{ flex: 1 }}>
                    {
                        DANHSACH.map((item, index) => (
                            <View key={index}>
                                <TouchableOpacity style={{ margin: 10 }} onPress={() => NavigateToOtherScreen(item)}>
                                    <View style={{ flexDirection: 'row', justifyContent: "space-between", flex: 1, alignItems: 'center' }}>
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>{item.title}</Text>
                                        <TouchableOpacity>
                                            <Image source={icons.forward} style={{ height: 12, width: 12, marginLeft: 3 }} />
                                        </TouchableOpacity>
                                    </View>
                                    {/* Status bar */}
                                    <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', marginTop: 5 }}>
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

                                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                        <View style={{ width: '50%', flexDirection: 'row' }}>
                                            <Text style={{ fontSize: 12 }}>Xuất bến: </Text>
                                            <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'black' }}>{item.ngayxuatben ? item.ngayxuatben : '--'}</Text>
                                        </View>
                                        <View style={{ width: '50%', flexDirection: 'row' }}>
                                            <Text style={{ fontSize: 12 }}>Nhập bến: </Text>
                                            <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'black' }}>{item.ngaynhapben ? item.ngaynhapben : '--'}</Text>
                                        </View>
                                    </View>

                                    <View style={{ marginTop: 5 }}>
                                        <Text style={{ fontSize: 12 }}>
                                            {item.noidung}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                                <View style={{ borderBottomWidth: 0.5, marginLeft: 10 }} />
                            </View>

                        ))
                    }



                </ScrollView>
            )}
            {typeTab === 'Lịch sử yêu cầu' && (
                <View style={{ flex: 1 }}>
                    {
                        showSearchBar && (
                            <View style={{ flexDirection: 'row', paddingTop: 15, paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: '#D6D6D6' }}>
                                <TouchableOpacity style={{ borderWidth: 1, width: 48, borderRadius: 4, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 12, padding: 5 }}
                                    onPress={() => {
                                        navigation.navigate('CBLocKetQua')
                                    }}>
                                    <Image source={icons.filter} style={{ width: 14, height: 14 }} />
                                    <Text style={{ color: 'black', fontSize: 12, marginLeft: 3 }}>Lọc</Text>
                                </TouchableOpacity>


                                {/* tình trạng */}
                                <SelectDropdown
                                    dropdownStyle={{ borderRadius: 6 }}
                                    defaultValueByIndex={0}
                                    data={DSTINHTRANG}
                                    onSelect={(selectedItem, index) => {
                                        setTinhTrangDuyet(selectedItem)
                                    }}
                                    renderButton={(selectedItem, isOpened) => {
                                        return (
                                            !selectedItem ?
                                                <View style={{ marginLeft: 5, borderWidth: 1, width: 116, borderRadius: 4, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 5 }}>
                                                    <Text style={{ color: 'black', fontSize: 12, marginRight: 3 }}>Tất cả tình trạng</Text>
                                                    <Image source={icons.dropdown} style={{ width: 10, height: 6 }} />
                                                </View>
                                                :
                                                <View style={{ marginLeft: 5, borderWidth: 1, width: 116, borderRadius: 4, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 5 }}
                                                    onPress={() => setLoc(true)}>
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
                                    data={DSHANDANGKIEM}
                                    defaultValueByIndex={0}
                                    onSelect={(selectedItem, index) => {
                                        setHanDangKiem(selectedItem)
                                    }}
                                    renderButton={(selectedItem, isOpened) => {
                                        return (
                                            !selectedItem ?
                                                <View style={{ marginLeft: 5, borderWidth: 1, width: 116, borderRadius: 4, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 5 }}>
                                                    <Text style={{ color: 'black', fontSize: 12 }}>Tất cả</Text>
                                                    <Image source={icons.dropdown} style={{ width: 10, height: 6 }} />
                                                </View>
                                                :
                                                <View style={{ marginLeft: 5, borderWidth: 1, width: 116, borderRadius: 4, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 5 }}
                                                    onPress={() => setLoc(true)}>
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


                    <ScrollView>
                        <View>
                            <TouchableOpacity style={{ margin: 10 }} onPress={() => { navigation.navigate('AllStateXuatBenScreen') }}>
                                <View style={{ flexDirection: 'row', justifyContent: "space-between", flex: 1, alignItems: 'center' }}>
                                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>TV-96077-TS - Thái học 3</Text>

                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 12 }}>10/10/2022</Text>
                                        <TouchableOpacity>
                                            <Image source={icons.forward} style={{ height: 12, width: 12, marginLeft: 3 }} />
                                        </TouchableOpacity>
                                    </View>

                                </View>

                                <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', marginTop: 5 }}>
                                    <Text style={{ fontSize: 10, color: 'white', backgroundColor: '#FD397A', borderRadius: 2, paddingHorizontal: 10 }}>Xuất bến</Text>
                                    <Text style={{ fontSize: 10, color: 'white', backgroundColor: '#0ABB87', borderRadius: 10, paddingHorizontal: 10, marginLeft: 5 }}>Chờ tiếp nhận yêu cầu</Text>
                                </View>

                                <View style={{ marginTop: 5 }}>
                                    <Text style={{ fontSize: 12 }}>
                                        Phan Văn Tiến, CMND: , SDT: 0984042497, Địa chỉ: k1, Xã Long Đức, Thành phố Trà Vinh, Tỉnh Trà Vinh
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <View style={{ borderBottomWidth: 0.5, marginLeft: 10, borderColor: '#D6D6D6' }} />
                        </View>

                        <View>
                            <TouchableOpacity style={{ margin: 10 }}>
                                <View style={{ flexDirection: 'row', justifyContent: "space-between", flex: 1, alignItems: 'center' }}>
                                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>TV-96077-TS - Thái học 3</Text>

                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 12 }}>10/10/2022</Text>
                                        <TouchableOpacity>
                                            <Image source={icons.forward} style={{ height: 12, width: 12, marginLeft: 3 }} />
                                        </TouchableOpacity>
                                    </View>

                                </View>

                                <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', marginTop: 5 }}>
                                    <Text style={{ fontSize: 10, color: 'white', backgroundColor: '#FD397A', borderRadius: 2, paddingHorizontal: 10 }}>Xuất bến</Text>
                                    <Text style={{ fontSize: 10, color: 'white', backgroundColor: '#0ABB87', borderRadius: 10, paddingHorizontal: 10, marginLeft: 5 }}>Chờ tiếp nhận yêu cầu</Text>
                                </View>

                                <View style={{ marginTop: 5 }}>
                                    <Text style={{ fontSize: 12 }}>
                                        Phan Văn Tiến, CMND: , SDT: 0984042497, Địa chỉ: k1, Xã Long Đức, Thành phố Trà Vinh, Tỉnh Trà Vinh
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <View style={{ borderBottomWidth: 0.5, marginLeft: 10, borderColor: '#D6D6D6' }} />
                        </View>

                        <View>
                            <TouchableOpacity style={{ margin: 10 }}>
                                <View style={{ flexDirection: 'row', justifyContent: "space-between", flex: 1, alignItems: 'center' }}>
                                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>TV-96077-TS - Thái học 3</Text>

                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 12 }}>10/10/2022</Text>
                                        <TouchableOpacity>
                                            <Image source={icons.forward} style={{ height: 12, width: 12, marginLeft: 3 }} />
                                        </TouchableOpacity>
                                    </View>

                                </View>

                                <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', marginTop: 5 }}>
                                    <Text style={{ fontSize: 10, color: 'white', backgroundColor: '#FD397A', borderRadius: 2, paddingHorizontal: 10 }}>Xuất bến</Text>
                                    <Text style={{ fontSize: 10, color: 'white', backgroundColor: '#0ABB87', borderRadius: 10, paddingHorizontal: 10, marginLeft: 5 }}>Chờ tiếp nhận yêu cầu</Text>
                                </View>

                                <View style={{ marginTop: 5 }}>
                                    <Text style={{ fontSize: 12 }}>
                                        Phan Văn Tiến, CMND: , SDT: 0984042497, Địa chỉ: k1, Xã Long Đức, Thành phố Trà Vinh, Tỉnh Trà Vinh
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <View style={{ borderBottomWidth: 0.5, marginLeft: 10, borderColor: '#D6D6D6' }} />
                        </View>

                    </ScrollView>

                </View>

            )}
        </View>
    )
}

export default XuatNhapBenScreen
