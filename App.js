import { StatusBar } from 'expo-status-bar';
import * as Expo from 'expo';
import React from 'react';
import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import logo from './images/peach.png';

function Screen1({ navigation }) {
  return (
    <View style={styles.content}>
      <View style={styles.container}>
        <Image 
          source={{ uri: logo }}   
          style={{ width: 40, height: 40 }}
        />
        <Text style={styles.title}>
          boodi
        </Text>
        <StatusBar style="auto" />
      </View>
      <View>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Screen2')}
        />
      </View>
    </View>
  );
}

function Screen2({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Screen 2</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#2B302F',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'container',
  },
  container: {
    flex: 1,
    backgroundColor: '#2B302F',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'container',
    flexDirection: 'row'
  },
  title: {
    color: '#FFFFFF',
    fontSize: '40px',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 'bold',
    display: 'inline-flex'
  }
});

export default App;
