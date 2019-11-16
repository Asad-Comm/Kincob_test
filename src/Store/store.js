import {persistStore , persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import { createStore , applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import combineReducers from '../Redux/index';
import AuthReducer from '../Redux/AuthReducer';


const persistConfig = {
    key : 'root',
    storage : AsyncStorage,
    
}


const PersistedReducer = persistReducer(persistConfig,combineReducers);


const store = createStore(
    PersistedReducer,
    // AuthReducer,
    applyMiddleware(ReduxThunk),
    
);

let persistor = persistStore(store);


export {
    store,
    persistor
}