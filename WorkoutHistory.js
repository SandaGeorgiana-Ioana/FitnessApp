import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Button,
  Alert
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
import styles from './styles';

export default function WorkoutHistory() {
  const [history, setHistory] = useState([]);

  useFocusEffect(
    useCallback(() => {
      const loadHistory = async () => {
        try {
          const data = await AsyncStorage.getItem('workoutHistory');
          if (data) setHistory(JSON.parse(data));
        } catch (e) {
          console.log('Failed to load history', e);
        }
      };
      loadHistory();
    }, [])
  );

  const clearHistory = async () => {
    Alert.alert(
      'Confirmare',
      'Ești sigur că vrei să ștergi tot istoricul?',
      [
        { text: 'Anulează', style: 'cancel' },
        {
          text: 'Șterge',
          style: 'destructive',
          onPress: async () => {
            try {
              await AsyncStorage.removeItem('workoutHistory');
              setHistory([]);
              Alert.alert('Istoric șters cu succes!');
            } catch (e) {
              Alert.alert('Eroare la ștergere');
            }
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={localStyles.mainTitle}>🏋️‍♀️ Activitățile mele sportive</Text>

      {history.length === 0 ? (
        <Text style={{ color: 'gray' }}>Nu există activități salvate.</Text>
      ) : (
        <>
          <FlatList
            data={history}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => {
              const [day, activities] = item.split(':');
              return (
                <View style={localStyles.entry}>
                  <Text style={localStyles.day}>{day.trim()}</Text>
                  <Text style={localStyles.activities}>{activities.trim()}</Text>
                </View>
              );
            }}
          />
          <View style={{ marginTop: 20 }}>
            <Button
              title="Șterge tot istoricul"
              color="#FF3B30"
              onPress={clearHistory}
            />
          </View>
        </>
      )}
    </View>
  );
}

const localStyles = StyleSheet.create({
  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color:'white',
    textAlign: 'center',
    marginTop:70,
    marginBottom: 20,
  },
  entry: {
    marginBottom: 16,
    padding: 10,
    backgroundColor: '#1e1e1e',
    borderRadius: 8,
  },
  day: {
    color: '#00ADEF',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  activities: {
    color: '#FFFFFF',
    fontSize: 14,
    lineHeight: 20,
  },
});
