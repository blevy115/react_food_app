import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ResultDetail from './ResultDetail';

const ResultsList = ({title, results}) => {
  const { titleStyle, containerStyles } = styles
  return (
    <View style={containerStyles}>
      <Text style={titleStyle}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        renderItem={({ item }) => <ResultDetail result={item}/>}
        keyExtractor = {item => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight:'bold',
    marginLeft:10,
    marginBottom:5,
  },
  containerStyles:{
    marginBottom: 10
  }
});

export default ResultsList;
