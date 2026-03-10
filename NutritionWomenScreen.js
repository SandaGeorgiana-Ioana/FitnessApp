import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

export default function NutritionWomenScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Planuri alimentare pentru femei</Text>

      
      <View style={styles.sectionRow}>
        <Image source={require('./assets/slabire_femei.jpg')} style={styles.rowImage} />
        <View style={styles.content}>
          <Text style={styles.planTitle}>🟠 Pentru slăbire (supraponderale)</Text>

          <Text style={styles.mealTitle}>🥣 Mic dejun</Text>
          <Text style={styles.text}>• Iaurt grecesc 0% cu fructe de pădure{'\n'}• 1 lingură fulgi ovăz{'\n'}• Ceai verde</Text>

          <Text style={styles.mealTitle}>🍏 Gustare</Text>
          <Text style={styles.text}>• Măr sau morcov crud</Text>

          <Text style={styles.mealTitle}>🥗 Prânz</Text>
          <Text style={styles.text}>• 120g piept de pui la grătar{'\n'}• Salată verde cu ulei de măsline și lămâie{'\n'}• 2 linguri quinoa</Text>

          <Text style={styles.mealTitle}>🥦 Cină</Text>
          <Text style={styles.text}>• Supă de legume sau pește cu broccoli</Text>
        </View>
      </View>

    
      <View style={styles.sectionRow}>
        <Image source={require('./assets/mentinere_femei.jpg')} style={styles.rowImage} />
        <View style={styles.content}>
          <Text style={styles.planTitle}>🟢 Pentru menținere (greutate normală)</Text>

          <Text style={styles.mealTitle}>🍳 Mic dejun</Text>
          <Text style={styles.text}>• 1 ou fiert + 1 felie pâine integrală{'\n'}• 1 fruct (ex: kiwi, portocală)</Text>

          <Text style={styles.mealTitle}>🥜 Gustare</Text>
          <Text style={styles.text}>• 10 migdale crude și un iaurt simplu</Text>

          <Text style={styles.mealTitle}>🍛 Prânz</Text>
          <Text style={styles.text}>• 100g carne slabă (pui/curcan){'\n'}• 2-3 linguri orez brun{'\n'}• Salată de varză cu morcov</Text>

          <Text style={styles.mealTitle}>🥗 Cină</Text>
          <Text style={styles.text}>• Omletă cu legume sau brânză de vaci cu castraveți</Text>
        </View>
      </View>

   
      <View style={styles.sectionRow}>
        <Image source={require('./assets/ingrasare_femei.jpg')} style={styles.rowImage} />
        <View style={styles.content}>
          <Text style={styles.planTitle}>🔵 Pentru îngrășare (subponderale)</Text>

          <Text style={styles.mealTitle}>🥞 Mic dejun</Text>
          <Text style={styles.text}>• 2 felii pâine cu unt și miere{'\n'}• 1 ou prăjit cu brânză feta{'\n'}• Smoothie cu banană, lapte și unt de arahide</Text>

          <Text style={styles.mealTitle}>🍫 Gustare</Text>
          <Text style={styles.text}>• Iaurt gras cu fructe și semințe</Text>

          <Text style={styles.mealTitle}>🍖 Prânz</Text>
          <Text style={styles.text}>• 150-200g somon sau carne roșie slabă{'\n'}• Cartofi dulci copți{'\n'}• Legume sotate în ulei de măsline</Text>

          <Text style={styles.mealTitle}>🍝 Cină</Text>
          <Text style={styles.text}>• Paste integrale cu sos de smântână și ciuperci sau mămăligă cu brânză și ou</Text>
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
