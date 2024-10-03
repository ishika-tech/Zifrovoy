import { Image, StyleSheet, Text, View, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import LoginLogo from '../assets/logo.png';
import BackImage from '../assets/back.png'
import { ImageComponent, ButtonComponent } from '../components/index';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import { SafeAreaView } from 'react-native-safe-area-context';
import { sendOTPVerification } from '../config/authSignal';

const Login = () => {
  console.log(LoginLogo, "LoginPage");
  const navigation = useNavigation();

  
  const handlePress = async () => {
    await sendOTPVerification({email:"zifrovoy1@yopmail.com"})
    navigation.navigate("OtpPage"); 
  };

  return (
    <SafeAreaView >
      <ImageBackground source={BackImage} resizeMode="fill" style={styles.backImage}>
        <View style={styles.loginContainer}>
          <ImageComponent source={LoginLogo} />
          <View style={styles.contentView}>
            <View style={styles.textContainerView}>
              <Text style={styles.textContainer}>Как в банке</Text>
              <Text style={styles.textContainer2}>Управляй своими <Text style={styles.textContainerInner2}>крипто</Text>-активами просто как никогда раньше*</Text>
            </View>
            <View style={[styles.btnView, styles.loginButtonContainer]}>
              <ButtonComponent onPress={handlePress} text="Создать новый кошелек" icon={true} />
              <Pressable onPress={handlePress}><Text style={styles.pressableTextBtn}>Создать новый кошелек</Text></Pressable>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  backImage: {
    height: responsiveHeight(100),
    justifyContent: "center"
  },
  loginContainer: {
    height: responsiveHeight(90),
    width: "100%",
    alignItems: "center",
    // justifyContent: "space-between",
    color: "#fffff"
  },
  btnView: {
    width: responsiveWidth(90),
    alignItems: "center"
  },
  pressableTextBtn: {
    color: "#D9DADE",
    fontSize: responsiveFontSize(2.3),
  },
  loginButtonContainer: {
    gap: 12
  },
  contentView: {
    width: responsiveWidth(95),
    alignItems: "center",
    justifyContent: "space-between",
    height: responsiveHeight(60)
  },
  textContainerView: {
    width: responsiveWidth(90),
    paddingTop: 36
  },
  textContainer: {
    fontSize: responsiveFontSize(3),
    color: "#737884"
  },
  textContainer2: {
    color: "#ffffff",
    fontSize: responsiveFontSize(5)
  },
  textContainerInner2: {
    fontWeight: "700"
  }
})