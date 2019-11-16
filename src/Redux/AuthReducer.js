import {EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER,
    NAME_CHANGED,
    USER_DUPLICATION_ERROR
}
     from './types';

    
    const INITIAL_STATE = {
         email : '', 
         password: '',
         loading: false,
         error_message:'',
         userName: '',
         signUpSuccess:false,
         user: null,
         
        
        };
    
    export default (state = INITIAL_STATE, action) => {
    
        switch(action.type){
            case NAME_CHANGED:
                return({...state , userName : action.payload});
            case EMAIL_CHANGED:
                return ( {...state, email: action.payload});
            case PASSWORD_CHANGED:
                return({...state, password: action.payload});  
            case USER_DUPLICATION_ERROR:
                return({...state , error_message: action.payload});
            case LOGIN_USER:
                return ({...state, signUpSuccess:true, error_message:null , user : action.payload});    
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