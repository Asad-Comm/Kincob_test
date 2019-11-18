import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, StatusBar, Animated, TextInput, BackHandler, TouchableHighlight } from 'react-native';
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

    state = {
        expandAnimation: new Animated.Value(1),

    }

    aniamteBar() {

        Animated.spring(this.state.expandAnimation,
            {
                toValue: -200
                ,
                useNativeDriver: true,
                // friction : 6,
                damping: 15
                // tension:8
            }
        ).start()

    }

    resetBar() {
        Animated.spring(this.state.expandAnimation,
            {
                toValue: 0,
                useNativeDriver: true,
                // friction : 5,
                //    stiffness:8
                // tension:8
                damping: 14
            }
        ).start()
    }

    constructor(props) {
        super(props);
        fetch('https://ah3zewkpw1.execute-api.us-east-1.amazonaws.com/flight/item', {
            "method": "GET",


        })
            .then(response => console.log('asdsadasd', response.json())
            )
    }

    render() {

        // const src = require('../assets/icons/avatar.png')
        return (
            <View style={{ alignContent: "center", justifyContent: 'center', flex: 1, }}>
                <StatusBar backgroundColor='transparent' translucent />
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
                        style={{ marginTop: 50 }}
                        data={['My orders', ' Friends', 'WishList', "Refferral", "Coupons"]}
                        renderItem={(item) => {
                            return (
                                <View style={{ flexDirection: 'row' }}>
                                    <Image
                                        source={require('../assets/icons/email.png')}
                                        style={{ marginLeft: 50, height: 20, width: 20, marginTop: 11, tintColor: '#727C8E' }}
                                    />
                                    <Text style={{ marginLeft: 10, fontSize: 22, color: '#727C8E', marginTop: 9 }}>
                                        {item.item}
                                    </Text>
                                    <Image
                                        source={require('../assets/icons/ra.png')}
                                        style={{ marginTop: 13, height: 23, width: 23, tintColor: "#6C63FF", marginLeft: 100 }}
                                    />
                                </View>
                            )
                        }}
                    />


                </View>
                <Animated.View
                    style={{
                        transform: [{
                            translateY: this.state.expandAnimation
                        }], alignSelf: 'center', width: '100%'
                    }}
                >

                    <View style={{ flexDirection: 'row', borderColor: 'lightgray', borderWidth: 1, elevation: 5, justifyContent: 'center', width: "90%", marginTop: 10, alignSelf: "center", backgroundColor: "#ffffff", height: "25%", borderTopRightRadius: 20, borderBottomRightRadius: 20, borderTopLeftRadius: 20, borderBottomLeftRadius: 20 }}>

                        <Image
                            source={require('../assets/icons/bottomNavBarIcons/Search.png')}
                            style={{ height: 20, width: 20, marginVertical: 10, opacity: 0.7 }}
                        />
                        <TextInput
                            style={{ width: "80%", padding: 5, alignContent: 'center' }}
                            placeholder=" Search something..."
                            placeholderTextColor='gray'
                            onFocus={() => this.aniamteBar()}
                            onEndEditing={() => this.resetBar()}
                            clearTextOnFocus={true}



                        />

                    </View>
                    <TouchableHighlight
                    onPress={() => BackHandler.exitApp()}

                    underlayColor='purple'
                    style={{position:'absolute',alignSelf:'center', backgroundColor: '#903DFF', paddingVertical: 12, paddingHorizontal: 55, borderRadius: 40 , marginTop:80 }}>
                    <Text style = {{color:'white', fontSize:15}}
                    > LOGOUT </Text>
                </TouchableHighlight>

                </Animated.View>
                
            </View>
            
        )
    }
}

export default Account;


const cs = StyleSheet.create({
    header: {

        flex: 3,
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