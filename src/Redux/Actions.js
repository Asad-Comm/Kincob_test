import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js';
import {EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
    NAME_CHANGED}
      from './types'; 





export const emailChanged = (text) => {

console.log(text)

return{
    type:EMAIL_CHANGED,
    payload:text

    };

};


export const passwordChanged = (text) => {


    return{
        type:PASSWORD_CHANGED,
        payload:text

    };





};

export const nameChanged = (text) => {


    return{
        type:NAME_CHANGED,
        payload:text

    };





};



export const loginUser = ({email, password , userName} , success) => {
    return (dispatch) => {
    dispatch({ type: LOGIN_USER}); 
        
    let poolData = {
        UserPoolId : 'us-east-1_uQuK4765n', // your user pool id here
        ClientId : '566r3o48dsp66po8s8aiqsccse' // your app client id here
    };
    let userPool = 
    new AmazonCognitoIdentity.CognitoUserPool(poolData);
    let userData = {
        Username : userName, // your username here
        Pool : userPool

        
    };

    let attributeList = [];
 
let dataEmail = {
    Name : 'email',
    Value : email // your email here
};
// let dataPhoneNumber = {
//     Name : 'phone_number',
//     Value : phoneNumber // your phone number here with +country code and no delimiters in front
// };
let attributeEmail = 
new AmazonCognitoIdentity.CognitoUserAttribute(dataEmail);
// let attributePhoneNumber = 
// new AmazonCognitoIdentity.CognitoUserAttribute(dataPhoneNumber);
 
attributeList.push(attributeEmail);
// attributeList.push(attributePhoneNumber);
 
let cognitoUser;
userPool.signUp(userName, password, attributeList, null, function(err, result){
    if (err) {
        console.log('auth error',err);
    
        alert(stringify(err));
        return;
    }
    
    cognitoUser = result.user;
    console.log('user name is ' + cognitoUser.getUsername());
});

     };
    };
        
const loginUserFail = (dispatch) => {
    dispatch({type: LOGIN_USER_FAIL});
};


const loginUserSuccess = (dispatch, user) => {

   

    dispatch({

        type:LOGIN_USER_SUCCESS,
        payload: user

    })

    

}