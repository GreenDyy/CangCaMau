import React, { useState } from "react";
import {
    View,
    TouchableOpacity,
    Image,
    Text,
    ScrollView,
    TextInput,
    StatusBar,
    Alert,
} from 'react-native'
import { images, icons } from '../constants/manager'
import ButtonGoBack from "../components/buttongoback";

function ChangePassScreen({ navigation }) {
    const [oldPass, setOldPass] = useState('')
    const [newPass, setNewPass] = useState('')
    const [rePass, setRePass] = useState('')

    return (
        <View style={{ flex: 1 }}>
            {/* header */}
            <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 10 }}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}>
                    <Image source={icons.back} style={{ tintColor: 'gray' }} />
                </TouchableOpacity>
                <Text style={{ color: 'black', fontWeight: 'bold', textAlign: 'center', fontSize: 16 }}>Đổi mật khẩu</Text>
                {/* View này để căn chỉnh thôi  o-o-o */}
                <View style={{ width: 20, height: 20 }}></View>
            </View>
            <ScrollView style={{ flex: 1, marginTop: 10 }}
                contentContainerStyle={{ paddingBottom: 30 }}>

                {/* content */}
                <View style={{ flex: 1, backgroundColor: 'white', borderRadius: 10, marginHorizontal: 10, paddingHorizontal: 10, paddingVertical: 15 }}>
                    <View>
                        <Text style={{ fontSize: 12 }}>Nhập mật khẩu củ</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TextInput style={{ top: -10, width: '97%' }} secureTextEntry={true}
                                placeholder="--"
                                onChangeText={(text) => {
                                    setOldPass(text)
                                }}
                                value={oldPass} />
                            <TouchableOpacity style={{ alignSelf: 'center' }}
                                onPress={() => {
                                    setOldPass('')
                                }}>
                                <Image source={icons.delete} resizeMode="contain" style={{ height: 10, width: 10, position: 'absolute', bottom: 2, right: 0 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ borderBottomWidth: 1, top: -20 }} />
                    </View>

                    <View>
                        <Text style={{ fontSize: 12 }}>Nhập mật khẩu mới</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TextInput style={{ top: -10, width: '97%' }} secureTextEntry={true}
                                placeholder="--"
                                onChangeText={(text) => {
                                    setNewPass(text)
                                }}
                                value={newPass} />
                            <TouchableOpacity style={{ alignSelf: 'center' }}
                                onPress={() => {
                                    setNewPass('')
                                }}>
                                <Image source={icons.delete} resizeMode="contain" style={{ height: 10, width: 10, position: 'absolute', bottom: 2, right: 0 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ borderBottomWidth: 1, top: -20 }} />
                    </View>

                    <View>
                        <Text style={{ fontSize: 12 }}>Nhập lại mật khẩu</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TextInput style={{ top: -10, width: '97%' }} secureTextEntry={true}
                                placeholder="--"
                                onChangeText={(text) => {
                                    setRePass(text)
                                }}
                                value={rePass} />
                            <TouchableOpacity style={{ alignSelf: 'center' }}
                                onPress={() => {
                                    setRePass('')
                                }}>
                                <Image source={icons.delete} resizeMode="contain" style={{ height: 10, width: 10, position: 'absolute', bottom: 2, right: 0 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ borderBottomWidth: 1, top: -20 }} />
                    </View>
                </View>

                {/* Button? */}
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginHorizontal: 10, marginVertical: 20 }}>
                    <TouchableOpacity style={{ backgroundColor: '#005F94', borderRadius: 10, paddingVertical: 10, width: '48%' }}>
                        <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Đổi mật khẩu</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>

        </View>

    )
}

export default ChangePassScreen