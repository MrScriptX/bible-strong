import React from 'react'
import TabBarIcon from '~common/TabBarIcon'
import AppSwitcherScreen from '~features/app-switcher/AppSwitcherScreen'
import BibleScreen from '~features/bible/BibleScreen'
import HomeScreen from '~features/home/HomeScreen'
import SearchSelect from '~features/search/SearchSelectScreen'
import MoreScreen from '~features/settings/MoreScreen'
import StudiesScreen from '~features/studies/StudiesScreen'
import createAnimatedBottomTabNavigator from '~navigation/createAnimatedBottomTabNavigator'
import getTheme from '~themes'

export default createAnimatedBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({ screenProps }) => {
        return {
          title: 'Home',
          tabBarIcon: props => <TabBarIcon {...props} name="home" />,
          tabBarColor: getTheme[screenProps.theme].colors.reverse,
          activeColor: getTheme[screenProps.theme].colors.primary,
        }
      },
    },
    Search: {
      screen: SearchSelect,
      navigationOptions: ({ screenProps }) => {
        return {
          title: 'Recherche',
          tabBarIcon: props => <TabBarIcon {...props} name="search" />,
          tabBarColor: getTheme[screenProps.theme].colors.reverse,
          activeColor: getTheme[screenProps.theme].colors.primary,
        }
      },
    },
    AppSwitcher: {
      screen: AppSwitcherScreen,
      navigationOptions: ({ screenProps }) => {
        return {
          title: 'App Switcher',
          tabBarIcon: props => <TabBarIcon {...props} name="book-open" />,
          tabBarColor: getTheme[screenProps.theme].colors.reverse,
          activeColor: getTheme[screenProps.theme].colors.primary,
        }
      },
    },
    Studies: {
      screen: StudiesScreen,
      navigationOptions: ({ screenProps }) => ({
        title: 'Études',
        tabBarIcon: props => <TabBarIcon {...props} name="feather" />,
        tabBarColor: getTheme[screenProps.theme].colors.reverse,
        activeColor: getTheme[screenProps.theme].colors.primary,
      }),
    },
    More: {
      screen: MoreScreen,
      navigationOptions: ({ screenProps }) => ({
        title: 'Plus',
        tabBarIcon: props => <TabBarIcon {...props} name="menu" />,
        tabBarColor: getTheme[screenProps.theme].colors.reverse,
        activeColor: getTheme[screenProps.theme].colors.primary,
      }),
    },
  },
  {
    initialRouteName: 'AppSwitcher',
    activeColor: '#0ED3B9',
  }
)
