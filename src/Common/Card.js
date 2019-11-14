import React from 'react';
import { View } from 'react-native';



const Card = (props) => {

    return(
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};
 
const styles = {

    containerStyle :{
       
        borderRadius:4,
        
        // backgroundColor:'#79d3fe',
        borderBottomWidth:0,
        
        marginLeft:5,
        marginRight:5,
        marginTop:10

    }

}

export {Card};