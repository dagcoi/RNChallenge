import { View, Text, TextStyle } from "react-native";
import React from "react";
import color from "src/themes/colors";
import fontSize from "src/themes/fontSize";

interface PropsAppText {
    value?: string;
    requier?: boolean;
    style?: TextStyle;
}

export default function AppText(props: PropsAppText) {
    const { style, value, requier } = props
    return (
        <Text
            allowFontScaling={false}
            style={[{ fontSize: fontSize.small, fontWeight: '400', color: color.black }, style]} >{value}
            {requier && <Text style={{ color: color.redPri }}>*</Text>}
        </Text>
    );
}
