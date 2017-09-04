import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Image
} from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions} from 'react-navigation'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#50AA8E'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  allText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center'
  },
  fruitName: {
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  }
});

class GameOver extends Component {
  static navigationOptions = {
    header: null
  }

  _reset () {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Landing'})
      ]
    })
    this.props.navigation.dispatch(resetAction)
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.allText}>
          Kamu melihat <Text style={styles.fruitName}>{this.props.tree.name}</Text>
        </Text>
        <Text style={styles.allText}>
          Dan dia telah mati.
        </Text>
        <Text style={styles.allText}>
          Karna sudah terlalu tua..
        </Text>
        <Text style={styles.allText}>
          Dia memberikan {this.props.tree.fruitsHarvested} buah sepanjang hidupnya.
        </Text>
        <Text style={styles.allText}>
          Terima kasih <Text style={styles.fruitName}>{this.props.tree.name}</Text>
        </Text>
        <Image
          source={require('../assets/4.png')}
          style={{ width: 150, height: 150}}
        />
        <Text style={styles.allText}>
          Simulasi selesai!
        </Text>
        <Button
          onPress={() => this._reset()}
          title = "Coba Lagi"
          color = "#841584"
          accessibilityLabel = "Ulangi simulasi!"
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tree: state.tree
  }
}

export default connect(mapStateToProps, null)(GameOver)
