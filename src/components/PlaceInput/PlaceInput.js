import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

class PlaceInput extends Component {
    state = {
        placeName: '',
      };  
    
      placeNameChangedHandler = val => {
        this.setState({
          placeName: val
        });
      };

      placeSubnitHandler = () => {
        if (this.state.placeName === '') {
          return;
        }
        this.props.onPlaceAdded(this.state.placeName);
      }

    render() {
        return (
            <View style={styles.inputContainer}>
            <TextInput 
            style={styles.placeInput}
            placeholder="An awesome place"
            value={this.state.placeName} 
            onChangeText={this.placeNameChangedHandler}/>
            <Button
            onPress={this.placeSubnitHandler}
            style={styles.placeButton} 
            title="add" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      placeInput: {
        width: '70%'
      },
      placeButton: {
        width: '30%'
      },
})

export default PlaceInput;