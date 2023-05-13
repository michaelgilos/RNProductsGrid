import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {formatDistance, isSameWeek} from 'date-fns';
import {useGetAllProducts} from './hooks/useGetAllProducts';
import {AirbnbRating, Rating} from 'react-native-ratings';

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
      <Rating
        startingValue={rating}
        ratingTextColor="teal"
        readonly={true}
        imageSize={20}
        style={{alignItems: 'flex-start'}}
      />
    </View>
  );
};

const LoadingAnim = () => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Text style={{color: 'black'}}>loading...</Text>
    <ActivityIndicator size={'large'} />
  </View>
);

const ProductList = () => {
  const {data, isLoading, refetch} = useGetAllProducts();

  if (isLoading) {
    return <LoadingAnim />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListEmptyComponent={<Text style={{color: 'black'}}>loading...</Text>}
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
    alignSelf: 'center',
    height: 100,
    width: 100,
  },
});
