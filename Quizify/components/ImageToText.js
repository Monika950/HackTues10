import React from 'react';
import { Button, StyleSheet, Text, Image, SafeAreaView, FlatList, } from "react-native";
import { StatusBar } from "expo-status-bar"; 
import { useState } from "react"; 
import * as ImagePicker from "expo-image-picker";  
import ChatGPT from '@/src/chat';

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
		var temp;
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
				temp = extractedText + result["all_text"];
				//console.log(temp);
				console.log('1');
				setExtractedText(temp);
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

			<Text style={styles.text1}> 
				Extracted text: 
			</Text> 
			<Text style={styles.text1}> 
				{extractedText} 
			</Text> 
			<StatusBar style="auto" /> 
			<ChatGPT textFromImage={extractedText}/>
		</SafeAreaView> 
	); 
} 

const styles = StyleSheet.create({ 
	container: { 
		display: "flex", 
		alignContent: "center", 
		// alignItems: "center", 
		justifyContent: "space-evenly", 
		// backgroundColor: "#fff", 
		height: "100%", 
	}, 
	heading: { 
		// fontSize: 28, 
		// fontWeight: "bold", 
		// marginBottom: 10, 
		// color: "green", 
		// textAlign: "center", 
	}, 
	heading2: { 
		// fontSize: 22, 
		// fontWeight: "bold", 
		// marginBottom: 10, 
		// color: "black", 
		// textAlign: "center", 
	}, 
	text1: { 
		// fontSize: 16, 
		// marginBottom: 10, 
		// color: "black", 
		// fontWeight: "bold", 
	}, 
});

