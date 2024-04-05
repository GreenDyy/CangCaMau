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

dataImage = [images.xb1, images.xb2, images.xb3, images.xb3, images.xb3, images.xb3]

function NgoaiBienScreen({ navigation }) {
    const [thuGon, setThuGon] = useState(false)
    const [xacNhanXuatBen, setXacNhanXuatBen] = useState(false)

    return (
        <View style={{ flex: 1, paddingHorizontal: 12 }}>
            {/* header */}
            <StatusBar barStyle={"dark-content"} backgroundColor={'#F5F5F5'} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5, marginBottom: 17 }}>
                <TouchableOpacity>
                    <Image source={icons.back} style={{ height: 20, width: 20, tintColor: 'black' }} />
                </TouchableOpacity>

                <Text style={styles.title}>06812 - Rạng Đông 1</Text>

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
                                <Text style={styles.title}>06812 - Rạng Đông 1</Text>
                                <Text style={styles.trangthai}>Ngoài biển</Text>
                            </View>
                            <Text style={styles.text}>Loại: Khai thác thúy sản</Text>
                            <Text style={styles.text}>Hạn đăng kiểm: 12/11/2022	</Text>
                        </View>
                    </View>

                    <Image source={icons.back} style={styles.backright} />

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
                {/* Thông tin xuất bến------------------------------------------------------------------------------------- */}
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}
                    onPress={() => setThuGon(!thuGon)}>
                    <Text style={{ color: '#005F94', fontSize: 16, fontWeight: 'bold', marginTop: 20 }}>I. THÔNG TIN XUẤT BẾN</Text>
                    <Image source={icons.fill} style={{ width: 8, height: 6, marginLeft: 5, marginTop: 21 }} />
                </TouchableOpacity>
                {
                    !thuGon && (
                        <View>
                            {/* Vị trì */}
                            <Text style={styles.type}>Vị Trí</Text>
                            <View style={styles.childContainer}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Image source={icons.bendemo} style={styles.imagesquare} />

                                    <View>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={styles.title}>Bến Đá Bạc</Text>
                                        </View>
                                        <Text style={styles.text}>Khóm 6B, Trần Văn Thời, Cà Mau</Text>
                                    </View>
                                </View>
                            </View>



                            {/* Thuyền viên */}
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={styles.type}>Thuyền viên (3)</Text>
                                <Image source={icons.fill} style={{ width: 8, height: 6, marginLeft: 5, marginTop: 8 }} />
                            </View>



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

                            <View style={{ marginTop: 20, marginBottom: 10 }}>
                                <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#459AC9', borderRadius: 6, justifyContent: 'space-between', paddingHorizontal: 10, paddingVertical: 12 }}
                                onPress={()=>navigation.navigate('PhieuThongBaoXuatBen')}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Image source={icons.docs} style={{ width: 15, height: 20 }} />
                                        <Text style={{ color: 'white', fontWeight: 'bold', marginLeft: 6 }}>Phiếu thông báo tàu cá xuất cảng</Text>
                                    </View>
                                    <Image source={icons.back} style={{ tintColor: 'white', height: 12, width: 12, alignSelf: 'center', transform: [{ scaleX: -1 }] }} />
                                </TouchableOpacity>

                                <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#459AC9', borderRadius: 6, justifyContent: 'space-between', paddingHorizontal: 10, paddingVertical: 12, marginTop: 5 }}
                                onPress={()=>navigation.navigate('BienBanKiemTraTauXuatBen')}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Image source={icons.docs} style={{ width: 15, height: 20 }} />
                                        <Text style={{ color: 'white', fontWeight: 'bold', marginLeft: 6 }}>Biên bảng xuất bến</Text>
                                    </View>
                                    <Image source={icons.back} style={{ tintColor: 'white', height: 12, width: 12, alignSelf: 'center', transform: [{ scaleX: -1 }] }} />
                                </TouchableOpacity>
                            </View>


                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={styles.type}>Thông tin xuất bến</Text>
                                <Image source={icons.fill} style={{ width: 8, height: 6, marginLeft: 5, marginTop: 8 }} />
                            </View>

                            <View>
                                <View style={[styles.childContainer, { flexDirection: 'column' }]}>
                                    <Text style={{ fontSize: 12 }}>Thời gian</Text>
                                    <TextInput style={{ flex: 1, borderBottomWidth: 1, borderBottomColor: '#D6D6D6' }} />

                                    <Text style={{ fontSize: 12 }}>Thời gian</Text>
                                    <TextInput style={{ flex: 1, borderBottomWidth: 1, borderBottomColor: '#D6D6D6' }} />

                                    <Text style={{ fontSize: 12 }}>Thời gian</Text>
                                    <TextInput style={{ flex: 1, borderBottomWidth: 1, borderBottomColor: '#D6D6D6' }} />

                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
                                        <TouchableOpacity style={xacNhanXuatBen ? styles.touchableCheckBoxChecked : styles.touchableCheckBox}
                                            onPress={() => setXacNhanXuatBen(!xacNhanXuatBen)}
                                        >
                                            {
                                                xacNhanXuatBen && <Image source={icons.check} resizeMode="contain" style={{ height: 10, width: 10, tintColor: 'white' }} />

                                            }

                                        </TouchableOpacity>
                                        <Text style={{ color: 'black', fontSize: 16 }}>Xác nhận xuất bên</Text>
                                    </View>
                                </View>

                                {/* Trạm trưởng */}
                                <View style={{
                                    borderRadius: 6,
                                    paddingTop: 20,
                                    paddingBottom: 15,
                                    backgroundColor: 'white',
                                    justifyContent: 'space-between',
                                    marginTop: 5
                                }}>
                                    {/* ô trắng 1 */}
                                    <TouchableOpacity style={styles.childContainer}>
                                        <View>
                                            <Text style={{ color: '#005F94' }}>Trạm trưởng</Text>
                                            <View style={{ flexDirection: 'row', width: 280 }}>
                                                <Image source={icons.avatartv3} style={styles.imagecircle} />

                                                <View>
                                                    <Text style={styles.title}>Lê Hoàng Khánh</Text>
                                                    <Text style={[styles.text, {}]}>Đội trưởng đội Rạch Gốc</Text>
                                                </View>

                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                    <View style={{ borderBottomWidth: 1, borderBottomColor: '#D6D6D6', marginHorizontal: 12 }} />

                                    {/* ô trắng 1 */}
                                    <TouchableOpacity style={styles.childContainer}>
                                        <View>
                                            <Text style={{ color: '#005F94' }}>Trạm trưởng</Text>
                                            <View style={{ flexDirection: 'row', width: 280 }}>
                                                <Image source={icons.avatartv3} style={styles.imagecircle} />

                                                <View>
                                                    <Text style={styles.title}>Lê Hoàng Khánh</Text>
                                                    <Text style={[styles.text, {}]}>Đội trưởng đội Rạch Gốc</Text>
                                                </View>

                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                    <View style={{ borderBottomWidth: 1, borderBottomColor: '#D6D6D6', marginHorizontal: 12 }} />

                                    {/* ô trắng 1 */}
                                    <TouchableOpacity style={styles.childContainer}>
                                        <View>
                                            <Text style={{ color: '#005F94' }}>Trạm trưởng</Text>
                                            <View style={{ flexDirection: 'row', width: 280 }}>
                                                <Image source={icons.avatartv3} style={styles.imagecircle} />

                                                <View>
                                                    <Text style={styles.title}>Lê Hoàng Khánh</Text>
                                                    <Text style={[styles.text, {}]}>Đội trưởng đội Rạch Gốc</Text>
                                                </View>

                                            </View>
                                        </View>
                                    </TouchableOpacity>

                                </View>

                                {/*Hình ảnh xuất bến */}
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={styles.type}>Hình ảnh xuất bến</Text>
                                    <Image source={icons.fill} style={{ width: 8, height: 6, marginLeft: 5, marginTop: 8 }} />
                                </View>

                                {/* hỉnh */}


                                <ScrollView style={{ flexDirection: 'row' }}
                                    horizontal
                                    contentContainerStyle={{}}>
                                    {
                                        dataImage.map((item, index) => (
                                            <TouchableOpacity key={index} style={{padding: 3}}>
                                                <Image key={index} source={item} style={{ width: 110, height: 70, borderRadius: 2 }} resizeMode="contain" />
                                            </TouchableOpacity>
                                        ))
                                    }

                                </ScrollView>

                            </View>
                            <TouchableOpacity style={{ backgroundColor: '#2B13C0', borderRadius: 6, paddingVertical: 10, alignItems: 'center', marginTop: 20 }}
                                onPress={() => navigation.navigate('YeuCauNhapBen')}>
                                <Text style={{ color: 'white', fontWeight: 'bold' }}>Nhập bến</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }

            </ScrollView>
            {
                thuGon &&
                <TouchableOpacity style={{ backgroundColor: '#2B13C0', borderRadius: 6, paddingVertical: 10, alignItems: 'center', marginTop: 20 }}
                    onPress={() => navigation.navigate('YeuCauNhapBen')}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Nhập bến</Text>
                </TouchableOpacity>
            }

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
        transform: [{ scaleX: -1 }]
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

export default NgoaiBienScreen