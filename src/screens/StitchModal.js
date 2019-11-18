import React from 'react';
import { View, Text, UIManager, LayoutAnimation, Platform, Dimensions, Image, StatusBar , TouchableHighlight } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

if (Platform.OS === 'android') { UIManager.setLayoutAnimationEnabledExperimental(true) }

var CustomLayoutSpring = {
    duration: 1800,
    create: {
        type: LayoutAnimation.Types.spring,
        property: LayoutAnimation.Properties.scaleXY,
        springDamping: 0.7,
    },
    update: {
        type: LayoutAnimation.Types.spring,
        springDamping: 0.7,
    },
    delete: {
        type: LayoutAnimation.Types.spring,
        property: LayoutAnimation.Properties.scaleXY,
        springDamping: 0.7
    }
};


class Stitch extends React.Component {

    componentDidMount() {
        LayoutAnimation.configureNext(CustomLayoutSpring);
    }
    render() {
        const al = false;
        let gobackicon = "<";
        const { src, description, title, price, id ,  } = this.props.src;
        return (
            <View style={{ height: height, width: width }}>
                <StatusBar translucent backgroundColor='transparent' />

                <Image
                    source={{ uri: src }}

                    style={{ height: height, width: width, position: "absolute" }}
                />

                <Image
                    style={{ position: "absolute", height: 50, width: 60, marginTop: 30, marginLeft: 3 }}
                    source={require('../assets/icons/back.png')}
                />


                <Text
                    
                    style={{ color: 'white', fontSize: 37, paddingLeft: 10, width: 70, elevation: 10, borderRadius: 10, marginTop: 30 }} />
                <View style={{ postion: 'absolute', marginTop: 20 }}>
                    <Text style={{ elevation: 5, borderTopRightRadius: 5, borderBottomRightRadius: 5, color: 'white', fontSize: 19, fontWeight: 'bold', marginTop: 10, padding: 5, backgroundColor: '#373A3D', width: 120, opacity: 0.75 }}>
                        {title}
                    </Text>
                    <Text style={{ elevation: 5, borderTopRightRadius: 5, borderBottomRightRadius: 5, color: 'white', fontSize: 19, fontWeight: 'bold', marginTop: 10, padding: 5, backgroundColor: '#373A3D', width: 70, opacity: 0.75 }}>
                        $ {price}
                    </Text>
                </View>
                <View
                    style={{ marginTop: 425, position: 'absolute', marginLeft: 10, backgroundColor: 'transparent', opacity: 0.9, elevation: 10, }}
                >
                    <Text style={{marginTop:height-710,fontSize: 45, color: 'white', fontWeight: "bold", fontFamily: 'Cochin', textDecorationLine: 'underline' }}>
                        {this.props.vendorName}
               </Text>
                  
                </View>
                <View style={{ height: height / 3, backgroundColor: '#373A3D', marginTop: 280, opacity: 0.8, justifyContent: 'center' }}>

                    <Text style={{ color: 'white', fontSize: 18, opacity: 1 ,marginBottom:20}}>
                        {description}
                    </Text>
                    <TouchableHighlight
                        style ={{marginBottom:50,justifyContent:'center',alignItems:'center', backgroundColor: 'darkgray', borderRadius:8,shadowColor: 'black',width:"100%"}}
                        underlayColor = 'white'
                        onPress={() => {
                            console.log("impressed")
                            // this.props.addNewItem({ title, price, src, id })
                        }}
                    >
                   <Text style ={{fontSize:22,height:40,width:130,color:'white',fontWeight:'bold' , paddingVertical:7, paddingHorizontal:4}}>
                     Add To Cart
                   </Text>
                    </TouchableHighlight>

                </View>



            </View>
        )
    }
}




export default Stitch;