import React from 'react';
import { View, Text, TouchableHighlight, StatusBar, Modal, UIManager, LayoutAnimation , Dimensions } from 'react-native';
import { LoginCard, CardItem } from '../../Common';
import Input from './Input';
import { emailChanged, passwordChanged, nameChanged, loginUser } from '../../Redux/Actions';
import { connect } from 'react-redux';

const width = Dimensions.get("window").width;
const height  = Dimensions.get('window').height;

if (Platform.OS === 'android') { UIManager.setLayoutAnimationEnabledExperimental(true) }

var CustomLayoutSpring = {
    duration: 1000,
    create: {
        type: LayoutAnimation.Types.spring,
        property: LayoutAnimation.Properties.scaleXY,
        springDamping: 0.7,
    },
    update: {
        type: LayoutAnimation.Types.spring,
        springDamping: 0.7,
    },
};

class SignUp extends React.Component {

    componentDidMount() {
        this.setState({error_message:null});
        LayoutAnimation.configureNext(CustomLayoutSpring);

    }

    state = {
        nameChanged: this.props.userName,
        password: this.props.password,
        email: this.props.email,
        error_message: this.props.error_message,
        modalVisible: false,
        toLogin:true
    }




    render() {
        const { email, password, userName } = this.props;
        LayoutAnimation.configureNext(CustomLayoutSpring);
        return (
            <View style={{ flex: 1, backgroundColor: '#2A2B3C' }}>
                <StatusBar backgroundColor='#2A2B3C' />
                {/* {this.state.error_message !== null ? this.state.modalVisible = !this.state.modalVisible : null} */}
                {this.state.modalVisible ? this.renderModal() : null}
                <Text style={{ fontSize: 30, color: 'white', marginTop: height/40, marginBottom: 30, marginLeft: 40 }}>Create Account</Text>
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
                    onPress={() => { 
                        this.props.loginUser({ email, password, userName }, success => {

                            // this.setState({showError:!this.state.showError})
                            console.log('success call', success);
                            this.props.navigation.navigate('TrueReg');

                        });
                        
                    }
                    }

                    underlayColor='purple'
                    style={{ alignSelf: "center", backgroundColor: '#903DFF', paddingVertical: 12, paddingHorizontal: 55, marginTop: 70, borderRadius: 40 }}>
                    <Text style={{ fontSize: 20, color: 'white' }}>SIGN UP FOR FREE</Text>
                </TouchableHighlight>

                {/* <Text 
                onPress = {() => this.setState({error_message : null})}
                style={{marginVertical:500,borderRadius:10,opacity:0.7,position:'absolute', fontSize: 20, color: 'white', backgroundColor: 'red', padding: 7, alignSelf: 'center' }}>{this.props.error_message}</Text> */}


                <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 80 }}>
                    <Text style={{ fontSize: 18, color: 'white' }}>Already have an account?</Text>
                    <Text 
                    onPress ={() =>this.props.navigation.navigate('UserLogin')
                }
                    style={{ fontSize: 18, color: 'white', fontWeight: '700' }}> Sign In</Text>


                </View>



                <Text 
                
                style={{ fontSize: 16, color: '#BC7EFB', alignSelf: 'center', marginTop: 90, borderBottomWidth: 1, borderBottomColor: '#BC7EFB' }}>help?</Text>




            </View>
        )
    }
}


const MapStateToProps = ({auth}) => {

    const { userName, password, email, error_message, signUpSuccess } = auth

    console.log('gooloto', password, email, userName, error_message, signUpSuccess);


    return {

        auth,
        userName,
        password,
        email,
        error_message

    };

};




export default connect(MapStateToProps, { emailChanged, loginUser, nameChanged, passwordChanged })(SignUp);
// export default SignUp;