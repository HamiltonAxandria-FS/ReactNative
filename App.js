import { StatusBar, } from 'expo-status-bar';
import Heading from './components/Heading';
import styles from './appStyles';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from './Categories';
import Books from './Books';
import { SafeAreaView, Text, Button, TextInput, View } from 'react-native';
import React, { useState, useEffect } from 'react';


function HomeScreen({navigation}) {
  const [authorValue, handleTextInputChangeAuthor] = useState('');
  const [titleValue, handleTextInputChangeTitle] = useState('');
  return (
  <SafeAreaView  style={styles.container}>
  <Text style={styles.headings}> Welcome to the Book Nook! </Text>
  <Heading>Keep track and add all your favorite books here!</Heading>
  <Button title='go to Books' onPress={() => navigation.navigate(Books)}/>
  <View>
      <TextInput
        onChangeText={handleTextInputChangeTitle}
        placeholder="Enter Title Here"
        value={titleValue}
      />
        <TextInput
        onChangeText={handleTextInputChangeAuthor}
        placeholder="Enter Author Here"
        value={authorValue}
      />
       <Button title='submit' onPress={() => newBook(titleValue, authorValue)} />
      {/* Add more properties as needed */}
    </View>
  <StatusBar style="auto" />
</SafeAreaView>
  )
}


const Stack = createNativeStackNavigator();

const handleTextInputChangeAuthor = (text) => {
  setAuthorValue(text);
};

const handleTextInputChangeTitle = (text) => {
  setTitleValue(text);
};


const newBook = (titleValue, authorValue) => {
 
  const formData = { name: titleValue.toString(), author: authorValue.toString() };

      // Make a POST request
      fetch('https://crudapi-5d98520f442b.herokuapp.com/api/v1/books', {
        method: 'POST',
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
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} options={{title: 'Book Nook'}} />
        <Stack.Screen name='Books' component={Books} />
        <Stack.Screen name='Categories' component={Categories} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}