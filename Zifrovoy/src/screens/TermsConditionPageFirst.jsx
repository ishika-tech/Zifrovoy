import {
  Image, StyleSheet, Text, View, ImageBackground, Pressable, Platform, KeyboardAvoidingView, FlatList
} from 'react-native'
import React, { useState } from 'react'
import Lock from '../assets/Lock.png';
import BackImage from '../assets/back.png'
import { ImageComponent, ButtonComponent, Heading } from '../components/index';
import { useNavigation } from '@react-navigation/native';
import OTPTextInput from 'react-native-otp-textinput';


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Смарт-аккаунт',
    subtitle: 'Каждый кошелек Zifrovoy оснащен смарт-аккаунтом, который действует как надежное хранилище защищенное несколькими ключами для обеспечения безопасности и гибкости',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Личное управление',
    subtitle: 'Zifrovoy полностью обеспечивает самостоятельное хранение, гарантируя, что вы полностью контролируете свои цифровые активы',
  },
];


const Item = ({ title, subtitle }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.subtitle}>{subtitle}</Text>
  </View>
);


const TermsConditionPageFirst = () => {
  const navigation = useNavigation();

  const handlePress = () => {
      navigation.navigate("TermsConditionPageTwo");
  };


  return (
    <ImageBackground source={BackImage} resizeMode="fill" style={styles.backImage}>
      <View style={styles.loginContainer}>
        <View style={styles.contentView}>
          <Heading heading="Как это работает" subheading="Для корректной работы приложения" />
          <View style={[styles.btnView, styles.loginButtonContainer]}>
            <FlatList
              data={DATA}
              renderItem={({ item }) => <Item title={item.title} subtitle={item.subtitle} />}
              keyExtractor={item => item.id}
            />
            <ButtonComponent onPress={handlePress} text="Далее" />
          </View>
        </View>
      </View>
    </ImageBackground>
  )
}

export default TermsConditionPageFirst

const styles = StyleSheet.create({
  backImage: {
    height: "100%",
    justifyContent: "center"
  },
  loginContainer: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    color: "#fffff"
  },
  btnView: {
    width: "90%",
    alignItems: "center"
  },
  loginButtonContainer: {
    gap: 24
  },
  contentView: {
    width: "95%",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: "90%"
  },
  textContainerView: {
    width: "90%",
    paddingTop: 36,
    gap: 16
  },
  textContainer: {
    fontSize: 20,
    color: "#737884"
  },
  textContainer2: {
    color: "#ffffff",
    fontSize: 40,
    fontWeight: "700"
  },
  otpInputContainer: {
    width: '100%',
    justifyContent: 'space-between',
  },
  otpInput: {
    width: "13%",
    height: 65,
    borderColor: '#737884',
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 20,
    color: '#ffffff',
    backgroundColor: '#1c1e24',
    borderWidth: 1,
  },
  errorInput: {
    borderColor: 'red', 
  },
  errorText: {
    color: 'red',
    marginTop: 10,
    fontSize: 16
  },
  item: {
    padding: 20,
    marginVertical: 8,
    borderWidth: 2,
    borderRadius: 18,
    width: "100%",
    borderColor: "#0C47FF14",
  },
  title: {
    fontSize: 22,
    color: "#ffffff"
  },
  subtitle: {
    color: "#D9DADE"
  }
});
