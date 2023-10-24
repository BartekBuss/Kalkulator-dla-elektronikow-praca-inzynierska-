import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { mainMenuStyles as styles } from './styles/styles';

class StaleCzasowe extends React.Component {
  handleFunctionSelection = (functionNumber) => {
    const { navigation } = this.props;

    switch (functionNumber) {
      case 1:
        navigation.navigate('RCScreen'); // Przekierowanie do ekranu RC
        break;
      case 2:
        navigation.navigate('RLScreen'); // Przekierowanie do ekranu RL
        break;
      case 3:
        navigation.navigate('RLCScreen'); // Przekierowanie do ekranu RLC
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.buttonText}>Wybierz rodzaj obwodu:</Text>
        <TouchableOpacity style={styles.button} onPress={() => this.handleFunctionSelection(1)}>
          <Text style={styles.buttonText}>RC</Text>
          <Image source={require('inz/pictures/kalkulator.jpg')} style={styles.buttonImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.handleFunctionSelection(2)}>
          <Text style={styles.buttonText}>RL</Text>
          <Image source={require('inz/pictures/kalkulator.jpg')} style={styles.buttonImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.handleFunctionSelection(3)}>
          <Text style={styles.buttonText}>RLC</Text>
          <Image source={require('inz/pictures/kalkulator.jpg')} style={styles.buttonImage} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default StaleCzasowe;
