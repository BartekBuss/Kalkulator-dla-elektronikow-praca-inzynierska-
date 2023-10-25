import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const ZespoloneMnozenie = () => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('');
    const [result, setResult] = useState(0);
    const [result2, setResult2] = useState(0);

    const calculateResult = () => {
        const parsedValue1 = parseFloat(value1);
        const parsedValue2 = parseFloat(value2);
        const parsedValue3 = parseFloat(value3);
        const parsedValue4 = parseFloat(value4);

        const calculatedResult = parsedValue1 * parsedValue3 - parsedValue2 * parsedValue4;
        const calculatedResult2 = parsedValue1 * parsedValue4 + parsedValue2 * parsedValue3;
        setResult(calculatedResult);
        setResult2(calculatedResult2);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.buttonText}>Pierwsza liczba:</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Re"
                    keyboardType="numeric"
                    value={value1}
                    onChangeText={(text) => setValue1(text)}
                />
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Im"
                    keyboardType="numeric"
                    value={value2}
                    onChangeText={(text) => setValue2(text)}
                />
            </View>
            
            <Text style={styles.buttonText}>Druga liczba:</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Re"
                    keyboardType="numeric"
                    value={value3}
                    onChangeText={(text) => setValue3(text)}
                />
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Im"
                    keyboardType="numeric"
                    value={value4}
                    onChangeText={(text) => setValue4(text)}
                />
            </View>

            <Button title="Oblicz" onPress={calculateResult} />

            <View style={styles.resultContainer}>
                <Text>Re: {result}</Text>
                <Text>Im: {result2}i</Text>
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
    buttonText: {
        fontSize: width * 0.04,
    },
});

export default ZespoloneMnozenie;
