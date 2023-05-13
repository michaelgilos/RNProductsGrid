/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Image, SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />

      <Text>Product Grid</Text>
      <Text>But first, a word from our sponsors:</Text>
      <Image
        source={{
          uri: `http://localhost:8000/ads/?r=${Math.floor(Math.random()*1000)}`,
        }}
        style={styles.ads}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  ads: {height: 100, width: 100},
});

export default App;
