import React from 'react';
import {View , Text} from 'react-native';


class Home extends React.Component{
    render(){
        return(
            <View style = {{alignContent : "center" , justifyContent : 'center'}}>
                <Text style = {{alignSelf: 'center'}}>
                    Home
                </Text>
            </View>
        )
    }
}

export default Home;