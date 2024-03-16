import React from 'react';
import { StyleSheet, Text, Image, SafeAreaView, FlatList, TouchableOpacity, View } from "react-native";
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
			 <Image
                source={{ uri: 'https://media.discordapp.net/attachments/1201588977401077911/1218181860970987590/up1.png?ex=6606bb44&is=65f44644&hm=a16c029526e325534dce016f9368d1fa667dc817799a1b0539477f06ffeae0fa&=&format=webp&quality=lossless&width=713&height=619' }} // Replace with your image URL
                style={styles.image}
            />
			<View style={styles.buttonContainer}>
    			<TouchableOpacity onPress={pickImageGallery} style={styles.button}>
        			<Text style={{ color: '#fff' }}>Pick an image from gallery</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={pickImageCamera} style={styles.button}>
					<Text style={{ color: '#fff' }}>Take a photo</Text>
				</TouchableOpacity>
			</View>

			<StatusBar style="auto" /> 
			<View style={{justifyContent: 'center', alignItems: 'center', marginTop: 50}}>
				<ChatGPT textFromImage={extractedText}/>
			</View>
		</SafeAreaView> 
	); 
} 

const styles = StyleSheet.create({ 
	container: { 
		flex: 1, 
		alignContent: "center",  
		justifyContent: "center", 
		backgroundColor: "#fdf1bc", 
		//paddingTop: 50,
	}, 
	heading2: { 
		fontSize: 35,  
		marginBottom: 4, 
		color: "#ff6262", 
		textAlign: "center", 
		fontWeight: 'bold',
		marginBottom: 55,
	},
	text1: { 
		fontSize: 16, 
		marginBottom: 10, 
		color: "black", 
	},
	buttonContainer: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	button: {
		// marginTop: -65,
		// marginVertical: -10,
		// marginHorizontal: 30,
		marginVertical: 10,
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
	},
	// 	width: '80%', // Adjust width here
	// 	maxWidth: 300, // Add maxWidth for responsiveness
	// },
	image: {
        position: 'absolute',
        top: -50,
        left: 30,
        width: 200, // Adjust width as needed
        height: 200, // Adjust height as needed
        resizeMode: 'contain', // or 'contain' or 'stretch' as per your requirement
    },
});
