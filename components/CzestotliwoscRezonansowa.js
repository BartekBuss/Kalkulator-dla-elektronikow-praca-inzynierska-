import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const CzestotliwoscRezonansowa = () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [result, setResult] = useState(0);
  const [omega, setOmega] = useState(0);
  const [Q, setQ] = useState(0);
  const [BW, setBW] = useState(0);
  const [selectedOption1, setSelectedOption1] = useState(1);
  const [selectedOption2, setSelectedOption2] = useState(1);
  const [selectedOption3, setSelectedOption3] = useState(1);

  const calculateResult = () => {
    const parsedValue1 = parseFloat(value1) * selectedOption1;
    const parsedValue2 = parseFloat(value2) * selectedOption2;
    const parsedValue3 = parseFloat(value3) * selectedOption3;

    if (isNaN(parsedValue1) || isNaN(parsedValue2) || isNaN(parsedValue3)) {
      // Wyświetl komunikat o błędzie
      setResult("Proszę wprowadzić prawidłowe liczby");
      setOmega(0);
      setQ(0);
      setBW(0);
    } else {
      // Obliczmy częstość kołową (ω)
      const omegaValue = 1 / Math.sqrt(parsedValue2 * parsedValue3);
      setOmega(omegaValue);

      // Obliczmy dobroć (Q)
      const qValue = 1 / (parsedValue1 * Math.sqrt(parsedValue2 / parsedValue3));
      setQ(qValue);

      // Obliczmy szerokość pasma (BW)
      const bwValue = 1 / (parsedValue1 * parsedValue3);
      setBW(bwValue);

      if (2 * Math.PI * Math.sqrt(parsedValue2 * parsedValue3) === 0) {
        // Wyświetl komunikat na ekranie i wyczyść wynik
        setResult("Nie można dzielić przez 0");
      } else {
        const calculatedResult = 1 / (2 * Math.PI * Math.sqrt(parsedValue2 * parsedValue3));
        setResult(calculatedResult);
      }
    }
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

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="R"
          keyboardType="numeric"
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

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="L"
          keyboardType="numeric"
          value={value2}
          onChangeText={(text) => setValue2(text)}
        />
        <Picker
          style={styles.picker}
          selectedValue={selectedOption2}
          onValueChange={(itemValue) => {
            setSelectedOption2(itemValue);
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
        <Text>{getPrefixLabel(selectedOption2)}</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="C"
          keyboardType="numeric"
          value={value3}
          onChangeText={(text) => setValue3(text)}
        />
        <Picker
          style={styles.picker}
          selectedValue={selectedOption3}
          onValueChange={(itemValue) => {
            setSelectedOption3(itemValue);
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
        <Text>{getPrefixLabel(selectedOption3)}</Text>
      </View>

      <Button title="Oblicz" onPress={calculateResult} />

      <View style={styles.resultContainer}>
        <Text>Częstotliwość rezonansowa [Hz]: {formatResult(result)}</Text>
        <Text>Częstość kołowa (ω)[rad/s]: {formatResult(omega)}</Text>
        <Text>Dobroć (Q): {formatResult(Q)}</Text>
        <Text>Szerokość pasma [rad/s]: {formatResult(BW)}</Text>
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

export default CzestotliwoscRezonansowa;
