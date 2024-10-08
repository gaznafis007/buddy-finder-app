import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import ExploreScreen from './ExploreScreen';
import DiveLogScreen from './DiveLogScreen';
import FindBuddyScreen from './FindBuddyScreen';
import BookingScreen from './BookingScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Explore') {
            iconName = 'explore';
          } else if (route.name === 'Dive Log') {
            iconName = 'list';
          } else if (route.name === 'Find Buddy') {
            iconName = 'search';
          } else if (route.name === 'Booking') {
            iconName = 'book';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#42a5f5',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Dive Log" component={DiveLogScreen} />
      <Tab.Screen name="Find Buddy" component={FindBuddyScreen} />
      <Tab.Screen name="Booking" component={BookingScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
