import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    StatusBar,
    StyleSheet,
    Modal,
    TextInput,
} from 'react-native'
import { icons, images } from '../constants/manager'

const MyThuyenVien = ({ ten, role, sdt, taudango, diachi, onPress }) => (
    <View>
        <TouchableOpacity style={{
            borderRadius: 6,
            paddingVertical: 15,
            paddingHorizontal: 12,
            backgroundColor: 'white',
            flexDirection: 'row',
            justifyContent: 'space-between'
        }}
            onPress={onPress}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 280 }}>
                <Image source={icons.avatartv1} style={{ height: 40, width: 40, borderRadius: 999, marginRight: 10 }} />
                <View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>{ten}</Text>
                        <Text style={{ color: '#005F94', fontSize: 12, marginLeft: 5, alignSelf: 'center' }}>{role}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: 'white', fontSize: 10, backgroundColor: '#4DBFFF', textAlign: 'center', paddingHorizontal: 3, paddingVertical: 2, borderRadius: 2 }}>{taudango}</Text>
                        <Text style={{ color: 'black', marginLeft: 5 }}>{sdt}</Text>
                    </View>
                    <Text style={{ fontSize: 12 }}>{diachi}</Text>
                </View>
            </View>
            <Image source={icons.back} style={{ width: 12, height: 12, tintColor: 'gray', transform: [{ scaleX: -1 }], marginTop: 3 }} />
        </TouchableOpacity>
        <View style={{ borderBottomWidth: 1, borderBottomColor: '#D6D6D6', marginLeft: 12 }} />
    </View>
)

const MyThuyenVienTimKiem = ({ ten, role, sdt, diachi, onPress }) => (
    <View>
        <TouchableOpacity style={{
            borderRadius: 6,
            paddingVertical: 15,
            paddingHorizontal: 12,
            backgroundColor: 'white',
            flexDirection: 'row',
            justifyContent: 'space-between'
        }}
            onPress={onPress}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 280 }}>
                <Image source={icons.avatartv1} style={{
                    height: 40, width: 40,
                    borderRadius: 999,
                    marginRight: 10,
                }} />
                <View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: 'bold',
                            color: 'black'
                        }}>{ten}</Text>
                        <Text style={{ color: 'black', marginLeft: 5 }}>{sdt}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>

                        <Text style={{ color: '#005F94', fontSize: 12, marginLeft: 5, alignSelf: 'center' }}>{role}</Text>
                    </View>
                    <Text style={{ fontSize: 12 }}>{diachi}</Text>
                </View>
            </View>
            <Image source={icons.back} style={{ width: 12, height: 12, tintColor: 'gray', transform: [{ scaleX: -1 }], marginTop: 3 }} />
        </TouchableOpacity>
        <View style={{ borderBottomWidth: 1, borderBottomColor: '#D6D6D6', marginLeft: 12 }} />
    </View>
)

