import React from 'react';
import { View, Text, Animated, FlatList, PanResponder, LayoutAnimation, UIManager, StatusBar, Image } from 'react-native';
import HomeHeader from './components/HomeHeader';


class Explore extends React.Component {

    state = {
        expandAnimation: new Animated.Value(0),
        expanded: false,
        cart_pany: null,
        data:[]
        // valueX : 10
    }

    constructor(props) {
        super(props);
        fetch('https://ah3zewkpw1.execute-api.us-east-1.amazonaws.com/flight/item')
        .then(res => res.json())
        .then(resjson => {
            this.setState({data: [resjson]})
            console.log('data is here0',resjson)}
        )



        const panny = PanResponder.create({
            onMoveShouldSetPanResponderCapture:()=>true,
            onStartShouldSetPanResponderCapture:()=>true,
            onStartShouldSetPanResponder:() => true,
            onPanResponderGrant: (ev, ge) => {
                console.log("panny", ge)

            }
        })
        this.setState({
            panny: panny.panHandlers
        })
    }


    aniamteBar() {

        Animated.spring(this.state.expandAnimation,
            {
                toValue: 20
                ,
                useNativeDriver: true,
                // friction : 5,
                damping: 7
            }
        ).start()

    }

    resetBar() {
        Animated.spring(this.state.expandAnimation,
            {
                toValue: 5,
                useNativeDriver: true,
                // friction : 5,
                damping: 9
            }
        ).start()
    }
    render() {
        const handles = this.state.panny
        return (
            <View
                {...handles}
                style={{ flex: 1, alignContent: "center", justifyContent: 'center', backgroundColor: "black" }}>

                {/* hide the sttus bar */}
                <StatusBar hidden />

                {/* <Animated.View style={{
                    transform: [{
                        scaleX: this.state.expandAnimation
                    }], flex: 1, width: 5, alignSelf: 'center'
                }}>
                    <HomeHeader />
                </Animated.View> */}
                {/* <View style={{ flex: 10 }}>
                    <Text style = {{marginLeft : 110 , marginVertical : 120}}
                        onPress={() => this.aniamteBar()}
                    > Search Animate </Text>
                    <Text style = {{marginLeft : 110}}
                        onPress={() => this.resetBar()}
                    > Search Deanimate </Text>
                </View> */}
                <View 
                 {...handles}
                style={{ flex: 6, backgroundColor: "lightgray", borderBottomLeftRadius: 40, borderBottomRightRadius: 40 }}>
                    <FlatList
                    {...handles}
                    
                        style={{ backgroundColor: 'tranparent' }}
                        contentContainerStyle={{ flexDirection: "row", flexWrap: 'wrap', justifyContent: 'space-between', borderBottomLeftRadius: 40, borderBottomRightRadius: 40 }}
                        data ={this.state.data}
                        renderItem={(item) => {
                            console.log('source link', item.item.data[0])
                            const { src } = item.item.data[4]
                            console.log('asdasdas',src)
                            
                                return(
                                    <View>
                                        <Image
                                        style ={{height:200,width:170 , borderRadius:30, marginVertical:50 , marginLeft:50}}
                                        source ={{uri:src}}
                                        />
                                    </View>
                                )
                        
                        }}
                    />
                </View>

                <View 
              {...handles}  
                style={{ flex: 1, backgroundColor: 'black' }}>

                </View>


            </View>
        )
    }
}

export default Explore;