import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Platform } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const RLScreen = () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [result, setResult] = useState(0);
  const [selectedOption1, setSelectedOption1] = useState("1");
  const [selectedOption2, setSelectedOption2] = useState("1");


  const [picker1Value, setPicker1Value] = useState(1);
  const [picker2Value, setPicker2Value] = useState(1);

  const calculateResult = () => {
    const parsedValue1 = parseFloat(value1) * selectedOption1;
    const parsedValue2 = parseFloat(value2) * selectedOption2;
    
    if (parsedValue1 === 0) {
      // Wyświetl komunikat na ekranie i wyczyść wynik
      setResult("Nie można dzielić przez 0");
    } else {
      const calculatedResult = parsedValue2 / parsedValue1;
      setResult(calculatedResult);
    }
  };

  const getPrefixLabel = (value) => {
    switch (value) {
      case 0.000000000001:
        return "p";
      case 0.000000001:
        return "n";
      case 0.000001:
        return "u";
      case 0.001:
        return "m";
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
    let prefixIndex = 4;

    while (absResult < 1 && prefixIndex > 0) {
      absResult *= 1000;
      prefixIndex--;
    }

    while (absResult >= 1000 && prefixIndex < prefixes.length - 1) {
      absResult /= 1000;
      prefixIndex++;
    }

    return `${absResult} ${prefixes[prefixIndex]}`;
  };

  const keyboardType = Platform.OS === 'ios' ? 'numbers-and-punctuation' : 'numeric';
  const pickerStyle = Platform.OS === 'ios' ? styles.iosPicker : styles.androidPicker;

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="R"
          keyboardType={keyboardType}
          value={value1}
          onChangeText={(text) => setValue1(text)}
        />
        <RNPickerSelect
          style={pickerStyle}
          value={selectedOption1}
          onValueChange={(itemValue) => {
            setSelectedOption1(itemValue);
            setPicker1Value(itemValue);
          }}
          items={[
            { label: 'p', value: 0.000000000001 },
            { label: 'n', value: 0.000000001 },
            { label: 'u', value: 0.000001 },
            { label: 'm', value: 0.001 },
            { label: '-', value: 1 },
            { label: 'k', value: 1000 },
            { label: 'M', value: 1000000 },
            { label: 'G', value: 1000000000 },
            { label: 'T', value: 1000000000000 },
          ]}
        />
        {Platform.OS === 'android' && <Text>{getPrefixLabel(picker1Value)}</Text>}
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="L"
          keyboardType={keyboardType}
          value={value2}
          onChangeText={(text) => setValue2(text)}
        />
        <RNPickerSelect
          style={pickerStyle}
          value={selectedOption2}
          onValueChange={(itemValue) => {
            setSelectedOption2(itemValue);
            setPicker2Value(itemValue);
          }}
          items={[
            { label: 'p', value: 0.000000000001 },
            { label: 'n', value: 0.000000001 },
            { label: 'u', value: 0.000001 },
            { label: 'm', value: 0.001 },
            { label: '-', value: 1 },
            { label: 'k', value: 1000 },
            { label: 'M', value: 1000000 },
            { label: 'G', value: 1000000000 },
            { label: 'T', value: 1000000000000 },
          ]}
        />
       {Platform.OS === 'android' && <Text>{getPrefixLabel(picker2Value)}</Text>}
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
  iosPicker: {
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      color: 'black',
      paddingRight: 30,
    },
  },
  androidPicker: {
    inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      color: 'black',
      paddingRight: 30,
    },
  },
  resultContainer: {
    marginTop: 20,
  },
});

export default RLScreen;
