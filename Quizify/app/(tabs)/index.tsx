import { StyleSheet } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import ImageToText from '@/components/ImageToText';

import ChatGPT from '../../src/chat'

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <ChatGPT/>
      <ImageToText />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
