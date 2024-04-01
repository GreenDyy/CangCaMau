import React, { useEffect } from "react";
import { View, Text, Image, ImageBackgroundy, ImageBackground } from 'react-native'
import { images } from '../constants/manager'



function IntroScreen({ navigation }) {

    useEffect(() => {
        const timer = setTimeout(() => { navigation.navigate('Login') }, 1)
        return () => clearTimeout(timer);
    }, [])
    
    return (

        <View style={{ flex: 1 }}>
            <ImageBackground source={images.bg} resizeMode="stretch"
                style={{
                    width: '100%',
                    height: '100%'
                }}>
                <Image
                    source={images.logo}
                    resizeMode="contain"
                    style={{
                        width: '46%',
                        height: '46%',
                        position: 'absolute',
                        top: '5%',
                        left: '27%',
                    }} />
            </ImageBackground>
        </View>
    )
}

export default IntroScreen