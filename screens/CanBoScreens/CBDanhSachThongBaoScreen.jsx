import React, { useState } from "react";
import {
    View,
    TouchableOpacity,
    Text,
    Image,
    StatusBar,
    ScrollView,
} from 'react-native'
import { icons, images } from '../../constants/manager'

const tabs = ['Danh sách', 'Lịch sử tạo']
const DANHSACH = [
    {
        title: 'Cảnh báo',
        tinhtrang: 'Ngoài biển',
        thoigiantainan: '20/10/2021 10:31',
        ngaygui: '10/10/2022',
        nguyennhan: '#ADADAD',
        filedinhkem: ['CanhBao.pdf', 'Anh.jpg']
    },
    {
        title: 'Cảnh báo',
        tinhtrang: 'Ngoài biển',
        thoigiantainan: '20/10/2021 10:31',
        ngaygui: '10/10/2022',
        nguyennhan: '#ADADAD',
        filedinhkem: ['Anh.jpg']
    },

]
const Item = ({ item, navigation }) =>
(
    <TouchableOpacity style={{ flexDirection: 'row', paddingVertical: 15, marginLeft: 12, paddingRight: 12, borderBottomWidth: 1, borderBlockColor: '#D6D6D6' }}
        onPress={() => navigation.navigate('CBChiTietThongBao')}>
        <Image source={icons.warning} style={{ height: 40, width: 40 }} resizeMode="contain" />
        <View style={{ flex: 1, marginLeft: 10 }}>
            {/* dòng 1 */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flex: 1 }}>
                <Text style={{ fontSize: 16, fontWeight: 700, color: 'black' }}>{item.title}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text>{item.ngaygui}</Text>
                    <Image source={icons.back} style={{ width: 12, height: 12, tintColor: 'gray', transform: [{ scaleX: -1 }] }} />
                </View>
            </View>
            {/* dòng 2 */}
            <View style={{ flexDirection: 'row', }}>
                <Text style={{ fontSize: 12, color: 'black' }}>Người tạo: </Text>
                <Image source={icons.avatartv1} style={{ width: 20, height: 20 }} resizeMode="contain" />
            </View>
            <Text style={{ fontSize: 12, color: 'black', }}>Xem chi tiết cảnh báo ngày 10 tháng 10 2022</Text>
            {/* dòng 3 */}
            <View style={{ flexDirection: 'row' }}>
                {
                    item.filedinhkem.map((file) => (    
                        <TouchableOpacity>
                            <Text style={{ fontSize: 12, color: '#3345CB', marginRight: 10 }}>{file}</Text>
                        </TouchableOpacity>

                    ))
                }

            </View>


        </View>
    </TouchableOpacity>
)


function CBDanhSachThongBaoScreen({ navigation }) {
    const [typeTab, setTypeTab] = useState('Danh sách')

    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor={'#583CFF'} barStyle={'light-content'} />
            {/* header */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#583CFF', paddingTop: 5, paddingBottom: 17, paddingHorizontal: 12, height: 41 }}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}>
                    <Image source={icons.back} style={{ tintColor: 'gray', height: 20, width: 20, tintColor: 'white' }} />
                </TouchableOpacity>
                <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 16 }}>{typeTab[0] ? 'Thông báo' : 'Thông báo'}</Text>
                <View style={{ height: 18, width: 18 }} />
            </View>

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
                            // LICHSUTAO.map((item, index) => (
                            //     <ItemLichSu key={index} item={item} navigation={navigation} />

                            // ))
                        }
                    </ScrollView>
                </View>


            )}
            <TouchableOpacity style={{ position: 'absolute', bottom: 13, right: 12 }}
                onPress={() => navigation.navigate('ThemMoiThongBao')}>
                <Image source={icons.add} style={{ width: 56, height: 56 }} resizeMode="contain" />
            </TouchableOpacity>
        </View>
    )
}

export default CBDanhSachThongBaoScreen
