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

import { addAge, harvest } from '../actions'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4EA384'
  },
  containerMature: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#46947A'
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
    color: 'white'
  },
  fruitName: {
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  ageText: {
    fontWeight: 'bold'
  }
});

class Playground extends Component {
  static navigationOptions = {
    title: 'Simulasi Pohon'
  }

  _addAge () {
    this.props.addAge()
    const { deadStatus } = this.props.tree
    if (deadStatus) {
      this.props.navigation.navigate('GameOver')
    }
  }

  _harvest () {
    this.props.harvest()
  }

  render () {
    const quarter = Math.floor(this.props.tree.deadAge / 4)
    const half = Math.floor(this.props.tree.deadAge / 2)
    if (this.props.tree.age === 0) {
      return (
        <View style = {styles.container}>
          <Text style = {styles.allText}>
            Ini <Text style = {styles.fruitName}> {this.props.tree.name} </Text>
          </Text>
          <Text style = {styles.allText}>
            Kamu harus merawatnya!
          </Text>
          <Text>
            Buah: ({this.props.tree.fruits})
          </Text>
          <Image
            source = {require('../assets/0.png')}
            style = {{ width: 150, height: 150 }}
          />
          <Text style = {styles.allText}>
            Buah yang dipetik dari <Text style = {styles.fruitName}> {this.props.tree.name} </Text>: {this.props.tree.fruitsHarvested}
          </Text>
          <View style = {{ marginTop: 100, width: 300, justifyContent: 'space-between', flexDirection: 'row'}}>
            <Button
              onPress = {() => this._addAge()}
              title= 'Simulasi'
              color="#841584"
              accessibilityLabel="Mulai pertumbuhan!"
            />
            {
              (this.props.tree.age >= this.props.tree.harvestAge) ? <Button
                onPress={() => this._harvest() }
                title="Petik Mangga"
                color="#841584"
                accessibilityLabel="Panen buah!"
              /> : <Button
              onPress={() => this._harvest() }
              title="Petik Mangga"
              color="#841584"
              disabled={true}
              accessibilityLabel="Panen buah!"
              />
            }
          </View>
        </View>
      );
    } else if (this.props.tree.age >= quarter && this.props.tree.age < half) {
      return (
        <View style = {styles.container}>
          <Text style={styles.allText}>
            <Text style={styles.fruitName}>
              {this.props.tree.name}
            </Text> tambah tinggi.
          </Text>
          <Text style={styles.allText}>
            Umurnya <Text style={styles.ageText}>{this.props.tree.age}</Text> tahun sekarang.
          </Text>
          <Text>
            Buah: ({this.props.tree.fruits})
          </Text>
          <Image
            source={require('../assets/2.png')}
            style={{ width: 150, height: 150}}
          />
          <Text style={styles.allText}>
            Buah yang dipetik dari <Text style={styles.fruitName}>{this.props.tree.name}</Text>: {this.props.tree.fruitsHarvested}
          </Text>
          <View style={{ marginTop: 100, width: 300, justifyContent: 'space-between', flexDirection: 'row'}}>
            <Button
              onPress={() => this._addAge() }
              title="Simulasi"
              color="#841584"
              accessibilityLabel="Mulai pertumbuhan!"
            />
            {
              (this.props.tree.age >= this.props.tree.harvestAge) ? <Button
                onPress={() => this._harvest() }
                title="Petk Mangga"
                color="#841584"
                accessibilityLabel="Panen buah!"
              /> : <Button
                onPress={() => this._harvest() }
                title="Petik Mangga"
                color="#841584"
                disabled={true}
                accessibilityLabel="Panen buah!"
              />
            }
          </View>
        </View>
      );
    } else if (this.props.tree.age > 0 && this.props.tree.age < quarter) {
      return (
        <View style={styles.container}>
          <Text style={styles.allText}>
            <Text style={styles.fruitName}>
              {this.props.tree.name}
            </Text> mulai tumbuh
          </Text>
          <Text style={styles.allText}>
            Umurnya {this.props.tree.age} tahun sekarang.
          </Text>
          <Text>
            Buah: ({this.props.tree.fruits})
          </Text>
          <Image
            source={require('../assets/1.png')}
            style={{ width: 150, height: 150}}
          />
          <Text style={styles.allText}>
            Buah yang dipetik dari <Text style={styles.fruitName}> {this.props.tree.name} </Text>: {this.props.tree.fruitsHarvested}
          </Text>
          <View style={{ marginTop: 100, width: 300, justifyContent: 'space-between', flexDirection: 'row'}}>
            <Button
              onPress={() => this._addAge() }
              title="Simulasi"
              color="#841584"
              accessibilityLabel="Mulai pertumbuhan!"
            />
            {
              (this.props.tree.age >= this.props.tree.harvestAge) ? <Button
                onPress={() => this._harvest() }
                title="Petik Mangga"
                color="#841584"
                accessibilityLabel="Panen buah!"
              /> : <Button
                onPress={() => this._harvest() }
                title="Petik Mangga"
                color="#841584"
                disabled={true}
                accessibilityLabel="Panen buah!"
              />
            }
          </View>
        </View>
      );
    } else if (this.props.tree.age >= half) {
      return (
        <View style={styles.containerMature}>
          <Text style={styles.allText}>
            Yeay, <Text style={styles.fruitName}>{this.props.tree.name}</Text> siap panen.
          </Text>
          <Text style={styles.allText}>
            umurnya {this.props.tree.age} tahun sekarang.
          </Text>
          <Text>
            Buah: ({this.props.tree.fruits})
          </Text>
          <Image
            source={require('../assets/3.png')}
            style={{ width: 150, height: 150}}
          />
          <Text style={styles.allText}>
            Buah yang dipetik dari <Text style={styles.fruitName}>{this.props.tree.name}</Text>: {this.props.tree.fruitsHarvested}
          </Text>
          <View style={{ marginTop: 100, width: 300, justifyContent: 'space-between', flexDirection: 'row'}}>
            <Button
              onPress={() => this._addAge() }
              title="Simulasi"
              color="#841584"
              accessibilityLabel="Mulai pertumbuhan!"
            />
            {
              (this.props.tree.age >= this.props.tree.harvestAge) ? <Button
                onPress={() => this._harvest() }
                title="Petik Mangga"
                color="#841584"
                accessibilityLabel="Panen buah!"
              /> : <Button
                onPress={() => this._harvest() }
                title="Petik Mangga"
                color="#841584"
                disabled={true}
                accessibilityLabel="Panen buah!"
              />
            }
          </View>
        </View>
      );
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addAge: () => dispatch(addAge()),
    harvest: () => dispatch(harvest())
  }
}

const mapStateToProps = (state) => {
  return {
    tree: state.tree
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Playground)
