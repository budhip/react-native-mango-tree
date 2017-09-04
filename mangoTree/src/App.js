import React from 'react'
import { AppRegistry } from 'react-native'
import { StackNavigator } from 'react-navigation'

import Landing from './screens/Landing'
import Playground from './screens/Playground'
import GameOver from './screens/GameOver'

export default App = StackNavigator({
  Landing: { screen: Landing},
  Playground: { screen: Playground},
  GameOver: { screen: GameOver}
}, {
  headerMode: 'screen'
})
