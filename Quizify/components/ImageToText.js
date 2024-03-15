import React from 'react';
import { StyleSheet, Text, Image, SafeAreaView, FlatList,Pressable } from "react-native";
import { StatusBar } from "expo-status-bar"; 
import { useState } from "react"; 
import * as ImagePicker from "expo-image-picker";  
import ChatGPT from '@/src/ChatGPT';
import Button from '../components/Button';
import { Slot, useRouter, useSegments,Link } from 'expo-router';


const imageToTextAPI = process.env.IMAGE_TO_TEXT_API

export default function GetText() { 
	const router = useRouter()
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

			setImage(result.assets[0].uri);  //tuk se zapazva
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
			imageToTextAPI,
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

	// const NavStorage = () => {
	// 	router.replace('../app/(tabs)/list')
	//   }

	return ( 
		<SafeAreaView style={styles.container}> 
			<Link href="../app/(tabs)/list" >
            <Pressable>
              <Text>Storage</Text>
            </Pressable>
           {/* // <Button onPress={NavStorage } title="Storage" ></Button> */}
          </Link>
			<Text style={styles.heading2}> 
				Image to Text App 
			</Text> 
			<Button 
				text="Pick an image from gallery"
				onPress={pickImageGallery}
			/> 
			<Button 
				text="Pick an image from camera"
				onPress={pickImageCamera} 
			/> 
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
		backgroundColor: "#fff", 
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
		fontSize: 16,  
		marginBottom: 8, 
		color: "black", 
		textAlign: "center", 
	}, 
	text1: { 
		fontSize: 16, 
		marginBottom: 10, 
		color: "black", 
	}, 
});
