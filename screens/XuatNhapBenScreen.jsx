import React, { useState } from "react";
import {
    View,
    TouchableOpacity,
    Text,
    Image,
    StatusBar,
    ScrollView
} from 'react-native'
import { icons, images } from '../constants/manager'

const tabs = ['Danh sách', 'Lịch sử yêu cầu']

function XuatNhapBenScreen({ navigation }) {
    const [typeTab, setTypeTab] = useState('Danh sách')
    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor={'#459AC9'} barStyle={'light-content'} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, backgroundColor: '#459AC9' }}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}>
                    <Image source={icons.back} style={{ tintColor: 'gray', height: 20, width: 20, tintColor: 'white' }} />
                </TouchableOpacity>
                <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 16 }}>Thông tin xuất nhập bến</Text>
                {/* View này để căn chỉnh thôi  o-o-o */}
                <View style={{ width: 20, height: 20 }}></View>
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
                    <TouchableOpacity style={{ position: 'absolute', right: 10, top: -70 }}>
                        <Image source={icons.search} style={{ height: 18, width: 18, tintColor: 'white' }} />
                    </TouchableOpacity>

                    <ScrollView>

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
