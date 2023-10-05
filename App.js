import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Image, StyleSheet, View } from 'react-native'
import Form from './src/components/Form'

const App = () => {

  return (
    <View style={styles.container}>
      <Form />
      <StatusBar style='auto' />
    </View>
  )
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    position: 'absolute',
    height: '100%',
    width: '100%'
  }
})

export default App
