import { View, TextInput, StyleSheet } from "react-native";
import React from "react";
import color from "../../themes/colors";
import fontSize from "../../themes/fontSize";

interface PropsInput {
    value: string,
    onChangeText?: any,
    placeholder?: string;
    marginTop?: boolean;
}
const theme = 'default'
export default function Input(props: PropsInput) {
    const { value, onChangeText, placeholder, marginTop } = props
    return (
        <View style={[styles.viewInput, { marginTop: marginTop ? 10 : 0 }]}>
            <TextInput
                style={styles.font}
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    viewInput: {
        height: 40,
        flexDirection: 'row',
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: color[theme].boder,
        borderRadius: 10,
    },
    font: {
        flex: 1,
        fontSize: fontSize.small,
        color: color[theme].textColor,
    }
})
