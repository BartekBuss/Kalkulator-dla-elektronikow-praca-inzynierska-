import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainMenu from './components/MainMenu';
import TransfiguracjaGwiazdaTrojkat from './components/TransfiguracjaGwiazdaTrojkat';
import TransfiguracjaTrojkatGwiazda from './components/TransfiguracjaTrojkatGwiazda';
import StaleCzasowe from './components/StaleCzasowe';
import CzestotliwoscRezonansowa from './components/CzestotliwoscRezonansowa';
import TetnieniaNapiecia from './components/TetnieniaNapiecia';
import ZespoloneModKat from './components/ZespoloneModKat';
import OblNaZespolonych from './components/OblNaZespolonych';
import RCScreen from './components/RCScreen';
import RLScreen from './components/RLScreen';
import RLCScreen from './components/RLCScreen';
import AmplitudaRMSMain from './components/AmplitudaRMSMain';
import AmplitudaRMS from './components/AmplitudaRMS';
import RMSAmplituda from './components/RMSAmplituda';
import RMSSinTr from './components/RMSSinTr';
import RMSProst from './components/RMSProst';
import AmplitudaSinTr from './components/AmplitudaSinTr';
import AmplitudaProst from './components/AmplitudaProst';
import TransfiguracjaMain from './components/TransfiguracjaMain';
import ZespoloneDodawanie from './components/ZespoloneDodawanie';
import ZespoloneOdejmowanie from './components/ZespoloneOdejmowanie';
import ZespoloneMnozenie from './components/ZespoloneMnozenie';
import ZespoloneDzielenie from './components/ZespoloneDzielenie';

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Kalkulator dla elektroników" component={MainMenu} />
          <Stack.Screen name="Transfiguracja ekran wyboru" component={TransfiguracjaMain} />
          <Stack.Screen name="Transfiguracja gwiazda trojkat" component={TransfiguracjaGwiazdaTrojkat} />
          <Stack.Screen name="Transfiguracja trojkat gwiazda" component={TransfiguracjaTrojkatGwiazda} />
          <Stack.Screen name="Stałe czasowe ekran wyboru" component={StaleCzasowe} />
          <Stack.Screen name="Częstotliwosc rezonansowa" component={CzestotliwoscRezonansowa} />
          <Stack.Screen name="Tętnienia napięcia" component={TetnieniaNapiecia} />
          <Stack.Screen name="Moduł i kąt l. zespolonej" component={ZespoloneModKat} />
          <Stack.Screen name="Obliczenia na l. zespolonych" component={OblNaZespolonych} />
          <Stack.Screen name="RC" component={RCScreen} />
          <Stack.Screen name="RL" component={RLScreen} />
          <Stack.Screen name="RLC" component={RLCScreen} />
          <Stack.Screen name="Obliczenia RMS-Amplituda" component={AmplitudaRMSMain} />
          <Stack.Screen name="Amplituda-RMS" component={AmplitudaRMS} />
          <Stack.Screen name="RMS-Amplituda" component={RMSAmplituda} />
          <Stack.Screen name="RMS-Amplituda sinus i trójkąt" component={RMSSinTr} />
          <Stack.Screen name="RMS-Aplituda prostokąt" component={RMSProst} />
          <Stack.Screen name="Amplituda-RMS sinus i trójkąt" component={AmplitudaSinTr} />
          <Stack.Screen name="Amplituda-RMS prostokąt" component={AmplitudaProst} />
          <Stack.Screen name="Dodawanie liczb zespolonych" component={ZespoloneDodawanie} />
          <Stack.Screen name="Odejmowanie liczb zespolonych" component={ZespoloneOdejmowanie} />
          <Stack.Screen name="Mnożenie liczb zespolonych" component={ZespoloneMnozenie} />
          <Stack.Screen name="Dzielenie liczb zespolonych" component={ZespoloneDzielenie} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
