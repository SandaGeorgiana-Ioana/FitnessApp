import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const recipes = [
  {
    title: 'Ruladă de piept cu spanac',
    image: require('./assets/spanac.jpg'), 
    ingredients: [
      '1 piept de pui',
      '100g spanac fiert',
      'Usturoi, sare, piper',
      'Brânză slabă pentru umplut',
    ],
    instructions: 'Deschide pieptul de pui ca o foaie, umple cu spanac și brânză, rulează și coace la cuptor 25 min.',
  },
  {
    title: 'Mușchiulet în sos',
    image: require('./assets/muschi.jpg'), 
    ingredients: [
      '200g mușchiulet de porc',
      '1 ceapă, 1 lingură muștar',
      '100ml smântână light',
      'Ulei, condimente',
    ],
    instructions: 'Prăjește carnea, adaugă ceapa, muștarul și smântâna. Lasă să fiarbă 10 min la foc mic.',
  },
  {
    title: 'Conopidă pane',
    image: require('./assets/conopida.jpg'), 
    ingredients: [
      '1 conopidă mică',
      '2 ouă, făină, pesmet',
      'Sare, ulei pentru prăjit',
    ],
    instructions: 'Fierbe buchețelele de conopidă. Tăvălește prin făină, ou și pesmet, apoi prăjește până devine aurie.',
  },
  {
    title: 'Ciuperci umplute',
    image: require('./assets/ciuperci.jpg'), 
    ingredients: [
      '8 ciuperci mari',
      'Brânză, ardei, ceapă, verdeață',
      'Ulei de măsline, piper',
    ],
    instructions: 'Umple ciupercile cu legume și brânză, stropește cu ulei, apoi coace 15-20 min în cuptor.',
  },
];

export default function DinnerRecipesScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Rețete pentru cină</Text>
      {recipes.map((recipe, index) => (
        <View key={index} style={styles.card}>
          <Image source={recipe.image} style={styles.image} />
          <View style={styles.content}>
            <Text style={styles.recipeTitle}>{recipe.title}</Text>
            <Text style={styles.subTitle}>Ingrediente:</Text>
            {recipe.ingredients.map((item, idx) => (
              <Text key={idx} style={styles.text}>• {item}</Text>
            ))}
            <Text style={styles.subTitle}>Mod de preparare:</Text>
            <Text style={styles.text}>{recipe.instructions}</Text>
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
    alignItems: 'center',
    marginBottom: 24,
    backgroundColor: '#1e1e1e',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 2,
  },
  image: {
    width: 110,
    height: 130,
    resizeMode: 'cover',
    marginLeft: 8,
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  content: {
    flex: 1,
    padding: 10,
  },
  recipeTitle: {
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
