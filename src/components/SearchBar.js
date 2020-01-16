import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
  const { backgroundStyle, inputStyle, iconStyle  } = styles

  return (
    <View style={backgroundStyle}>
      <Ionicons name="md-search" style={iconStyle}/>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        style={inputStyle}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
        value={term}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle:{
    marginTop:10,
    backgroundColor:'#F0EEEE',
    height:50,
    borderRadius:5,
    marginHorizontal:10,
    flexDirection:'row',
  },
  inputStyle:{
    flex: 1,
    fontSize:20
  },
  iconStyle:{
    fontSize:35,
    alignSelf:'center',
    marginHorizontal:10
  }
});

export default SearchBar;
