
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen';
import WorkoutHistory from './WorkoutHistory';
import StepCounter from './StepCounter';
import Stopwatch from './Stopwatch';
import BMICalculator from './BMICalculator';
import MoreStack from './MoreStack';


import { StepProvider } from './StepContext'; 

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <StepProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Home') iconName = focused ? 'home' : 'home-outline';
              else if (route.name === 'History') iconName = focused ? 'time' : 'time-outline';
              else if (route.name === 'Steps') iconName = focused ? 'walk' : 'walk-outline';
              else if (route.name === 'Stopwatch') iconName = focused ? 'timer' : 'timer-outline';
              else if (route.name === 'BMI') iconName = focused ? 'fitness' : 'fitness-outline';
              else if (route.name === 'More') iconName = focused ? 'ellipsis-horizontal' : 'ellipsis-horizontal-outline';

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#00ADEF',
            tabBarInactiveTintColor: 'gray',
            headerShown: false,
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="History" component={WorkoutHistory} />
          <Tab.Screen name="Steps" component={StepCounter} />
          <Tab.Screen name="Stopwatch" component={Stopwatch} />
          <Tab.Screen name="BMI" component={BMICalculator} />
          <Tab.Screen name="More" component={MoreStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </StepProvider>
  );
}
