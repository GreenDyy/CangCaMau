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

const DSTAU = ['06020 - Thái học 3', '06021 - Aurora']

function ThemMoiYKienScreen({ navigation }) {
    const [showPopUp, setShowPopUp] = useState(false)
    const [tenTau, setTenTau] = useState('Chọn tàu')
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

                    <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}>Thêm mới</Text>

                    <View style={{ width: 20, height: 20 }} />
                </View>
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}>
                {/* ô 1 */}
                <View style={{ borderRadius: 6, backgroundColor: 'white', paddingVertical: 13, paddingHorizontal: 12 }}>
                    <SelectDropdown
                        dropdownStyle={{ borderRadius: 6 }}
                        data={DSTAU}
                        defaultValue={tenTau}
                        onSelect={(selectedItem, index) => {
                            setTenTau(selectedItem)
                        }}
                        renderButton={(selectedItem) => {
                            return (
                                !selectedItem ?
                                    <View style={{ borderBottomWidth: 1, borderBottomColor: '#D6D6D6' }}>
                                        <Text style={{ fontSize: 12 }}>Tên tàu</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <Text style={{ color: 'black', fontSize: 16, fontWeight: 700 }}>Chọn tàu</Text>
                                            <Image source={icons.dropdown} style={{ width: 10, height: 6 }} />
                                        </View>
                                    </View>
                                    :
                                    <View style={{ borderBottomWidth: 1, borderBottomColor: '#D6D6D6' }}>
                                        <Text style={{ fontSize: 12 }}>Tên tàu</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <Text style={{ color: 'black', fontSize: 16, fontWeight: 700 }}>{selectedItem}</Text>
                                            <Image source={icons.dropdown} style={{ width: 10, height: 6 }} />
                                        </View>
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

                <View style={{ borderRadius: 6, backgroundColor: 'white', marginTop: 20, paddingVertical: 20, paddingHorizontal: 12 }}>
                    <MyTextInput
                        header={'Nội dung ý kiến'}
                        type={'delete'}
                        editable={true}
                        value={noiDung}
                        setValue={setNoiDung}
                    />
                </View>
            </ScrollView>

            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', paddingHorizontal: 12, backgroundColor: 'white', borderRadius: 6, paddingVertical: 11, marginBottom: 25 }}
                onPress={() => {navigation.navigate('CBHoiYKienCapTren')
                }}>
                <Text style={{ color: '#3345CB' }}>Gửi </Text>
                <Text style={{ fontWeight: 'bold', color: '#3345CB' }}>Nguyễn Văn F</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ThemMoiYKienScreen