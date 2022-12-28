import { View, Image, StyleSheet, TextStyle } from "react-native";
import React from "react";
import color from "../../themes/colors";
import fontSize, { pixel } from "../../themes/fontSize";
import AppText from "../AppText";
interface PropsAvatar {
    link?: string;
    name?: string;
    height?: number;
    size?: number | undefined;
}

export default function Avatar(props: PropsAvatar) {
    const { link, name, height, size } = props
    return (
        <View style={[height ? { width: height, height: height, borderRadius: height / 2 } : styles.avatar, { justifyContent: 'center', alignItems: 'center' }]}>
            {link ? <Image
                source={{ uri: link }}
                style={height ? { width: height, height: height, borderRadius: height / 2 } : styles.avatar}
            /> : <AppText
                style={{ color: color.white, fontWeight: 'bold', fontSize: size || fontSize.large }}
                value={name?.charAt(0).toUpperCase()}
            />}
        </View>
    );
}

const styles = StyleSheet.create({
    avatar: {
        backgroundColor: color.primary,
        width: pixel.height60,
        height: pixel.height60,
        borderRadius: pixel.eight
    }
})


