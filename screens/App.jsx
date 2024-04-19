import React from "react";
import { Image, Text } from 'react-native'
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
import QRCodeScreen from "./QRCodeScreen";
import LocKetQuaScreen from "./LocKetQuaScreen";
import TrongBoScreen from "./TrongBoScreen";
import NgoaiBienScreen from "./NgoaiBienScreen";
import PhieuThongBaoXuatBenScreen from "./PhieuThongBaoXuatBenScreen";
import BienBanKiemTraTauXuatBenScreen from "./BienBanKiemTraTauXuatBenScreen";
import PhieuThongBaoNhapBenScreen from "./PhieuThongBaoNhapBenScreen";
import BienBanKiemTraTauNhapBenScreen from "./BienBanKiemTraTauNhapBenScreen";
import YeuCauNhapBenScreen from "./YeuCauNhapBenScreen";
import AllStateXuatBenScreen from "./AllStateXuatBenScreen";
import AllStateNhapBenScreen from "./AllStateNhapBenScreen";
import TauCaScreen from "./TauCaScreen";
import ChiTietTauCaScreen from "./ChiTietTauCaScreen";
import ThongTinThuyenVienScreen from "./ThongTinThuyenVienScreen";
import ThemThuyenVienScreen from "./ThemThuyenVienScreen";
import ThongTinTauScreen from "./ThongTinTauScreen";
import ThongSoKyThuatScreen from "./ThongSoKyThuatScreen";
import ThongTinGiayChungNhanScreen from "./ThongTInGiayChungNhanScreen";
import ThongTinThietBiDinhViScreen from "./ThongTInThietBiDinhViScreen";
import ChuSoHuuVaThuyenVienScreen from "./ChuSoHuuVaThuyenVienScreen";
import ThongTinChiTietScreen from "./ThongTinChiTietScreen";
import TabThuyenVienScreen from "./TabThuyenVienScreen";
import ChiTietThuyenVienScreen from "./ChiTietThuyenVienScreen";
import LocKetQuaThuyenVienScreen from "./LocKetQuaThuyenVienScreen";
import LichSuViPhamScreen from "./LichSuViPhamScreen";
import ChiTietViPhamScreen from "./ChiTietViPham";
import LichSuTaiNanScreen from "./LichSuTaiNanScreen";
import ChiTietTaiNanScreen from "./ChiTietTaiNan";
import CanhBaoScreen from "./CanhBaoScreen";
import XemThongTinTauScreen from "./XemThongTinTauScreen";
//cán bộ
import CBHomeScreen from "./CanBoScreens/CBHomeScreen";
import CBProfileScreen from "./CanBoScreens/CBProfileScreen";
import CBThongTinCaNhanScreen from "./CanBoScreens/CBThongTinCaNhan";
import YeuCauXuatNhapBenScreen from "./CanBoScreens/YeuCauXuatNhapBenScreen";
import CBDanhSachTauCaScreen from "./CanBoScreens/CBDanhSachTauCaScreen";
import CBLocKetQuaScreen from "./CanBoScreens/CBLocKetQuaScreen";
import CBDanhSachThuyenVienScreen from "./CanBoScreens/CBDanhSachThuyenVienScreen";
import CBChiTietThuyenVienScreen from "./CanBoScreens/CBChiTietThuyenVienScreen";
import CBLichSuViPhamScreen from "./CanBoScreens/CBLichSuViPhamScreen";
import CBLocViPhamScreen from "./CanBoScreens/CBLocViPhamScreen";
import CBChiTietViPhamScreen from "./CanBoScreens/CBChiTietViPham";
import ThemMoiViPhamScreen from "./CanBoScreens/ThemMoiViPhamScreen";
import CBDanhSachTaiNanScreen from "./CanBoScreens/CBDanhSachTaiNanScreen";
import CBLocTaiNanScreen from "./CanBoScreens/CBLocTaiNanScreen";
import CBChiTietTaiNanScreen from "./CanBoScreens/CBChiTietTaiNan";
import ThemMoiTaiNanScreen from "./CanBoScreens/ThemMoiTaiNanScreen";
import CBDanhSachThongBaoScreen from "./CanBoScreens/CBDanhSachThongBaoScreen";
import CBChiTietThongBaoScreen from "./CanBoScreens/CBChiTietThongBao";
import ThemMoiThongBaoScreen from "./CanBoScreens/ThemMoiThongBaoScreen";
import CBHoiYKienCapTrenScreen from "./CanBoScreens/CBHoiYKienCapTrenScreen";
import CBChiTietYKienScreen from "./CanBoScreens/CBChiTietYKien";
import ThemMoiYKienScreen from "./CanBoScreens/ThemMoiYKienScreen";
import CBPhanHoiYKienScreen from "./CanBoScreens/CBPhanHoiYKienScreen";
import CBLocYKienScreen from "./CanBoScreens/CBLocYKienScreen";
import CBDanhSachCangScreen from "./CanBoScreens/CBDanhSachCangScreen";
import ChiTietBenScreen from "./CanBoScreens/ChiTietBenScreen";
import CBChiTietTauCaScreen from "./CanBoScreens/CBChiTietTauCaScreen";

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
                            color: '#3345CB',
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
                            color: '#3345CB',
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
                            color: '#3345CB',
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
//của cán bộ
function BottomTabCBHome() {
    return (
        <Tab.Navigator
            initialRouteName='TabCBHome'
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
                component={CBHomeScreen}
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
                            color: '#3345CB',
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
                            color: '#3345CB',
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
                component={CBProfileScreen}
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
                            color: '#3345CB',
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
                <Stack.Screen name='ChangePass' component={ChangePassScreen} />
                <Stack.Screen name='XuatNhapBen' component={XuatNhapBenScreen} />
                <Stack.Screen name='QRCode' component={QRCodeScreen} />
                <Stack.Screen name='LocKetQua' component={LocKetQuaScreen} />
                <Stack.Screen name='TrongBo' component={TrongBoScreen} />
                <Stack.Screen name='NgoaiBien' component={NgoaiBienScreen} />
                <Stack.Screen name='PhieuThongBaoXuatBen' component={PhieuThongBaoXuatBenScreen} />
                <Stack.Screen name='BienBanKiemTraTauXuatBen' component={BienBanKiemTraTauXuatBenScreen} />
                <Stack.Screen name='PhieuThongBaoNhapBen' component={PhieuThongBaoNhapBenScreen} />
                <Stack.Screen name='BienBanKiemTraTauNhapBen' component={BienBanKiemTraTauNhapBenScreen} />
                <Stack.Screen name='YeuCauNhapBen' component={YeuCauNhapBenScreen} />
                <Stack.Screen name='AllStateXuatBen' component={AllStateXuatBenScreen} />
                <Stack.Screen name='AllStateNhapBen' component={AllStateNhapBenScreen} />
                <Stack.Screen name='TauCa' component={TauCaScreen} />
                <Stack.Screen name='ChiTietTauCa' component={ChiTietTauCaScreen} />
                <Stack.Screen name='ThongTinThuyenVien' component={ThongTinThuyenVienScreen} />
                <Stack.Screen name='ThemThuyenVien' component={ThemThuyenVienScreen} />
                <Stack.Screen name='ThongTinTau' component={ThongTinTauScreen} />
                <Stack.Screen name='ThongSoKyThuat' component={ThongSoKyThuatScreen} />
                <Stack.Screen name='ThongTinGiayChungNhan' component={ThongTinGiayChungNhanScreen} />
                <Stack.Screen name='ThongTinThietBiDinhVi' component={ThongTinThietBiDinhViScreen} />
                <Stack.Screen name='ChuSoHuuVaThuyenVien' component={ChuSoHuuVaThuyenVienScreen} />
                <Stack.Screen name='ThongTinChiTiet' component={ThongTinChiTietScreen} />
                <Stack.Screen name='TabThuyenVien' component={TabThuyenVienScreen} />
                <Stack.Screen name='ChiTietThuyenVien' component={ChiTietThuyenVienScreen} />
                <Stack.Screen name='LocKetQuaThuyenVien' component={LocKetQuaThuyenVienScreen} />
                <Stack.Screen name='LichSuViPham' component={LichSuViPhamScreen} />
                <Stack.Screen name='ChiTietViPham' component={ChiTietViPhamScreen} />
                <Stack.Screen name='LichSuTaiNan' component={LichSuTaiNanScreen} />
                <Stack.Screen name='ChiTietTaiNan' component={ChiTietTaiNanScreen} />
                <Stack.Screen name='CanhBao' component={CanhBaoScreen} />
                <Stack.Screen name='XemThongTinTau' component={XemThongTinTauScreen} />
                {/* cán bộ */}
                <Stack.Screen name='CBHome' component={BottomTabCBHome} />
                <Stack.Screen name='CBThongTinCaNhan' component={CBThongTinCaNhanScreen} />
                <Stack.Screen name='YeuCauXuatNhapBen' component={YeuCauXuatNhapBenScreen} />
                <Stack.Screen name='CBDanhSachTauCa' component={CBDanhSachTauCaScreen} />
                <Stack.Screen name='CBLocKetQua' component={CBLocKetQuaScreen} />
                <Stack.Screen name='CBDanhSachThuyenVien' component={CBDanhSachThuyenVienScreen} />
                <Stack.Screen name='CBChiTietThuyenVien' component={CBChiTietThuyenVienScreen} />
                <Stack.Screen name='CBLichSuViPham' component={CBLichSuViPhamScreen} />
                <Stack.Screen name='CBLocViPham' component={CBLocViPhamScreen} />
                <Stack.Screen name='CBChiTietViPham' component={CBChiTietViPhamScreen} />
                <Stack.Screen name='ThemMoiViPham' component={ThemMoiViPhamScreen} />
                <Stack.Screen name='CBDanhSachTaiNan' component={CBDanhSachTaiNanScreen} />
                <Stack.Screen name='CBLocTaiNan' component={CBLocTaiNanScreen} />
                <Stack.Screen name='CBChiTietTaiNan' component={CBChiTietTaiNanScreen} />
                <Stack.Screen name='ThemMoiTaiNan' component={ThemMoiTaiNanScreen} />
                <Stack.Screen name='CBDanhSachThongBao' component={CBDanhSachThongBaoScreen} />
                <Stack.Screen name='CBChiTietThongBao' component={CBChiTietThongBaoScreen} />
                <Stack.Screen name='ThemMoiThongBao' component={ThemMoiThongBaoScreen} />
                <Stack.Screen name='CBHoiYKienCapTren' component={CBHoiYKienCapTrenScreen} />
                <Stack.Screen name='CBChiTietYKien' component={CBChiTietYKienScreen} />
                <Stack.Screen name='ThemMoiYKien' component={ThemMoiYKienScreen} />
                <Stack.Screen name='CBPhanHoiYKien' component={CBPhanHoiYKienScreen} />
                <Stack.Screen name='CBLocYKien' component={CBLocYKienScreen} />
                <Stack.Screen name='CBDanhSachCang' component={CBDanhSachCangScreen} />
                <Stack.Screen name='ChiTietBen' component={ChiTietBenScreen} />
                <Stack.Screen name='CBChiTietTauCa' component={CBChiTietTauCaScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App
