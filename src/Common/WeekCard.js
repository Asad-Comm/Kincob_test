import React from 'react';
import { View } from 'react-native';



const WeekCard = (props) => {

    return(
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};
 
const styles = {

    containerStyle :{
        
        borderBottomWidth:0,
      
        marginLeft:5,
        marginRight:5,
        marginTop:10

    }

}

export {WeekCard};