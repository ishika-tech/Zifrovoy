import {
    Image, StyleSheet, Text, View, ImageBackground, Pressable, Platform, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard
} from 'react-native';
import React, { useState } from 'react';
import Lock from '../assets/Lock.png';
import BackImage from '../assets/back.png';
import { ImageComponent, ButtonComponent, Heading } from '../components/index';
import { useNavigation } from '@react-navigation/native';
import OTPTextInput from 'react-native-otp-textinput';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import { verifyOTP } from '../config/authSignal';

const OtpPage = () => {
    const navigation = useNavigation();
    const [otp, setOtp] = useState(''); 
    const [error, setError] = useState(false); 
    const [loading, setLoading] = useState(false);

    const handlePress = async () => {
        setLoading(true);
        setError(false);

        try {
            const result = await verifyOTP({ email: "zifrovoy1@yopmail.com", otp: otp }); // Await the verification result
            console.log("Verification Result:", result);

            if (result === 1) {
                navigation.navigate("Permission"); 
            } else {
                setError(true); 
            }
        } catch (error) {
            console.error("Error during OTP verification:", error);
            setError(true); 
        } finally {
            setLoading(false); 
        }
    };

    const handleOTPChange = (text) => {
        setOtp(text);
        if (error) {
            setError(false); 
        }
    };

    const isButtonDisabled = otp.length < 6 || loading;

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ImageBackground source={BackImage} resizeMode="cover" style={styles.backImage}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0} 
                    style={styles.keyboardAvoidingView}
                >
                    <View style={styles.loginContainer}>
                        <ImageComponent source={Lock} />
                        <View style={styles.contentView}>
                            <Heading heading="Введите свой инвайт код" subheading="Введите свой код или используйте ссылку" />
                            <View style={[styles.btnView, styles.loginButtonContainer]}>
                                <OTPTextInput
                                    handleTextChange={handleOTPChange} 
                                    inputCount={6} 
                                    tintColor={error ? "red" : "#737884"}
                                    offTintColor={error ? "red" : "#737884"} 
                                    containerStyle={styles.otpInputContainer}
                                    textInputStyle={[styles.otpInput, error && styles.errorInput]}
                                />
                                {error && (
                                    <Text style={styles.errorText}>Введенный код не действетелен</Text>
                                )}
                                <ButtonComponent onPress={handlePress} text={loading ? "Проверка..." : "Далее"} disabled={isButtonDisabled} />
                            </View>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </ImageBackground>
        </TouchableWithoutFeedback>
    );
}

export default OtpPage;

const styles = StyleSheet.create({
    backImage: {
        height: "100%",
        justifyContent: "center"
    },
    keyboardAvoidingView: {},
    loginContainer: {
        height: responsiveHeight(70),
        width: responsiveWidth(100),
        alignItems: "center",
        justifyContent: "center",
        color: "#fffff"
    },
    btnView: {
        width: responsiveWidth(85),
        alignItems: "center"
    },
    loginButtonContainer: {
        gap: 24
    },
    contentView: {
        width: responsiveWidth(95),
        alignItems: "center",
        justifyContent: "space-around",
        height: responsiveHeight(60)
    },
    otpInputContainer: {
        width: responsiveWidth(85),
        justifyContent: 'space-between',
    },
    otpInput: {
        width: responsiveWidth(11),
        height: 65,
        borderColor: '#737884',
        borderRadius: 8,
        textAlign: 'center',
        fontSize: 20,
        color: '#ffffff',
        backgroundColor: 'transparent', 
        borderWidth: 1,
    },
    errorInput: {
        borderColor: 'red',
    },
    errorText: {
        color: 'red',
        marginTop: 10,
        fontSize: 16
    }
});
