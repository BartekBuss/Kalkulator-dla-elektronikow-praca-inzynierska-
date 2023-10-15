import React from 'react';
import { View, Text } from 'react-native';
import { commonStyles as styles } from './styles/styles';

class StaleCzasowe extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Ekran Stałe Czasowe</Text>
      </View>
    );
  }
}

export default StaleCzasowe;
