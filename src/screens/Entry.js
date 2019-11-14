import React from 'react'
import { View, Image, Text } from 'react-native'
import Nav from '../navigator/Nav'


class Entry extends React.Component {

    state = {
        isDecided: ''
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <Text 
                     onPress = {() => this.setState({isDecided : 'User'})}
                    style={{ alignSelf: 'center', marginVertical: 70 }}> User </Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Text 
                     onPress = {() => this.setState({isDecided : 'Tailor'})}
                    style={{ alignSelf: 'center', marginVertical: 70 }}> Tailor </Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Text
                    onPress = {() => this.setState({isDecided : 'Vendor'})}
                    style={{ alignSelf: 'center', marginVertical: 70 }}> Vendor </Text>
                </View>
                <Nav who = {this.state.isDecided} />
            </View>
        )
    }
}

export default Entry;