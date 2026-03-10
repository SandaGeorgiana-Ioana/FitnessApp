import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { useStep } from './StepContext';

export default function HomeScreen() {
  const { steps, stepGoal } = useStep();
  const progress = steps / stepGoal;

  const [waterCount, setWaterCount] = useState(0);
  const waterGoal = 8;
  const maxCalories = 1200;

  const [breakfast, setBreakfast] = useState('');
  const [lunch, setLunch] = useState('');
  const [dinner, setDinner] = useState('');
  const [totalCalories, setTotalCalories] = useState(null);

  const addWater = () => {
    if (waterCount < waterGoal) setWaterCount(waterCount + 1);
  };

  const resetWater = () => setWaterCount(0);

  const calculateCalories = () => {
    const total =
      (parseInt(breakfast) || 0) +
      (parseInt(lunch) || 0) +
      (parseInt(dinner) || 0);
    setTotalCalories(total);
  };

  const resetCalories = () => {
    setBreakfast('');
    setLunch('');
    setDinner('');
    setTotalCalories(null);
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        <Text style={styles.screenTitle}>🏠 Acasă</Text>
        <Text style={styles.subheading}>🎯 Obiectiv Pași</Text>

        
        <Text style={styles.stepsText}>🔹 {steps} din {stepGoal} pași</Text>
        <Text style={styles.progressText}>Progres: {Math.round(progress * 100)}%</Text>

        <View style={styles.separator} />

        
        <Text style={styles.sectionTitle}>💧 Hidratare</Text>
        <Text style={styles.waterText}>Pahare băute: {waterCount} / {waterGoal}</Text>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button} onPress={addWater}>
            <Text style={styles.buttonText}>➕ Pahar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.resetButton]} onPress={resetWater}>
            <Text style={styles.buttonText}>♻️ Reset</Text>
          </TouchableOpacity>
        </View>
        {waterCount >= waterGoal && (
          <Text style={styles.successText}>✅ Obiectiv de hidratare atins!</Text>
        )}

        <View style={styles.separator} />

        
        <Text style={styles.sectionTitle}>🍽️ Calorii pe mese</Text>

        <TextInput
          style={styles.input}
          placeholder="Mic dejun (calorii)"
          keyboardType="numeric"
          value={breakfast}
          onChangeText={setBreakfast}
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          placeholder="Prânz (calorii)"
          keyboardType="numeric"
          value={lunch}
          onChangeText={setLunch}
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          placeholder="Cină (calorii)"
          keyboardType="numeric"
          value={dinner}
          onChangeText={setDinner}
          placeholderTextColor="#888"
        />

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button} onPress={calculateCalories}>
            <Text style={styles.buttonText}>🔢 Calculează</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.resetButton]} onPress={resetCalories}>
            <Text style={styles.buttonText}>♻️ Reset</Text>
          </TouchableOpacity>
        </View>

        {totalCalories !== null && (
          <>
            <Text style={styles.calorieTotalText}>🔥 Total calorii: {totalCalories}</Text>

            {totalCalories < maxCalories && (
              <Text style={styles.successText}>✅ Ești sub obiectiv. Foarte bine!</Text>
            )}
            {totalCalories === maxCalories && (
              <Text style={styles.warningText}>⚠️ Ai atins exact obiectivul de 1200 kcal.</Text>
            )}
            {totalCalories > maxCalories && (
              <Text style={styles.alertText}>❌ Ai depășit obiectivul zilnic de calorii!</Text>
            )}
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#111',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
    backgroundColor: '#111',
    alignItems: 'center',
  },
  screenTitle: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  subheading: {
    fontSize: 18,
    color: '#00ADEF',
    fontWeight: '600',
    marginBottom: 12,
  },
  stepsText: {
    fontSize: 18,
    color: '#00ADEF',
    marginBottom: 5,
  },
  progressText: {
    fontSize: 16,
    color: '#ccc',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    color: '#00ADEF',
    marginBottom: 8,
    marginTop: 10,
  },
  waterText: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#fff',
    color: '#000',
    borderRadius: 8,
    width: '100%',
    padding: 10,
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#00ADEF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  resetButton: {
    backgroundColor: '#FF3B30',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  successText: {
    marginTop: 10,
    color: '#00FF99',
    fontSize: 16,
    fontWeight: 'bold',
  },
  warningText: {
    marginTop: 5,
    color: '#FFD700',
    fontSize: 16,
    fontWeight: 'bold',
  },
  alertText: {
    marginTop: 5,
    color: '#FF3B30',
    fontSize: 16,
    fontWeight: 'bold',
  },
  calorieTotalText: {
    fontSize: 18,
    color: '#FFD700',
    marginTop: 10,
  },
  separator: {
    height: 1,
    backgroundColor: '#333',
    width: '100%',
    marginVertical: 20,
  },
});
