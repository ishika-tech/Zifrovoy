import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Heading = ({heading, subheading}) => {
    return (
        <View style={styles.textContainerView}>
            <Text style={styles.textContainer2}>{heading}</Text>
            <Text style={styles.textContainer}>{subheading}</Text>
        </View>
    )
}

export default Heading

const styles = StyleSheet.create({
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
})