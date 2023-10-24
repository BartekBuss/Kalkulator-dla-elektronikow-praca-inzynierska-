import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import { mainMenuStyles as styles } from './styles/styles';

class MainMenu extends React.Component {
  handleButtonPress = (buttonNumber) => {
    const { navigation } = this.props;

    console.log(`Naciśnięto przycisk ${buttonNumber}`);

    switch (buttonNumber) {
      case 1:
        navigation.navigate('Transfiguracja gwiazda trojkat');
        break;
      case 2:
        navigation.navigate('Transfiguracja trojkat gwiazda');
        break;
      case 3:
        navigation.navigate('Stale czasowe');
        break;
      case 4:
        navigation.navigate('Czestotliwosc rezonansowa');
        break;
      case 5:
        navigation.navigate('AmplitudaRMSMain');
        break;
      case 6:
        navigation.navigate('Tetnienia napiecia');
        break;
      case 7:
        navigation.navigate('Kat fazowy z liczby zespolonej');
        break;
      case 8:
        navigation.navigate('Obl na zespolonych');
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => this.handleButtonPress(1)}>
          <Text style={styles.buttonText}>Transfiguracja gwiazda-trójkąt</Text>
          <Image source={require('inz/pictures/gwiazda.png')} style={styles.buttonImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.handleButtonPress(2)}>
          <Text style={styles.buttonText}>Transfiguracja trójkąt-gwiazda</Text>
          <Image source={require('inz/pictures/gwiazda.png')} style={styles.buttonImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.handleButtonPress(3)}>
          <Text style={styles.buttonText}>Stałe czasowe</Text>
          <Image source={require('inz/pictures/tau.png')} style={styles.buttonImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.handleButtonPress(4)}>
          <Text style={styles.buttonText}>Częstotliwość rezonansowa</Text>
          <Image source={require('inz/pictures/rezonans.bmp')} style={styles.buttonImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.handleButtonPress(5)}>
          <Text style={styles.buttonText}>RMS - amplituda</Text>
          <Image source={require('inz/pictures/kalkulator.jpg')} style={styles.buttonImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.handleButtonPress(6)}>
          <Text style={styles.buttonText}>Tętnienia napięcia</Text>
          <Image source={require('inz/pictures/kalkulator.jpg')} style={styles.buttonImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.handleButtonPress(7)}>
          <Text style={styles.buttonText}>Kąt fazowy z liczby zespolonej</Text>
          <Image source={require('inz/pictures/kalkulator.jpg')} style={styles.buttonImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.handleButtonPress(8)}>
          <Text style={styles.buttonText}>Obl. na zespolonych</Text>
          <Image source={require('inz/pictures/kalkulator.jpg')} style={styles.buttonImage} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default MainMenu;
