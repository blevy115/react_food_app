import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
  const [term ,setTerm] = useState("");
  const [searchApi, results, error] = useResults();

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      <Text>We have found {results.length} results</Text>
      { error ? <Text>{error}</Text> : null }
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
