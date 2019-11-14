import React from 'react';
import {TouchableHighlight,Text} from 'react-native';


const DeleteButton = ({onPress,complete,name,firstForm}) => {


    return(
        <TouchableHighlight
    onPress={onPress}
    underlayColor='#efefef'
    style={styles.button}>
    <Text style={[
      styles.text,
      complete ? styles.complete : null,    
      name === 'Delete' ? styles.deleteButton : null,
      firstForm  ? styles.toggleEdit : null
    ]}    
     >
      {name}
    </Text>
  </TouchableHighlight>

    );


}

const styles = {
    button: {
        alignSelf: 'flex-end',
        padding: 8,
        borderColor: 'white',
        backgroundColor:'#232f3e',
        borderWidth: 1,
        borderRadius: 10,
        marginRight: 5
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