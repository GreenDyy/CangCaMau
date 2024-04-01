import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const getProfile = async () => {
    try {
        const data = await AsyncStorage.getItem('myProfile')
        return data != null ? JSON.parse(data) : null
    }
    catch (e) {
        console.error('Lỗi khi get data từ AsyncStorage: ', e);
        Alert.alert('Error', 'Lỗi khi get data từ AsyncStorage');
    }
}

export default getProfile