import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const SearchBar = () => {
  const { backgroundStyle, inputStyle, iconStyle  } = styles

  return (
    <View style={backgroundStyle}>
      <Ionicons name="md-search" style={iconStyle}/>
      <TextInput
        placeholder="Search"
        style={inputStyle}
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
