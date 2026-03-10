import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Animated,
  Keyboard,
  StyleSheet,
} from 'react-native';
import styles from './styles';

export default function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [bmiCategory, setBmiCategory] = useState('');
  const [motivation, setMotivation] = useState('');
  const slideAnim = useRef(new Animated.Value(-100)).current;

  const calculateBMI = () => {
    Keyboard.dismiss();

    const w = parseFloat(weight);
    const h = parseFloat(height) / 100;

    if (w > 0 && h > 0) {
      const bmiValue = (w / (h * h)).toFixed(2);
      setBmi(bmiValue);

      let category = '';
      let message = '';

      if (bmiValue < 18.5) {
        category = 'Subponderal';
        message = '🍽️ Încearcă să ai o alimentație mai bogată în nutrienți!';
      } else if (bmiValue < 24.9) {
        category = 'Greutate normală';
        message = '✅ Ești într-o formă bună! Continuă așa! 🏃‍♂️';
      } else if (bmiValue < 29.9) {
        category = 'Supraponderal';
        message = '💪 E timpul pentru mai multă mișcare și echilibru în dietă!';
      } else {
        category = 'Obezitate';
        message = '🔥 Ai puterea să faci o schimbare! Fiecare pas contează!';
      }

      setBmiCategory(category);
      setMotivation(message);

      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    } else {
      setBmi(null);
      setBmiCategory('');
      setMotivation('');
    }
  };

  const resetBMI = () => {
    setWeight('');
    setHeight('');
    setBmi(null);
    setBmiCategory('');
    setMotivation('');
    slideAnim.setValue(-100); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculator IBM</Text>

      <TextInput
        placeholder="Greutate (kg)"
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
        style={styles.input}
        placeholderTextColor="#888"
      />
      <TextInput
        placeholder="Înălțime (cm)"
        keyboardType="numeric"
        value={height}
        onChangeText={setHeight}
        style={styles.input}
        placeholderTextColor="#888"
      />

      <TouchableOpacity style={local.button} onPress={calculateBMI}>
        <Text style={local.buttonText}>🔢 Calculează IBM</Text>
      </TouchableOpacity>

 
      <TouchableOpacity style={[local.button, local.resetButton]} onPress={resetBMI}>
        <Text style={local.buttonText}>♻️ Reset</Text>
      </TouchableOpacity>

   
      {bmi && (
        <>
          <Text style={{ color: 'white', marginTop: 10, fontSize: 16 }}>IMC-ul tău: {bmi}</Text>

          <Animated.View style={{ transform: [{ translateX: slideAnim }], marginTop: 5 }}>
            <Text style={{ color: 'white', fontSize: 16 }}>➤ Categorie: {bmiCategory}</Text>
          </Animated.View>

          <Text style={{ color: '#FFD700', fontSize: 16, marginTop: 10, textAlign: 'center' }}>
            {motivation}
          </Text>
        </>
      )}
    </View>
  );
}

const local = StyleSheet.create({
  button: {
    backgroundColor: '#00ADEF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 15,
  },
  resetButton: {
    backgroundColor: '#FF3B30',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});
