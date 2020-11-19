import React from "react";
const { Alert, View, Text, Image, StyleSheet, Button, Platform } = require("react-native");
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import logo from './peach.png'


function Landing() {

    return(
        <View style={styles.container}>
            <Image 
                source={require( './peach.png' )}   
                style={{width: 60, height: 60}}
            />
            <Text style={styles.title}>
                boodi
            </Text>
            <Button 
                title="LOG IN"
                color='#5AA382'
                onPress={() => alert('Simple Button pressed')}
            />
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
      fontSize: RFValue(40, 580),
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
    }
});
  
export default Landing;