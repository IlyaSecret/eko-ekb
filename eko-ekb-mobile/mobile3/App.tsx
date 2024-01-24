import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MapPage from './pages/map-page';
import NewsPage from './pages/news-page';
import BahiliComponent from "./pages/news-page-item";
import AboutUsPage from "./pages/about-us-page";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const INITIAL_REGION = {
  latitude: 56.83765,
  longitude: 60.594528,
  latitudeDelta: 0.1,
  longitudeDelta: 0.1,
};

function NewsScreen() {
  return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Здесь будут новости</Text>
      </View>
  );
}

function NewsStackScreen() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Новости-компонент" component={NewsPage} />
        <Stack.Screen name=" " component={BahiliComponent} />
      </Stack.Navigator>
  );
}

function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
              name="Карта"
              component={MapPage}
              options={{
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={require('./assets/map.png')}
                        style={{
                          width: 26,
                          height: 26,
                          tintColor: focused ? '#8AC44B' : 'gray',
                        }}
                    />
                ),
              }}
          />
          <Tab.Screen
              name="Новости"
              component={NewsStackScreen}
              options={{
                  headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={require('./assets/mails.png')}
                        style={{
                          width: 26,
                          height: 26,
                          tintColor: focused ? '#8AC44B' : 'gray',
                        }}
                    />
                ),
              }}
          />
            <Tab.Screen
                name="О нас"
                component={AboutUsPage}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={require('./assets/info.png')}
                            style={{
                                width: 26,
                                height: 26,
                                tintColor: focused ? '#8AC44B' : 'gray',
                            }}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
      </NavigationContainer>
  );
}

export default App;
