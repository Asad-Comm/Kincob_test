import React from 'react';
import {View , Text} from 'react-native';


class WishList extends React.Component{
    render(){
        return(
            <View style = {{alignContent : "center" , justifyContent : 'center'}}>
                <Text style = {{alignSelf: 'center'}}>
                    WishList
                </Text>
            </View>
        )
    }
}

export default WishList;