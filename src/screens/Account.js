import React from 'react';
import { View, Text, Image, StyleSheet, FlatList} from 'react-native';
import { Transition } from 'react-navigation-fluid-transitions';


const DATA = [
    {
        title: 'All My Orders',
        data: ['Unpaid', 'To be shipped ', 'Finished Orders'],
    },
    {
        title: 'Invite Friends',
        data: ['Via Local Contact', 'Via Whatsapp', 'Via Facebook'],
    },
    {
        title: 'Make a Suggestion',
        data: ['Water', 'Coke', 'Beer'],
    },
    {
        title: 'Notifications',
        data: ['Timely', 'Weekly'],
    },
];


class Account extends React.Component {

    constructor(props){
        super(props);
        fetch('https://ah3zewkpw1.execute-api.us-east-1.amazonaws.com/flight/item', {
            "method": "GET",


        })
            .then(response => console.log('asdsadasd', response.json())
            )
    }

    render() {

        const src = require('../assets/icons/avatar.png')
        return (
            <View style={{ alignContent: "center", justifyContent: 'center', flex: 1, }}>
                <View style={cs.header}>
                    <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#6C63FF', borderBottomLeftRadius: 25, borderBottomRightRadius: 25 }}>
                        <Transition shared='avatar'>
                            <Image style={cs.avatar}
                                source={{ uri: 'https://mdbootstrap.com/img/Photos/Avatars/img(20).jpg' }}
                            />
                        </Transition>
                        {/* <Text
                        onPress = {() => this.props.navigation.navigate('Home')}
                        >
                            Friends
                        </Text> */}
                    </View>
                </View>
                <View style={cs.footer}>
                    <FlatList
                    style ={{marginTop:50}}
                    data ={['My orders','Friends']}
                    renderItem = {(item) => {
                        return(
                            <View style={{flexDirection:'row'}}>
                                <Image
                                source ={require('../assets/icons/email.png')}
                                style ={{marginLeft:50,height : 20 ,width:20 , marginTop:11, tintColor:'#727C8E'}}
                                />
                            <Text style ={{marginLeft:10,fontSize:22, color:'#727C8E' , marginTop:9}}>
                                {item.item}
                            </Text>
                            <Image
                            source= {require('../assets/icons/ra.png')}
                            style ={{marginTop:13,height:23,width:23,tintColor:"#6C63FF", marginLeft:100}}
                            />
                            </View>
                        )
                    }}
                    />

                </View>
            </View>
        )
    }
}

export default Account;


const cs = StyleSheet.create({
    header: {

        flex: 2,
        backgroundColor: '#ffffff'

    },
    footer: {
        flex: 4,
        backgroundColor: '#ffffff'
    },
    avatar: {
        height: 120,
        width: 120,
        borderRadius: 60,
        alignSelf: 'center',
        marginLeft: 120
    }
})