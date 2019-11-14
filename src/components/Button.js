import React from 'react';
import {Text,TouchableOpacity} from 'react-native';


const Button = ({ onPress,children }) => {

const {buttonStyle,textStyle} = styles;

    return (
        <TouchableOpacity  onPress={onPress} style ={buttonStyle}>
            <Text style = {textStyle}>{children}</Text>
         </TouchableOpacity>
    );


};

const styles = {

    textStyle:{
        alignSelf:'center',
        color:'white',
        fontSize:16,
        fontWeight:'600',
        padding:15


    },

    buttonStyle:{
        position:'absolute',
        flex:1,
        alignSelf:'stretch',
        backgroundColor:'#ff7b18',
        borderRadius:18,
        marginLeft:5,
        marginRight:5,
        marginLeft:280,
        marginTop:537



    }

}

export {Button};