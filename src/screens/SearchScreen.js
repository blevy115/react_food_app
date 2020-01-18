import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
  const [term ,setTerm] = useState("");
  const [searchApi, results, error, latitude, longitude] = useResults();
  const filterResultsByPrice = (price) => {
    // price = '$' | '$$ '| '$$$'
    return results.filter(result => result.price === price)
  }

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term, latitude, longitude)}
      />
      { error ? <Text>{error}</Text> : null }
      <ScrollView>
        <ResultsList title="Cost Effective" results={filterResultsByPrice('$')}
        />
        <ResultsList title="Bit Pricier" results={filterResultsByPrice('$$')}
        />
        <ResultsList title="Big Spender" results={filterResultsByPrice('$$$')}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
