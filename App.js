import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import placeImg from './src/assets/hongkong.jpeg';

export default class App extends Component {
  state = {
    places: []
  };  

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
            key: new Date().getTime(),
            placeName: placeName,
            image: placeImg
          })
      }
    })
  };
  placeDeletedHandler = key => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter((place) => {
          return place.key !== key;
        })
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
      <PlaceInput onPlaceAdded={this.placeAddedHandler} />
      <PlaceList places={this.state.places} 
      onItemDeleted={this.placeDeletedHandler}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  listContainer: {
    width: '100%'
  },
});
