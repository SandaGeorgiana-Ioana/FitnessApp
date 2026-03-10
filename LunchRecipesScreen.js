import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const recipes = [
  {
    title: 'Piept de pui cu orez brun și broccoli',
    image: require('./assets/pui.jpg'),
    ingredients: [
      '100g piept de pui',
      '50g orez brun',
      '100g broccoli fiert',
      'Ulei de măsline, sare, piper',
    ],
    instructions: 'Gătește pieptul de pui la grătar. Fierbe orezul și broccoli separat, apoi amestecă-le și servește împreună.',
  },
  {
    title: 'Salată cu ton și năut',
    image: require('./assets/salata_ton.jpg'),
    ingredients: [
      '1 conservă de ton',
      '100g năut fiert',
      'Roșii cherry, ceapă roșie',
      'Ulei de măsline, lămâie, sare',
    ],
    instructions: 'Amestecă toate ingredientele într-un bol și asezonează după gust.',
  },
  {
    title: 'Paste integrale cu sos de roșii',
    image: require('./assets/paste.jpg'),
    ingredients: [
      '75g paste integrale',
      '200ml sos de roșii',
      'Busuioc, usturoi, ulei de măsline',
    ],
    instructions: 'Fierbe pastele. Încălzește sosul cu usturoi și busuioc, apoi combină-le și servește.',
  },
  {
    title: 'Tocăniță de linte',
    image: require('./assets/tocanita.jpg'),
    ingredients: [
      '150g linte fiartă',
      'Morcovi, ceapă, usturoi',
      'Piper, boia, ulei, foi de dafin',
    ],
    instructions: 'Călește legumele, adaugă lintea și condimentele. Fierbe 15-20 min până se înmoaie toate.',
  },
];

export default function LunchRecipesScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Rețete pentru prânz</Text>
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
    marginBottom: 24,
    backgroundColor: '#1e1e1e',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 2,
  },
  image: {
    width: 110 , 
    height: 130,
    alignSelf: 'center',
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
