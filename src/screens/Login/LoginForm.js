import React from 'react';
import { Text, View, TouchableHighlight, Image , Platform , LayoutAnimation , UIManager , BackHandler } from 'react-native';
import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js';
import { LoginCard, CardItem } from '../../Common';
import Input from './Input';
import { connect } from 'react-redux';


if (Platform.OS === 'android') { UIManager.setLayoutAnimationEnabledExperimental(true) }

var CustomLayoutAnimation = {
    duration: 1000,
    create: {
      type: LayoutAnimation.Types.easeInEaseOut,
      property: LayoutAnimation.Properties.opacity,
    },
    update: {
      type: LayoutAnimation.Types.curveEaseInEaseOut,
    },
  };

  var CustomLayoutSpring = {
    duration: 500,
    create: {
        type: LayoutAnimation.Types.easeInEaseOut,
        property: LayoutAnimation.Properties.scaleXY,
        springDamping: 0.9,
    },
    update: {
        type: LayoutAnimation.Types.spring,
        springDamping: 0.7,
    },
        
    
};


class LoginForm extends React.Component {

    
      

    // componentWillUnmount() {
    //     BackHandler.removeEventListener('hardwareBackPress');
    //   }

    // componentDidMount(){
    //     LayoutAnimation.configureNext(CustomLayoutSpring);
    //     BackHandler.addEventListener(
    //         "hardwareBackPress",
    //         BackHandler.exitApp()
    //     )
        

    // }


    state = {

        error: '',
        password: '',
        username: ''

    }

    



    static navigationOptions = {

        header: () => null,


    };


    onEmailChange(text) {

        this.props.emailChanged(text);

    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }



    onButtonPress() {


        var authenticationData = {
            Username: this.state.Username, // your username here
            Password: this.state.password, // your password here
        };
       let authenticationDetails =
            new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);

            const userData = {
                Username: this.props.user.username,
                Pool: this.props.user.pool
            }

         let cognitoUser =
            new AmazonCognitoIdentity.CognitoUser(userData);
        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: function (result) {
                let accessToken = result.getAccessToken().getJwtToken();
                console.log('login sucessful');

            },

            onFailure: function (err) {
                alert(err);
            },
            mfaRequired: function (codeDeliveryDetails) {
                var verificationCode = prompt('Please input verification code', '');
                cognitoUser.sendMFACode(verificationCode, this);
            }
        });

        // // const {email, password} = this.props;

        // var email = 'email@email.com';
        // var password = '123456';

        // console.log("Email", email, 'password', password);
        // this.props.loginUser({ email, password }, success => {


        //     this.props.navigation.navigate('Drawer')
        //     console.log('success', success);

        // });

    }

    renderButton() {
        // if (this.props.loading){
        //    return (
        //       <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}> 
        //           <Spinner size="large"/>
        //        </View>);
        // }  
        return (
            <TouchableHighlight
                style={{ borderRadius: 32, backgroundColor: '#903DFF', width: '80%', marginTop: 50 }}
                underlayColor="#1e5ec1"
                activeOpacity={0.8}
                onPress= { () =>
                 {  this.props.navigation.navigate("MyNav");
                     this.onButtonPress.bind(this)}
                 }>
                <Text style={{ fontSize: 20, color: "white", padding: 7, alignSelf: 'center' }}> Login </Text>
            </TouchableHighlight>
        );
    }


    //  loginUserFail = (dispatch) => {
    //     dispatch({type: LOGIN_USER_FAIL});
    // };


    // loginUser = ({email, password}) => {
    //     console.log("Tryin to Login", email,password);
    //     firebase.auth().signInWithEmailAndPassword(email, password)
    // 	 .then(() => this.props.navigation.navigate('Main'))
    // 	 .catch((error) => {
    // 		 console.log("caught error:",error)


    // dispatch({ type: LOGIN_USER}); 


    //  firebase.auth().createUserWithEmailAndPassword(email,password)
    //  .then(user =>   loginUserSuccess(dispatch,user))
    // 	//  .catch(() => loginUserFail(dispatch));
    //  })
    //   .catch(

    //   )



    // };

    // renderButton(){
    //     if (this.props.loading){
    //        return (
    //           <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}> 
    //               <Spinner size="large"/>
    //            </View>);
    //     }  
    //     return(
    //       <Button
    //       title =" LOGIN "
    //       onPress={this.onButtonPress.bind(this)}/>

    //     );
    //   }

    render() {
        const type = this.props.navigation.getParam('type');
        return (
            <View style={{ flex: 1, backgroundColor: '#2A2B3C' }}>
                <Text style={{ fontSize: 55, color: 'white', marginTop: 60, marginBottom: 30, alignSelf:'center' }}>KINCOB</Text>

                {/* <Transition shared = "logo">
                <Image
                style ={{ height : 100 , width: 100 , marginTop : 70 , alignSelf : 'center'}}
                source = {require("../../assets/logo/weather.png")}
                />
                </Transition> */}
                <Text style={{ marginBottom: 90, fontSize: 25, alignSelf: 'center', marginTop: 40, color: 'white' }}>{type} Login</Text>
                <LoginCard
                >
                    <CardItem>
                        <Input
                            label="Name"
                            placeholder="User Name"
                            placeholderTextColor='gray'
                            onChangeText={(username) => this.setState({ username })}
                            value={this.props.email}
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
                            onChangeText={(password) => this.setState({ password })}
                            value={this.props.password}
                        />
                    </CardItem>
                </LoginCard>

                <Text style={styles.errorStyle}>
                    {this.state.error}
                </Text>




                <CardItem>
                    {this.renderButton()}
                </CardItem>







            </View>
        );
    }

}






const styles = {

    errorStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'


    }

}

const MapStateToProps = ({auth}) => {

    const { user } = auth

    console.log('Loggin in', user);


    return {

        auth,
        user

    };

};




export default connect(MapStateToProps)(LoginForm);