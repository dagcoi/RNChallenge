import { View, Text } from "react-native";
import React, { useState } from "react";
import AppText from "../../components/AppText";
import Input from "../../components/Input";
import ButtonFull from "../../components/Button/ButtonFull";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
    const [user, setUser] = useState<string>('')
    const [pass, setPass] = useState<string>('')
    const navigation = useNavigation()

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 }}>
            {/* <AppText
                value={'Chào mừng đến với hệ thống'}
            /> */}
            <Input
                value={user}
                onChangeText={(text: string) => setUser(text)}
                placeholder={'Tài khoản'}
                marginTop
            />
            <Input
                value={pass}
                onChangeText={(text: string) => setPass(text)}
                placeholder={'Mật khẩu'}
                marginTop
            />
            <ButtonFull
                value={'Đăng nhập'}
                onPress={() => {
                    console.log('...', user, '...', pass)
                    // navigation.navigate('Home', {});
                }}
            />
        </View>
    );
}
