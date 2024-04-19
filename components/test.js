const TextInputCustom = ({
  label,
  value,
  setValue = () => { },
  otherFunc = () => { },
  isShowIconRight = true,
  iconRightData = IMAGES.ic_delete_text_input,
  iconRightStyle,
  containerStyle,
  placeholder = '--',
  editable = true,
}) => {
  return (
    <View style={[{ paddingHorizontal: 12, marginBottom: 15 }, containerStyle]}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.container}>
        <TextInput
          editable={editable}
          value={value}
          onChangeText={setValue}
          placeholder={placeholder}
          placeholderTextColor="#333333"
          style={{
            flex: 1,
            marginVertical: -10,
            marginStart: -3,
            fontSize: 16,
            color: '#333333',
          }}
        />
        {isShowIconRight == true ? (
          <TouchableOpacity
            onPress={
              iconRightData == IMAGES.ic_delete_text_input
                ? () => setValue('')
                : otherFunc
            }>
            <Image
              source={iconRightData}
              style={[{ width: 10, height: 10 }, iconRightStyle]}
            />
          </TouchableOpacity>
        ) : (
          <></>
        )}
      </View>
    </View>
  );
};