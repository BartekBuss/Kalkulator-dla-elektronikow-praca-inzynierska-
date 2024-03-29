import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { mainMenuStyles as styles } from './styles/styles';

class AmplitudaRMSMain extends React.Component {
    handleFunctionSelection = (functionNumber) => {
        const { navigation } = this.props;

        switch (functionNumber) {
            case 1:
                navigation.navigate('RMS-Amplituda'); // Przekierowanie do ekranu RMS - Amplituda
                break;
            case 2:
                navigation.navigate('Amplituda-RMS'); // Przekierowanie do ekranu Amplituda - RMS
                break;
            default:
                break;
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.buttonText}>Wybierz rodzaj obliczenia:</Text>
                <TouchableOpacity style={styles.button} onPress={() => this.handleFunctionSelection(1)}>
                    <Text style={styles.buttonText}>RMS z Amplitudy</Text>
                    <Image source={require('inz/pictures/RMS_Amplituda.png')} style={styles.buttonImage} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => this.handleFunctionSelection(2)}>
                    <Text style={styles.buttonText}>Amplituda z RMS</Text>
                    <Image source={require('inz/pictures/Amplituda_RMS.png')} style={styles.buttonImage} />
                </TouchableOpacity>
            </View>
        );
    }
}

export default AmplitudaRMSMain;
