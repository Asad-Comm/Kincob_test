import React from 'react';
import {View} from 'react-native';


const CardItem = (props) => {

    return (
        <View style = {styles.containerStyle}>
            {props.children}
        </View>
    );

};

const styles = {
    containerStyle:{
        borderBottomWidth: 1,
        padding:5,
        backgroundColor:'#fff', 
        justifyContent:'flex-start',
        borderRadius:15,
        margin:10,
        borderColor:'#ddd',
        position:'relative',
        flexWrap:'wrap',




    }

}

export {CardItem};