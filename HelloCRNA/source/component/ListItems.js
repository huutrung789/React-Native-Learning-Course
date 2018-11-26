import React from 'react'
import {View, StyleSheet, Text, TouchableHighlight, Image} from 'react-native'

const listItem = (props) => {
    return (
        <View style = {styles.container}>
            <TouchableHighlight style = {styles.button} onPress = {props.onItemPress}>
                <Text style = {styles.text}> {props.place.name} </Text>
            </TouchableHighlight>

            <Image style = {styles.image}
                   source = {{uri: 'https://facebook.github.io/react/logo-og.png'}} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 10
    },
    button: {
        width: "80%",
        backgroundColor: '#999'
    },
    image: {
        width: "20%",
        height: 30,
        resizeMode: 'contain'
    },
    text: {
        flex: 1,
        textAlign: 'center'
    }, 
    
})
export default listItem