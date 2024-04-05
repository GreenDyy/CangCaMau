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
} from 'react-native'

import { icons, images } from '../constants/manager'

function YeuCauNhapBenScreen({ navigation }) {
    const [showPopUp, setShowPopUp] = useState(false)

    return (
        <View style={{ flex: 1, paddingHorizontal: 12 }}>
            {/* header */}
            <StatusBar barStyle={"dark-content"} backgroundColor={'#F5F5F5'} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5, marginBottom: 17 }}>
                <TouchableOpacity>
                    <Image source={icons.back} style={{ height: 20, width: 20, tintColor: 'black' }} />
                </TouchableOpacity>

                <Text style={styles.title}>Yêu cầu nhập bến</Text>

                <View style={{ width: 20, height: 20 }} />
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 25 }}>
                {/* ô trắng 1 */}
                <View style={styles.childContainer}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Image source={icons.tau} style={styles.imagesquare} />

                        <View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.title}>06776 - Thái học 2</Text>
                                <Text style={styles.trangthai}>Trong bờ</Text>
                            </View>
                            <Text style={styles.text}>Loại: Khai thác thúy sản</Text>
                            <Text style={styles.text}>Hạn đăng kiểm: 12/11/2022	</Text>
                        </View>
                    </View>

                    <Image source={icons.back} style={styles.backright} />

                </View>

                {/* Vị trì */}
                <Text style={styles.type}>Vị trí nhập bến mong muốn</Text>
                <View style={styles.childContainer}>
                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1, alignItems:'center' }}>
                        <Text>- Chọn vị trí cảng -</Text>
                        <Image source={icons.fill} style={{width: 10, height: 6, tintColor:'black'}} resizeMode="contain"/>
                    </TouchableOpacity>
                </View>

                {/* Chủ sở hữu */}
                <Text style={styles.type}>Chủ sở hữu</Text>
                {/* ô trắng 1 */}
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
                <TouchableOpacity style={{ backgroundColor: '#459AC9', borderRadius: 6, paddingVertical: 10, alignItems: 'center', marginBottom: 5 }}>
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

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity style={{ backgroundColor: '#FFFFFF', borderRadius: 6, paddingVertical: 10, width: 165, alignItems: 'center', marginTop: 20 }}
                    >
                        <Text style={{ color: '#828282', fontWeight: 'bold' }}>Đóng</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ backgroundColor: '#3345CB', borderRadius: 6, paddingVertical: 10, width: 165, alignItems: 'center', marginTop: 20 }}
                        onPress={() => setShowPopUp(!showPopUp)}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Yêu cầu nhập bến</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            {/* popup xác nhận xuất bến */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={showPopUp}
                statusBarTranslucent={true}
            >
                <View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: '#454545' }}>

                    <View style={{ backgroundColor: 'white', borderTopEndRadius: 15, borderTopStartRadius: 15 }}>
                        <View style={{ paddingHorizontal: 12, paddingBottom: 37, paddingTop: 30 }}>
                            <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold', color: 'black' }}>Xác nhận xuất bến</Text>
                            <Text style={{ color: 'black', fontSize: 16, textAlign: 'center', marginTop: 20, marginBottom: 50 }}>
                                Sau khi yêu cầu được gửi, bạn sẽ không được chỉnh sửa thông tin trong yêu cầu, bạn có chắc chắn gửi đi hay không?
                            </Text>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <TouchableOpacity
                                    style={{ backgroundColor: '#FFFFFF', borderRadius: 6, paddingVertical: 10, width: 165, alignItems: 'center', marginTop: 20 }}
                                    onPress={() => setShowPopUp(false)}
                                >
                                    <Text style={{ color: '#828282', fontWeight: 'bold' }}>Đóng</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={{ backgroundColor: '#FD397A', borderRadius: 6, paddingVertical: 10, width: 165, alignItems: 'center', marginTop: 20 }}
                                    onPress={() => setShowPopUp(!showPopUp)}
                                >
                                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Xác nhận</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

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

export default YeuCauNhapBenScreen