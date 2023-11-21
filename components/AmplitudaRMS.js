import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { mainMenuStyles as styles } from './styles/styles';

class AmplitudaRMS extends React.Component {
    handleFunctionSelection = (functionNumber) => {
        const { navigation } = this.props;
    
        switch (functionNumber) {
          case 1:
            navigation.navigate('Amplituda-RMS sinus i trójkąt');
            break;
          case 2:
            navigation.navigate('Amplituda-RMS prostokąt');
            break;
          default:
            break;
        }
      };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.buttonText}>Wybierz rodzaj przebiegu:</Text>
        <TouchableOpacity style={styles.button} onPress={() => this.handleFunctionSelection(1)}>
          <Text style={styles.buttonText}>Sinusoidalny/Trójkątny</Text>
          <Image source={require('inz/pictures/sin.png')} style={styles.buttonImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.handleFunctionSelection(2)}>
          <Text style={styles.buttonText}>Prostokątny</Text>
          <Image source={require('inz/pictures/prostokat.png')} style={styles.buttonImage} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default AmplitudaRMS;
