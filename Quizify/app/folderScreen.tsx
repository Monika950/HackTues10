import { View, StyleSheet, FlatList, Image,Text } from 'react-native';
import React from 'react';
import images from '../assets/folderImages/folder';
import { globalVariable2 } from './folderIndex';
import { Link } from 'expo-router';
import {  TouchableOpacity,  ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { AntDesign } from '@expo/vector-icons';

const FolderScreen = () => {

  const folderIndex = globalVariable2.Index;
  console.log(folderIndex);
  const filteredImages = images.filter(image => image.folder === folderIndex);
  return (
    
    <View style={styles.body}>
       <Link href="/two" style={styles.backButton}>
        {/* <Text style={styles.backButtonText}>Back to Index</Text> */}
        <AntDesign name="back" size={28} color="black" />
      </Link>
    <View style={styles.container}>
      <FlatList
        data={filteredImages}
        numColumns={2} 
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: item.image }}
              style={styles.image}
            />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
  },
  flatListContent: {
    flexGrow: 1,
    justifyContent: 'top',
  },
  imageContainer: {
    flex: 1,
    aspectRatio: 1, 
    margin: 7, 
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  body: {
    flex: 1,
    backgroundColor: '#dcdcdc',
  },
  backButton: {
    alignSelf: 'center',
    marginVertical: 20,
    paddingTop:30,
  },
  backButtonText: {
    color: '#007BFF',
    fontSize: 16,
  },
});

export default FolderScreen;