function TabThuyenVienScreen({ navigation, route }) {
    const [showSearchBar, setShowSeachBar] = useState(false)
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
                    !showSearchBar && (
                        <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 16 }}>Thông tin xuất nhập bến</Text>
                    )
                }
                {
                    showSearchBar && (
                        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, borderRadius: 17, height: 30, backgroundColor: '#6AAED4', paddingLeft: 8, paddingRight: 21, paddingVertical: 9 }}>
                            <Image source={icons.search} style={{ height: 18, width: 18, tintColor: 'white' }} />
                            <TextInput style={{ flex: 1, height: 40, color: 'white' }} placeholder="Nhập đăng ký tàu, CMND/CCCD..." placeholderTextColor={'white'} />
                        </View>
                    )
                }

                {
                    !showSearchBar ? (
                        <TouchableOpacity
                            onPress={() => { setShowSeachBar(!showSearchBar) }}>
                            <Image source={icons.search} style={{ height: 18, width: 18, tintColor: 'white' }} />
                        </TouchableOpacity>
                    )
                        : <View style={{ width: 18, height: 18 }} />
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

            {/* body */}
            <View>
                {
                    showSearchBar && (
                        <View style={{ flexDirection: 'row', paddingTop: 15, paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: '#D6D6D6', backgroundColor: 'white' }}>
                            <TouchableOpacity style={{ borderWidth: 1, height: 25, width: 48, borderRadius: 4, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 12 }}
                                onPress={() => {
                                    navigation.navigate('LocKetQuaThuyenVien')
                                }}>
                                <Image source={icons.filter} style={{ width: 14, height: 14 }} />
                                <Text style={{ color: 'black', fontSize: 12 }}>Lọc</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ borderWidth: 1, height: 25, width: 116, borderRadius: 4, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 5 }}>
                                <Text style={{ color: 'black', fontSize: 12, marginRight: 3 }}>Tất cả thuyền viên</Text>
                                <Image source={icons.dropdown} style={{ width: 10, height: 6 }} />
                            </TouchableOpacity>
                        </View>
                    )
                }
                {/* ds thuyền viên */}
                {
                    !showSearchBar ?
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                        >

                            <MyThuyenVien
                                ten={'Nguyễn Văn B'}
                                role={'Thuyền trưởng'}
                                sdt={'090 0000 090'}
                                diachi={'Sào Lưới, Xã Khánh Bình Tây Bắc, Huyện Trần Văn Thời, Tỉnh Cà Mau'}
                                taudango={'Rạng đông 1'}
                                onPress={() => navigation.navigate('ChiTietThuyenVien')}
                            />
                            <MyThuyenVien
                                ten={'Nguyễn Văn B'}
                                role={'Thuyền trưởng'}
                                sdt={'090 0000 090'}
                                diachi={'Sào Lưới, Xã Khánh Bình Tây Bắc, Huyện Trần Văn Thời, Tỉnh Cà Mau'}
                                taudango={'Rạng đông 1'}
                                onPress={() => navigation.navigate('ChiTietThuyenVien')}
                            />
                            <MyThuyenVien
                                ten={'Nguyễn Văn B'}
                                role={'Thuyền trưởng'}
                                sdt={'090 0000 090'}
                                diachi={'Sào Lưới, Xã Khánh Bình Tây Bắc, Huyện Trần Văn Thời, Tỉnh Cà Mau'}
                                taudango={'Rạng đông 1'}
                                onPress={() => navigation.navigate('ChiTietThuyenVien')}
                            />
                            <MyThuyenVien
                                ten={'Nguyễn Văn B'}
                                role={'Thuyền trưởng'}
                                sdt={'090 0000 090'}
                                diachi={'Sào Lưới, Xã Khánh Bình Tây Bắc, Huyện Trần Văn Thời, Tỉnh Cà Mau'}
                                taudango={'Rạng đông 1'}
                                onPress={() => navigation.navigate('ChiTietThuyenVien')}
                            />

                        </ScrollView> :
                        //nếu searchbar tắt
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                        >

                            <MyThuyenVienTimKiem
                                ten={'Nguyễn Văn B'}
                                role={'Thuyền trưởng'}
                                sdt={'090 0000 090'}
                                diachi={'Sào Lưới, Xã Khánh Bình Tây Bắc, Huyện Trần Văn Thời, Tỉnh Cà Mau'}
                                onPress={() => navigation.navigate('ChiTietThuyenVien')}
                            />
                            <MyThuyenVienTimKiem
                                ten={'Nguyễn Văn B'}
                                role={'Thuyền trưởng'}
                                sdt={'090 0000 090'}
                                diachi={'Sào Lưới, Xã Khánh Bình Tây Bắc, Huyện Trần Văn Thời, Tỉnh Cà Mau'}
                                onPress={() => navigation.navigate('ChiTietThuyenVien')}
                            />
                            <MyThuyenVienTimKiem
                                ten={'Nguyễn Văn B'}
                                role={'Thuyền trưởng'}
                                sdt={'090 0000 090'}
                                diachi={'Sào Lưới, Xã Khánh Bình Tây Bắc, Huyện Trần Văn Thời, Tỉnh Cà Mau'}
                                onPress={() => navigation.navigate('ChiTietThuyenVien')}
                            />
                            <MyThuyenVienTimKiem
                                ten={'Nguyễn Văn B'}
                                role={'Thuyền trưởng'}
                                sdt={'090 0000 090'}
                                diachi={'Sào Lưới, Xã Khánh Bình Tây Bắc, Huyện Trần Văn Thời, Tỉnh Cà Mau'}
                                onPress={() => navigation.navigate('ChiTietThuyenVien')}
                            />

                        </ScrollView>

                }



            </View>
            <TouchableOpacity style={{ position: 'absolute', bottom: 13, right: 12 }}>
                <Image source={icons.add} style={{ width: 56, height: 56 }} resizeMode="contain" />
            </TouchableOpacity>

        </View>
    )
}

export default TabThuyenVienScreen