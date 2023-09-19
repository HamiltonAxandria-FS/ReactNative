import React, { useState, useEffect } from 'react';
import { Text, Button, View } from 'react-native';
import { FlatList } from 'react-native-web';
import styles from './appStyles';


export default function Books({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    fetch('https://crudapi-5d98520f442b.herokuapp.com/api/v1/books/', {
          method: 'GET', })
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
      console.log('books', data)
  }, []);

  const goToCategoryScreen = (_id) => {
    
    console.log('id clicked ', _id)
    navigation.navigate('Categories', { param1: _id });
  };
  

  return (
    <View style={{ flex: 1, padding: 24 }}>
     {isLoading ? <Text>Loading...</Text> : (
    <View>
      <Text style={styles.headings} >Books</Text>
      <Text style={styles.smallHeadings} >All your Favorites....</Text>
      <Button style={styles.bookButton} title='Go to Home' onPress={() => navigation.navigate('Home')} />
      <Button title='Go to Categories' onPress={() => navigation.navigate('Categories')}  />
      <FlatList style={styles.bookButton} 
            data={data}
            keyExtractor={({ _id }, index) => _id}
            renderItem={({ item }) => (
              <Button title={item.author + '. ' + item.name} onPress={() => goToCategoryScreen(item._id)} />
            )}
          />
    </View>
         )}
  </View>
  );
}



