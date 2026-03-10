import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

export default function NutritionMenScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Planuri alimentare pentru bărbați</Text>

      
      <View style={styles.sectionRow}>
        <Image source={require('./assets/slabire.jpg')} style={styles.rowImage} />
        <View style={styles.content}>
          <Text style={styles.planTitle}>🟠 Pentru slăbire (supraponderali)</Text>

          <Text style={styles.mealTitle}>🥣 Mic dejun</Text>
          <Text style={styles.text}>• 2 ouă fierte{'\n'}• 1 felie pâine integrală{'\n'}• ½ avocado sau castravete</Text>

          <Text style={styles.mealTitle}>🍏 Gustare</Text>
          <Text style={styles.text}>• Iaurt degresat sau 1 fruct</Text>

          <Text style={styles.mealTitle}>🍗 Prânz</Text>
          <Text style={styles.text}>• 150g piept de pui la grătar{'\n'}• Salată cu lămâie și ulei de măsline{'\n'}• 2-3 linguri orez brun</Text>

          <Text style={styles.mealTitle}>🥦 Cină</Text>
          <Text style={styles.text}>• Supă cremă de legume sau pește cu broccoli</Text>
        </View>
      </View>

      
      <View style={styles.sectionRow}>
        <Image source={require('./assets/mentinere.jpg')} style={styles.rowImage} />
        <View style={styles.content}>
          <Text style={styles.planTitle}>🟢 Pentru menținere (greutate normală)</Text>

          <Text style={styles.mealTitle}>🍳 Mic dejun</Text>
          <Text style={styles.text}>• 2 ouă{'\n'}• 2 felii pâine integrală{'\n'}• O roșie / 1 fruct</Text>

          <Text style={styles.mealTitle}>🥜 Gustare</Text>
          <Text style={styles.text}>• Nuci și un iaurt simplu</Text>

          <Text style={styles.mealTitle}>🍛 Prânz</Text>
          <Text style={styles.text}>• 150g carne slabă{'\n'}• 100g cartofi / orez{'\n'}• Legume la grătar</Text>

          <Text style={styles.mealTitle}>🥗 Cină</Text>
          <Text style={styles.text}>• Omletă cu legume sau ton cu salată</Text>
        </View>
      </View>

      
      <View style={styles.sectionRow}>
        <Image source={require('./assets/ingrasare.jpg')} style={styles.rowImage} />
        <View style={styles.content}>
          <Text style={styles.planTitle}>🔵 Pentru îngrășare (subponderali)</Text>

          <Text style={styles.mealTitle}>🥞 Mic dejun</Text>
          <Text style={styles.text}>• Omletă cu 3 ouă și cașcaval{'\n'}• 2 felii pâine{'\n'}• 1 smoothie banană + unt arahide</Text>

          <Text style={styles.mealTitle}>🍫 Gustare</Text>
          <Text style={styles.text}>• Baton proteic sau iaurt gras cu cereale</Text>

          <Text style={styles.mealTitle}>🍖 Prânz</Text>
          <Text style={styles.text}>• 200g carne / pește{'\n'}• 100-150g orez sau cartofi dulci{'\n'}• Legume sotate cu ulei</Text>

          <Text style={styles.mealTitle}>🍝 Cină</Text>
          <Text style={styles.text}>• Paste cu brânză sau mămăligă cu smântână și ou</Text>
        </View>
      </View>
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
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionRow: {
    flexDirection: 'row',
    backgroundColor: '#1e1e1e',
    marginBottom: 24,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 2,
  },
  rowImage: {
    width: 120,
    height: 140,
    resizeMode: 'cover',
    marginLeft: 8,
    marginTop: 'auto',
    marginBottom: 'auto',
    borderRadius: 8,
  },
  content: {
    flex: 1,
    padding: 10,
  },
  planTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00ADEF',
    marginBottom: 8,
  },
  mealTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    marginTop: 10,
  },
  text: {
    fontSize: 14,
    lineHeight: 20,
    color: '#DDDDDD',
  },
});
