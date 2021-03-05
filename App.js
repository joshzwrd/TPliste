import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  SafeAreaView,
  FlatList, 
  ActivityIndicator
  
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
   
} from 'react-native/Libraries/NewAppScreen';

const listeURL = "https://randomuser.me/api/?results=50&nat=fr";

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);


  useEffect(() => {
      fetch(listeURL)
      .then((response) => response.json())
      .then((json) => setData(json.results))
      .catch((error) => alert(error))
      .finally(() => setLoading(false));
  }, []);





  return (
    <SafeAreaView style={styles.container}>
      {isLoading ?( <ActivityIndicator />
      ) : (
      
      <FlatList data={data} 
      keyExtractor={({ id }, index) => id}
      renderItem={({ item }) => (
        <View style={{paddingBottom: 10}}> 
        <Text style={styles.listeText} >
          {item.name.first}
          {item.name.last}
        </Text>
        </View>
      )}
      />
      )}

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  listeText: {
    fontSize: 26,
    fontWeight: "200",
  },
  title: {
    fontSize: 32,
    fontWeight: "200",
  }

});

export default App;
