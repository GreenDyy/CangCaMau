import React, { useState, useEffect } from "react";
import {
    View,
    TouchableOpacity,
    Text,
    Image,
    StatusBar,
    FlatList,
    TextInput
} from 'react-native'
import { icons } from '../../constants/manager'
import {
    TrongBo, NgoaiBien,
} from '../../components/status'
import moment from 'moment'
import SelectDropdown from "react-native-select-dropdown";

// for dropdown
const DSTINHTRANG = ['Tất cả tình trạng', 'Trong bờ', 'Ngoài biển']
const DSHANDANGKIEM = ['Tất cả', 'Hết hạn', 'Gần hết hạn', 'Còn hạn']

const DANHSACHTAUCA = [
    {
        tentauca: '06020 - Thái học 3',
        loaitau: 'Khai thác thúy sản',
        handangkiem: '12/04/2024',
        trangthai: 'Trong bờ',
        noidung: 'Phan Văn Tiến, CMND: , SDT: 0984042497, Địa chỉ: k1, Xã Long Đức, Thành phố Trà Vinh, Tỉnh Trà Vinh'
    },
    {
        tentauca: '06776 - Thái học 1',
        loaitau: 'Khai thác thúy sản',
        handangkiem: '12/11/2024',
        trangthai: 'Ngoài biển',
        noidung: 'Phan Văn Tiến, CMND: , SDT: 0984042497, Địa chỉ: k1, Xã Long Đức, Thành phố Trà Vinh, Tỉnh Trà Vinh'
    },
    {
        tentauca: '06811 - Thái học 2',
        loaitau: 'Khai thác thúy sản',
        handangkiem: '20/04/2024',
        trangthai: 'Trong bờ',
        noidung: 'Phan Văn Tiến, CMND: , SDT: 0984042497, Địa chỉ: k1, Xã Long Đức, Thành phố Trà Vinh, Tỉnh Trà Vinh'
    },
]

const Item = ({ item, navigation, color }) => (
    <TouchableOpacity
        onPress={() => navigation.navigate('ChiTietTauCa')}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 15, paddingHorizontal: 10 }}>
            <View style={{ flexDirection: 'row', flex: 1 }}>
                <Image source={icons.tau} style={{ height: 40, width: 40, marginRight: 10 }} />
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black', marginRight: 5 }}>{item.tentauca}</Text>
                        {item.trangthai === 'Trong bờ' ? <TrongBo /> : <NgoaiBien />}
                    </View>
                    <Text>{item.noidung}</Text>
                    <Text style={{ color: color }}>Hạn đăng kiểm: {item.handangkiem}</Text>

                </View>
            </View>
            <Image source={icons.back} style={{ tintColor: '#828282', height: 12, width: 12, transform: [{ scaleX: -1 }] }} />
        </View>
        <View style={{ borderBottomWidth: 1, borderBottomColor: '#D6D6D6', marginLeft: 10 }} />
    </TouchableOpacity>
)

const setColorPriority = (handangkiem) => {
    const limitDay = 7
    const toDay = moment().format('DD-MM-YYYY')
    const soNgayChenhLech = moment(handangkiem, 'DD-MM-YYYY').diff(moment(toDay, 'DD-MM-YYYY'), 'days');
    if (soNgayChenhLech > limitDay)
        return '#ADADAD'; //xám
    else if (soNgayChenhLech <= limitDay && soNgayChenhLech >= 0)
        return '#FF820F'; //vàng
    else
        return '#F62825'; //đỏ
}

const setPriority = (handangkiem) => {
    const limitDay = 7
    const toDay = moment().format('DD-MM-YYYY')
    const soNgayChenhLech = moment(handangkiem, 'DD-MM-YYYY').diff(moment(toDay, 'DD-MM-YYYY'), 'days');
    if (soNgayChenhLech > limitDay)
        return 'Còn hạn';
    else if (soNgayChenhLech <= limitDay && soNgayChenhLech >= 0)
        return 'Gần hết hạn';
    else
        return 'Hết hạn';
}

function CBDanhSachTauCaScreen({ navigation, route }) {
    const [dataFlatList, setDataFlatList] = useState(DANHSACHTAUCA)
    const [showSearchBar, setShowSeachBar] = useState(false)
    const [tinhTrangDuyet, setTinhTrangDuyet] = useState('Tất cả tình trạng')
    const [hanDangKiem, setHanDangKiem] = useState('Tất cả')
    const [searchKeyWord, setSearchKeyWord] = useState('')

    //set new DATA
    useEffect(() => {
        setDataFlatList(DANHSACHTAUCA.filter(item =>
            item.tentauca.toLowerCase().includes(searchKeyWord.toLowerCase()) &&
            (tinhTrangDuyet === 'Tất cả tình trạng' || item.trangthai === tinhTrangDuyet) &&
            (hanDangKiem === 'Tất cả' || setPriority(item.handangkiem) === hanDangKiem)
        ));
    }, [searchKeyWord, tinhTrangDuyet, hanDangKiem])

    //get DATA
    useEffect(() => {
        if (route.params?.tinhtrangduyet && route.params?.handangkiem) {
            setTinhTrangDuyet(route.params?.tinhtrangduyet)
            setHanDangKiem(route.params?.handangkiem)
            console.log(route.params?.tinhtrangduyet + ' và ' + route.params?.handangkiem)
        }
    }, [route.params?.tinhtrangduyet, route.params?.handangkiem]);

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
                    !showSearchBar && (
                        <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 16 }}>Danh sách tàu cá</Text>
                    )
                }
                {
                    showSearchBar && (
                        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, borderRadius: 17, height: 30, backgroundColor: '#7963FF', paddingLeft: 8, paddingRight: 21, paddingVertical: 9, }}>
                            <Image source={icons.search} style={{ height: 18, width: 18, tintColor: 'white' }} />
                            <TextInput style={{ flex: 1, height: 40, color: 'white' }} placeholder="Nhập đăng ký tàu, CMND/CCCD" placeholderTextColor={'white'}
                                onChangeText={(curtext) => setSearchKeyWord(curtext)}
                                value={searchKeyWord}
                            />
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

            {/* fillter */}
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
                            defaultValue={tinhTrangDuyet}
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
                            data={DSHANDANGKIEM}
                            defaultValue={hanDangKiem}
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
            <FlatList
                data={dataFlatList.sort((a, b) => {
                    return moment(a.handangkiem, 'DD-MM-YYYY').diff(moment(b.handangkiem, 'DD-MM-YYYY'), 'days')
                })}
                renderItem={({ item, index }) => (
                    <Item item={item} navigation={navigation} color={setColorPriority(item.handangkiem)} />
                )}
            >
            </FlatList>

        </View >
    )
}

export default CBDanhSachTauCaScreen