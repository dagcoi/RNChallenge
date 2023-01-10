import React, { useState } from "react";
import { AppRegistry, StyleSheet, Text, View } from 'react-native'
import Swiper from 'react-native-swiper'
import color from "../../themes/colors";

export interface ItemAdd {
    background?: string;
    color?: string;
    value: string;

}

interface PropsAds {
    listAdd: ItemAdd[]
    autoplayTimeout?: number
}
const theme = 'default'


export default function Ads(props: PropsAds) {
    const { listAdd, autoplayTimeout } = props;
    return (
        <View style={{ height: 200, borderRadius: 30 }}>
            <Swiper
                style={styles.wrapper}
                loop
                showsPagination={false}
                autoplay
                autoplayTimeout={autoplayTimeout}
            >
                {listAdd.map((item: ItemAdd, index: number) => {
                    return (
                        <View key={index} style={[styles.slide1, { backgroundColor: item.background || '#9DD6EB' }]}>
                            <Text style={[styles.text, { color: item.color || color[theme].white }]}>{item.value}</Text>
                        </View>
                    )
                })}
            </Swiper>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        // backgroundColor: '#9DD6EB'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
})

