import React from 'react'
import { View, Image , Text ,TextInput } from 'react-native'
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
            <View style={{ borderColor:'lightgray',borderWidth:1,elevation:5,justifyContent:'center',width:"90%", marginTop: 10, alignSelf: "center", backgroundColor: "#ffffff",height: "22%" ,borderTopRightRadius: 20, borderBottomRightRadius: 20, borderTopLeftRadius: 20, borderBottomLeftRadius: 20 }}>
                {/* <Text style ={{fontSize:15 , color:'gray', fontWeight:'900',padding:10}}>
                    Search something...
                </Text> */}
                <TextInput
                style ={{width : "80%",padding:5}}
                placeholder =" Search something..."
                placeholderTextColor = 'gray'
                />

            </View>
        )
    }
}




export default HomeHeader ;