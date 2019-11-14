import React from 'react';
import { View } from 'react-native';



const LoginCard = (props) => {

    return(
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};
 
const styles = {

    containerStyle :{
       
        
        
        borderBottomColor:"#bc7efb",
        borderBottomWidth: 0.5,
        
        marginLeft:30,
        marginRight:30,
        marginTop:25,
        

    }

}

export {LoginCard};