import React, { useState } from "react";
import {
    View,
    TouchableOpacity,
    Text,
    Image,
    StatusBar,
    ScrollView,
    TextInput
} from 'react-native'
import { icons, images } from '../constants/manager'

const tabs = ['Danh sách', 'Lịch sử yêu cầu']

function XuatNhapBenScreen({ navigation }) {
    const [typeTab, setTypeTab] = useState('Danh sách')
    const [showSearchBar, setShowSeachBar] = useState(false)
    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor={'#459AC9'} barStyle={'light-content'} />
            {/* header */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#459AC9',paddingTop: 5, paddingBottom: 17, paddingHorizontal: 12, height: 41 }}>
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

            {typeTab === 'Danh sách' && (
                <ScrollView style={{ flex: 1 }}>

                    <TouchableOpacity style={{ margin: 10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: "space-between", flex: 1, alignItems: 'center' }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>06283 - Thái học 3</Text>
                            <TouchableOpacity>
                                <Image source={icons.forward} style={{ height: 12, width: 12, marginLeft: 3 }} />
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', marginTop: 5 }}>
                            <Text style={{ fontSize: 10, color: 'white', backgroundColor: '#FD397A', borderRadius: 2, paddingHorizontal: 10 }}>Xuất bến</Text>
                            <Text style={{ fontSize: 10, color: 'white', backgroundColor: '#0ABB87', borderRadius: 10, paddingHorizontal: 10, marginLeft: 5 }}>Chờ tiếp nhận yêu cầu</Text>
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 5 }}>
                            <View style={{ width: '50%', flexDirection: 'row' }}>
                                <Text style={{ fontSize: 12 }}>Xuất bến: </Text>
                                <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'black' }}>--</Text>
                            </View>
                            <View style={{ width: '50%', flexDirection: 'row' }}>
                                <Text style={{ fontSize: 12 }}>Nhập bến: </Text>
                                <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'black' }}>14:10 18/10/2022</Text>
                            </View>
                        </View>

                        <View style={{ marginTop: 5 }}>
                            <Text style={{ fontSize: 12 }}>
                                Huỳnh Khánh Duy, CMND: 2902903903, SDT: 020303922, Địa chỉ: dsaakdakdaskdsadksa
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <View style={{ borderBottomWidth: 0.5, marginLeft: 10 }} />

                    <TouchableOpacity style={{ margin: 10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: "space-between", flex: 1, alignItems: 'center' }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>06283 - Thái học 3</Text>
                            <TouchableOpacity>
                                <Image source={icons.forward} style={{ height: 12, width: 12, marginLeft: 3 }} />
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', marginTop: 5 }}>
                            <Text style={{ fontSize: 10, color: 'white', backgroundColor: '#FF820F', borderRadius: 10, paddingHorizontal: 10 }}>Trong bờ</Text>
                            <Text style={{ fontSize: 10, color: 'white', backgroundColor: '#0ABB87', borderRadius: 10, paddingHorizontal: 10, marginLeft: 5 }}>Chờ tiếp nhận yêu cầu</Text>
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 5 }}>
                            <View style={{ width: '50%' }}>
                                <Text style={{ fontSize: 12 }}>Xuất bến: --</Text>
                            </View>
                            <View style={{ width: '50%' }}>
                                <Text style={{ fontSize: 12 }}>Nhập bến: --</Text>
                            </View>
                        </View>

                        <View style={{ marginTop: 5 }}>
                            <Text style={{ fontSize: 12 }}>
                                Huỳnh Khánh Duy, CMND: 2902903903, SDT: 020303922, Địa chỉ: dsaakdakdaskdsadksa
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <View style={{ borderBottomWidth: 0.5, marginLeft: 10 }} />
                </ScrollView>
            )}
            {typeTab === 'Lịch sử yêu cầu' && (
                <View style={{ flex: 1 }}>
                    {
                        showSearchBar && (
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity style={{ borderWidth: 1, height: 25, width: 48, borderRadius: 4, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 12 }}
                                    onPress={() => {
                                        navigation.navigate('LocKetQua')
                                    }}>
                                    <Image source={icons.filter} style={{ width: 14, height: 14 }} />
                                    <Text style={{ color: 'black', fontSize: 12 }}>Lọc</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={{ borderWidth: 1, height: 25, width: 116, borderRadius: 4, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 5 }}>
                                    <Text style={{ color: 'black', fontSize: 12, marginRight: 3 }}>Tất cả tình trạng</Text>
                                    <Image source={icons.dropdown} style={{ width: 10, height: 6 }} />
                                </TouchableOpacity>

                                <TouchableOpacity style={{ borderWidth: 1, height: 25, width: 108, borderRadius: 4, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 5 }}>
                                    <Text style={{ color: 'black', fontSize: 12, marginRight: 3 }}>Tất cả thao tác</Text>
                                    <Image source={icons.dropdown} style={{ width: 10, height: 6 }} />
                                </TouchableOpacity>

                                <TouchableOpacity style={{ paddingHorizontal: 5, height: 25, borderRadius: 4, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 5, backgroundColor: '#D6D6D6' }}>
                                    <Image source={icons.calendar} style={{ width: 14, height: 14 }} resizeMode="contain" />
                                    <Text style={{ color: 'black', fontSize: 12 }}>Thời gian</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }


                    <ScrollView contentContainerStyle={{ paddingTop: 10 }}>
                        <View style={{ borderBottomWidth: 0.5, marginLeft: 10, borderColor: '#D6D6D6' }} />
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
