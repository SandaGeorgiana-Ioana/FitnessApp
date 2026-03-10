import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MoreScreen from './MoreScreen';
import NutritionWomenScreen from './NutritionWomenScreen';
import NutritionMenScreen from './NutritionMenScreen';
import BreakfastRecipesScreen from './BreakfastRecipesScreen';
import LunchRecipesScreen from './LunchRecipesScreen';
import DinnerRecipesScreen from './DinnerRecipesScreen';
import WorkoutWomen from './WorkoutWomen';
import WorkoutMen from './WorkoutMen';

const Stack = createNativeStackNavigator();

export default function MoreStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#121212' },
        headerTintColor: '#00ADEF',
      }}
    >
      <Stack.Screen name="MoreMain" component={MoreScreen} options={{ title: 'Mai Multe' }} />
      <Stack.Screen name="NutritionWomen" component={NutritionWomenScreen} options={{ title: 'Femei – Plan alimentar' }} />
      <Stack.Screen name="NutritionMen" component={NutritionMenScreen} options={{ title: 'Bărbați – Plan alimentar' }} />
      <Stack.Screen name="BreakfastRecipes" component={BreakfastRecipesScreen} options={{ title: 'Mic dejun' }} />
      <Stack.Screen name="LunchRecipes" component={LunchRecipesScreen} options={{ title: 'Prânz' }} />
      <Stack.Screen name="DinnerRecipes" component={DinnerRecipesScreen} options={{ title: 'Cină' }} />
      <Stack.Screen name="WorkoutWomen" component={WorkoutWomen} options={{ title: 'Femei – Exerciții sală' }} />
      
      <Stack.Screen name="WorkoutMen" component={WorkoutMen} options={{ title: 'Bărbați – Exerciții sală' }} />
    </Stack.Navigator>
  );
}
