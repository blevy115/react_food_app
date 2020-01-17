import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ResultDetail = ({result}) => {
  const {image_url, name, rating, review_count} = result;
  const {imageStyles, nameStyles} = styles
  return (
    <View>
      <Image
        source={{uri:image_url}}
        style={imageStyles}
      />
      <Text style={nameStyles}>{name}</Text>
      <Text>{rating} Star, {review_count} Reviews</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  imageStyles: {
    width:250,
    borderRadius:5,
    height:120,
  },
  nameStyles: {
    fontWeight:'bold',
  },
});

export default ResultDetail;
