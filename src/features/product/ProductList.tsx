import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  Image,
  Text,
} from 'react-native';
import {useGetAllProducts} from './hooks/useGetAllProducts';

const ProductList = () => {
  const {data, isLoading, refetch, isError, isSuccess} = useGetAllProducts();

  if (!isLoading) {
    return (
      <View style={styles.container}>
        <Text>loading...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View style={{flex: 1, flexDirection: 'column', margin: 1}}>
            <Image
              style={styles.imageThumbnail}
              source={{uri: item.thumbnail}}
            />
          </View>
        )}
        numColumns={3}
        keyExtractor={(item, index) => index}
      />
    </SafeAreaView>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
});
