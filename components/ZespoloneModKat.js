import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Platform} from 'react-native';

const ZespoloneModKat = () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [result, setResult] = useState(0);
  const [result2, setResult2] = useState(0);
  const [result3, setResult3] = useState(0);

  const calculateResult = () => {
    const parsedValue1 = parseFloat(value1);
    const parsedValue2 = parseFloat(value2);

    if (parsedValue1 === 0) {
      setResult("Nie można dzielić przez 0");
      setResult2("Nie można dzielić przez 0");
    } else {
      const calculatedResult = Math.atan(parsedValue2 / parsedValue1);
      const calculatedResult2 = parsedValue1 * (180/Math.PI);
      const calculatedResult3 = Math.sqrt((parsedValue1 * parsedValue1) + (parsedValue2 * parsedValue2));
      setResult(calculatedResult);
      setResult2(calculatedResult2);
      setResult3(calculatedResult3);
    }
  };

  const keyboardType = Platform.OS === 'ios' ? 'numbers-and-punctuation' : 'numeric';

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Re"
          keyboardType= {keyboardType}
          value={value1}
          onChangeText={(text) => setValue1(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Im"
          keyboardType={keyboardType}
          value={value2}
          onChangeText={(text) => setValue2(text)}
        />
      </View>

      <Button title="Oblicz" onPress={calculateResult} />

      <View style={styles.resultContainer}>
        <Text>Kąt fazowy [rad]: {result}</Text>
        <Text>Kąt fazowy [stopnie]: {result2}</Text>
        <Text>|Z|: {result3}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    marginRight: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  resultContainer: {
    marginTop: 20,
  },
});

export default ZespoloneModKat;
