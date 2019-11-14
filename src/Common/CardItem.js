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
        padding:5,
        justifyContent:'center',
        flexDirection:'row',
        position:'relative'




    }

}

export {CardItem};