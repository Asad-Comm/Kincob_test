import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js';
import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
    NAME_CHANGED,
    USER_DUPLICATION_ERROR,
    ADD_ITEM , DELETE_ITEM, UPDATE_CART , FETCH_PRODUCTS ,
    SHOW_MODAL,
    FETCH_PRODUCTS_UNSTITCHED
}
    from './types';

    





export const emailChanged = (text) => {

    console.log(text)

    return {
        type: EMAIL_CHANGED,
        payload: text

    };

};


export const passwordChanged = (text) => {


    return {
        type: PASSWORD_CHANGED,
        payload: text

    };





};

export const nameChanged = (text) => {


    return {
        type: NAME_CHANGED,
        payload: text

    };





};



export const loginUser = ({ email, password, userName }, success) => {
    return (dispatch) => {

        let poolData = {
            UserPoolId: 'us-east-1_uQuK4765n', // your user pool id here
            ClientId: '566r3o48dsp66po8s8aiqsccse' // your app client id here
        };
        let userPool =
            new AmazonCognitoIdentity.CognitoUserPool(poolData);
        let userData = {
            Username: userName, // your username here
            Pool: userPool


        };

        let attributeList = [];

        let dataEmail = {
            Name: 'email',
            Value: email // your email here
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
        userPool.signUp(userName, password, attributeList, null, function (err, result) {
            if (err) {
                console.log('auth error', err);
                const { message, code } = err;

                dispatch({ type: USER_DUPLICATION_ERROR, payload: code })
                // alert(toString(err));
                return;
            }

            cognitoUser = result.user;
            console.log('user name is ' + cognitoUser.getUsername());
            console.log('SinedUp', result);
            dispatch({ type: LOGIN_USER, payload: cognitoUser });
            dispatch({ type: USER_DUPLICATION_ERROR, payload: null })
            success(true);



        });

    };
};

const loginUserFail = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAIL });
};


const loginUserSuccess = (dispatch, user) => {



    dispatch({

        type: LOGIN_USER_SUCCESS,
        payload: user

    })



}



export const clearCart = () => {
 
    return {
        type: "clearCart"
    }
}

// export const placeOrder = () => {
//     return (dispatch) => {
//         fetch({
//             url : "https://ah3zewkpw1.execute-api.us-east-1.amazonaws.com/testflight/post",
//             method:'POST',
//             body:{
//                 "Order_Id":"2",
//                 "Product_Id":"5",
//                 "Product_Name":"Indian Kurti"
//                 }
//         }).then(responsr => responsr.json()
//         ).then(resjson => {console.log('Cart oreder placeds',resjson)}
//         )
//         dispatch({
//             type : "order"
//         })
//     }
// }


export const addToTotal = ({ tl }) => {
    return {
        type: "addTT",
        value: tl,

    }
}


export const fetchProducts = ({ data }) => {
    console.log(data)
    return {
        type: FETCH_PRODUCTS,
        products: data
    }

}

export const fetchProductsUnStitched = ({ data }) => {
    console.log(data)
    return {
        type: FETCH_PRODUCTS_UNSTITCHED,
        products: data
    }

}


export const addNewItem = ({title,price,src,id}) => {
    console.log('action name: Adding To Cart', title, "price:", price, "my url:", src)

    return ({
        type: ADD_ITEM,
        currentItem: title,
        item_price: price,
        source: src,
        product_id: id
    })
}


export const updateCart = () => ({
    type: UPDATE_CART
})



export const delItem = ({ item_index, price }) => ({
    type: DELETE_ITEM,
    item_index: item_index,
    deduct: price
})


export const showModal  = (toggleModal) => {
    return(
        {
            type : SHOW_MODAL,
            payload:toggleModal
        }
    )
}