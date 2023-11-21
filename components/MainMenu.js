import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import { mainMenuStyles as styles } from './styles/styles';

class MainMenu extends React.Component {
  handleButtonPress = (buttonNumber) => {
    const { navigation } = this.props;

    console.log(`Naciśnięto przycisk ${buttonNumber}`);

    switch (buttonNumber) {
      case 1:
        navigation.navigate('Transfiguracja ekran wyboru');
        break;
      case 2:
        navigation.navigate('Stałe czasowe ekran wyboru');
        break;
      case 3:
        navigation.navigate('Częstotliwosc rezonansowa');
        break;
      case 4:
        navigation.navigate('Obliczenia RMS-Amplituda');
        break;
      case 5:
        navigation.navigate('Tętnienia napięcia');
        break;
      case 6:
        navigation.navigate('Obliczenia na l. zespolonych');
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
          <Text style={styles.buttonText}>Stałe czasowe</Text>
          <Image source={require('inz/pictures/tau.png')} style={styles.buttonImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.handleButtonPress(3)}>
          <Text style={styles.buttonText}>Częstotliwość rezonansowa</Text>
          <Image source={require('inz/pictures/rezonans.bmp')} style={styles.buttonImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.handleButtonPress(4)}>
          <Text style={styles.buttonText}>RMS - amplituda</Text>
          <Image source={require('inz/pictures/RMS_Amplituda.png')} style={styles.buttonImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.handleButtonPress(5)}>
          <Text style={styles.buttonText}>Tętnienia napięcia</Text>
          <Image source={require('inz/pictures/sin.png')} style={styles.buttonImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.handleButtonPress(6)}>
          <Text style={styles.buttonText}>Obliczenia na l. zespolonych</Text>
          <Image source={require('inz/pictures/zespolone.png')} style={styles.buttonImage} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default MainMenu;
