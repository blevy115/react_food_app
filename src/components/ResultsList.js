import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ResultDetail from './ResultDetail';

const ResultsList = ({title, results}) => {
  const { titleStyle } = styles
  return (
    <View>
      <Text style={titleStyle}>{title}</Text>
      <Text>Results:{results.length}</Text>
      <FlatList
        horizontal
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
    fontWeight:'bold'
  }
});

export default ResultsList;
