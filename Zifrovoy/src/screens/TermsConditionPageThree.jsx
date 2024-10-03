import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { Heading, ButtonComponent } from '../components/index'
import BackImage from '../assets/back.png'
import Cloud from '../assets/Cloud.png'
import Profile from '../assets/Profile.png'
import Phone from '../assets/Phone.png'
import Select from '../assets/Select.png'
import Unselect from '../assets/Unselect.png'


export default function TermsConditionPageThree() {
    
    const [selectedItems, setSelectedItems] = useState([]);
    
    const handleSelect = id => {
        if (selectedItems.includes(id)) {
            setSelectedItems(prevSelected => prevSelected.filter(item => item !== id));
        } else {
            
            setSelectedItems(prevSelected => [...prevSelected, id]);
        }
    };
    return (
        <ImageBackground
            style={styles.container}
            source={BackImage}>
            <Heading heading="Ключ восстановления" />
            
            <View>
                <View style={styles.mainBox}>
                    <View style={styles.textBox}>
                        <Text style={styles.text1}>Облачный ключ</Text>
                        <Text style={styles.text2}>
                            Каждый кошелек Zifrovoy оснащен смарт-аккаунтом
                        </Text>
                    </View>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => handleSelect(1)} 
                        style={styles.imageContainer}>
                        <Image source={Cloud} />
                        {selectedItems.includes(1) ? ( 
                            <Image
                                style={styles.badge}
                                source={Select}
                            />
                        ) : (
                            <Image
                                style={styles.badge}
                                source={Unselect}
                            />
                        )}
                    </TouchableOpacity>
                </View>
               
                <View style={styles.mainBox}>
                    <View style={styles.textBox}>
                        <Text style={styles.text1}>Доверительный ключ</Text>
                        <Text style={styles.text2}>
                            Zifrovoy полностью обеспечивает самостоятельное
                        </Text>
                    </View>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => handleSelect(2)} // Pass unique ID for this item
                        style={styles.imageContainer}>
                        <Image source={Profile} />
                        {selectedItems.includes(2) ? ( // Check if the item is selected
                            <Image
                                style={styles.badge}
                                source={Select}
                            />
                        ) : (
                            <Image
                                style={styles.badge}
                                source={Unselect}
                            />
                        )}
                    </TouchableOpacity>
                </View>
                
                <View style={styles.mainBox}>
                    <View style={styles.textBox}>
                        <Text style={styles.text1}>Ключ на устройстве</Text>
                        <Text style={styles.text2}>
                            Zifrovoy полностью обеспечивает самостоятельное
                        </Text>
                    </View>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => handleSelect(3)} // Pass unique ID for this item
                        style={styles.imageContainer}>
                        <Image source={Phone} />
                        {selectedItems.includes(3) ? ( // Check if the item is selected
                            <Image
                                style={styles.badge}
                                source={Select}
                            />
                        ) : (
                            <Image
                                style={styles.badge}
                                source={Unselect}
                            />
                        )}
                    </TouchableOpacity>
                </View>
            </View>
            <ButtonComponent text="Далее" />
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    container: {
        height: "100%",
        paddingHorizontal: 20,
        justifyContent: 'space-evenly',
        gap: 10,
    },
    mainBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 18,
        paddingVertical: 12,
        paddingHorizontal: 12,
        marginBottom: 24,
        width: "100%",
        borderColor: "#0C47FF14",
    },
    textBox: {
        flexDirection: 'column',
        width: '60%',
        gap: 5,
        justifyContent: 'flex-start',
    },
    text1: {
        color: '#FFFFFF',
        fontSize: 22,
        fontWeight: 'bold',
    },
    text2: {
        color: '#FFFFFF',
        fontSize: 13,
    },
    button: {
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'center',
    },
    imageContainer: {
        backgroundColor: '#26272B',
        padding: 20,
        borderRadius: 20,
    },
    badge: {
        position: 'absolute',
        right: 0,
    },
});











