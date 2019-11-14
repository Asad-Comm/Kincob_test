import React from 'react';
import { View } from 'react-native';
import Nav from './src/navigator/Nav';
import SignUp from './src/screens/Login/SignUp';
import { Provider } from 'react-redux';
import { store, persistor } from './src/Store/store';
import { PersistGate } from 'redux-persist/integration/react';

class App extends React.Component {

  constructor(props) {
    super(props);

  }


  render() {
    return (
      <Provider store={store}>
       <PersistGate loading = {null} persistor = {persistor}>
          {/* <View style={{ flex: 1 }}> */}
            {/* <Nav /> */}
            <SignUp />
          {/* </View> */}
          </PersistGate>
      </Provider>
    )
  }
}

export default App;