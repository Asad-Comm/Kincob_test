import React from 'react';
import { Text, View, TouchableHighlight, Image } from 'react-native';
import { LoginCard, CardItem } from '../../Common';
import Input from './Input';

class V_Login extends React.Component {



    state = {

        error: '',


    };



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
        // const {email, password} = this.props;

        var email = 'email@email.com';
        var password = '123456';

        console.log("Email", email, 'password', password);
        this.props.loginUser({ email, password }, success => {


            this.props.navigation.navigate('Drawer')
            console.log('success', success);

        });

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
                style={{ borderRadius: 12, backgroundColor: "#34abe0", width: '70%' }}
                underlayColor="#1e5ec1"
                activeOpacity={0.8}
                onPress={this.onButtonPress.bind(this)}>
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

        return (
            <View style={{ flex: 1, backgroundColor: '#ffc6be' }}>
                {/* <Transition shared = "logo">
                <Image
                style ={{ height : 100 , width: 100 , marginTop : 70 , alignSelf : 'center'}}
                source = {require("../../assets/logo/weather.png")}
                />
                </Transition> */}
                <Text style={{ marginBottom: 120, fontSize: 25, alignSelf: 'center', marginTop: 10, color: 'white' }}>Vendor Login</Text>
                <LoginCard
                >
                    <CardItem>
                        <Input
                            label="Email"
                            placeholder="example@email.com"
                            onChangeText={(text) => this.onEmailChange(text)}
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
                            // onChangeText={(text) => this.onPasswordChange(text)}
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




export default V_Login


const styles = {

    errorStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'


    }

}