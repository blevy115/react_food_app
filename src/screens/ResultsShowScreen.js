import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Linking, Button } from 'react-native';
import MapView from 'react-native-maps';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult ] = useState(null);
  const id = navigation.getParam('id');

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`)
    setResult(response.data);
  }

  useEffect(() => {
    getResult(id)
  }, []);

  if(!result) {
    return null
  }
  return (
    <View style={{flex:1}}>
      <Text style={{alignSelf:'center', fontSize:25, fontWeight:'bold'}}>{result.name}</Text>
      <View style={styles.phoneContainerStyle}>
        <Text style={{alignSelf:'center'}}>Phone number:</Text>
        <Button title={result.display_phone}onPress={() => {Linking.openURL(`tel:${result.phone}`)}}> {result.display_phone}</Button>
      </View>
      <MapView style={styles.mapStyle} />
      <FlatList
        data={result.photos}
        keyExtractor = {photo => photo}
        renderItem = {({ item }) => {
          return <Image source={{ uri:item}} style={styles.image}/>
        }}
      />
    </View>
  )

}

const styles = StyleSheet.create({
  image:{
    height:200,
    width:300,
  },
  mapStyle: {
    width: 300,
    height: 300,
  },
  phoneContainerStyle:{
    flexDirection:'row',
    justifyContent:"center"
  },

});

export default ResultsShowScreen;
