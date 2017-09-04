import React from 'react'
import { AppRegistry } from 'react-native'
import { StackNavigator } from 'react-navigation'

import Landing from './screens/Landing'
import Playground from './screens/Playground'

export default App = StackNavigator({
  Landing: { screen: Landing},
  Playground: { screen: Playground}
}, { headerMode: 'screen' })
