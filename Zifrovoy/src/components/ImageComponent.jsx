import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ImageComponent = ({source}) => {
    return (
        <Image source={source} />
    )
}

export default ImageComponent

const styles = StyleSheet.create({})