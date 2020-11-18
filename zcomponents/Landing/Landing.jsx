import React from "react";
const { Alert, View, Text, Image, StyleSheet, Button } = require("react-native");
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import logo from './peach.png'


function Landing() {

    return(
        <View style={styles.container}>
            <Image 
                source={{ uri: logo }}   
                style={styles.logo}
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
      backgroundImage: 'linear-gradient(#FFC0B4, #FFCCB4, #FFD8B4)',
      alignItems: 'center',
      justifyContent: 'center',
      display: 'container',
      flexDirection: 'column'
    },
    title: {
      color: '#5AA382',
      fontSize: RFValue(40, 580),
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 'bold',
      display: 'inline-flex',
      marginBottom: '50px', 
    },
    logo: {
        width: '60px',
        height: '60px'
    }
});
  
export default Landing;