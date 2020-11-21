import React from "react";
const { Alert, View, Text, Image, StyleSheet, Button, Platform, TouchableOpacity } = require("react-native");


function Create({ navigation }) {

    return( 
        <View>
            ON MAC OS NOW MF
            <TouchableOpacity
                style={styles.loginScreenButton}
                onPress={() => navigation.navigates('Landing')}
                underlayColor='#FFFFFF'>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    loginScreenButton:{
        marginRightss:40,
        marginLeft:40,
        marginTop:10,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'#5AA382',
        borderRadius:10,
        borderWidth: 1,
        borderColor: "transparent"
    },
    loginText:{
        color:'#fff',
        textAlign:'center',
        paddingLeft : 10,
        paddingRight : 10,
        fontFamily: 'Arial',
        fontWeight: "bold"
    }
});

export default Create;