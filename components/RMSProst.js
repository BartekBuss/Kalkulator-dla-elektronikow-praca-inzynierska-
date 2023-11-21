import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const RMSProst = () => {
  const [value1, setValue1] = useState('');
  const [result, setResult] = useState(0);
  const [selectedOption1, setSelectedOption1] = useState(1);

  const calculateResult = () => {
    const parsedValue1 = parseFloat(value1) * selectedOption1;
    const calculatedResult = parsedValue1/Math.sqrt(3);
    setResult(calculatedResult);
  };

  const getPrefixLabel = (value) => {
    switch (value) {
      case 0.000000000001:
        return "p";
      case 0.000000001:
        return "n";
      case 0.0000001:
        return "u";
      case 0.0001:
        return "m";
      case 1:
        return "-";
      case 1000:
        return "k";
      case 1000000:
        return "M";
      case 1000000000:
        return "G";
      case 1000000000000:
        return "T";
      default:
        return "-";
    }
  };

  const formatResult = (result) => {
    let absResult = Math.abs(result);
    if (absResult === 0) return "0";

    const prefixes = ["p", "n", "u", "m", " ", "k", "M", "G", "T"];
    let prefixIndex = 4; // domyślny prefix (" ")

    while (result < 1 && prefixIndex > 0) {
      result *= 1000;
      prefixIndex--;
    }

    while (result >= 1000 && prefixIndex < prefixes.length - 1) {
      result /= 1000;
      prefixIndex++;
    }

    return `${result} ${prefixes[prefixIndex]}`;
  };

  const keyboardType = Platform.OS === 'ios' ? 'numbers-and-punctuation' : 'numeric';

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Amplituda"
          keyboardType={keyboardType}
          value={value1}
          onChangeText={(text) => setValue1(text)}
        />
        <Picker
          style={styles.picker}
          selectedValue={selectedOption1}
          onValueChange={(itemValue) => {
            setSelectedOption1(itemValue);
          }}
        >
          <Picker.Item label="p" value={0.000000000001} />
          <Picker.Item label="n" value={0.000000001} />
          <Picker.Item label="u" value={0.0000001} />
          <Picker.Item label="m" value={0.0001} />
          <Picker.Item label="-" value={1} />
          <Picker.Item label="k" value={1000} />
          <Picker.Item label="M" value={1000000} />
          <Picker.Item label="G" value={1000000000} />
          <Picker.Item label="T" value={1000000000000} />
        </Picker>
        <Text>{getPrefixLabel(selectedOption1)}</Text>
      </View>

      <Button title="Oblicz" onPress={calculateResult} />

      <View style={styles.resultContainer}>
        <Text>Wynik: {formatResult(result)}</Text>
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
    maxWidth: '70%',
  },
  picker: {
    width: 80,
  },
  resultContainer: {
    marginTop: 20,
  },
});

export default RMSProst;
