import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResultsList = ({title, results}) => {
  const { titleStyle } = styles
  return (
    <View>
      <Text style={titleStyle}>{title}</Text>
      <Text>Results:{results.length}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight:'bold'
  }
});

export default ResultsList;
