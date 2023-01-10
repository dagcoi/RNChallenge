import { View, Text, StatusBar, SafeAreaView } from "react-native";
import React from "react";
import AppText from "../../components/AppText";
import color from "../../themes/colors";
import Ads, { ItemAdd } from "./Ads";

export default function HomeScreen() {
    const theme = 'default'

    const listAdd: ItemAdd[] = [
        {
            value: 'Thông báo nghỉ tết',
            background: color[theme].redPri,
            color: color[theme].white,
        },
        {
            value: 'Chia hành lý',
            background: color[theme].green,
            color: color[theme].white,
        },
        {
            value: 'Đi dã ngoại',
            background: color[theme].black,
            color: color[theme].white,
        },
        {
            value: 'Hoạt động đầu tuần',
            background: color[theme].primary,
            color: color[theme].white,
        }
    ]

    return (
        <SafeAreaView style={{ backgroundColor: color[theme].whitesecondary }}>
            <AppText value="Home" />
            <View style={{ padding: 8 }}>
                <Ads
                    listAdd={listAdd}
                    autoplayTimeout={5}
                />
            </View>
            <AppText value="Home" />
        </SafeAreaView>
    );
}
