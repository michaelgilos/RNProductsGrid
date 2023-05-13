/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import {Image, SafeAreaView, StatusBar, StyleSheet, Text} from 'react-native';
import ProductList from './features/product/ProductList';

const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle="dark-content" />

        {/* <Text>Product Grid</Text>
      <Text>But first, a word from our sponsors:</Text>
      <Image
        source={{
          uri: `http://localhost:8000/ads/?r=${Math.floor(Math.random()*1000)}`,
        }}
        style={styles.ads}
      /> */}
        <ProductList />
      </SafeAreaView>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  ads: {height: 100, width: 100},
});

export default App;
