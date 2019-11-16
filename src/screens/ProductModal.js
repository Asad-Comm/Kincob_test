import React from 'react';
import { View, Text, UIManager, LayoutAnimation, Platform, Dimensions, Image } from 'react-native';
import { connect } from 'react-redux';
import { showModal } from '../Redux/Actions';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

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
    delete: {
      type: LayoutAnimation.Types.spring,
      property: LayoutAnimation.Properties.scaleXY
    }
};


class ProductModal extends React.Component {

    componentDidMount() {
        LayoutAnimation.configureNext(CustomLayoutSpring);
    }
    render() {
        const al = false;
        let gobackicon = "<";
        const { src, description, title, price } = this.props.src;
        return (
            <View style={{ height: height, width: width }}>

                <Image
                    source={{ uri: src }}
                    style={{ height: height, width: width, position: "absolute" }}
                />

                <Text
                    onPress={() => this.props.showModal(al)
                    }
                    style={{ color: 'white', fontSize: 35 , paddingLeft: 10 , width:60, elevation:10, borderRadius:10}}> {gobackicon}</Text>


                <Text style={{ color: 'white', marginTop: 400 }}>
                    {description}
                </Text>


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




export default connect(MapStateToProps, { showModal })(ProductModal);