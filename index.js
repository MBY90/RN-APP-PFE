import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';
import {store,persistor} from './store';
import React from 'react';
import {Provider} from 'react-redux';
import App from './App';
import { PersistGate } from 'redux-persist/integration/react'
const Main =()=>{
    return(
        <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <App/>
        </PersistGate>
       </Provider>
       )
   
}
registerRootComponent(Main);
