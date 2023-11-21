import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Platform } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const CalculatorScreen = () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [multiplier1, setMultiplier1] = useState(1);
  const [multiplier2, setMultiplier2] = useState(1);
  const [multiplier3, setMultiplier3] = useState(1);
  const [result1, setResult1] = useState(0);
  const [result2, setResult2] = useState(0);
  const [result3, setResult3] = useState(0);

  const [picker1Value, setPicker1Value] = useState(1);
  const [picker2Value, setPicker2Value] = useState(1);
  const [picker3Value, setPicker3Value] = useState(1);

  const calculateResults = () => {
    setResult1((((parseFloat(value1) * multiplier1) * (parseFloat(value3) * multiplier3)))/((parseFloat(value1) * multiplier1) + (parseFloat(value2) * multiplier2) + (parseFloat(value3) * multiplier3)));
    setResult2((((parseFloat(value1) * multiplier1) * (parseFloat(value2) * multiplier2)))/((parseFloat(value1) * multiplier1) + (parseFloat(value2) * multiplier2) + (parseFloat(value3) * multiplier3)));
    setResult3((((parseFloat(value2) * multiplier2) * (parseFloat(value3) * multiplier3)))/((parseFloat(value1) * multiplier1) + (parseFloat(value2) * multiplier2) + (parseFloat(value3) * multiplier3)));
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
          placeholder="Rab"
          keyboardType={keyboardType}
          value={value1}
          onChangeText={(text) => setValue1(text)}
        />
        <RNPickerSelect
          style={pickerStyle}
          value={picker1Value}
          onValueChange={(itemValue) => {
            setMultiplier1(itemValue);
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
          placeholder="Rbc"
          keyboardType={keyboardType}
          value={value2}
          onChangeText={(text) => setValue2(text)}
        />
        <RNPickerSelect
          style={pickerStyle}
          value={picker2Value}
          onValueChange={(itemValue) => {
            setMultiplier2(itemValue);
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

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Rca"
          keyboardType={keyboardType}
          value={value3}
          onChangeText={(text) => setValue3(text)}
        />
        <RNPickerSelect
          style={pickerStyle}
          value={picker3Value}
          onValueChange={(itemValue) => {
            setMultiplier3(itemValue);
            setPicker3Value(itemValue);
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
        {Platform.OS === 'android' && <Text>{getPrefixLabel(picker3Value)}</Text>}
      </View>

      <Button title="Oblicz" onPress={calculateResults} />

      <View style={styles.resultContainer}>
        <Text>Ra: {formatResult(result1)}</Text>
        <Text>Rb: {formatResult(result2)}</Text>
        <Text>Rc: {formatResult(result3)}</Text>
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

export default CalculatorScreen;
