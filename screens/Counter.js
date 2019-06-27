// Imports: Dependencies
import React, { Component } from 'react';
import { Button, Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';

// Screen Dimensions
const { height, width } = Dimensions.get('window');

// Screen: Counter
class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Counter</Text>

        <View style={styles.counterContainer}>
          <TouchableOpacity onPress={this.props.reduxIncreaseCounter}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>

          <Text style={styles.counterText}>{this.props.counter}</Text>

          <TouchableOpacity onPress={this.props.reduxDecreaseCounter}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>

      </SafeAreaView>
    )
  }
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // text: {
  //   fontFamily: 'System',
  //   fontSize: 16,
  //   fontWeight: '400',
  //   color: '#222222',
  // },
  counterText: {
    fontFamily: 'System',
    fontSize: 36,
    fontWeight: '400',
    color: '#222222',
  },
  buttonText: {
    fontFamily: 'System',
    fontSize: 50,
    fontWeight: '200',
    color: '#007AFF',
    marginLeft: 40,
    marginRight: 40,
  },
});

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
  console.log('State:');
  console.log(state);

  // Redux Store --> Component
  return {
    counter: state.counterReducer.counter,
  };
};

// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
const mapDispatchToProps = (dispatch) => {
  // Action
    return {
      // Increase Counter
      reduxIncreaseCounter: (payload) => dispatch({
        type: 'INCREASE_COUNTER',
        payload: payload,
      }),
      // Decrease Counter
      reduxDecreaseCounter: (payload) => dispatch({
        type: 'DECREASE_COUNTER',
        payload: payload,
      }),
   };
};
// Exports
export default connect(mapStateToProps, mapDispatchToProps)(Counter);