import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import ShoppingReducer from './ShoppingReducer';




export default combineReducers({

    auth: AuthReducer,
    shop : ShoppingReducer
  


}); 