import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import RNLazerInput from './RNLazerInput';
const generateRandomArray = (size: number): number[] => {
  const array = [];
  for (let i = 0; i < size; i++) {
    array.push(Math.floor(Math.random() * 1000));
  }
  return array;
};
const initialArray = generateRandomArray(100000);

const quicksort = (arr: number[]): number[] => {
  if (arr.length <= 1) {
    return arr;
  }
  const pivot = arr[0];
  const left = arr.slice(1).filter(item => item < pivot);
  const right = arr.slice(1).filter(item => item >= pivot);
  return [...quicksort(left), pivot, ...quicksort(right)];
};

export const App = () => {
  const [, setCppResult] = useState([]);
  const [cppDuration, setCppDuration] = useState(0);
  const [, setJsResult] = useState<number[]>([]);
  const [jsDuration, setJsDuration] = useState(0);

  const benchmarkCpp = async () => {
    try {
      const arrayCopy = [...initialArray];
      const t0 = performance.now();
      const result = await RNLazerInput.quicksort(arrayCopy);
      const t1 = performance.now();
      setCppResult(result.sortedArray);
      setCppDuration(t1 - t0);
    } catch (error) {
      console.log(error);
    }
  };

  const benchmarkJs = () => {
    const arrayCopy = [...initialArray];
    const t0 = performance.now();
    const sorted = quicksort(arrayCopy);
    const t1 = performance.now();
    setJsResult(sorted);
    setJsDuration(t1 - t0);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={benchmarkJs}>
        <Text style={styles.text}>Sort in JavaScript</Text>
      </TouchableOpacity>
      <Text>JS duration: {jsDuration.toFixed(2)} ms</Text>

      <TouchableOpacity style={styles.button} onPress={benchmarkCpp}>
        <Text style={styles.text}>Sort in C++</Text>
      </TouchableOpacity>
      <Text>C++ duration: {cppDuration.toFixed(2)} ms</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: 'blue',
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});
