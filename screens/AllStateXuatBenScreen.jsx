import React, { useState, useEffect } from "react";
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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { icons, images } from '../constants/manager'
import { XuatBen, NhapBen, TrongBo, NgoaiBien, ChoXacNhanNhapBen, ChoXacNhanXuatBen, DuocTiepNhan, TuChoi, ChoTiepNhanYeuCau, KhongDuocNhapBen, KhongDuocXuatBen } from '../components/status'
import MyTextInput from "../components/mytextinput";
dataImage = [images.xb1, images.xb2, images.xb3, images.xb3, images.xb3, images.xb3]

function AllStateXuatBenScreen({ navigation, route }) {
    // get data tu tu screen trước
    const { item } = route.params
    const [thuGonThongTinXuatBen, setThuGonThongTinXuatBen] = useState(false)
    const [thuGonThuyenVien, setThuGonThuyenVien] = useState(false)
    const [thuGonHinhAnh, setThuGonHinhAnh] = useState(false)
    const [thuGonTatCa, setThuGonTatCa] = useState(false)
    const [userProfile, setUserProfile] = useState(null)
    const [hanhDong, setHanhDong] = useState(0)

    useEffect(() => {
        console.log('Idle Home')
        const getProfile = async () => {
            try {
                const myData = await AsyncStorage.getItem('myProfile')
                const parseMyData = myData != null ? JSON.parse(myData) : null
                setUserProfile(parseMyData)
            }
            catch (e) {
                console.error('Lỗi khi get data từ AsyncStorage: ', e);
                Alert.alert('Error', 'Lỗi khi get data từ AsyncStorage');
            }
        }
        getProfile()
    }, [])

    return (
        <View style={{ flex: 1, paddingHorizontal: 12 }}>
            {/* header */}
            <StatusBar barStyle={"dark-content"} backgroundColor={'#F5F5F5'} />
            <View style={{ marginTop: 5, marginBottom: 17 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={icons.back} style={{ height: 20, width: 20, tintColor: 'black' }} />
                    </TouchableOpacity>

                    <Text style={styles.title}>{item.title}</Text>

                    <View style={{ width: 20, height: 20 }} />
                </View>
                {/* trangthai */}
                <View style={{ alignItems: 'center' }}>
                    <XuatBen />
                </View>
            </View>


            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 25 }}>
                <View style={styles.childContainer}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Image source={icons.tau} style={styles.imagesquare} />

                        <View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={styles.title}>{item.title} </Text>
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
                    onPress={() => setThuGonTatCa(!thuGonTatCa)}
                >
                    <Text style={{ color: '#005F94', fontSize: 16, fontWeight: 'bold', marginTop: 20 }}>I. THÔNG TIN XUẤT BẾN</Text>
                    <Image source={icons.fill} style={{ width: 8, height: 6, marginLeft: 5, marginTop: 21 }} />
                </TouchableOpacity>
                {
                    !thuGonTatCa &&
                    <View>
                        {/* Vị trì */}
                        <Text style={styles.type}>Vị Trí</Text>
                        <View style={styles.childContainer}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Image source={icons.bendemo} style={styles.imagesquare} />

                                <View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.title}>Bến Đá Bạc</Text>
                                        <Text style={{ color: '#005F94', fontSize: 12, marginLeft: 5 }}>X0165/1022</Text>
                                    </View>
                                    <Text style={styles.text}>Khóm 6B, Trần Văn Thời, Cà Mau</Text>
                                </View>
                            </View>
                            <Image source={icons.back} style={styles.backright} />
                        </View>

                        {/* Nhân viên tiếp nhận */}
                        {
                            (item.tinhtrang === 'Được tiếp nhận' || item.tinhtrang === 'Không được xuất bến') && (
                                <TouchableOpacity style={{ borderRadius: 6, backgroundColor: 'white', paddingHorizontal: 12, paddingVertical: 15, marginVertical: 10 }}>
                                    <View>
                                        <Text style={{ color: '#005F94', fontSize: 16, marginBottom: 10 }}>Nhân viên tiếp nhận</Text>
                                        <View style={{ flexDirection: 'row', width: 280 }}>
                                            <Image source={icons.avatartv2} style={{ width: 48, height: 48, marginRight: 10 }} />

                                            <View>
                                                <Text style={styles.title}>Lê Văn Kiểng</Text>
                                                <Text style={[styles.text, {}]}>Chuyên viên Đội Rạch Gốc</Text>
                                            </View>
                                        </View>
                                    </View>

                                </TouchableOpacity>
                            )
                        }
                        {
                            item.tinhtrang === 'Từ chối' && (
                                <View style={{ borderRadius: 6, backgroundColor: 'white', paddingHorizontal: 12, paddingVertical: 15, marginVertical: 10 }}>
                                    <View>
                                        <Text style={{ color: '#005F94', fontSize: 16, marginBottom: 10 }}>Nhân viên tiếp nhận</Text>
                                        <View style={{ flexDirection: 'row', width: 280 }}>
                                            <Image source={icons.avatartv2} style={{ width: 48, height: 48, marginRight: 10 }} />

                                            <View>
                                                <Text style={styles.title}>Lê Văn Kiểng</Text>
                                                <Text style={[styles.text, {}]}>Chuyên viên Đội Rạch Gốc</Text>
                                            </View>
                                        </View>
                                    </View>
                                    {/* ly do từ chối */}
                                    <View style={{ borderBottomWidth: 1, borderBottomColor: '#D6D6D6', marginVertical: 15 }} />
                                    <View>
                                        <Text style={{ color: '#005F94', fontSize: 16 }}>Lý do</Text>
                                        <Text style={{ fontSize: 16, color: 'black' }}>Tình hình biển động. Yêu cầu chủ tàu không được ra khơi đánh bắt cá trong khoản thời gian từ ngày 10/10/2022 đến 22/10/2022.</Text>
                                    </View>

                                </View>
                            )
                        }

                        {/* Thuyền viên */}
                        <View>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}
                                onPress={() => setThuGonThuyenVien(!thuGonThuyenVien)}>
                                <Text style={styles.type}>Thuyền viên (3)</Text>
                                <Image source={icons.fill} style={{ width: 8, height: 6, marginLeft: 5, marginTop: 8 }} />
                            </TouchableOpacity>

                            {
                                !thuGonThuyenVien && (
                                    <View>
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
                                    </View>
                                )
                            }
                        </View>
                        {
                            (item.tinhtrang === 'Chờ xác nhận xuất bến' || item.tinhtrang === 'Không được xuất bến' || item.tinhtrang === 'Ngoài biển') && (
                                <View style={{ marginTop: 20 }}>
                                    <TouchableOpacity style={{
                                        flexDirection: 'row',
                                        backgroundColor: '#459AC9',
                                        borderRadius: 6,
                                        justifyContent: 'space-between',
                                        paddingHorizontal: 10,
                                        paddingVertical: 12,
                                        opacity: item.tinhtrang === 'Ngoài biển' ? 1 : 0.4
                                    }}
                                        onPress={() => navigation.navigate('PhieuThongBaoXuatBen')}
                                        disabled={item.tinhtrang === 'Ngoài biển' ? false : true}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Image source={icons.docs} style={{ width: 15, height: 20 }} />
                                            <Text style={{ color: 'white', fontWeight: 'bold', marginLeft: 6 }}>Phiếu thông báo tàu cá xuất cảng</Text>
                                        </View>
                                        <Image source={icons.back} style={{ tintColor: 'white', height: 12, width: 12, alignSelf: 'center', transform: [{ scaleX: -1 }] }} />
                                    </TouchableOpacity>

                                    <TouchableOpacity style={{
                                        flexDirection: 'row',
                                        backgroundColor: '#459AC9',
                                        borderRadius: 6,
                                        justifyContent: 'space-between',
                                        paddingHorizontal: 10,
                                        paddingVertical: 12,
                                        marginTop: 5,
                                        opacity: item.tinhtrang === 'Ngoài biển' ? 1 : 0.4
                                    }}
                                        onPress={() => navigation.navigate('BienBanKiemTraTauXuatBen')}
                                        disabled={item.tinhtrang === 'Ngoài biển' ? false : true}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Image source={icons.docs} style={{ width: 15, height: 20 }} />
                                            <Text style={{ color: 'white', fontWeight: 'bold', marginLeft: 6 }}>Biên bảng xuất bến</Text>
                                        </View>
                                        <Image source={icons.back} style={{ tintColor: 'white', height: 12, width: 12, alignSelf: 'center', transform: [{ scaleX: -1 }] }} />
                                    </TouchableOpacity>
                                </View>
                            )
                        }
                        {/* Không được xuất bến */}
                        {
                            item.tinhtrang === 'Không được xuất bến' && (
                                <View>
                                    <Text style={styles.type}>Từ chối xuất bến</Text>
                                    <View style={{ borderRadius: 6, backgroundColor: 'white', paddingHorizontal: 12, paddingVertical: 15 }}>
                                        <View>
                                            <Text style={{ color: '#005F94', fontSize: 16, marginBottom: 10 }}>Nhân viên kiểm soát</Text>
                                            <View style={{ flexDirection: 'row', width: 280 }}>
                                                <Image source={icons.avatartv1} style={{ width: 48, height: 48, marginRight: 10 }} />

                                                <View>
                                                    <Text style={styles.title}>Thích Kiểm Soát</Text>
                                                    <Text style={[styles.text, {}]}>Chuyên viên Đội Rạch Gốc</Text>
                                                </View>
                                            </View>
                                        </View>
                                        {/* ly do từ chối */}
                                        <View style={{ borderBottomWidth: 1, borderBottomColor: '#D6D6D6', marginVertical: 15 }} />
                                        <View>
                                            <Text style={{ color: '#005F94', fontSize: 16 }}>Lý do</Text>
                                            <Text style={{ fontSize: 16, color: 'black' }}>Tình hình biển động. Yêu cầu chủ tàu không được ra khơi đánh bắt cá trong khoản thời gian từ ngày 10/10/2022 đến 22/10/2022.</Text>
                                        </View>

                                    </View>
                                </View>
                            )
                        }
                        {/* đã duyệt xuất bến nên sẽ đang NGOÀI BIỂN */}
                        {
                            item.tinhtrang === 'Ngoài biển' && (
                                <View>
                                    {/* Thông tin xuất bến------------------------------------------------------------------------------------- */}
                                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}
                                        onPress={() => setThuGonThongTinXuatBen(!thuGonThongTinXuatBen)}>
                                        <Text style={styles.type}>Thông tin xuất bến</Text>
                                        <Image source={icons.fill} style={{ width: 8, height: 6, marginLeft: 5, marginTop: 8 }} />
                                    </TouchableOpacity>
                                    {
                                        !thuGonThongTinXuatBen && (
                                            <View>
                                                <View>
                                                    <View style={[styles.childContainer, { flexDirection: 'column' }]}>
                                                        <Text style={{ fontSize: 12 }}>Thời gian</Text>
                                                        <TextInput style={{ flex: 1, borderBottomWidth: 1, borderBottomColor: '#D6D6D6' }} placeholder="--" />

                                                        <Text style={{ fontSize: 12 }}>Số thuyền viên</Text>
                                                        <TextInput style={{ flex: 1, borderBottomWidth: 1, borderBottomColor: '#D6D6D6' }} placeholder="--" />

                                                        <Text style={{ fontSize: 12 }}>Kiểm tra nội dung nhật ký</Text>
                                                        <TextInput style={{ flex: 1, borderBottomWidth: 1, borderBottomColor: '#D6D6D6' }} placeholder="--" />
                                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10, marginTop: 20 }}>
                                                            <TouchableOpacity style={styles.touchableCheckBox}
                                                                onPress={() => setXacNhanXuatBen(!xacNhanXuatBen)}
                                                            >
                                                                <Image source={icons.check} resizeMode="contain" style={{ height: 10, width: 10, tintColor: 'white' }} />
                                                            </TouchableOpacity>
                                                            <Text style={{ color: 'black', fontSize: 16 }}>Xác nhận xuất bên</Text>
                                                        </View>
                                                    </View>

                                                    {/* Các trạm trưởng */}
                                                    <View style={{
                                                        borderRadius: 6,
                                                        backgroundColor: 'white',
                                                        justifyContent: 'space-between',
                                                        marginTop: 5
                                                    }}>
                                                        <TouchableOpacity style={styles.childContainer}>
                                                            <View>
                                                                <Text style={{ color: '#005F94' }}>Trạm trưởng</Text>
                                                                <View style={{ flexDirection: 'row', width: 280 }}>
                                                                    <Image source={icons.avatartv3} style={styles.imagecircle} />

                                                                    <View>
                                                                        <Text style={styles.title}>Lê Hoàng Khánh</Text>
                                                                        <Text style={styles.text}>Đội trưởng đội Rạch Gốc</Text>
                                                                    </View>

                                                                </View>
                                                            </View>
                                                        </TouchableOpacity>
                                                        <View style={{ borderBottomWidth: 1, borderBottomColor: '#D6D6D6', marginHorizontal: 12 }} />

                                                        <TouchableOpacity style={styles.childContainer}>
                                                            <View>
                                                                <Text style={{ color: '#005F94' }}>Nhân viên kiểm soát</Text>
                                                                <View style={{ flexDirection: 'row', width: 280 }}>
                                                                    <Image source={icons.avatartv2} style={styles.imagecircle} />

                                                                    <View>
                                                                        <Text style={styles.title}>Đào Nguyễn Đạt</Text>
                                                                        <Text style={styles.text}>Chuyên viên Đội Rạch Gốc</Text>
                                                                    </View>

                                                                </View>
                                                            </View>
                                                        </TouchableOpacity>
                                                        <View style={{ borderBottomWidth: 1, borderBottomColor: '#D6D6D6', marginHorizontal: 12 }} />

                                                        <TouchableOpacity style={styles.childContainer}>
                                                            <View>
                                                                <Text style={{ color: '#005F94' }}>Chiến sĩ gác</Text>
                                                                <View style={{ flexDirection: 'row', width: 280 }}>
                                                                    <Image source={icons.avatartv1} style={styles.imagecircle} />

                                                                    <View>
                                                                        <Text style={styles.title}>Lê Văn Kiển</Text>
                                                                        <Text style={styles.text}>Chuyên viên Đội Rạch Gốc</Text>
                                                                    </View>

                                                                </View>
                                                            </View>
                                                        </TouchableOpacity>

                                                    </View>
                                                </View>
                                            </View>
                                        )
                                    }
                                    {/*Hình ảnh xuất bến */}
                                    <View>
                                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}
                                            onPress={() => setThuGonHinhAnh(!thuGonHinhAnh)}>
                                            <Text style={styles.type}>Hình ảnh xuất bến</Text>
                                            <Image source={icons.fill} style={{ width: 8, height: 6, marginLeft: 5, marginTop: 8 }} />
                                        </TouchableOpacity>

                                        {
                                            !thuGonHinhAnh &&
                                            <ScrollView style={{ flexDirection: 'row' }}
                                                horizontal
                                                contentContainerStyle={{}}>
                                                {
                                                    dataImage.map((item, index) => (
                                                        <TouchableOpacity key={index} style={{ padding: 3 }}>
                                                            <Image key={index} source={item} style={{ width: 110, height: 70, borderRadius: 2 }} resizeMode="contain" />
                                                        </TouchableOpacity>
                                                    ))
                                                }

                                            </ScrollView>
                                        }
                                    </View>
                                </View>
                            )
                        }

                        {
                            (userProfile && userProfile.chucvu) === 'Cán bộ' ?
                                (
                                    <View>
                                        <Text style={{ color: '#005F94', fontSize: 16, fontWeight: 'bold', marginTop: 20, marginBottom: 5 }}>HÀNH ĐỘNG XỬ LÝ</Text>
                                        {/* card */}
                                        <View style={{ borderRadius: 6, backgroundColor: 'white' }}>
                                            {/* radio button */}
                                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 15, paddingHorizontal: 12 }}
                                                onPress={() => setHanhDong(1)}>
                                                {hanhDong===1 ? <Image source={icons.radioVang} style={{ width: 16, height: 16 }} />
                                                    :
                                                    <View style={{ borderRadius: 999, width: 16, height: 16, backgroundColor: '#D6D6D6' }} />}
                                                <Text style={{ fontSize: 16, color: '#FFC737', fontWeight: 500, marginLeft: 5 }}>Được tiếp nhận</Text>
                                            </TouchableOpacity>

                                            <View style={{ borderBottomWidth: 1, borderBottomColor: '#D6D6D6', marginLeft: 12 }} />

                                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 15, paddingHorizontal: 12 }}
                                                onPress={() => setHanhDong(-1)}>
                                                {hanhDong===-1
                                                    ? <Image source={icons.radioDo} style={{ width: 16, height: 16 }} />
                                                    :
                                                    <View style={{ borderRadius: 999, width: 16, height: 16, backgroundColor: '#D6D6D6' }} />}
                                                <Text style={{ fontSize: 16, color: '#F62825', fontWeight: 500, marginLeft: 5 }}>Từ chối</Text>
                                            </TouchableOpacity>

                                            {hanhDong===-1 && <View style={{ paddingBottom: 20, paddingHorizontal: 12 }}>
                                                    <MyTextInput header={'Lý do'} />
                                                </View>}

                                        </View>
                                        {/* hỏi ý cấp trên */}
                                        <TouchableOpacity style={{ width: 135 }}>
                                            <Text style={{ color: '#3345CB', fontWeight: 700, marginTop: 10, borderBottomWidth: 1, borderBottomColor: '#3345CB' }}>Hỏi ý kiến cấp trên {'>>'}</Text>
                                        </TouchableOpacity>

                                        {/* 2 nút  */}
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20, paddingTop: 25 }}>
                                            <TouchableOpacity style={{ borderRadius: 6, backgroundColor: '#FFFFFF', paddingHorizontal: 60, paddingVertical: 10 }}>
                                                <Text style={{ fontWeight: 700 }}>Đóng</Text>
                                            </TouchableOpacity>

                                            <TouchableOpacity style={{ borderRadius: 6, backgroundColor: '#3345CB', paddingHorizontal: 60, paddingVertical: 10 }}>
                                                <Text style={{ fontWeight: 700, color: 'white' }}>Xác nhận</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>

                                )
                                :
                                <TouchableOpacity style={{ backgroundColor: '#FFFFFF', borderRadius: 6, paddingVertical: 10, alignItems: 'center', marginTop: 20, marginBottom: 25, width: 175, alignSelf: 'center' }}
                                    onPress={() => navigation.goBack()}>
                                    <Text style={{ color: '#828282', fontWeight: 'bold' }}>Đóng</Text>
                                </TouchableOpacity>
                        }
                    </View>
                }

                {
                    thuGonTatCa &&
                    <TouchableOpacity style={{ backgroundColor: '#FFFFFF', borderRadius: 6, paddingVertical: 10, alignItems: 'center', marginTop: 20, marginBottom: 25, width: 175, alignSelf: 'center' }}
                        onPress={() => navigation.goBack()}>
                        <Text style={{ color: '#828282', fontWeight: 'bold' }}>Đóng</Text>
                    </TouchableOpacity>

                }
            </ScrollView >
        </View >
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

export default AllStateXuatBenScreen