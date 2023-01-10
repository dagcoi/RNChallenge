import { Text, TextStyle } from "react-native";
import React from "react";
import fontSize from "../../themes/fontSize";
import color from "../../themes/colors";

interface PropsAppText {
    value?: string;
    requier?: boolean;
    style?: TextStyle;
}

export default function AppText(props: PropsAppText) {
    const { style, value, requier } = props
    const theme = 'default'
    return (
        <Text
            allowFontScaling={false}
            style={[{ fontSize: fontSize.small, fontWeight: '400', color: color[theme].textColor }, style]} >{value}
            {requier && <Text style={{ color: color[theme].redPri }}>*</Text>}
        </Text>
    );
}
