

import React, { useState } from 'react';

import {
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

function QRCodeScreen() {
    const [data, setData] = useState('')
    return (
        <QRCodeScanner
            onRead={({ data }) => setData(data)}

            cameraType='back'
            reactivate={true}
            showMarker={true}
            reactivateTimeout={500}
            bottomContent={
                <View>
                    <Text>
                        {data}
                    </Text>
                </View>
            }
        />
    );
}

export default QRCodeScreen