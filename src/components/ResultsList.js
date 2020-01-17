import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultDetail from './ResultDetail';

const ResultsList = ({title, results, navigation}) => {
  const { titleStyle, containerStyles } = styles
  return (
    <View style={containerStyles}>
      <Text style={titleStyle}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        renderItem={({ item }) => {
          return (
              <TouchableOpacity
                onPress={() => navigation.navigate('ResultsShow', { id: item.id })}
              >
                <ResultDetail result={item}/>
              </TouchableOpacity>
          );
        }}
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

export default withNavigation(ResultsList);
