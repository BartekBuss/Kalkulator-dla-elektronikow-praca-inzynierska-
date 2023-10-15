import React from 'react';
import { View, Text } from 'react-native';
import { commonStyles as styles } from './styles/styles';

class CzestotliwoscRezonansowa extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Ekran Częstotliwość Rezonansowa</Text>
      </View>
    );
  }
}

export default CzestotliwoscRezonansowa;
