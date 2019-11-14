import React from 'react';
import { View, Text, TouchableHighlight ,StatusBar } from 'react-native';
import { LoginCard, CardItem } from '../../Common';
import Input from './Input';
import {emailChanged , passwordChanged , nameChanged , loginUser} from '../../Redux/Actions';
import {connect} from 'react-redux';

class SignUp extends React.Component {

    state = {
        nameChanged : this.props.userName,
        password : this.props.password,
        email : this.props.email,
    }

    onSignUp() {
       
    }


    render() {
const {email , password , userName } = this.props;

        return (
            <View style={{ flex: 1, backgroundColor: '#2A2B3C' }}>
                <StatusBar backgroundColor = '#2A2B3C'/>
                <Text style={{ fontSize: 30, color: 'white', marginTop: 60, marginBottom: 30, marginLeft: 40 }}>Create Account</Text>
                <LoginCard>
                    <CardItem>
                        <Input

                            label="Name"
                            placeholder="user name"
                            placeholderTextColor='gray'

                        onChangeText={(text) => this.props.nameChanged(text)}

                        />
                    </CardItem>
                </LoginCard>
                <LoginCard>
                    <CardItem>
                        <Input

                            label="Email"
                            placeholder="email@abc.com"
                            placeholderTextColor='gray'

                        onChangeText={(text) => this.props.emailChanged(text)}

                        />
                    </CardItem>
                </LoginCard>
                <LoginCard>
                    <CardItem>
                        <Input
                            secureTextEntry
                            label="Password"
                            placeholder="password"
                            placeholderTextColor='gray'
                        onChangeText={(text) => this.props.passwordChanged(text)}

                        />
                    </CardItem>
                </LoginCard>
                <TouchableHighlight 
                onPress ={() => {
                    this.props.loginUser({ email , password, userName } , success => {
             
          
                        // this.props.navigation.navigate('Home')
                        console.log('success' , success);
                        
                    });
                   
                }
                }
                
                underlayColor = 'purple'
                style={{ alignSelf: "center", backgroundColor: '#903DFF', paddingVertical: 12, paddingHorizontal: 55, marginTop: 70, borderRadius: 40 }}>
                    <Text style={{ fontSize: 20, color: 'white' }}>SIGN UP FOR FREE</Text>
                </TouchableHighlight>

                <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 80 }}>
                    <Text style={{ fontSize: 18, color: 'white' }}>Already have an account?</Text>
                    <Text style={{ fontSize: 18, color: 'white', fontWeight: '700' }}> Sign In</Text>


                </View>

        {/* <Text style={{ fontSize: 20, color: 'white' }}>im bein {this.props.userName}</Text> */}


                <Text style ={{fontSize:16,color:'#BC7EFB',alignSelf:'center',marginTop:90,borderBottomWidth:1,borderBottomColor:'#BC7EFB'}}>help?</Text>




            </View>
        )
    }
}


const MapStateToProps = (auth) => {
    
const {userName , password , email} = auth

    console.log('gooloto',password , email, userName);
    
    
    return{

         auth,
         userName,
         password,
         email
   
    };

};




export default connect(MapStateToProps,{emailChanged , loginUser , nameChanged , passwordChanged})(SignUp);
// export default SignUp;