import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';

export default function MoreScreen({ navigation }) {
  const options = [
    { key: '1', label: 'Planuri alimentare pentru femei', route: 'NutritionWomen' },
    { key: '2', label: 'Planuri alimentare pentru bărbați', route: 'NutritionMen' },
    { key: '3', label: 'Rețete pentru mic dejun', route: 'BreakfastRecipes' },
    { key: '4', label: 'Rețete pentru  prânz', route: 'LunchRecipes' },
    { key: '5', label: 'Rețete pentru cină', route: 'DinnerRecipes' },
    { key: '6', label: 'Exerciții sală pentru femei', route: 'WorkoutWomen' },
    { key: '7', label: 'Exerciții sală pentru bărbați', route: 'WorkoutMen' }, // ✅ nou
  ];

  const handlePress = (item) => {
    navigation.navigate(item.route);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Informații suplimentare</Text>
      <ScrollView contentContainerStyle={{ paddingVertical: 12 }}>
        {options.map((item) => (
          <TouchableOpacity
            key={item.key}
            onPress={() => handlePress(item)}
            style={{
              backgroundColor: '#00ADEF',
              padding: 20,
              borderRadius: 8,
              marginVertical: 6,
              width: '90%',
              alignSelf: 'center',
            }}
          >
            <Text style={{ color: 'white', fontSize: 16 }}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
