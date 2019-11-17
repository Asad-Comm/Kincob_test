import React from 'react';
import { View, Text, UIManager, LayoutAnimation, Platform, Dimensions, Image, StatusBar , TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { addNewItem } from '../Redux/Actions';
import { showModal } from '../Redux/Actions';

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


class ProductModal extends React.Component {

    componentDidMount() {
        LayoutAnimation.configureNext(CustomLayoutSpring);
    }
    render() {
        const al = false;
        let gobackicon = "<";
        const { src, description, title, price, id } = this.props.src;
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
                    onPress={() => this.props.showModal(al)
                    }
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
                    <Text style={{ fontSize: 45, color: 'white', fontWeight: "bold", fontFamily: 'Cochin', textDecorationLine: 'underline' }}>
                        AL BADIYA
               </Text>
                    <TouchableHighlight
                        style ={{elevation:20 , marginLeft: 249, height:100 ,width:100}}
                        underlayColor = 'white'
                        onPress={() => {
                            console.log("impressed")
                            this.props.addNewItem({ title, price, src, id })
                        }}
                    >
                        <Text
                            style={{ color: 'white', fontSize: 19,  backgroundColor: 'darkgray', padding: 5, borderTopLeftRadius: 5, borderBottomLeftRadius: 5, elevation: 20, shadowColor: 'black' }}>
                            Add to Cart
                    </Text>
                    </TouchableHighlight>
                </View>
                <View style={{ height: height / 4, backgroundColor: '#373A3D', marginTop: 310, opacity: 0.8, justifyContent: 'center' }}>

                    <Text style={{ color: 'white', fontSize: 18, opacity: 1 }}>
                        {description}
                    </Text>


                </View>



            </View>
        )
    }
}

const MapStateToProps = ({ shop, auth }) => {

    const { toggleModal } = shop;

    console.log('Product View mapping s to p', shop, toggleModal);



    return {

        shop,
        toggleModal


    };

};




export default connect(MapStateToProps, { showModal, addNewItem })(ProductModal);