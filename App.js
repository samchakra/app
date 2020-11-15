import { StatusBar } from 'expo-status-bar';
import * as Expo from 'expo';
import React from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function Screen1({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Screen 1</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Screen2')}
      />
      <StatusBar style="auto" />
    </View>
  );
}

function Screen2({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Screen 2</Text>
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
