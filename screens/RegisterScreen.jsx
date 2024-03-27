import React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import {images} from '../constants/manager'

function HomeScreen( navigation ) {
    return (
        <View style={{flex:1}}>
           <ImageBackground source={images.bglogin} resizeMode="stretch"
                style={{
                    width: '100%',
                    height: '100%'
                }}>
             
            </ImageBackground>
        </View>
    )
}

export default HomeScreen