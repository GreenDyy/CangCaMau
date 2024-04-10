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
    Button,
} from 'react-native'
import { icons, images } from '../constants/manager'
import MyTextInput from "../components/mytextinput";
import { Calendar } from 'react-native-calendars';
import SelectDropdown from 'react-native-select-dropdown'
import MyCheckBox from "../components/mycheckbox";

function ThuyenVienScreen({ navigation, route }) {
    const [showPopUp, setShowPopUp] = useState(false)
    const [isSelect, setIsSelect] = useState(false)
    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor={'#459AC9'} barStyle={'light-content'} />
            {/* header */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#459AC9', paddingTop: 5, paddingBottom: 17, paddingHorizontal: 12, height: 41 }}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}>
                    <Image source={icons.back} style={{ tintColor: 'gray', height: 20, width: 20, tintColor: 'white' }} />
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, borderRadius: 17, height: 30, backgroundColor: '#6AAED4', paddingLeft: 8, paddingRight: 21, paddingVertical: 9 }}>
                    <Image source={icons.search} style={{ height: 18, width: 18, tintColor: 'white' }} />
                    <TextInput style={{ flex: 1, height: 40, color: 'white' }} placeholder="Nhập tên thuyền viên, CMND/CCCD..." placeholderTextColor={'white'} />
                </View>
            </View>
            {/* body */}
            <View>

            </View>
            {/* nút thêm */}
            <TouchableOpacity style={{ marginTop: 20, marginBottom: 10, marginHorizontal: 12, backgroundColor: '#459AC9', borderRadius: 6, paddingHorizontal: 120, paddingVertical: 12, alignItems: 'center' }}
                onPress={() => setShowPopUp(true)}>
                <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', width: 200 }}>Thêm thuyền viên</Text>
            </TouchableOpacity>
            {/* ds thuyền viên */}
            <ScrollView
                showsVerticalScrollIndicator={false}>
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
                    <Image source={icons.back} style={styles.backright} />

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

                    <Image source={icons.back} style={styles.backright} />

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
                    <Image source={icons.back} style={styles.backright} />
                </TouchableOpacity>
                <View style={{ borderBottomWidth: 1, borderBottomColor: '#D6D6D6', marginLeft: 12 }} />

            </ScrollView>

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
        marginTop: 10,
        marginBottom: 5,
    },
    trangthai: {
        backgroundColor: '#459AC9',
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
        transform: [{ scaleX: -1 }],
        marginTop: 3
    },
    phone: {
        color: 'black',
    },
    touchableCheckBox: {
        borderRadius: 4,
        borderWidth: 1,
        width: 15,
        height: 15,
        marginRight: 3,
        borderColor: '#005F94',
        justifyContent: 'center',
        alignItems: 'center'
    },

    touchableCheckBoxChecked: {
        borderRadius: 4,
        borderWidth: 1,
        width: 15,
        height: 15,
        marginRight: 3,
        borderColor: '#005F94',
        backgroundColor: '#005F94',
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default ThuyenVienScreen