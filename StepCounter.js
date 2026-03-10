import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as Progress from 'react-native-progress';
import { useStep } from './StepContext';

export default function StepCounter() {
  const { steps, stepGoal, addSteps, resetSteps } = useStep();
  const progress = steps / stepGoal;

  const getMessage = () => {
    if (steps >= stepGoal) return "🎉 Obiectiv atins!";
    if (steps >= 7500) return "💪 Aproape ai reușit!";
    if (steps >= 5000) return "🔥 La jumătate!";
    if (steps >= 2500) return "👍 Bun început!";
    return "👣 Hai la mers!";
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>👟 Numărător pași</Text>

      <View style={styles.statsBox}>
        <Text style={styles.steps}>📊 {steps} pași</Text>
        <Text style={styles.goal}>🎯 Obiectiv: {stepGoal}</Text>
      </View>

      <Progress.Bar
        progress={progress}
        width={280}
        height={16}
        color="#00ADEF"
        borderRadius={10}
        unfilledColor="#1e1e1e"
        borderWidth={0}
        style={styles.progressBar}
      />

      <Text style={styles.percentage}>{Math.round(progress * 100)}% completat</Text>
      <Text style={styles.message}>{getMessage()}</Text>

      <TouchableOpacity style={styles.addButton} onPress={() => addSteps(100)}>
        <Text style={styles.addButtonText}>➕ Adaugă 100 pași</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.resetButton} onPress={resetSteps}>
        <Text style={styles.addButtonText}>♻️ Reset</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    color: '#00ADEF',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  statsBox: {
    backgroundColor: '#0077B6',
    borderRadius: 12,
    paddingVertical: 20,
    paddingHorizontal: 30,
    marginBottom: 25,
    alignItems: 'center',
  },
  steps: {
    fontSize: 22,
    color: '#fff',
    fontWeight: '600',
    marginBottom: 6,
  },
  goal: {
    fontSize: 16,
    color: '#e0f7fa',
  },
  progressBar: {
    marginTop: 10,
    marginBottom: 6,
  },
  percentage: {
    fontSize: 16,
    color: '#00ADEF',
    fontWeight: 'bold',
  },
  message: {
    fontSize: 18,
    color: '#fff',
    marginTop: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  addButton: {
    backgroundColor: '#00ADEF',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginTop: 30,
  },
  resetButton: {
    backgroundColor: '#FF3B30',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginTop: 10,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
