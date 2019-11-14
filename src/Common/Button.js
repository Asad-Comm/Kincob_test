import React from 'react';
import {Text,TouchableHighlight,View} from 'react-native';


const Button = ({ submitTodo,title}) => {

const {buttonStyle,textStyle} = styles;

    return (
        <View style = {{alignItems:'flex-end'}}>
        <TouchableHighlight  onPress={submitTodo} style ={buttonStyle}>
            <Text style = {textStyle}>{title}</Text>
         </TouchableHighlight>
         </View>
    );


};

const styles = {

    textStyle:{
        color: '#666666',
        fontWeight: '600'

    },

    buttonStyle:{
    height: 50,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#ffffff',
    width: 200,
    marginRight: 20,
    marginTop: 15,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,.1)',
    justifyContent: 'center',
    alignItems: 'center'



    }

}

export {Button};