import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput
} from 'react-native'
import { connect } from 'react-redux'

import store from '../store'
import { startTree } from '../actions'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#4EA384'
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
    color: 'white'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  textInput: {
    margin: 15,
    textAlign: 'center',
    width: 170,
    height: 50
  }
});

class Landing extends Component {
  static navigationOptions = {
    title: 'Home'
  }

  constructor () {
    super(),
    this.state = {
      name: '',
      treeName: ''
    }
  }

  _startTree () {
    if (this.state.treeName.length > 0) {
      this.props.startTree(this.state.treeName)
      this.props.navigation.navigate('playground')
    } else {
      alert('Maaf, tidak bisa tanpa input nama')
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Selamat Datang Di Kebun
        </Text>
        <View>
          <TextInput
            onChangeText = {(text) => this.setState({ name: text })}
            value = { this.state.name }
            style = {styles.textInput}
            placeholder = 'Nama kamu...'
          />
          <TextInput
            onChangeText = {(text) => this.setState({ treeName: text })}
            value = { this.state.treeName }
            style = {styles.textInput}
            placeholder = 'Nama pohon kamu..'
          />
        </View>
        <View style={{ marginBottom: 50 }} >
          <Button
            onPress = {() => this._startTree() }
            title = 'Mulai'
            color = '#841584'
            accessibilityLabel = 'Mulai simulasi'
          />
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startTree: (name) => dispatch(startTree(name))
  }
}

export default connect(null, mapDispatchToProps)(Landing)
