import React from 'react';
import { View, Text, Image  , TouchableHighlight } from 'react-native';
import { LoginCard, CardItem } from '../Common';
import Input from './Login/Input';
import { connect } from 'react-redux';






class Friends extends React.Component {


    state = {
        text: '',
        visible: false
    }



    checkRegistration(success) {
        this.props.user.confirmRegistration(this.state.text, true, function (err, result) {
            if (err) {
                alert("Invalid Code");
                console.log('Verification error', err);

                return;
            }
            console.log('call result: ' + result);
            alert("Registration Successful");
            success(true);


        });
    }


    render() {
        const src = require('../assets/icons/avatar.png')
        return (
            <View style={{ flex: 1, backgroundColor: '#2A2B3C' }}>

                <Text style={{ marginBottom: 120, fontSize: 25, alignSelf: 'center', marginTop: 10, color: 'white' }}>User Login Verification</Text>
                <LoginCard
                >
                    <CardItem>
                        <Input
                            label="Code"
                            placeholder="example 99BH89"
                            placeholderTextColor='gray'
                            onChangeText={(text) => this.setState({ text })}
                            value={this.props.email}
                        />

                    </CardItem>

                </LoginCard>

                <TouchableHighlight
                underlayColor = "purple"
                 onPress={() => this.checkRegistration(success => {
                    console.log("Verification successfull")
                    this.props.navigation.navigate('UserLogin')

                })}
                 style={{ alignSelf: "center", backgroundColor: '#903DFF', paddingVertical: 12, paddingHorizontal: 55, marginTop: 70, borderRadius: 40 }}>
                 
                
                    <Text
                       
                        style={{ fontSize: 25, color: 'white', alignSelf: 'center' }}>VERIFY</Text>

                </TouchableHighlight>



            </View>
        )
    }
}



const MapStateToProps = ({ auth }) => {

    const { user } = auth

    console.log('registration', user);


    return {

        auth,
        user

    };

};




export default connect(MapStateToProps)(Friends);