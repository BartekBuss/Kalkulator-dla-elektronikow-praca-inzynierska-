import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { mainMenuStyles as styles } from './styles/styles';

class AmplitudaRMSMain extends React.Component {
    handleFunctionSelection = (functionNumber) => {
        const { navigation } = this.props;

        switch (functionNumber) {
            case 1:
                navigation.navigate('RMSAmplituda'); // Przekierowanie do ekranu RMS - Amplituda
                break;
            case 2:
                navigation.navigate('AmplitudaRMS'); // Przekierowanie do ekranu Amplituda - RMS
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
                    <Text style={styles.buttonText}>RMS - Amplituda</Text>
                    <Image source={require('inz/pictures/kalkulator.jpg')} style={styles.buttonImage} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => this.handleFunctionSelection(2)}>
                    <Text style={styles.buttonText}>Amplituda - RMS</Text>
                    <Image source={require('inz/pictures/kalkulator.jpg')} style={styles.buttonImage} />
                </TouchableOpacity>
            </View>
        );
    }
}

export default AmplitudaRMSMain;
