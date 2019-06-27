// Imports: Dependencies
import React from 'react';
import { AsyncStorage, StyleSheet, Text, View } from 'react-native';
import { persistStore } from 'redux-persist';
import { Provider } from 'react-redux';
import store from './store/store';

// Imports: Screens
import Counter from './screens/Counter';

// React Native: App
export default function App() {

  state = {
    isReady: false,
  }

  // Component Did Mount
  componentDidMount = () => {
    try {
      // Redux Persist: 
      persistStore(
        store,
        {
          // Storage Method (React Native)
          storage: AsyncStorage,
          // Whitelist (Save Specific Reducers)
          whitelist: [
            'authReducer',
          ],
          // Blacklist (Don't Save Specific Reducers)
          blacklist: [
            'counterReducer',
          ],
        },
        () => {
          this.setState({
            isReady: true,
          })
        }
      )
    }
    catch (error) {
      console.log(error);
    }
  }


  return (
    // Redux: Global Store
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};