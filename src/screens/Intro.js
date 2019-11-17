import React from 'react';
import { View, Text, Dimensions, StatusBar, Image, StyleSheet } from 'react-native';
import { Tailor, User } from '../navigator/Nav';


const width = Dimensions.get("window").width;
const height = Dimensions.get('window').height;



export default class Introd extends React.Component {
    render() {
        return (<View style={{ flex: 1 }}>
            <Image
                style={{ height: height + 50, width: width, position: 'absolute' }}
                source={require('../assets/intro.jpg')}
            />
            <View style={{
                flex: 1, justifyContent: 'space-evenly', alignItems: 'center'
            }}>

                <StatusBar backgroundColor='transparent' translucent />
                <Text style={styles.title}
                    onPress={() => this.props.navigation.navigate('User', {
                        userPool: "us-east-1_uQuK4765n",
                        clientId: "566r3o48dsp66po8s8aiqsccse",
                        type: "User"
                    })}
                > User </Text>
                <Text style={styles.title}
                    onPress={() => this.props.navigation.navigate('Tailor', {
                        userPool: "us-east-1_1WdobZGcn",
                        clientId: "5te1g0d9nqm3er19mmqa58vnv4",
                        type: "Tailor"
                    })}

                >Tailor</Text>
                <Text
                    style={styles.title}
                    onPress={() => this.props.navigation.navigate('Vendor', {
                        userPool: "us-east-1_GnZkxeMYs",
                        clientId: "58n8f8v7jev1cl5mcgokuigvns",
                        type: "Vendor"
                    })}
                > Vendor</Text>
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    title : {
        fontSize : 37,
        textAlignVertical:'center',
        color: 'white',
        fontWeight:'normal',
        paddingHorizontal:50,
        backgroundColor:'darkgray',
        opacity:0.8,
        borderRadius:10
        // borderTopWidth:2,
        // borderColor:'black'
    }
})