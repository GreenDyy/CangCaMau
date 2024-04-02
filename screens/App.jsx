import React from "react";
import { Image } from 'react-native'
import { View, Text, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { icons } from '..//constants/manager'
//screens
import IntroScreen from "./IntroScreen";
import LoginScreen from "./LoginScreen";
import HomeScreen from "./HomeScreen";
import RegisterScreen from "./RegisterScreen";
import OTPScreen from "./OTPScreen";
import ForgetPassScreen from "./ForgetPassScreen";
import OTPForgetPassScreen from "./OTPForgetPassScreen";
import ForgetNewPassScreen from "./ForgetNewPassScreen";
import NotificationScreen from "./NotificationScreen";
import ProfileScreen from "./ProfileScreen";
import InforProfileScreen from "./InforProfileScreen";
import UpdateProfileScreen from "./UpdateProfileScreen";
import ChangePassScreen from "./ChangePassScreen";
import XuatNhapBenScreen from "./XuatNhapBenScreen";

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

function BottomTabHome() {
    return (
        <Tab.Navigator
            initialRouteName='TabHome'
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    padding: 10,
                    height: 70,
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                    position: 'absolute',
                    bottom: 0
                },
                tabBarHideOnKeyboard: 'true'
            }}
        >
            <Tab.Screen
                name="TabHome"
                component={HomeScreen}
                options={{
                    tabBarLabelPosition: 'beside-icon',
                    tabBarItemStyle: {
                        justifyContent: 'space-evenly',
                    },
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.home}
                            style={{
                                tintColor: focused ? '#00CC00' : 'black',
                                height: 25,
                                width: 25
                            }}
                        />
                    ),
                    tabBarLabel: ({ focused }) => (
                        <Text style={{
                            color: '#005F94',
                            fontSize: 12,
                            fontWeight: 'bold'
                        }}>
                            {focused ? 'Trang chủ' : ''}
                        </Text>
                    )
                }}
            />
            <Tab.Screen
                name="TabNotification"
                component={NotificationScreen}
                options={{
                    tabBarLabelPosition: 'beside-icon',
                    tabBarItemStyle: {
                        justifyContent: 'space-evenly',
                    },
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.notification}
                            style={{
                                tintColor: focused ? '#00CC00' : 'black',
                                height: 25,
                                width: 25
                            }}
                        />
                    ),
                    tabBarLabel: ({ focused }) => (
                        <Text style={{
                            color: '#005F94',
                            fontSize: 12,
                            fontWeight: 'bold'
                        }}>
                            {focused ? 'Thông báo' : ''}
                        </Text>
                    )
                }}
            />
            <Tab.Screen
                name="TabProfile"
                component={ProfileScreen}
                options={{
                    tabBarLabelPosition: 'beside-icon',
                    tabBarItemStyle: {
                        justifyContent: 'space-evenly',
                    },
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.profile}
                            style={{
                                tintColor: focused ? '#00CC00' : 'black',
                                height: 25,
                                width: 25
                            }}
                        />
                    ),
                    tabBarLabel: ({ focused }) => (
                        <Text style={{
                            color: '#005F94',
                            fontSize: 12,
                            fontWeight: 'bold'
                        }}>
                            {focused ? 'Cá nhân' : ''}
                        </Text>
                    )
                }}
            />
        </Tab.Navigator>
    )
}

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Intro" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Intro" component={IntroScreen} />
                <Stack.Screen name='Login' component={LoginScreen} />
                <Stack.Screen name='Home' component={BottomTabHome} />
                <Stack.Screen name='Register' component={RegisterScreen} />
                <Stack.Screen name='OTP' component={OTPScreen} />
                <Stack.Screen name='ForgetPass' component={ForgetPassScreen} />
                <Stack.Screen name='OTPForgetPass' component={OTPForgetPassScreen} />
                <Stack.Screen name='ForgetNewPass' component={ForgetNewPassScreen} />
                <Stack.Screen name='InforProfile' component={InforProfileScreen} />
                <Stack.Screen name='UpdateProfile' component={UpdateProfileScreen} />
                <Stack.Screen name='ChangePass' component={ ChangePassScreen} />
                <Stack.Screen name='XuatNhapBen' component={ XuatNhapBenScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App
