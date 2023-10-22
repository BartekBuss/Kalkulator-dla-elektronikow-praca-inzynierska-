// styles.js

import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const mainMenuStyles = StyleSheet.create({
  ...commonStyles,

  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: width * 0.04,
    backgroundColor: '#f1f1f1',
    marginBottom: height * 0.01,
    width: '90%',
    borderRadius: 10,
    elevation: 10,
  },
  buttonText: {
    fontSize: width * 0.04,
  },
  buttonImage: {
    width: width * 0.1,
    height: width * 0.1 * (4 / 3),
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
});
