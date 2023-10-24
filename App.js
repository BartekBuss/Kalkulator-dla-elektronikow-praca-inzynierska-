import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainMenu from './components/MainMenu';
import TransfiguracjaGwiazdaTrojkat from './components/TransfiguracjaGwiazdaTrojkat';
import TransfiguracjaTrojkatGwiazda from './components/TransfiguracjaTrojkatGwiazda';
import StaleCzasowe from './components/StaleCzasowe';
import CzestotliwoscRezonansowa from './components/CzestotliwoscRezonansowa';
import RMSOdAmplitudy from './components/RMSOdAmplitudy';
import TetnieniaNapiecia from './components/TetnieniaNapiecia';
import KatFazowyZLiczbyZespolonej from './components/KatFazowyZLiczbyZespolonej';
import OblNaZespolonych from './components/OblNaZespolonych';
import RCScreen from './components/RCScreen';
import RLScreen from './components/RLScreen';
import RLCScreen from './components/RLCScreen';

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Kalkulator dla elektroników" component={MainMenu} />
          <Stack.Screen name="Transfiguracja gwiazda trojkat" component={TransfiguracjaGwiazdaTrojkat} />
          <Stack.Screen name="Transfiguracja trojkat gwiazda" component={TransfiguracjaTrojkatGwiazda} />
          <Stack.Screen name="Stale czasowe" component={StaleCzasowe} />
          <Stack.Screen name="Czestotliwosc rezonansowa" component={CzestotliwoscRezonansowa} />
          <Stack.Screen name="RMS od amplitudy" component={RMSOdAmplitudy} />
          <Stack.Screen name="Tetnienia napiecia" component={TetnieniaNapiecia} />
          <Stack.Screen name="Kat fazowy z liczby zespolonej" component={KatFazowyZLiczbyZespolonej} />
          <Stack.Screen name="Obl na zespolonych" component={OblNaZespolonych} />
          <Stack.Screen name="RCScreen" component={RCScreen} />
          <Stack.Screen name="RLScreen" component={RLScreen} />
          <Stack.Screen name="RLCScreen" component={RLCScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
