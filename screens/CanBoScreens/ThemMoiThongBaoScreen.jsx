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
import MyCheckBox from "../../components/mycheckbox";

const DSLOAITHONGBAO = ['Cảnh báo', 'Nhắc nhở']

function ThemMoiThongBaoScreen({ navigation }) {
    const [showPopUp, setShowPopUp] = useState(false)
    const [loaiThongBao, setLoaiThongBao] = useState('Chọn loại thông báo')
    const [noiDung, setNoiDung] = useState('')
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

                    <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}>Thêm mới thông báo</Text>

                    <View style={{ width: 20, height: 20 }} />
                </View>
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}>
                {/* ô 1 */}
                <View style={{ borderRadius: 6, backgroundColor: 'white', paddingVertical: 13, paddingHorizontal: 12 }}>
                    <SelectDropdown
                        dropdownStyle={{ borderRadius: 6 }}
                        data={DSLOAITHONGBAO}
                        defaultValue={loaiThongBao}
                        onSelect={(selectedItem, index) => {
                            setLoaiThongBao(selectedItem)
                        }}
                        renderButton={(selectedItem) => {
                            return (
                                !selectedItem ?
                                    <View style={{ borderBottomWidth: 1, borderBottomColor: '#D6D6D6', borderRadius: 4, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Text style={{ color: 'black', fontSize: 16 }}>Chọn loại thông báo</Text>
                                        <Image source={icons.dropdown} style={{ width: 10, height: 6 }} />
                                    </View>
                                    :
                                    <View style={{ borderBottomWidth: 1, borderBottomColor: '#D6D6D6', borderRadius: 4, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Text style={{ color: 'black', fontSize: 16 }}>{selectedItem}</Text>
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

                <View style={{ borderRadius: 6, backgroundColor: 'white', marginTop: 10, paddingVertical: 20, paddingHorizontal: 12 }}>
                    <MyTextInput
                        header={'Nội dung thông báo'}
                        type={'delete'}
                        editable={true}
                        value={noiDung}
                        setValue={setNoiDung}
                    />
                </View>

                <View style={{ borderRadius: 6, backgroundColor: 'white', marginTop: 10, paddingVertical: 20, paddingHorizontal: 12 }}>
                    <Text>File đính kèm</Text>
                    <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                        <TouchableOpacity style={{ flexDirection: 'row', borderRadius: 2, backgroundColor: '#EBECFA', alignItems: 'center', paddingVertical: 4, paddingHorizontal: 11 }}>
                            <Image source={icons.addmini} style={{ height: 12, width: 12, marginRight: 2 }} />
                            <Text style={{ fontSize: 12, color: '#3345CB' }}>Upload</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{ fontSize: 16, color: 'black' }}>Chungnhan.jpg</Text>
                </View>


                {/* 2 nút dưới */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, marginBottom: 25 }}>
                    <TouchableOpacity style={{ paddingVertical: 10, backgroundColor: 'white', width: 160, height: 38, borderRadius: 6 }}
                        onPress={() => {

                        }}>
                        <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>Đóng</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ paddingVertical: 10, backgroundColor: '#3345CB', width: 173, height: 38, borderRadius: 6 }}
                        onPress={() => { setShowPopUp(true) }}>
                        <Text style={{ fontWeight: 'bold', color: 'white', textAlign: 'center' }}>Thêm mới</Text>
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
                            <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold', color: 'black' }}>Xác nhận thêm thông báo</Text>
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
                                    onPress={() => navigation.navigate('CBDanhSachThongBao')}
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

export default ThemMoiThongBaoScreen