import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import Button from '../components/Button';
import {globalVariable} from '../globals';
import { useNavigation } from '@react-navigation/native';

const ChatGPT = () => {
  //const [data, setData] = useState([]);
    const apiKey = '###';
    const apiUrl = 'https://api.openai.com/v1/chat/completions';

    const navigation = useNavigation();

    const handleSend = async () => {
      console.log('aa');
      var questions;

      const response = await axios.post(apiUrl, {
          model: 'gpt-3.5-turbo',
          response_format: { "type": "json_object" },
          "messages": [
            {
              "role": "system",
              "content": "You are a geography teacher and want to examine your students. You will be given text and want to generate questions and 4 answers for each based on it. You should put them in JSON format with a variable that tells whether the answer is correct."
            },
            {
              "role": "user",
              "content": "Capital of France is Paris. Capital of Spain is Madrid."
            }
          ],
          max_tokens: 300,
          stop: ["."]
      }, {
          headers: {
              'Authorization': `Bearer ${apiKey}`,
              'Content-Type': 'application/json',
          }
      }).then(response => {
          questions = response;
          globalVariable.GPTOutput = response.data.choices[0].message.content;
          console.log(globalVariable.GPTOutput);
      })
      .catch(error => {
          console.log(error);
      });

      console.log('bb');

      navigation.navigate('three');

      //setData([...data, { type: 'bot', response: formattedResponse }]);
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ChatGPT</Text>
      <Button text="Send" onPress={handleSend} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  messageContainer: {
    marginBottom: 10,
  },
  botMessage: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
    maxWidth: '80%',
  },
});

export default ChatGPT;
