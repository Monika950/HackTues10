import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  curve: {
    width: '100%',
    height: "100%",
    position: 'absolute',
    opacity: 0.7,
  },
  container: {
    // display: 'flex',
    // // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  up1: {
    width: 170,
    height: 170,
    position: 'absolute',
    opacity: 1,
  },
  down1: {
    width: 130,
    height: 130,
    bottom: -270,
    right: -270,
    position: 'relative',
    opacity: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '90%',
  },
  scrollView: {
    marginHorizontal: 20,
  },
  image: {
    width: '100%',
    height: "100%",
    position: 'absolute',
  }
});
