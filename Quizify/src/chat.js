import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import Button from '../components/Button';
import { globalVariable } from '../globals';
//import ImageToText from '../components/ImageToText'; // Import your GetText component

const ChatGPT = ({textFromImage}) => {
  const apiKey = '###';
  const apiUrl = 'https://api.openai.com/v1/chat/completions';

  //const [extractedText, setExtractedText] = useState(""); // State to store extracted text

  const handleSend = async () => {
    // Extracted text from GetText component
	
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
          "content": {textFromImage} // Pass the extracted text here
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
      globalVariable.GPTOutput = response.data.choices[0].message.content;
      console.log(globalVariable.GPTOutput);
    })
    .catch(error => {
      console.log(error);
    });

	console.log(textFromImage);
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>ChatGPT</Text>
      {/* Display the extracted text */}
      {/* {extractedText && <Text>Extracted Text: {extractedText}</Text>} */}

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

});

export default ChatGPT;


/*

import React from 'react';
import { Button, StyleSheet, Text, Image, SafeAreaView, } from "react-native";
import { StatusBar } from "expo-status-bar"; 
import { useState } from "react"; 
import * as ImagePicker from "expo-image-picker";  

export default function GetText() { 
	const [image, setImage] = useState(null); 
	
	const [extractedText, setExtractedText] = useState(""); 

	const pickImageGallery = async () => { 
		let result = 
			await ImagePicker.launchImageLibraryAsync({ 
				mediaTypes: 
					ImagePicker.MediaTypeOptions.Images, 
				allowsEditing: true, 
				base64: true, 
				allowsMultipleSelection: false, 
			}); 
		if (!result.canceled) { 

			performOCR(result.assets[0]); 
			
			// Set the selected image in state 
			setImage(result.assets[0].uri); 
		} 
	}; 

	// Function to capture an image using the 
	// device's camera 
	const pickImageCamera = async () => { 
		let result = await ImagePicker.launchCameraAsync({ 
			mediaTypes: ImagePicker.MediaTypeOptions.Images, 
			allowsEditing: true, 
			base64: true, 
			allowsMultipleSelection: false, 
		}); 
		if (!result.canceled) { 
		
			// Perform OCR on the captured image 
			// Set the captured image in state 
			performOCR(result.assets[0]); 
			setImage(result.assets[0].uri); 
		} 
	}; 

	// Function to perform OCR on an image 
	// and extract text 
	const performOCR = (file) => { 
		let myHeaders = new Headers(); 
		myHeaders.append( 
			"apikey", 
			
			// ADDD YOUR API KEY HERE 
			"FEmvQr5uj99ZUvk3essuYb6P5lLLBS20"
		); 
		myHeaders.append( 
			"Content-Type", 
			"multipart/form-data"
		); 

		let raw = file; 
		let requestOptions = { 
			method: "POST", 
			redirect: "follow", 
			headers: myHeaders, 
			body: raw, 
		}; 

		// Send a POST request to the OCR API 
		fetch( 
			"https://api.apilayer.com/image_to_text/upload", 
			requestOptions 
		) 
			.then((response) => response.json()) 
			.then((result) => { 
			
				// Set the extracted text in state 
				setExtractedText(result["all_text"]); 
			}) 
			.catch((error) => console.log("error", error)); 
	}; 

	return ( 
		<SafeAreaView style={styles.container}> 
			<Text style={styles.heading2}> 
				Image to Text App 
			</Text> 
			<Button 
				title="Pick an image from gallery"
				onPress={pickImageGallery} 
			/> 
			<Button 
				title="Pick an image from camera"
				onPress={pickImageCamera} 
			/> 
			{image && ( 
				<Image 
					source={{ uri: image }} 
					style={{ 
						width: 400, 
						height: 300, 
						objectFit: "contain", 
					}} 
				/> 
			)} 

			<Text style={styles.text1}> 
				Extracted text: 
			</Text> 
			<Text style={styles.text1}> 
				{extractedText} 
			</Text> 
			<StatusBar style="auto" /> 
		</SafeAreaView> 
	); 
} 

const styles = StyleSheet.create({ 
	container: { 
		display: "flex", 
		alignContent: "center", 
		alignItems: "center", 
		justifyContent: "space-evenly", 
		backgroundColor: "#fff", 
		height: "100%", 
	}, 
	heading: { 
		fontSize: 28, 
		fontWeight: "bold", 
		marginBottom: 10, 
		color: "green", 
		textAlign: "center", 
	}, 
	heading2: { 
		fontSize: 22, 
		fontWeight: "bold", 
		marginBottom: 10, 
		color: "black", 
		textAlign: "center", 
	}, 
	text1: { 
		fontSize: 16, 
		marginBottom: 10, 
		color: "black", 
		fontWeight: "bold", 
	}, 
});

*/ 
