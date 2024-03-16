
import React from 'react';
import { StyleSheet, Text, Image, SafeAreaView, FlatList, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar"; 
import { useState } from "react"; 
import * as ImagePicker from "expo-image-picker";  
import ChatGPT from '@/src/chat';
import Button from '../components/Button';
import {Link} from 'expo-router'
import { MaterialIcons } from '@expo/vector-icons';


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

			setImage(result.assets[0].uri);  // tuk se zapazva
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
			setImage(result.assets[0].uri); //tuk se zapazva 
		} 
	}; 

	const performOCR = (file) => { 
		var temp;
		let myHeaders = new Headers(); 
		myHeaders.append( 
			"apikey", 
			"###"
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
		<Link href={"/(tabs)/two"} style={styles.storage}>
		<MaterialIcons name="storage" size={28} color="#696969" />
		</Link>
			<Text style={styles.heading2}> 
				Quizify 
			</Text> 
			<TouchableOpacity onPress={pickImageGallery} style={styles.button}>
        		<Text style={{ color: '#fff' }}>Pick an image from gallery</Text>
      		</TouchableOpacity>
			<TouchableOpacity onPress={pickImageCamera} style={styles.button}>
        		<Text style={{ color: '#fff' }}>Take a photo</Text>
      		</TouchableOpacity> 
			<StatusBar style="auto" /> 
			<ChatGPT textFromImage={extractedText}/>
		</SafeAreaView> 
	); 
} 

const styles = StyleSheet.create({ 
	container: { 
		display: "flex 1", 
		alignContent: "center",  
		justifyContent: "space-evenly", 
		backgroundColor: "#fdf1bc", 
		height: "100%", 
	}, 
	heading: { 
		fontSize: 16, 
		fontWeight: "bold", 
		marginBottom: 8, 
		color: "green", 
		textAlign: "center", 
	}, 
	heading2: { 
		fontSize: 24,  
		marginBottom: 8, 
		color: "#ff6262", 
		textAlign: "center", 
		fontWeight: 'bold',
		marginBottom: 55
	}, 
	text1: { 
		fontSize: 16, 
		marginBottom: 10, 
		color: "black", 
	},
	button: {
		marginTop: -65,
		marginVertical: -10,
		marginHorizontal: 30,
		alignItems: 'center',
		backgroundColor: '#ff6262',
		padding: 15,
		borderRadius: 1000,
		width: 300
	},
	storage:
	{
		position: 'absolute',
		top: 20,
		right: 20,
		paddingTop:30,
	}
});