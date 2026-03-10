import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const recipes = [
  {
    title: 'Omletă cu legume',
    image: require('./assets/oua.jpg'),
    ingredients: [
      '2 ouă',
      'Ardei gras, ceapă verde, roșii',
      'Ulei de măsline, sare, piper',
    ],
    instructions: 'Bate ouăle, adaugă legumele tocate, prăjește în tigaie antiaderentă 3-4 min pe fiecare parte.',
  },
  {
    title: 'Toast cu avocado',
    image: require('./assets/avocado.jpg'),
    ingredients: [
      '2 felii pâine integrală',
      '1 avocado bine copt',
      'Lămâie, sare, piper',
    ],
    instructions: 'Pisează avocado cu sare și zeamă de lămâie, unge pe toast și presară piper după gust.',
  },
  {
    title: 'Iaurt cu fructe și semințe',
    image: require('./assets/iaurt.jpg'),
    ingredients: [
      '150g iaurt grecesc',
      'Fructe de pădure / banane',
      'Semințe de chia / nuci',
    ],
    instructions: 'Pune iaurtul într-un bol, adaugă fructele feliate și presară semințele deasupra.',
  },
  {
    title: 'Smoothie energizant',
    image: require('./assets/smoothie.jpg'),
    ingredients: [
      '1 banană',
      '1 mână spanac baby',
      '100ml lapte vegetal',
      '1 linguriță semințe de in',
    ],
    instructions: 'Blenduiește toate ingredientele până obții o consistență omogenă. Servește rece.',
  },
];

export default function BreakfastRecipesScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Rețete mic dejun</Text>
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
