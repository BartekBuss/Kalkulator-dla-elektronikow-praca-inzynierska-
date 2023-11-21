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
          <Text style={styles.buttonText}>Transfiguracja trójkąt - gwiazda</Text>
          <Image source={require('inz/pictures/trojkat.png')} style={styles.buttonImage} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default MainMenu;
