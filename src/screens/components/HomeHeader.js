import React from 'react'
import { View, Image , Text } from 'react-native'
import { SearchBar } from 'react-native-elements';


class HomeHeader extends React.Component {

    state = {
        search: ''
    }

    updateSearch = search => {
        this.setState({ search });
    }

    render() {
        return (
            <View style={{  marginTop: 10, flex: 0.7, alignSelf: "center", backgroundColor: "#ffffff",height: 50 , width: 10,borderTopRightRadius: 2, borderBottomRightRadius: 2, borderTopLeftRadius: 2, borderBottomLeftRadius: 2 }}>
            <View style ={{flex:5 , backgroundColor:"gray" , borderBottomLeftRadius:20  , borderBottomRightRadius:20}}>

            </View>

            <View style = {{ flex : 1, backgroundColor:'black'}}>

            </View>

            </View>
        )
    }
}




export default HomeHeader ;