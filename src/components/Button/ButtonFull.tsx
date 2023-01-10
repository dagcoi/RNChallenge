import { TouchableOpacity, Text, StyleSheet } from "react-native";
import React from "react";
import { pixel } from "../../themes/fontSize";
import AppText from "../AppText";
import color from "../../themes/colors";

interface PropsButton {
    value: string;
    onPress?: any
}
const theme = 'default'


export default function ButtonFull(props: PropsButton) {
    const { value, onPress } = props
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
        >
            <AppText
                value={value}
                style={{ color: color[theme].white, fontWeight: 'bold', }}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        height: pixel.nine,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color[theme].green,
        marginTop: 10,
        borderRadius: 10
    }
})
