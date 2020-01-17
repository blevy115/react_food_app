import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ResultDetail = ({result}) => {
  const {image_url, name, rating, review_count} = result;
  const {imageStyles, nameStyles, containerStyles} = styles
  return (
    <View style={containerStyles}>
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
    marginBottom:5,
  },
  nameStyles: {
    fontWeight:'bold',
  },
  containerStyles:{
    marginLeft:10,
    width:250,
  }
});

export default ResultDetail;
