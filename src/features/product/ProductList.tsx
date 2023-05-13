import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {formatDistance, isSameWeek} from 'date-fns';
import {useGetAllProducts} from './hooks/useGetAllProducts';

type ItemProps = {
  id: string;
  title: string;
  thumbnail: string;
  price: number;
  rating: number;
  date: string;
};
const Item = ({title, thumbnail, price, rating, date}: ItemProps) => {
  const dateAdded = new Date(date);
  const dateFormat = isSameWeek(dateAdded, new Date())
    ? formatDistance(dateAdded, new Date(), {
        addSuffix: true,
      })
    : dateAdded.toLocaleDateString();
  return (
    <View style={styles.item}>
      <Text style={styles.itemTitle}>{title}</Text>
      <Image style={styles.imageThumbnail} source={{uri: thumbnail}} />
      <Text style={styles.itemText}>{`Price: $${price.toLocaleString(
        'en-US',
      )}`}</Text>
      <Text style={styles.itemText}>{`Date Added: ${dateFormat}`}</Text>
    </View>
  );
};

const ProductList = () => {
  const {data, isLoading, refetch} = useGetAllProducts();

  if (isLoading) {
    return <Text style={{color: 'black'}}>loading...</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={{margin: 10}}
        refreshing={isLoading}
        data={data}
        renderItem={({item}) => <Item {...item} />}
        numColumns={2}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  item: {
    backgroundColor: '#f9c2ff',
    width: '50%',
    padding: 20,
    margin: 2,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemText: {
    fontSize: 12,
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
  },
});
