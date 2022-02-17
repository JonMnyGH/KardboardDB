import * as React from 'react';
import { I18nManager, Platform, StyleSheet, Text, View } from 'react-native';
import { systemWeights } from 'react-native-typography';
import { Icon, Touchable } from '@draftbit/ui';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import theme from './themes/DraftbitTheme.js';
import LinkingConfiguration from './LinkingConfiguration.js';

import AboutScreen from './screens/AboutScreen';
import AppSettingsScreen from './screens/AppSettingsScreen';
import BasicProfileScreen from './screens/BasicProfileScreen';
import KardboardStatusScreen from './screens/KardboardStatusScreen';
import LocationScreen from './screens/LocationScreen';
import MyTeamScreen from './screens/MyTeamScreen';
import NotificationPermissionsScreen from './screens/NotificationPermissionsScreen';
import SettingsScreen from './screens/SettingsScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Placeholder() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#131A2A',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 36,
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 12,
          color: '#FFF',
        }}
      >
        Missing Screens
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 16,
          color: '#FFF',
          marginBottom: 8,
        }}
      >
        Your app doesn't have any screens added to the Root Navigator.
      </Text>
      <Text style={{ textAlign: 'center', fontSize: 16, color: '#FFF' }}>
        Click the + (plus) icon in the Navigator tab on the left side to add
        some.
      </Text>
    </View>
  );
}
function MainNav() {
  return (
    <Tab.Navigator
      initialRouteName="StatusScreen"
      tabBarOptions={{
        showLabel: false,
        activeTintColor: theme.colors.secondary,
      }}
      backBehavior="history"
    >
      <Tab.Screen
        name="KardboardStatusScreen"
        component={KardboardStatusScreen}
        options={{
          title: 'KardboardStatus',
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="FontAwesome/home"
              size={25}
              color={focused ? theme.colors.secondary : color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="LocationScreen"
        component={LocationScreen}
        options={{
          title: 'Location',
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="EvilIcons/location"
              size={25}
              color={focused ? theme.colors.secondary : color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="AppSettingsScreen"
        component={AppSettingsScreen}
        options={{
          title: 'App Settings',
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="Feather/settings"
              size={25}
              color={focused ? theme.colors.secondary : color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MyTeamScreen"
        component={MyTeamScreen}
        options={{
          title: 'My Team',
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="AntDesign/team"
              size={25}
              color={focused ? theme.colors.secondary : color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function StackNavigator() {
  return (
    <Stack.Navigator
      headerMode="screen"
      initialRouteName="AppSettingsScreen"
      screenOptions={{
        headerTitle: 'Kardboard',
      }}
    >
      <Stack.Screen
        name="AppSettingsScreen"
        component={AppSettingsScreen}
        options={{ headerTitle: 'Kardboard', title: 'App Settings' }}
      />
      <Stack.Screen
        name="BasicProfileScreen"
        component={BasicProfileScreen}
        options={{ title: 'Basic Profile' }}
      />
      <Stack.Screen
        name="NotificationPermissionsScreen"
        component={NotificationPermissionsScreen}
        options={{ title: 'Notification Permissions' }}
      />
      <Stack.Screen
        name="AboutScreen"
        component={AboutScreen}
        options={{ title: 'About' }}
      />
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{ title: 'settings' }}
      />
    </Stack.Navigator>
  );
}

export default function RootAppNavigator() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <Stack.Navigator
        mode="card"
        headerMode="screen"
        initialRouteName="BottomTabNavigator"
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.background,
          },
          headerTintColor: theme.colors.background,
          headerTitle: 'Kardboard',
          gestureEnabled: false,
          headerTitleStyle: theme.typography.custom14,
        }}
      >
        <Stack.Screen name="MainNav" component={MainNav} />
        <Stack.Screen name="StackNavigator" component={StackNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerIcon: Platform.select({
    ios: {
      marginVertical: 12,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
    default: {
      margin: 3,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
  }),
  headerIconLeft: Platform.select({
    ios: {
      marginRight: 6,
    },
  }),
  headerIconRight: Platform.select({
    ios: {
      marginLeft: 6,
    },
  }),
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({
      ios: null,
      default: {
        marginVertical: 3,
        marginHorizontal: 11,
      },
    }),
  },
  headerContainerLeft: Platform.select({
    ios: {
      marginLeft: 8,
    },
  }),
  headerContainerRight: Platform.select({
    ios: {
      marginRight: 8,
    },
  }),
  headerLabelWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  headerLabel: {
    fontSize: 17,
    letterSpacing: 0.35,
  },
});
