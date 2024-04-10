import React from "react";
import {
    View,
    Text
} from 'react-native'

const XuatBen = () => (
    <Text style={{ fontSize: 10, color: 'white', backgroundColor: '#FD397A', borderRadius: 2, paddingHorizontal: 10, marginRight: 5 }}>Xuất bến</Text>
)

const NhapBen = () => (
    <Text style={{ fontSize: 10, color: 'white', backgroundColor: '#2B13C0', borderRadius: 2, paddingHorizontal: 10, marginRight: 5 }}>Nhập bến</Text>
)

// tinhtrang
const TrongBo = () => (
    <Text style={{ fontSize: 10, color: 'white', backgroundColor: '#FF820F', borderRadius: 8, paddingHorizontal: 10 }}>Trong bờ</Text>
)
const NgoaiBien = () => (
    <Text style={{ fontSize: 10, color: 'white', backgroundColor: '#459AC9', borderRadius: 8, paddingHorizontal: 10 }}>Ngoài biển</Text>
)
const ChoXacNhanXuatBen = () => (
    <Text style={{ fontSize: 10, color: 'white', backgroundColor: '#583CFF', borderRadius: 8, paddingHorizontal: 10 }}>Chờ xác nhận xuất bến</Text>
)

const ChoXacNhanNhapBen = () => (
    <Text style={{ fontSize: 10, color: 'white', backgroundColor: '#FF9F47', borderRadius: 8, paddingHorizontal: 10 }}>Chờ xác nhận nhập bến</Text>
)
const DuocTiepNhan = () => (
    <Text style={{ fontSize: 10, color: 'white', backgroundColor: '#FFC737', borderRadius: 8, paddingHorizontal: 10 }}>Được tiếp nhận</Text>
)
const TuChoi = () => (
    <Text style={{ fontSize: 10, color: 'white', backgroundColor: '#F62825', borderRadius: 8, paddingHorizontal: 10 }}>Từ chối</Text>
)
const ChoTiepNhanYeuCau = () => (
    <Text style={{ fontSize: 10, color: 'white', backgroundColor: '#0ABB87', borderRadius: 8, paddingHorizontal: 10 }}>Chờ tiếp nhận yêu cầu</Text>
)

const KhongDuocXuatBen = () => (
    <Text style={{ fontSize: 10, color: '#F62825', borderColor: '#F62825', borderWidth: 1, borderRadius: 8, paddingHorizontal: 10 }}>Không được xuất bến</Text>
)

const KhongDuocNhapBen = () => (
    <Text style={{ fontSize: 10, color: '#F62825', borderColor: '#F62825', borderWidth: 1, borderRadius: 8, paddingHorizontal: 10 }}>Không được nhập bến</Text>
)

export {
    XuatBen, NhapBen, TrongBo, NgoaiBien, ChoXacNhanNhapBen, ChoXacNhanXuatBen, DuocTiepNhan, TuChoi, ChoTiepNhanYeuCau, KhongDuocNhapBen, KhongDuocXuatBen
}