import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import Button from '../components/Button';

const ChatGPT = () => {
  const [data, setData] = useState([]);
  const apiKey = '###';
  const apiUrl = 'https://api.openai.com/v1/chat/completions';

    const handleSend = async () => {
      // Define the prompt instructing the API to generate questions and answers
      const prompt = `Generate two questions with 4 options each, one of which is correct, based on the following text:\n\n"Capital of France is Paris. Capital of Spain is Madrid."`;
      
      console.log('aa');
      var temp;

      // Send the prompt to the API
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
          //prompt: prompt,
          max_tokens: 300, // Adjust as needed
          stop: ["."] // Stop token to ensure the response ends at the end of a sentence
      }, {
          headers: {
              'Authorization': `Bearer ${apiKey}`,
              'Content-Type': 'application/json',
          }
      }).then(response => {
          temp = response
          console.log(response);
      })

      
      // Extract questions and options from the API response
      try {
        console.log(temp.data.choices[0].message.content);
      } catch (error) {
        console.log(error);
      }

      console.log('bb');
      
      // const questions = temp.map(choice => {
      //     const text = choice.text;
      //     // Regular expression to extract questions and options
      //     const regex = /(\d+)\. ([^\?]+\?) \(([^,]+), ([^,]+), ([^,]+), ([^,]+)\)/g;
      //     let match;
      //     const questionData = [];
      //     while ((match = regex.exec(text)) !== null) {
      //         const question = match[2];
      //         const options = [match[3], match[4], match[5], match[6]];
      //         questionData.push({ question, options });
      //     }
      //     return questionData;
      // }).flat(); // Flatten the array of questions
      
      // Format the response
      // const formattedResponse = questions.map(({ question, options }) => ({
      //     question,
      //     options,
      //     correctAnswer: options[0] // Assuming the correct answer is always the first option
      // }));
  
      // Update state with the response
      setData([...data, { type: 'bot', response: formattedResponse }]);
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ChatGPT</Text>
      <FlatList
        data={data.filter(item => item.type === 'bot')}
        renderItem={({ item }) => (
          <View style={styles.messageContainer}>
            <Text style={styles.botMessage}>{item.text}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />

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
