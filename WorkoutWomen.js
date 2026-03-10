import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const exercises = [
  {
    title: 'Genuflexiuni cu greutăți',
    image: require('./assets/genuflexiuni.jpg'),
    equipment: 'Gantere sau bară',
    description: 'Întărește coapsele și fesierii. Execută 3 seturi a câte 12-15 repetări.',
  },
  {
    title: 'Împins la piept la aparat',
    image: require('./assets/impins_piept.jpg'),
    equipment: 'Aparat piept',
    description: 'Lucrează pieptul și tricepsul. 3 seturi cu 10-12 repetări.',
  },
  {
    title: 'Ridicări laterale pentru umeri',
    image: require('./assets/umeri.jpg'),
    equipment: 'Gantere ușoare',
    description: 'Tonifică umerii. 3 seturi a câte 12 repetări.',
  },
  {
    title: 'Abdomene pe saltea',
    image: require('./assets/abdomene.jpg'),
    equipment: 'Saltea fitness',
    description: 'Lucrează musculatura abdominală. 4 seturi a câte 15-20 repetări.',
  },
  {
    title: 'Fandări înainte',
    image: require('./assets/fandari.jpg'),
    equipment: 'Gantere opționale',
    description: 'Lucrează picioarele și fesierii. 3 seturi a câte 10 repetări pe fiecare picior.',
  },
];

export default function WorkoutWomen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Exerciții pentru femei – sală</Text>
      {exercises.map((exercise, index) => (
        <View key={index} style={styles.card}>
          <Image source={exercise.image} style={styles.image} />
          <View style={styles.content}>
            <Text style={styles.exerciseTitle}>{exercise.title}</Text>
            <Text style={styles.subTitle}>Echipament:</Text>
            <Text style={styles.text}>• {exercise.equipment}</Text>
            <Text style={styles.subTitle}>Descriere:</Text>
            <Text style={styles.text}>{exercise.description}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#121212',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  card: {
    flexDirection: 'row',
    marginBottom: 24,
    backgroundColor: '#1e1e1e',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 2,
  },
  image: {
    width: 110,
    height: 130,
    alignSelf: 'center',
  },
  content: {
    flex: 1,
    padding: 10,
  },
  exerciseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00ADEF',
    marginBottom: 4,
  },
  subTitle: {
    fontWeight: '600',
    color: '#CCCCCC',
    marginTop: 6,
  },
  text: {
    fontSize: 14,
    lineHeight: 20,
    color: '#DDDDDD',
  },
});
