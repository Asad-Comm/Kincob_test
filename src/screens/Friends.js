import React from 'react';
import {View , Text , Image} from 'react-native';
import { Transition } from 'react-navigation-fluid-transitions';


class Friends extends React.Component{
    render(){
        const src = require('../assets/icons/avatar.png')
        return(
            <View style = {{alignContent : "center" , justifyContent : 'center'}}>
                <Text style = {{alignSelf: 'center'}}>
                    Friends
                </Text>
                <Transition shared ='avatar'>
                <Image style = {cs.avatar}
                        source = {src}
                        />
                </Transition>
            </View>
        )
    }
}

const cs = {
    avatar:{
        height : 180,
        width: 180,
        borderRadius:30,
        backgroundColor:'yellow',
        alignSelf:'center',
        marginLeft:40
    }
}

export default Friends;