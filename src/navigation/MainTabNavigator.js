import React from 'react'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import BibleScreen from '~features/bible/BibleScreen'
import ProfileScreen from '~features/settings/ProfileScreen'
import StudiesScreen from '~features/studies/StudiesScreen'
import BibleVerseNotesScreen from '~features/bible/BibleVerseNotesScreen'
import TabBarIcon from '~common/TabBarIcon'
import getTheme from '~themes'
export default createMaterialBottomTabNavigator(
  {
    Bible: {
      screen: BibleScreen,
      navigationOptions: ({ screenProps }) => {
        return {
          title: 'Bible',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name='book-open' />
          ),
          tabBarColor: getTheme[screenProps.theme].colors.reverse,
          activeColor: getTheme[screenProps.theme].colors.primary
        }
      }
    },
    Studies: {
      screen: StudiesScreen,
      navigationOptions: ({ screenProps }) => ({
        title: 'Études',
        tabBarIcon: ({ focused }) => (
          <TabBarIcon focused={focused} name='edit' />
        ),
        tabBarColor: getTheme[screenProps.theme].colors.reverse,
        activeColor: getTheme[screenProps.theme].colors.primary
      })
    },
    Notes: {
      screen: BibleVerseNotesScreen,
      navigationOptions: ({ screenProps }) => ({
        title: 'Notes',
        tabBarIcon: ({ focused }) => (
          <TabBarIcon focused={focused} name='file-text' />
        ),
        tabBarColor: getTheme[screenProps.theme].colors.reverse,
        activeColor: getTheme[screenProps.theme].colors.primary
      })
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: ({ screenProps }) => ({
        title: 'Plus',
        tabBarIcon: ({ focused }) => (
          <TabBarIcon focused={focused} name='menu' />
        ),
        tabBarColor: getTheme[screenProps.theme].colors.reverse,
        activeColor: getTheme[screenProps.theme].colors.primary
      })
    }
  },
  {
    initialRouteName: 'Bible',
    shifting: true,
    activeColor: '#0ED3B9',
    barStyle: {
      backgroundColor: '#fff',
      borderTopWidth: 1,
      borderTopColor: 'rgb(230,230,230)'
    }
  }
)
