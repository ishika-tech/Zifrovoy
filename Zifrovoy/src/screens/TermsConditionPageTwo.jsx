import {
    Image, StyleSheet, Text, View, ImageBackground, Pressable, Platform, KeyboardAvoidingView, FlatList
} from 'react-native'
import React, { useState } from 'react'
import Shield from '../assets/Shield.png';
import BackImage from '../assets/back.png'
import { ImageComponent, ButtonComponent, Heading } from '../components/index';
import { useNavigation } from '@react-navigation/native';
import OTPTextInput from 'react-native-otp-textinput';


const Item = ({ title, subtitle }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
);


const TermsConditionPageTwo = () => {
    const navigation = useNavigation();
    const [otp, setOtp] = useState(''); 
    const [error, showError] = useState(false);

    const handlePress = () => {
            navigation.navigate("TermsConditionPageThree");
    };

    
    const handleOTPChange = (text) => {
        setOtp(text);
        if (error) {
            showError(false); 
        }
    };

    return (
        <ImageBackground source={BackImage} resizeMode="fill" style={styles.backImage}>
            <View style={styles.loginContainer}>
                <View style={styles.contentView}>
                    <Heading heading="Ключ восстановления" subheading="В вашем кошельке Zifrovoy используются ключи восстановления, чтобы вы всегда могли получить доступ к своей учетной записи" />
                    <ImageComponent source={Shield} />
                    <Text style={styles.textContainer}>Вы можете успешно восстановить доступ к своей учетной записи, если у вас есть доступ к одному активному ключу и одному ключу восстановления</Text>
                    <View style={[styles.btnView, styles.loginButtonContainer]}>
                        <ButtonComponent onPress={handlePress} text="Далее" />
                        <Pressable onPress={handlePress}><Text style={styles.pressableTextBtn}>Сделать потом</Text></Pressable>
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}

export default TermsConditionPageTwo

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
    pressableTextBtn: {
        color: "#D9DADE",
        fontSize: 17,
    },
    textContainer: {
        fontSize: 20,
        color: "#737884",
        width: "90%",
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
