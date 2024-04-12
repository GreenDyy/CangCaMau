import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { icons, images } from '../constants/manager'


const MyCheckBox = ({
    text,
    state = false,
    setState = () => { },
    color,
    fontWeight }) => (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
        <TouchableOpacity style={state ? styles.touchableCheckBoxChecked : styles.touchableCheckBox}
            onPress={() => setState(!state)}
        >
            {
                state && <Image source={icons.check} resizeMode="contain" style={{ height: 10, width: 10, tintColor: 'white' }} />

            }
        </TouchableOpacity>
        <Text style={{ color: !color ? 'black' : color, fontSize: 16, marginLeft: 5, fontWeight: !fontWeight ? 400 : fontWeight }}>{text}</Text>
    </View>
)

const styles = StyleSheet.create({

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

export default MyCheckBox


