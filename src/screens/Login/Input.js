import React from 'react';
import {TextInput,View,Text} from 'react-native';



const Input = ({label,value,onChangeText,placeholder,secureTextEntry , placeholderTextColor}) => {

    const{inputStyle,labelStyle,containerStyle} = styles;

    return(

        <View style = {containerStyle}>

            <Text style={labelStyle}>{label}</Text>
            <TextInput 
                placeholder={placeholder}
                placeholderTextColor ={placeholderTextColor}
                secureTextEntry={secureTextEntry}
                autoCorrect={false}
                value ={value}
                onChangeText={onChangeText}
                style={inputStyle}
            />
       
        </View>

    );

};


const styles = {

    inputStyle:{
        paddingRight:5,
        paddingLeft:5,
        fontSize:15,
        
        flex:2,
        color:'white',
   


    },
    labelStyle:{
        fontSize:18,
        paddingLeft:20,
        flex:1,
        lineHeight:20,
        color:'#BC7EFB'

    },
    containerStyle:{
        height:40,
        flex:1,
        flexDirection:'row'

    }

};



export default Input;