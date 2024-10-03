import { Pressable, StyleSheet, Text, View } from 'react-native';
import ImageComponent from './ImageComponent';
import MailIcon from '../assets/Mailicon.png';
import React from 'react';

const ButtonComponent = ({ onPress, text, icon, disabled }) => {
    return (
        <Pressable
            style={[styles.btnComponent, disabled ? styles.disabledButton : styles.enabledButton]} 
            onPress={onPress}
            disabled={disabled} 
        >
            {icon ? <ImageComponent source={MailIcon} /> : null}
            <Text style={[styles.btnComponentText, disabled ? styles.disabledText : styles.enabledText]}>{text}</Text>
        </Pressable>
    );
};

export default ButtonComponent;

const styles = StyleSheet.create({
    btnComponent: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        padding: 12,
        width: '100%',
        borderRadius: 32,
        justifyContent: 'center',
    },
    disabledButton: {
        backgroundColor: '#606675', 
        opacity: 4
    },
    enabledButton: {
        backgroundColor: 'white', 
    },
    btnComponentText: {
        fontSize: 18,
        fontWeight: '800',
    },
});
