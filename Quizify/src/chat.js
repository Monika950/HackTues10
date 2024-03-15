import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import Button from '../components/Button';
import {globalVariable} from '../globals';
import {Link} from 'expo-router';

const ChatGPT = ({textFromImage}) => {
    const apiKey = '###';
    const apiUrl = 'https://api.openai.com/v1/chat/completions';

    const handleSend = async () => {
      console.log('aa');
      var questions;

      console.log(textFromImage, typeof textFromImage);

      const response = await axios.post(apiUrl, {
          
            model: "gpt-3.5-turbo",
            messages: [
              {
                role: "system",
                content: "You are a helpful assistant."
              },
              {
                role: "user",
                content: "Generate two questions with 4 answers based on this text. The format should be JSON and it should have a is_correct value for each answer." + textFromImage
              }
            ],
            max_tokens: 300,
          },
          //stop: ["."]
       {
          headers: {
              'Authorization': `Bearer ${apiKey}`,
              'Content-Type': 'application/json',
          }
      }).then(response => {
        console.log(response);
          questions = response;
          globalVariable.GPTOutput = response.data.choices[0].message.content;
          console.log(globalVariable.GPTOutput);
      })
      .catch(error => {
          console.log(error);
      });

      console.log('bb');
  };

  return (
    <Link href={'/quizScreen'} asChild>
      <Button text="Send" onPress={handleSend} />
    </Link>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default ChatGPT;

