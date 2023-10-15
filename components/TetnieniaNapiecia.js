import React from 'react';
import { View, Text } from 'react-native';
import { commonStyles as styles } from './styles/styles';

class TetnieniaNapiecia extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Ekran Tętnienia Napięcia</Text>
      </View>
    );
  }
}

export default TetnieniaNapiecia;
