import React from "react";
import { Image, TouchableOpacity } from 'react-native'
import { icons } from '../constants/manager'



function ButtonGoBack({navigation}) {
    return (
        <TouchableOpacity style={{ margin: 10, marginEnd: '92%' }} onPress={() => {
            navigation.goBack()
        }}>
            <Image source={icons.back} />
        </TouchableOpacity>
    )
}

export default ButtonGoBack


