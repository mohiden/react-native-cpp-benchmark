import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import RNLazerInput from './RNLazerInput';

export const App = () => {
  const [result, setResult] = React.useState(0);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={async () => {
          const sum = await RNLazerInput.add(20, 10);
          setResult(sum);
        }}>
        <Text>Click me</Text>
      </TouchableOpacity>
      <Text>{result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
