import React, { useState } from "react";
import {
    View,
    TouchableOpacity,
    Text,
    Image,
    StatusBar,
    ScrollView,
    TextInput,
    FlatList,
    Modal,
    StyleSheet
} from 'react-native'
import { icons, images } from '../constants/manager'
import MyTextInput from "../components/mytextinput";
import MyCheckBox from "../components/mycheckbox";
import SelectDropdown from 'react-native-select-dropdown'

const listquan = ['Bình Chánh', 'Bình Tân', 'Tân Phú']

function ChuSoHuuVaThuyenVienScreen({ navigation }) {
    const [showPopUp, setShowPopUp] = useState(false)
    const [isSelect, setIsSelect] = useState(false)

    return (
        <View style={{ flex: 1, marginHorizontal: 12, marginTop: 5 }}>
            {/* header */}
            <StatusBar backgroundColor={'#F5F5F5'} barStyle={'dark-content'} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={icons.back} style={{ width: 20, height: 20, tintColor: '#333333' }} />
                </TouchableOpacity>
                <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold', width: 190, textAlign: 'center' }}>Chủ sở hữu & thuyền viên</Text>
                <View style={{ height: 10, width: 30 }} />
            </View>
            {/* body */}
            <ScrollView
                contentContainerStyle={{ paddingBottom: 10 }}
            >
                <View>
                    {/* Chủ sở hữu */}
                    <Text style={styles.type}>Chủ sở hữu</Text>
                    <TouchableOpacity style={styles.childContainer}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 280 }}>
                            <Image source={icons.avatarchard} style={styles.imagecircle} />
                            <View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.title}>Nguyễn Văn B</Text>
                                    <Text style={styles.role}>Chủ tàu</Text>
                                </View>
                                <Text style={styles.phone}>090 0000 090</Text>
                                <Text style={[styles.text, {}]}>Sào Lưới, Xã Khánh Bình Tây Bắc, Huyện Trần Văn Thời, Tỉnh Cà Mau</Text>
                            </View>
                        </View>
                        <Image source={icons.back} style={styles.backright} />
                    </TouchableOpacity>

                    {/* Thuyền viên */}
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.type}>Thuyền viên (3)</Text>
                        <Image source={icons.fill} style={{ width: 8, height: 6, marginLeft: 5, marginTop: 16 }} />
                    </View>

                    {/* nút thêm thuyền viên */}
                    <TouchableOpacity style={{ backgroundColor: '#459AC9', borderRadius: 6, paddingVertical: 10, alignItems: 'center', marginBottom: 5 }}
                    onPress={()=>setShowPopUp(true)}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Thêm thuyền viên</Text>
                    </TouchableOpacity>

                    {/* ô trắng 1 */}
                    <TouchableOpacity style={styles.childContainer}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 280 }}>
                            <Image source={icons.avatartv1} style={styles.imagecircle} />

                            <View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.title}>Luffy</Text>
                                    <Text style={styles.role}>Thuyền Trưởng</Text>
                                </View>

                                <Text style={styles.phone}>090 0000 090</Text>
                                <Text style={[styles.text, {}]}>Sào Lưới, Xã Khánh Bình Tây Bắc, Huyện Trần Văn Thời, Tỉnh Cà Mau</Text>
                            </View>
                        </View>
                        <Image source={icons.deletered} style={{ height: 16, width: 16 }} />

                    </TouchableOpacity>
                    <View style={{ borderBottomWidth: 1, borderBottomColor: '#D6D6D6', marginLeft: 12 }} />
                    {/* ô trắng 1 */}
                    <TouchableOpacity style={styles.childContainer}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 280 }}>
                            <Image source={icons.avatartv2} style={styles.imagecircle} />

                            <View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.title}>Sanji</Text>
                                    <Text style={styles.role}>Thuyền Viên</Text>
                                </View>

                                <Text style={styles.phone}>090 0000 090</Text>
                                <Text style={[styles.text, {}]}>Sào Lưới, Xã Khánh Bình Tây Bắc, Huyện Trần Văn Thời, Tỉnh Cà Mau</Text>
                            </View>
                        </View>

                        <Image source={icons.deletered} style={{ height: 16, width: 16 }} />

                    </TouchableOpacity>
                    <View style={{ borderBottomWidth: 1, borderBottomColor: '#D6D6D6', marginLeft: 12 }} />
                    {/* ô trắng 1 */}
                    <TouchableOpacity style={styles.childContainer}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 280 }}>
                            <Image source={icons.avatartv3} style={styles.imagecircle} />

                            <View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.title}>Ksante</Text>
                                    <Text style={styles.role}>Tổ Máy</Text>
                                </View>

                                <Text style={styles.phone}>090 0000 090</Text>
                                <Text style={[styles.text, {}]}>Sào Lưới, Xã Khánh Bình Tây Bắc, Huyện Trần Văn Thời, Tỉnh Cà Mau</Text>
                            </View>
                        </View>

                        <Image source={icons.deletered} style={{ height: 16, width: 16 }} />

                    </TouchableOpacity>
                </View>

            </ScrollView>
            {/* footer */}
            <TouchableOpacity style={{ backgroundColor: 'white', borderRadius: 6, paddingVertical: 10, width: 173, alignSelf: 'center', alignItems: 'center', position: 'absolute', bottom: 37 }}
                onPress={() => navigation.navigate('ThongTinChiTiet')}>
                <Text style={{ color: '#005F94', fontWeight: 'bold' }}>Tiếp tục</Text>
            </TouchableOpacity>

            {/* Popup hiện ds thuyền viên có sẳn */}

            <Modal
                visible={showPopUp}
                transparent={true}
                animationType="slide"
            >
                <View style={{ flex: 1, backgroundColor: '#999999' }}>
                    <View style={{ flex: 1, backgroundColor: 'white', marginTop: 92, borderRadius: 10 }}>
                        {/* header */}
                        <StatusBar barStyle={"dark-content"} backgroundColor={'#F5F5F5'} />
                        <View style={{ marginTop: 20, marginBottom: 20, paddingHorizontal: 12 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <TouchableOpacity onPress={() => setShowPopUp(false)}>
                                    <Image source={icons.back} style={{ height: 20, width: 20, tintColor: 'black' }} />
                                </TouchableOpacity>

                                <Text style={styles.title}>Thông tin thuyền viên (5)</Text>

                                <View style={{ width: 20, height: 20 }} />
                            </View>
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            borderRadius: 6,
                            backgroundColor: '#999999',
                            marginHorizontal: 12,
                            paddingHorizontal: 10
                        }}>
                            <Image source={icons.search} style={{ height: 20, width: 20, tintColor: 'black' }} resizeMode="contain" />
                            <TextInput placeholder="Nhập nội dung tìm kiếm" />
                        </View>

                        <View style={{ borderBottomWidth: 1, borderBottomColor: '#D6D6D6', marginLeft: 12, marginTop: 10 }} />

                        <ScrollView style={{ backgroundColor: 'white' }}
                            showsVerticalScrollIndicator={false}>
                            {/* list các thuyền viên có sẳn */}

                            <View>

                                <View>
                                    <View style={styles.childContainer}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <View style={{ width: 16, height: 16, marginRight: 5, marginTop: 13 }}>
                                                    <MyCheckBox state={isSelect} setState={() => { setIsSelect(!isSelect) }} />
                                                </View>
                                                <Image source={icons.avatartv2} style={styles.imagecircle} />
                                            </View>


                                            <View>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text style={styles.title}>Sanji</Text>
                                                    <Text style={styles.role}>Thuyền Viên</Text>
                                                </View>

                                                <Text style={styles.phone}>090 0000 090</Text>
                                                <Text style={[styles.text, { width: '80%' }]}>Sào Lưới, Xã Khánh Bình Tây Bắc, Huyện Trần Văn Thời, Tỉnh Cà Mau</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{ borderBottomWidth: 1, borderBottomColor: '#D6D6D6', marginLeft: 12 }} />
                                </View>

                                <View>
                                    <View style={styles.childContainer}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <View style={{ width: 16, height: 16, marginRight: 5, marginTop: 13 }}>
                                                    <MyCheckBox state={isSelect} setState={() => { setIsSelect(!isSelect) }} />
                                                </View>
                                                <Image source={icons.avatartv2} style={styles.imagecircle} />
                                            </View>


                                            <View>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text style={styles.title}>Sanji</Text>
                                                    <Text style={styles.role}>Thuyền Viên</Text>
                                                </View>

                                                <Text style={styles.phone}>090 0000 090</Text>
                                                <Text style={[styles.text, { width: '80%' }]}>Sào Lưới, Xã Khánh Bình Tây Bắc, Huyện Trần Văn Thời, Tỉnh Cà Mau</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{ borderBottomWidth: 1, borderBottomColor: '#D6D6D6', marginLeft: 12 }} />
                                </View>

                                <View>
                                    <View style={styles.childContainer}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <View style={{ width: 16, height: 16, marginRight: 5, marginTop: 13 }}>
                                                    <MyCheckBox state={isSelect} setState={() => { setIsSelect(!isSelect) }} />
                                                </View>
                                                <Image source={icons.avatartv2} style={styles.imagecircle} />
                                            </View>


                                            <View>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text style={styles.title}>Sanji</Text>
                                                    <Text style={styles.role}>Thuyền Viên</Text>
                                                </View>

                                                <Text style={styles.phone}>090 0000 090</Text>
                                                <Text style={[styles.text, { width: '80%' }]}>Sào Lưới, Xã Khánh Bình Tây Bắc, Huyện Trần Văn Thời, Tỉnh Cà Mau</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{ borderBottomWidth: 1, borderBottomColor: '#D6D6D6', marginLeft: 12 }} />
                                </View>

                                <View>
                                    <View style={styles.childContainer}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <View style={{ width: 16, height: 16, marginRight: 5, marginTop: 13 }}>
                                                    <MyCheckBox state={isSelect} setState={() => { setIsSelect(!isSelect) }} />
                                                </View>
                                                <Image source={icons.avatartv2} style={styles.imagecircle} />
                                            </View>


                                            <View>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text style={styles.title}>Sanji</Text>
                                                    <Text style={styles.role}>Thuyền Viên</Text>
                                                </View>

                                                <Text style={styles.phone}>090 0000 090</Text>
                                                <Text style={[styles.text, { width: '80%' }]}>Sào Lưới, Xã Khánh Bình Tây Bắc, Huyện Trần Văn Thời, Tỉnh Cà Mau</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{ borderBottomWidth: 1, borderBottomColor: '#D6D6D6', marginLeft: 12 }} />
                                </View>

                                <View>
                                    <View style={styles.childContainer}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <View style={{ width: 16, height: 16, marginRight: 5, marginTop: 13 }}>
                                                    <MyCheckBox state={isSelect} setState={() => { setIsSelect(!isSelect) }} />
                                                </View>
                                                <Image source={icons.avatartv2} style={styles.imagecircle} />
                                            </View>


                                            <View>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text style={styles.title}>Sanji</Text>
                                                    <Text style={styles.role}>Thuyền Viên</Text>
                                                </View>

                                                <Text style={styles.phone}>090 0000 090</Text>
                                                <Text style={[styles.text, { width: '80%' }]}>Sào Lưới, Xã Khánh Bình Tây Bắc, Huyện Trần Văn Thời, Tỉnh Cà Mau</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{ borderBottomWidth: 1, borderBottomColor: '#D6D6D6', marginLeft: 12 }} />
                                </View>


                            </View>

                            <TouchableOpacity style={{ backgroundColor: '#005F94', borderRadius: 8, marginTop: 30, marginBottom: 25, paddingVertical: 10, paddingHorizontal: 25, alignSelf: 'center' }}>
                                <Text style={{ color: 'white', fontWeight: 'bold' }}>Thêm thuyền viên</Text>
                            </TouchableOpacity>

                        </ScrollView>

                    </View>

                </View>

            </Modal>

        </View>
    )
}

const styles = StyleSheet.create({
    childContainer: {
        borderRadius: 6,
        paddingVertical: 15,
        paddingHorizontal: 12,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    imagesquare: {
        height: 40, width: 40,
        borderRadius: 4,
        marginRight: 10,
    },
    imagecircle: {
        height: 40, width: 40,
        borderRadius: 999,
        marginRight: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },
    text: {
        fontSize: 12,
    },
    type: {
        fontSize: 16,
        color: '#005F94',
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 5,
    },
    trangthai: {
        backgroundColor: 'orange',
        fontSize: 10,
        alignSelf: 'center',
        borderRadius: 8,
        marginLeft: 5,
        paddingHorizontal: 8,
        color: 'white'
    },
    role: {
        color: '#005F94',
        fontSize: 12,
        marginLeft: 5,
        alignSelf: 'center'
    },
    backright: {
        width: 12,
        height: 12,
        tintColor: 'gray',
        transform: [{ scaleX: -1 }]
    },
    phone: {
        color: 'black',
    }
})

export default ChuSoHuuVaThuyenVienScreen