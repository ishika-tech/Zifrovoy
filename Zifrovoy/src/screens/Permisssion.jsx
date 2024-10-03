import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    Image,
    StyleSheet,
    TouchableOpacity,
    Alert,
} from 'react-native';

import { ButtonComponent, Heading, ImageComponent } from '../components/index'
import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
const rnBiometrics = new ReactNativeBiometrics({ allowDeviceCredentials: true });
import BackImage from '../assets/back.png'
import Gear from '../assets/Gear.png'
import ToggleBtn from '../assets/switch.png'
import { setPasskey, verifyPasskey } from '../config/authSignal';


export default function Permission() {
    const [isEnabled, setIsEnabled] = useState(false);
    const navigation = useNavigation();
    const handleFaceId = () => {
        
        rnBiometrics.isSensorAvailable().then(resultObject => {
            console.log(rnBiometrics);
            
            const { available, biometryType } = resultObject;
            console.log(BiometryTypes);
            
            if (available && biometryType === BiometryTypes.FaceID) {
                console.log('FaceID is supported');
                authenticateBiometrics('Face ID');
            } else if (available && biometryType === BiometryTypes.TouchID) {
                console.log('TouchID is supported');
                authenticateBiometrics('Touch ID');
            } else if (available && biometryType === BiometryTypes.Biometrics) {
                console.log('Generic biometrics is supported');
                authenticateBiometrics('Biometrics');
            } else {
                console.log('Biometrics not supported');
                Alert.alert(
                    'Error',
                    'Biometric authentication is not supported on this device.',
                );
            }
        });
    };
    const authenticateBiometrics = biometryType => {
        
        rnBiometrics
            .simplePrompt({ promptMessage: `Authenticate with ${biometryType}` })
            .then(resultObject => {
                const { success } = resultObject;
                console.log("object", resultObject);
                
                if (success) {
                    console.log(`${biometryType} authentication succeeded!`);
                    Alert.alert('Success', `${biometryType} authentication succeeded!`);
                } else {
                    console.log(`${biometryType} authentication failed`);
                    Alert.alert('Failed', `${biometryType} authentication failed`);
                }
            })
            .catch(() => {
                console.log(`${biometryType} authentication error`);
                Alert.alert('Error', `${biometryType} authentication error`);
            });
    };

    const handlePress = () => {
        navigation.navigate("TermsConditionPageFirst");
    };

    return (
        <ImageBackground
            source={BackImage}
            style={styles.container}>
            <Heading heading="Настройте доступы" subheading="Для корректной работы приложения " />
            <View style={styles.gearContainer}>
                <ImageComponent source={Gear} />
            </View>
            <View style={styles.faceIdContainer}>
                <View style={styles.toggleContainer}>
                    <TouchableOpacity onPress={handleFaceId}>
                        <Image
                            style={styles.toggle}
                            source={ToggleBtn}
                        />
                    </TouchableOpacity>
                    <Text style={styles.faceIdText}>Face ID</Text>
                </View>
                <View style={styles.toggleContainer}>
                    <TouchableOpacity onPress={handleFaceId}>
                        <Image
                            style={styles.toggle}
                            source={ToggleBtn}
                        />
                    </TouchableOpacity>
                    <Text style={styles.faceIdText}>Уведомления</Text>
                </View>
            </View>
            <ButtonComponent onPress={handlePress} text="Далее" />
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        gap: 70,
    },
    headingContainer: {
        gap: 10,
        paddingVertical: 20,
    },
    gearImage: {
        width: 200,
        height: 180,
        resizeMode: 'contain',
    },
    gearContainer: {
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 30,
    },
    heading: {
        color: '#FFFFFF',
        fontSize: 40,
        fontWeight: 'bold',
    },
    para: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    faceIdText: {
        color: '#FFFFFF',
        fontSize: 18,
    },
    toggleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },
    toggle: {
        width: 40,
        height: 50,
        resizeMode: 'contain',
    },
    button: {
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        width: '100%',
    },
    buttonText: {
        color: '#000000',
        fontSize: 20,
        textAlign: 'center',
        padding: 18,
    },
});











