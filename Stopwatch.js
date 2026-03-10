import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
import ActivityChart from './ActivityChart';

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [activity, setActivity] = useState('');
  const [totalTime, setTotalTime] = useState(0);
  const [dayLabel, setDayLabel] = useState('');
  const [activityTimes, setActivityTimes] = useState({
    'Bandă': 0,
    'Bicicletă': 0,
    'Alergare': 0,
    'Încălzire': 0,
  });

  useEffect(() => {
    let interval;
    if (running) interval = setInterval(() => setTime((prev) => prev + 1), 1000);
    return () => clearInterval(interval);
  }, [running]);

  const stopActivity = () => {
    setRunning(false);
    setTotalTime((prev) => prev + time);
    setActivityTimes(prev => ({
      ...prev,
      [activity]: prev[activity] + time
    }));
    setTime(0);
    setActivity('');
  };

  const startActivity = (name) => {
    if (running) stopActivity();
    setActivity(name);
    setTime(0);
    setRunning(true);
  };

  const convertTime = (sec) => {
    const hours = Math.floor(sec / 3600);
    const minutes = Math.floor((sec % 3600) / 60);
    const seconds = sec % 60;
    return `${hours}h ${minutes}m ${seconds}s`;
  };

  const saveToHistory = async () => {
    if (!dayLabel.trim()) {
      Alert.alert('Te rugăm să introduci ziua!');
      return;
    }

    const entry = `${dayLabel}: ${Object.entries(activityTimes)
      .map(([key, val]) => `${key} - ${convertTime(val)}`)
      .join(', ')}`;

    try {
      const existing = await AsyncStorage.getItem('workoutHistory');
      const history = existing ? JSON.parse(existing) : [];
      history.unshift(entry);
      await AsyncStorage.setItem('workoutHistory', JSON.stringify(history));
      Alert.alert('Salvat în istoric!');
      setDayLabel('');
    } catch (e) {
      Alert.alert('Eroare la salvare în istoric.');
    }
  };

  const resetAll = () => {
    Alert.alert(
      'Confirmare',
      'Ești sigur că vrei să resetezi tot?',
      [
        { text: 'Anulează', style: 'cancel' },
        {
          text: 'Reset',
          style: 'destructive',
          onPress: () => {
            setTotalTime(0);
            setTime(0);
            setActivity('');
            setDayLabel('');
            setActivityTimes({
              'Bandă': 0,
              'Bicicletă': 0,
              'Alergare': 0,
              'Încălzire': 0,
            });
            Alert.alert('Totul a fost resetat!');
          },
        },
      ]
    );
  };

  return (
    <View style={localStyles.outerContainer}>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.title}>Activități</Text>
        <Text style={styles.title}>Timp: {convertTime(time)}</Text>
      </View>

      <View style={localStyles.buttonsRow}>
        {['Bandă', 'Bicicletă', 'Alergare', 'Încălzire'].map(act => (
          <TouchableOpacity key={act} style={localStyles.button} onPress={() => startActivity(act)}>
            <Text style={localStyles.buttonText}>{act}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {running && (
        <Button title="Oprește activitatea" onPress={stopActivity} />
      )}

      <Text style={[styles.title, { marginTop: 10, color: '#00ADEF' }]}>
        Timp total: {convertTime(totalTime)}
      </Text>

      <TouchableOpacity style={[localStyles.button, localStyles.resetButton]} onPress={resetAll}>
        <Text style={localStyles.buttonText}>♻️ Reset</Text>
      </TouchableOpacity>

      <ActivityChart data={activityTimes} />

      <TextInput
        style={localStyles.input}
        placeholder="Introdu ziua (ex: Luni, 24 Mai)"
        value={dayLabel}
        onChangeText={setDayLabel}
        placeholderTextColor="#888"
      />

      <View style={localStyles.buttonWrapper}>
        <Button title="Salvează în istoric" onPress={saveToHistory} />
      </View>
    </View>
  );
}

const localStyles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#121212',
  },
  buttonsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
  },
  button: {
    backgroundColor: '#00ADEF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    margin: 5,
    alignItems: 'center',
  },
  resetButton: {
    backgroundColor: '#FF3B30',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    width: '100%',
    color: '#000',
    marginTop: 10,
  },
  buttonWrapper: {
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
  },
});
