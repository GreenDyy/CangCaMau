import React, { useState } from "react";
import {
    View,
    TouchableOpacity,
    Text,
    Image,
    StatusBar,
    ScrollView,
    Modal
} from 'react-native'
import { icons } from '../../constants/manager'
import MyTextInput from "../../components/mytextinput";
import SelectDropdown from "react-native-select-dropdown";

const DSTAU = ['06020 - Thái học 3', '06020 - Thái học 3', '06020 - Thái học 3']

function ThemMoiViPhamScreen({ navigation }) {
    const [showPopUp, setShowPopUp] = useState(false)
    return (
        <View style={{ flex: 1, paddingHorizontal: 12 }}>
            {/* header */}
            <StatusBar barStyle={"dark-content"} backgroundColor={'#F5F5F5'} />
            <View style={{ marginBottom: 17, marginTop: 5 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}>
                        <Image source={icons.back} style={{ height: 20, width: 20, tintColor: 'black' }} />
                    </TouchableOpacity>

                    <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}>Thêm mới vi phạm</Text>

                    <View style={{ width: 20, height: 20 }} />
                </View>
            </View>
            <ScrollView
                contentContainerStyle={{ paddingBottom: 20 }}
                showsVerticalScrollIndicator={false}>
                {/* ô 1 */}
                <View style={{ borderRadius: 6, backgroundColor: 'white', paddingTop: 30, paddingBottom: 20, paddingHorizontal: 12 }}>
                    <View style={{ borderRadius: 6, backgroundColor: 'white', marginTop: 5, paddingBottom: 15 }}>
                        <Text style={{ fontSize: 12, marginBottom: 5 }}>Người tạo</Text>
                        {/* hạn đăng kiểm */}
                        <SelectDropdown
                            dropdownStyle={{ borderRadius: 6 }}
                            data={DSTAU}
                            onSelect={(selectedItem, index) => {

                            }}
                            renderButton={(selectedItem) => {
                                return (
                                    !selectedItem ?
                                        <View style={{ borderBottomWidth: 1, borderBottomColor: '#D6D6D6', borderRadius: 4, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <Text style={{ color: 'black', fontSize: 16, fontWeight: 700 }}>Tất cả</Text>
                                            <Image source={icons.dropdown} style={{ width: 10, height: 6 }} />
                                        </View>
                                        :
                                        <View style={{ borderBottomWidth: 1, borderBottomColor: '#D6D6D6', borderRadius: 4, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <Text style={{ color: 'black', fontSize: 16, fontWeight: 700 }}>{selectedItem}</Text>
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
                    </View>

                    <MyTextInput
                        header={'Thời gian bị bắt'}
                        type={'calendar'}
                        editable={false}
                    />

                    <MyTextInput
                        header={'Số thuyền viên hiện hữu'}
                        type={'delete'}
                        editable={true}
                    />
                </View>

                {/* ô 2 */}
                <View style={{ borderRadius: 6, backgroundColor: 'white', paddingTop: 20, paddingBottom: 20, paddingHorizontal: 12, marginTop: 10 }}>
                    <MyTextInput
                        header={'Lực lượng bắt'}
                        type={'delete'}
                        editable={false}
                    />

                    <MyTextInput
                        header={'Khu vực bị bắt'}
                        type={'delete'}
                        editable={true}
                    />
                    <View style={{ borderRadius: 6, backgroundColor: 'white' }}>
                        <Text style={{ fontSize: 12, marginBottom: 5 }}>Đơn vị xử lý</Text>
                        {/* hạn đăng kiểm */}
                        <SelectDropdown
                            dropdownStyle={{ borderRadius: 6 }}
                            data={DSTAU}
                            onSelect={(selectedItem, index) => {

                            }}
                            renderButton={(selectedItem) => {
                                return (
                                    !selectedItem ?
                                        <View style={{ borderBottomWidth: 1, borderBottomColor: '#D6D6D6', borderRadius: 4, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <Text style={{ color: 'black', fontSize: 16 }}>DQ Biển Hố Gùi</Text>
                                            <Image source={icons.dropdown} style={{ width: 10, height: 6 }} />
                                        </View>
                                        :
                                        <View style={{ borderBottomWidth: 1, borderBottomColor: '#D6D6D6', borderRadius: 4, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <Text style={{ color: 'black', fontSize: 16, fontWeight: 700 }}>{selectedItem}</Text>
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
                    </View>
                </View>

                {/* ô 3 */}
                <View style={{ borderRadius: 6, backgroundColor: 'white', paddingTop: 20, paddingBottom: 20, paddingHorizontal: 12, marginTop: 10 }}>
                    <MyTextInput
                        header={'Lý do bị bắt'}
                        type={'delete'}
                        editable={false}
                    />

                    <MyTextInput
                        header={'Hình hức xử lý'}
                        type={'delete'}
                        editable={true}
                    />

                    <MyTextInput
                        header={'Ghi chú'}
                        type={'delete'}
                        editable={true}
                    />
                </View>

                {/* 2 nút dưới */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 56 }}>
                    <TouchableOpacity style={{ paddingVertical: 10, backgroundColor: 'white', width: 160, height: 38, borderRadius: 6 }}
                        onPress={() => {
                            setHanDangKiem('Tất cả')
                            setTinhTrangDuyet('Tất cả tình trạng')
                        }}>
                        <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>Đóng</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ paddingVertical: 10, backgroundColor: '#3345CB', width: 173, height: 38, borderRadius: 6 }}
                        onPress={()=>{setShowPopUp(true)}}>
                        <Text style={{ fontWeight: 'bold', color: 'white', textAlign: 'center' }}>Tạo mới</Text>
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
                            <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold', color: 'black' }}>Xác nhận thêm vị phạm</Text>
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
                                    style={{ backgroundColor: '#3345CB', borderRadius: 6, paddingVertical: 10, width: 165, alignItems: 'center', marginTop: 20 }}
                                    onPress={() => navigation.navigate('CBLichSuViPham')}
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

export default ThemMoiViPhamScreen