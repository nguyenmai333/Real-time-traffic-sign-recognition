import { View, Text, Image , Pressable, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../constants/colors';
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox"
import Button from '../components/Button';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';

const Login = ({ navigation }) => {
    const [isPasswordShown, setIsPasswordShown] = useState(true);
    const [isChecked, setIsChecked] = useState(false);
    const [fontsLoaded, fontError] = useFonts({
        'RobotoSlab-Bold': require('../assets/Font/RobotoSlab-Bold.ttf'),
        'RobotoSlab-Regular': require('../assets/Font/RobotoSlab-Regular.ttf'),
      });
    
      const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
          await SplashScreen.hideAsync();
        }
      }, [fontsLoaded, fontError]);
    
      if (!fontsLoaded && !fontError) {
        return null;
      }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <View style={{ flex: 1, marginHorizontal: 22,marginVertical:40  }}>
                <View style={{ marginVertical: 22 }}>
                    <Text style={{
                        fontSize: 32,
                        marginVertical: 12,
                        fontFamily: 'RobotoSlab-Bold',
                        color: COLORS.black
                    }}>
                        Đăng nhập
                    </Text>

                    <Text style={{
                        fontSize: 18,
                        fontFamily: 'RobotoSlab-Regular',
                        color: COLORS.black
                    }}>Chào mừng bạn đã trở lại! 👋</Text>
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        fontFamily: 'RobotoSlab-Regular',
                        marginVertical: 8
                    }}>Tên đăng nhập</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='Tên đăng nhập của bạn'
                            placeholderTextColor={COLORS.grey}
                            keyboardType='email-address'
                            style={{
                                width: "100%",
                                fontFamily: 'RobotoSlab-Regular'
                            }}
                        />
                    </View>
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        fontFamily: 'RobotoSlab-Regular',
                        marginVertical: 8
                    }}>Mật khẩu</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='●●●●●●●●●●●●●●'
                            placeholderTextColor={COLORS.grey}
                            secureTextEntry={isPasswordShown}
                            style={{
                                width: "100%",
                                fontFamily: 'RobotoSlab-Regular'
                            }}
                        />

                        <TouchableOpacity
                            onPress={() => setIsPasswordShown(!isPasswordShown)}
                            style={{
                                position: "absolute",
                                right: 12
                            }}
                        >
                            {
                                isPasswordShown == true ? (
                                    <Ionicons name="eye-off" size={24} color={COLORS.black} />
                                ) : (
                                    <Ionicons name="eye" size={24} color={COLORS.black} />
                                )
                            }

                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{
                    flexDirection: 'row',
                    marginVertical: 6
                }}>
                    <Checkbox
                        style={{ marginRight: 8 }}
                        value={isChecked}
                        onValueChange={setIsChecked}
                        color={isChecked ? COLORS.black : undefined}
                       
                    />

                    <Text style={{fontFamily: 'RobotoSlab-Regular'}}>Lưu tài khoản</Text>
                </View>

                <Button
                    title="Đăng nhập"
                    onPress={() => navigation.navigate("Choose")}
                    filled
                    style={{
                        marginTop: 18,
                        marginBottom: 4,
                    }}
                />

                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
                    <View
                        style={{
                            flex: 1,
                            height: 1,
                            backgroundColor: COLORS.grey,
                            marginHorizontal: 10
                        }}
                    />
                    <Text style={{ fontSize: 14 , fontFamily: 'RobotoSlab-Regular'}}>Nếu bạn chưa có tài khoản</Text>
                    <View
                        style={{
                            flex: 1,
                            height: 1,
                            backgroundColor: COLORS.grey,
                            marginHorizontal: 10
                        }}
                    />
                </View>
                <Button
                    title="Đăng ký"
                    onPress={() => navigation.navigate("Signup")}
                    filled
                    style={{
                        marginTop: 4,
                        marginBottom: 4,
                    }}
                />
                </View>
        </SafeAreaView>
    )
}
export default Login