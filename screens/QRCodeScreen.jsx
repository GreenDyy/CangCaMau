

import React, { useState } from 'react';

import {
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

function QRCodeScreen({ navigation, route }) {
    const [data, setData] = useState('')
    return (
        <QRCodeScanner
            onRead={({data}) => {
                setData(data)
                navigation.navigate({
                    name: 'InforProfile',
                    params: { CCCD: data },
                    merge: true
                })
            }}
            fadeIn={true}
            cameraType='back'
            reactivate={true}
            reactivateTimeout={10000}
            showMarker={true}
            markerStyle={{ borderRadius: 30, borderColor: 'white' }}

            // cameraStyle={{ height: '100%' }}

            topContent={
                <View style={{ position: 'absolute', top: 0, left: 0, right: 0, alignItems: 'center' }}>
                    <Text style={{ color: 'white' }}>Quét</Text>
                </View>
            }
            bottomContent={
                <View>
                    <Text>Quét mã QR trên thẻ CCCD của bạn</Text>
                    <Text>
                        {data}
                    </Text>
                </View>
            }
        />
    );
}

export default QRCodeScreen