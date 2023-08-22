import { View, Text, Pressable, Image, SafeAreaView, ImageBackground } from 'react-native'
import React from 'react'
import COLORS from '../constants/colors';
import Button from '../components/Button';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';


const Welcome = ({ navigation }) => {
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
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
            
            <View style={{ flex: 1 }}>
                {/* content  */}
            
                <View style={{
                    paddingHorizontal: 60,
                    position: "center",
                    top: 300,
                    width: "100%"
                }}>
                    <Text style={{
                        fontSize: 50,
                        fontWeight: 800,
                        fontFamily: 'RobotoSlab-Bold',
                        color: COLORS.black
                    }}>Cùng đi nào</Text>

        
             

                    <Button
                        title="Bắt đầu ngay"
                        onPress={() => navigation.navigate("Signup")}
                        style={{
                            marginTop: 22,
                            width: "100%"
                            
                        }}
                    />

                    <View style={{
                        flexDirection: "row",
                        marginTop: 12,
                        justifyContent: "center"
                    }}>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.black,
                            fontFamily: 'RobotoSlab-Regular'
                        }}>Đã có tài khoản?</Text>
                        <Pressable
                            onPress={() => navigation.navigate("Login")}
                        >
                            <Text style={{
                                fontSize: 16,
                                color: COLORS.black,
                                fontWeight: "bold",
                                fontFamily: 'RobotoSlab-Bold',
                                marginLeft: 4
                            }}>Đăng nhập</Text>
                        </Pressable>

                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Welcome