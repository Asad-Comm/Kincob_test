import React from 'react';
import { View, Image , StatusBar } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/Home';
import WishList from '../screens/WishList';
import Account from '../screens/Account';
import Explore from '../screens/Explore';
import Friends from '../screens/Friends';
import Login from '../screens/Login';
import LoginForm from '../screens/Login/LoginForm';
import T_Login from "../screens/Login/T_Login";
import V_Login from '../screens/Login/V_Login';

class Nav extends React.Component {

    state = {
        isLoggedIn: false,
        auth: ''
    }




    render() {

        switch (this.props.who) {
            case "User":
                () => this.setState({ auth: 'U' })
            case 'Tailor':
                () => this.setState({ auth: 'T' })
            case 'Venor':
                () => this.setState({ auth: 'V' })
            default:
                () => this.setState({ auth: '' })
        }

        return (
            <View style={{ flex: 1 }}>
                <StatusBar backgroundColor = '#6C63FF' />
                {/* {this.state.isLoggedIn ?  */}
                <AppCont />
                 {/* : 
                <Account/>} */}
            </View>
        )
    }
}

const LoginNav = createStackNavigator({
    UserLogin: {
        screen: LoginForm
    },
    TailorLogin: {
        screen: T_Login
    },
    VendorLogin: {
        screen: V_Login
    }

})


const MyNav = createMaterialBottomTabNavigator({


    WishList: {
        screen: WishList,
        navigationOptions: {

            tabBarIcon: ({ tintColor }) => (
                <Image
                    style={{ height: 30, width: 30, tintColor: tintColor }}
                    source={require('../assets/icons/wh.png')}
                />
            ),
            tabBarLabel: () => null,
        }
    },
    Account: {
        screen: Account,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Image
                    style={{ height: 30, width: 30, tintColor: tintColor }}
                    source={require('../assets/icons/avatar.png')}
                />
            ),
            tabBarLabel: () => null,
            
            
        }
    },
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Image
                    style={{ height: 30, width: 30, tintColor: tintColor }}
                    source={require('../assets/icons/shop.png')}
                />
            ),
            tabBarLabel: () => null,
        }
    },
    Explore: {
        screen: Explore,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Image
                    style={{ height: 30, width: 30, tintColor: tintColor }}
                    source={require('../assets/icons/mannequin.png')}
                />
            ),
            tabBarLabel: () => null,
        }
    },
    // Friends:{
    //     screen:Friends,
    //     navigationOptions:{
    //         tabBarIcon : ({tintColor}) => (
    //           <Image
    //           style = {{height : 30, width :30 , tintColor : tintColor}}
    //           source = { require('../assets/icons/users.png')}
    //           />
    //         ),
    //         tabBarLabel : () => null, }
    // },




},
    {
    
        initialRouteName: 'Home',
        activeColor: '#5374eb',
        barStyle: {
            
            backgroundColor: 'white',
            

        },
        // shifting : true,
    }
)

const AuthNav = createStackNavigator({
    Login: {
        screen: LoginForm,
        navigationOptions: {
            header: () => null,

        }
    }
})

const Navigator = createStackNavigator({

    MyNav: {
        screen: MyNav,
        navigationOptions: {
            header: () => null
        }
    }
})


const AppCont = createAppContainer(Navigator);


export default Nav;