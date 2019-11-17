import React from 'react';
import {TouchableHighlight,Image} from 'react-native';


const DeleteButton = ({onPress}) => {


    return(
        <TouchableHighlight
    onPress={onPress}
    underlayColor='#efefef'
    style={styles.button}>
    <Image
    source ={require('../assets/icons/delete_1.png')}
    style ={{tintColor:'black', height:25,width:25}}
    />
    
  </TouchableHighlight>

    );


}

const styles = {
    button: {
        alignSelf: 'flex-end',
        padding: 8,
        
      },
      text: {
        color: '#666666'
      },
      complete: {
        color: 'green',
        fontWeight: 'bold'
      },
      deleteButton: {
        color: 'white',
        fontWeight:'bold'
      },
      
      toggleEdit:{
        color:"blue",
        fontWeight:'blue'
      }
    }

    
export default DeleteButton;