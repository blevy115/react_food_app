import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
  const [term ,setTerm] = useState("");
  const [searchApi, results, error] = useResults();

  const filterResultsByPrice = (price) => {
    // price = '$' | '$$ '| '$$$'
    return results.filter(result => result.price === price)
  }

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      <Text>We have found {results.length} results</Text>
      { error ? <Text>{error}</Text> : null }
      <ResultsList title="Cost Effective" results={filterResultsByPrice('$')}/>
      <ResultsList title="Bit Pricier" results={filterResultsByPrice('$$')}/>
      <ResultsList title="Big Spender" results={filterResultsByPrice('$$$')}/>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
