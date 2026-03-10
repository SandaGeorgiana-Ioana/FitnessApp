import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const exercises = [
  {
    title: 'Împins cu bara la piept',
    image: require('./assets/barbell.jpg'),
    equipment: 'Bancă + bară + discuri',
    description: 'Exercițiu clasic pentru dezvoltarea masei musculare la piept. 4 seturi a câte 8-10 repetări.',
  },
  {
    title: 'Tracțiuni la bară fixă',
    image: require('./assets/pullups.jpg'),
    equipment: 'Bară fixă',
    description: 'Lucrează spatele și bicepsul. 3 seturi până la epuizare.',
  },
  {
    title: 'Genuflexiuni cu bară',
    image: require('./assets/squart.jpg'),
    equipment: 'Bară cu discuri',
    description: 'Pentru coapse și fesieri. 4 seturi x 8-12 repetări.',
  },
  {
    title: 'Ramat cu gantera',
    image: require('./assets/ramat.jpg'),
    equipment: 'Ganteră + bancă',
    description: 'Întărește spatele. 3 seturi a câte 10-12 repetări pe fiecare parte.',
  },
  {
    title: 'Ridicări de umeri cu gantere',
    image: require('./assets/umeri_gantere.jpg'),
    equipment: 'Gantere',
    description: 'Pentru trapez și umeri. 3 seturi a câte 12-15 repetări.',
  },
];

export default function WorkoutMen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Exerciții pentru bărbați – sală</Text>
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
