import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { mainMenuStyles as styles } from './styles/styles';

class OblNaZespolonych extends React.Component {
  handleFunctionSelection = (functionNumber) => {
    const { navigation } = this.props;

    switch (functionNumber) {
      case 1:
        navigation.navigate('Dodawanie liczb zespolonych');
        break;
      case 2:
        navigation.navigate('Odejmowanie liczb zespolonych');
        break;
      case 3:
        navigation.navigate('Mnożenie liczb zespolonych');
        break;
      case 4:
        navigation.navigate('Dzielenie liczb zespolonych');
        break;    
      case 5:
        navigation.navigate('Moduł i kąt l. zespolonej'); 
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
          <Text style={styles.buttonText}>Dodawanie</Text>
          <Image source={require('inz/pictures/kalkulator.jpg')} style={styles.buttonImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.handleFunctionSelection(2)}>
          <Text style={styles.buttonText}>Odejmowanie</Text>
          <Image source={require('inz/pictures/kalkulator.jpg')} style={styles.buttonImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.handleFunctionSelection(3)}>
          <Text style={styles.buttonText}>Mnożenie</Text>
          <Image source={require('inz/pictures/kalkulator.jpg')} style={styles.buttonImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.handleFunctionSelection(4)}>
          <Text style={styles.buttonText}>Dzielenie</Text>
          <Image source={require('inz/pictures/kalkulator.jpg')} style={styles.buttonImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.handleFunctionSelection(5)}>
          <Text style={styles.buttonText}>Kąt fazowy i moduł</Text>
          <Image source={require('inz/pictures/kalkulator.jpg')} style={styles.buttonImage} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default OblNaZespolonych;
