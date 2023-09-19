import React, { useState, useEffect } from 'react';
import styles from './appStyles';
import { Text, Button, TextInput, View } from 'react-native';
import { useRoute } from '@react-navigation/native';



// fetch('https://crudapi-5d98520f442b.herokuapp.com/api/v1/books')
// .then(res => res.json())
// .then(data => console.log({data}))

export default function Categories({ navigation }) {
  const [inputValue, setInputValue] = useState('');
  const route = useRoute();
  const { param1 } = route.params;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  console.log('from cat page', param1)

  // GET REQUEST
  const baseUrl = 'https://crudapi-5d98520f442b.herokuapp.com/api/v1/books/'
  const finalUrl = baseUrl + param1; 

  useEffect(() => {
    fetch(finalUrl , {
      method: 'GET', })
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
      console.log('categories', data)
  }, []);

  const handleTextInputChange = (text) => {
    setInputValue(text);
  };

  const changeTitle = (_id) => {
    // Navigate to ScreenB with parameters
    const baseUrl = 'https://crudapi-5d98520f442b.herokuapp.com/api/v1/books/'
    const finalUrl = baseUrl + param1; 
      const formData = { name: inputValue.toString() };
      // Make a POST request
      fetch(finalUrl, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (response.ok) {
          } else {
            console.error('Failed to create user');
          }
        })
        .catch((error) => {
          console.error('Error creating user:', error);
        });
        navigation.navigate('Books');
  };


  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <Text style={styles.headings} >Here's Your Book: </Text>
      <Text style={styles.smallHeadings} >Item Title: {data.name}</Text>
      <Text style={styles.smallHeadings} >Item Description: {data.author}</Text>
      <TextInput
        onChangeText={handleTextInputChange}
        placeholder="Enter new title here..."
        value={inputValue}
      />
       <Button title='submit' onPress={() => changeTitle(param1)} />
    </View>
  );



}

