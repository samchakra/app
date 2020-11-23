import React from "react";
const { Alert, View, Text, Image, StyleSheet, Button, Platform, TouchableOpacity } = require("react-native");


function Landing({ navigation }) {

    return(
        <View style={styles.container}>
            <Image 
                source={require( './peach.png' )}   
                style={{width: 60, height: 60}}
            />
            <Text style={styles.title}>
                boodi 
            </Text>
            <Text>
                on mac os
            </Text>
            <TouchableOpacity
                style={styles.loginScreenButton}
                onPress={() => navigation.navigate('Create')}
                underlayColor='#FFFFFF'>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFC0B4',
      //backgroundImage: 'linear-gradient(#FFC0B4, #FFCCB4, #FFD8B4)',
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      flexDirection: 'column'
    },
    title: {
      color: '#5AA382',
      fontSize: 45,
      //fontFamily: 'Montserrat, sans-serif',
      //fontFamily: Platform.OS === 'ios' ? 'sans-serif': '',
      ...Platform.select({
          ios: {
              fontFamily: 'GeezaPro-Bold'
          },
          android: {
              fontFamily: 'Roboto'
          },
          default: {
              fontFamily: 'Arial'
          }
      }),
      fontWeight: 'bold',
      display: 'flex',
    },
    loginScreenButton:{
        marginRight:40,
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
  
export default Landing;