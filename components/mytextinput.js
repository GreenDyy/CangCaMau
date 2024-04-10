import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity, Modal } from 'react-native'
import { icons, images } from '../constants/manager'
import { Calendar } from 'react-native-calendars';
import SelectDropdown from 'react-native-select-dropdown'
// guige {none, delete, calendar, dropdown}

const MyTextInput = ({
    type,
    header,
    value,
    setValue = () => { },
    editable,
}) => {
    const [showCalendar, setShowCalendar] = useState(false)
    return (
        <View style={{ borderBottomWidth: 1, borderBottomColor: '#D6D6D6', flex: 1 }}>
            <Text style={{ fontSize: 12 }}>{header}</Text>
            <View style={{ flexDirection: 'row' }}>
                <TextInput style={{
                    fontSize: 16,
                    color: editable ? 'black' : '#828282',
                    marginVertical: -10,
                    width: '97%',
                }}
                    placeholder="--" placeholderTextColor={'black'}
                    value={value}
                    onChangeText={(curtext) => setValue(curtext)}
                    editable={editable}
                />
                {
                    type !== 1 &&
                    <TouchableOpacity style={{ alignSelf: 'center', position: 'absolute', bottom: 7, right: 0 }}
                        onPress={() => {
                            type === 'delete' && setValue('')
                            type === 'calendar' && setShowCalendar(true)
                        }}>
                        {type === 'delete' && <Image source={icons.delete} resizeMode="contain" style={{ height: 10, width: 10 }} />}
                        {type === 'calendar' && <Image source={icons.calendar} resizeMode="contain" style={{ height: 10, width: 10 }} />}
                        {type === 'dropdown' && <Image source={icons.dropdown} resizeMode="contain" style={{ height: 10, width: 10 }} />}
                    </TouchableOpacity>
                }
            </View>

            {/* calendar */}
            <Modal
                animationType="fade"
                transparent={true}
                visible={showCalendar}>

                <View style={{ backgroundColor: 'gray', padding: 10, borderRadius: 30, marginTop: '40%', marginHorizontal: 20 }}>
                    <View>
                        <Calendar style={{ borderTopRightRadius: 30, borderTopLeftRadius: 30 }}
                            onDayPress={day => {
                                setValue(day.dateString)
                            }}
                            markedDates={{
                                [value]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
                            }}
                        />
                    </View>

                    <TouchableOpacity style={{ marginTop: 10, borderRadius: 10, paddingVertical: 10, backgroundColor: 'white', marginHorizontal: 100 }}
                        onPress={() => setShowCalendar(!showCalendar)}>
                        <Text style={{ textAlign: 'center', fontWeight: 'bold', color: 'black' }}>Đóng</Text>
                    </TouchableOpacity>
                </View>
            </Modal>

        </View>
    )
}

export default MyTextInput