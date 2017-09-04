import React from 'react'
import { AppRegistry } from 'react-native'
import { StackNavigator } from 'react-navigation'

import Landing from './screens/Landing'

export default App = StackNavigator({
  Landing: { screen: Landing}
}, { headerMode: 'screen' })
