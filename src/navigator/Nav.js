import React from 'react';
import { View, Image, StatusBar } from 'react-native';
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
import SignUp from '../screens/Login/SignUp';
import { connect } from 'react-redux';
import Cart from '../screens/Cart';
import ProductModal from '../screens/ProductModal';
import Introd from '../screens/Intro';


class Nav extends React.Component {

    state = {
        isLoggedIn: false,
        auth: '',
        signUpSuccess: this.props.signUpSuccess
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
                {/* <StatusBar backgroundColor = '#6C63FF' /> */}
                {/* <ProductModal/> */}
                <AppCont />

                {/* <LoginCont/> */}
                {/* <Introd /> */}

            </View>
        )
    }
}



export const Tailor = createStackNavigator({
    SignUp: {
        screen: SignUp,
        // params: {
        //     userPool: "us-east-1_1WdobZGcn",
        //     clientId: "4hi225vi3e150ugn70fjtov5v2",
        //     type: "Tailor"
        // }
    }
    ,
    TrueReg: {
        screen: Friends,
        // navigationOptions: {
        //     header: () => null
        // }
    }
},{
    defaultNavigationOptions:{
        header:() => null
    }
})




 const Vendor = createStackNavigator({
    VendorLogin: {
        screen: SignUp,
        params: {

        }
    }
    ,
    TrueReg: {
        screen: Friends,
        navigationOptions: {
            header: () => null
        }
    }
},
{
    defaultNavigationOptions:{
        header:() => null
    }
})

export const LoginNav = createStackNavigator({

    UserLogin: {
        screen: LoginForm,

        navigationOptions: {
            header: () => null,
        }
    }
}
    ,
    {
        headerMode: 'float'
    })

const LoginCont = createAppContainer(LoginNav);


const MyNav = createMaterialBottomTabNavigator({


    WishList: {
        screen: WishList,
        navigationOptions: {

            tabBarIcon: ({ tintColor }) => (
                <Image
                    style={{ height: 25, width: 25, tintColor: tintColor }}
                    source={require('../assets/icons/bottomNavBarIcons/Cart.png')}
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
                    style={{ height: 25, width: 25, tintColor: tintColor }}
                    source={require('../assets/icons/avatar.png')}
                />
            ),
            tabBarLabel: () => null,


        }
    },
    Home: {
        screen: Cart,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Image
                    style={{ height: 25, width: 25, tintColor: tintColor }}
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
                    style={{ height: 25, width: 25, tintColor: tintColor }}
                    source={require('../assets/icons/bottomNavBarIcons/Home.png')}
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

        initialRouteName: 'Explore',
        activeColor: '#5374eb',
        barStyle: {

            backgroundColor: 'white',


        },
        // shifting : true,
    }
)


export const User = createStackNavigator({
    SignUp: {
        screen: SignUp,
        // params: {
        //     userPool: "us-east-1_uQuK4765n",
        //     clientId: "566r3o48dsp66po8s8aiqsccse",
        //     type: "User"
        // },
        navigationOptions: {
            header: () => null
        }
    },

    TrueReg: {
        screen: Friends,
        navigationOptions: {
            header: () => null
        }
    },


    // MyNav: {
    //     screen: MyNav,
    //     navigationOptions: {
    //         header: () => null
    //     }
    // }

})



// const Navigator = createStackNavigator({

//     MyNav: {
//         screen: MyNav,
//         navigationOptions: {
//             header: () => null
//         }
//     }
// })

const OH = createStackNavigator({
    Introd:{
        screen:Introd
    },
    Tailor:{
        screen:Tailor
    },
    User:{
        screen:User
    },
    Vendor:{
        screen : Vendor
    }
},{
    defaultNavigationOptions:{
        header:() => null
    }
})

const AppCont = createAppContainer(OH);


const MapStateToProps = (auth) => {

    const { userName, password, email, error_message, signUpSuccess } = auth

    console.log('gooloto', password, email, userName, error_message, signUpSuccess);


    return {

        auth,
        userName,
        password,
        email,
        error_message,
        signUpSuccess

    };

};

export default connect(MapStateToProps)(Nav);