import React from 'react';
import { StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Text, View } from '@/components/Themed';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link } from 'expo-router';
import { globalVariable2 } from '../folderIndex';

// Custom component for the folder
const FolderComponent = ({ name1, onPress }) => {
  var temp = name1;
  temp = temp.slice(0, -1);
  return (
    <Link href="/folderScreen" asChild>
    <TouchableOpacity onPress={onPress} style={styles.folderContainer}>
      <FontAwesome
        name="folder"
        color={'#ff6262'}
        size={40} // Increase icon size
        style={{ marginRight: 15, opacity: 0.8}}
      />
      <Text style={styles.folderName}>{temp}</Text>
    </TouchableOpacity>
    </Link>
  );
};

export default function TabTwoScreen() {
  // Function to handle press on folder
  const handleFolderPress = (folderName) => {
    console.log('Folder pressed:', folderName);
    globalVariable2.Index = Number(folderName[folderName.length - 1]);
    // Add your logic here
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Render five folder components */}
      <FolderComponent name1="16th March5" onPress={() => handleFolderPress('Folder 5')} />
      <FolderComponent name1="15th March1" onPress={() => handleFolderPress('Folder 1')} />
      <FolderComponent name1="14th March2" onPress={() => handleFolderPress('Folder 2')} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  folderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20, // Increase padding
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 10, // Increase margin bottom
    width: '100%',
  },
  folderIcon: {
    width: 40, // Increase icon size
    height: 40, // Increase icon size
    marginRight: 15,
  },
  folderName: {
    fontSize: 20, // Increase font size
    color: '#0f0f0f'
  },
});
