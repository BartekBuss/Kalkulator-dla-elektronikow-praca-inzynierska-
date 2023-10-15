import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainMenu from './components/MainMenu';
import TransfiguracjaGwiazdaTrojkat from './components/TransfiguracjaGwiazdaTrojkat';
import StaleCzasowe from './components/StaleCzasowe';
import CzestotliwoscRezonansowa from './components/CzestotliwoscRezonansowa';
import RMSOdAmplitudy from './components/RMSOdAmplitudy';
import TetnieniaNapiecia from './components/TetnieniaNapiecia';
import KatFazowyZLiczbyZespolonej from './components/KatFazowyZLiczbyZespolonej';
import OblNaZespolonych from './components/OblNaZespolonych';

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Kalkulator dla elektroników" component={MainMenu} />
          <Stack.Screen name="Transfiguracja gwiazda trojkat" component={TransfiguracjaGwiazdaTrojkat} />
          <Stack.Screen name="Stale czasowe" component={StaleCzasowe} />
          <Stack.Screen name="Czestotliwosc rezonansowa" component={CzestotliwoscRezonansowa} />
          <Stack.Screen name="RMS od amplitudy" component={RMSOdAmplitudy} />
          <Stack.Screen name="Tetnienia napiecia" component={TetnieniaNapiecia} />
          <Stack.Screen name="Kat fazowy z liczby zespolonej" component={KatFazowyZLiczbyZespolonej} />
          <Stack.Screen name="Obl na zespolonych" component={OblNaZespolonych} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
