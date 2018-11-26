/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, TouchableHighlight, FlatList} from 'react-native';
import { connect } from 'react-redux'
import ListItem from './source/component/ListItems'
import {addPlace, selectPlace} from './store/actions/index'

type Props = {};
class App extends Component<Props> {
    state = {
      placeName: ''
    }

    addAddress = (text) => {
      this.props.onAddAddress(text)
      console.log(this.state.places)
    }

    onItemPress = (item) => {
      this.props.onSelectPlace(item)
      alert(item.name)
    }

    onEditChange = (text) => {
      this.setState ({
        placeName: text
      })
    }
  
  render() {
    
    return (
      <View style= {styles.container}>
        <View style={styles.inputContainer}>
        <TextInput style= {styles.inputText} 
                  placeholder= {'Address'}
                  onChangeText= {text => this.onEditChange(text)}>
        </TextInput>
        <TouchableHighlight style= {styles.button}
                            onPress= {() => this.addAddress(this.state.placeName)}>
          <Text style= {styles.buttonTitle}>{'Add'}</Text>
        </TouchableHighlight>
        </View>

        <FlatList data = {this.props.places}
                renderItem = {({item}) => {
                    return <ListItem place = {item} 
                                    onItemPress = {() => this.onItemPress(item)}/>
                }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
    paddingTop: 40,
    margin: 10,
  },
  
  inputText: {
    width: '70%',
    height: 40,
    borderColor: '#999',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10
  },
  button: {
    width: '30%',
    backgroundColor: '#999',
    padding: 11,
    marginLeft: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#fff'
  },
  buttonTitle: {
    textAlign: 'center'
  },
  listItem: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignSelf: 'center'
  }
});

const mapStateToProps = (state) => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      onAddAddress: (name) => dispatch(addPlace(name)),
      onSelectPlace: (place) => dispatch(selectPlace(place))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)