import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';
import React from 'react';
import store from './store';
import {Provider} from 'react-redux';
import App from './App';
const Main =()=>{
    return( <Provider store={store}>
        <App/>
       </Provider>
       )
   
}
registerRootComponent(Main);
