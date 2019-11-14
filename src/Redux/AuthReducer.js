import {EMAIL_CHANGED,
    PASSWORD_CHANGED,
    NAME_CHANGED
}
     from './types';

    
    const INITIAL_STATE = {
         email : '', 
         password: '',
         loading: false,
         error:'',
         userName: 'mashkaak'
        
        };
    
    export default (state = INITIAL_STATE, action) => {
    
        switch(action.type){
            case NAME_CHANGED:
                return({...state , userName : action.payload});
            case EMAIL_CHANGED:
                return ( {...state, email: action.payload});
            case PASSWORD_CHANGED:
                return({...state, password: action.payload});  
            // case LOGIN_USER:
            //     return ({...state, loading:true, error:''});    
            // case LOGIN_USER_SUCCESS:
            //     return ({...state, 
            //         user: action.payload,
            //          error:'', 
            //          loading:false,
            //          email:'',
            //          password:'',
            //         });  
            // case LOGIN_USER_FAIL:
            //     return ({...state, error: 'Authentication Failed.', password:'', loading: false});
             default:
                return state;
        }
    
    
    
    };