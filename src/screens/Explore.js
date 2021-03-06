import React from 'react';
import { View, Text, TextInput, Animated, FlatList, PanResponder, LayoutAnimation, UIManager, StatusBar, Image, Dimensions, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { fetchProducts, showModal, fetchProductsUnStitched } from '../Redux/Actions';
import ProductModal from './ProductModal';



const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class Explore extends React.Component {

    state = {
        expandAnimation: new Animated.Value(0),
        expanded: false,
        cart_pany: null,
        data: this.props.products,
        showProduct: this.props.toggleModal,
        item: { src: 'hello' },
        vendorName: '',
        usVendorName: '',
        data2: this.props.unstitchedProducts
        // valueX : 10
    }

    constructor(props) {
        super(props);
        fetch('https://ah3zewkpw1.execute-api.us-east-1.amazonaws.com/flight/item')
            .then(res => res.json())
            .then(resjson => {
                const { data, name } = resjson[0]
                props.fetchProducts({ data });
                // this.setState({ data })
                this.setState({ vendorName: name })
                console.log('Stitched data is here', resjson[0])
            }
            )
        fetch('https://ah3zewkpw1.execute-api.us-east-1.amazonaws.com/flight/item')
            .then(res => res.json())
            .then(resjson => {
                const { data, name } = resjson[1]
                props.fetchProductsUnStitched({ data });
                // this.setState({ data2 })
                this.setState({ usVendorName: name })
                console.log('Unstitched data is here', resjson[1])
            }
            )



        const panny = PanResponder.create({
            onMoveShouldSetPanResponderCapture: () => true,
            onStartShouldSetPanResponderCapture: () => true,
            onStartShouldSetPanResponder: () => true,
            onPanResponderGrant: (ev, ge) => {
                console.log("panny", ge)

            }
        })
        this.setState({
            panny: panny.panHandlers
        })
    }

    componentDidMount() {
        console.log("Current User", this.props.auth.user);

    }

    aniamteBar() {

        Animated.spring(this.state.expandAnimation,
            {
                toValue: -200
                ,
                useNativeDriver: true,
                // friction : 6,
                damping: 15
                // tension:8
            }
        ).start()

    }

    resetBar() {
        Animated.spring(this.state.expandAnimation,
            {
                toValue: 0,
                useNativeDriver: true,
                // friction : 5,
                //    stiffness:8
                // tension:8
                damping: 14
            }
        ).start()
    }
    render() {
        const handles = this.state.panny
        return (
            <View
                {...handles}
                style={{ flex: 1, alignContent: "center", backgroundColor: 'white' }}>
                {this.props.toggleModal ? <ProductModal src={this.state.item} vendorName={this.state.vendorName} /> : null}

                <ScrollView>
                    {/* hide the sttus bar */}
                    <StatusBar backgroundColor='transparent' translucent />


                    <View
                        {...handles}
                        style={{ height: 330, alignItems: 'center', borderBottomLeftRadius: 25, borderBottomRightRadius: 25, backgroundColor: '#2A2B3C' }}>
                        <Text style={{ fontSize: 25, color: 'white', fontWeight: 'bold', position: 'absolute', elevation: 10, marginTop: 20 }}>
                            New Arrivals
                    </Text>
                        <FlatList
                            horizontal
                            {...handles}
                            style={{ borderBottomLeftRadius: 30, borderBottomRightRadius: 30, width: 357, marginTop: 14 }}
                            // style={{ height : 100  }}
                            contentContainerStyle={{ flexDirection: "row", flexWrap: 'wrap' }}
                            // data ={this.state.data[0]}
                            data={this.props.products}
                            renderItem={(item) => {
                                console.log('source link', item.item)
                                // const { src } = item[0]
                                console.log('asdasdas', item.item.src)
                                // item.forEach(elem => {
                                //     console.log('source:',elem.src);

                                // });

                                return (
                                    <View>
                                        <Image
                                            as
                                            style={{ height: 220, width: 150, borderRadius: 5, marginVertical: 50, marginLeft: 20 }}
                                            source={{ uri: item.item.src }}
                                        />
                                        <View

                                            style={{ marginLeft: 20, flex: 1, position: 'absolute', backgroundColor: 'black', marginVertical: 235, width: 150, alignItems: 'center', opacity: 0.7 }}>
                                            <Text
                                                onPress={() => {
                                                   
                                                    this.setState({ item: item.item })
                                                    this.props.showModal(true);
                                                }
                                                }
                                                style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}>
                                                {item.item.title}
                                            </Text>
                                        </View>

                                    </View>
                                )

                            }}
                        />
                    </View>
                    <Text
                        // onPress={() => this.resetBar()}

                        style={{ marginLeft: 10, fontSize: 15, color: 'darkgray', fontWeight: 'bold', marginTop: 15, }}>
                        Recently Viewed
                    </Text>
                    <Text
                        onPress={() => this.aniamteBar()}
                        style={{ fontSize: 15, color: '#8186d5', fontWeight: 'bold', alignSelf: 'flex-end', marginRight: 5 }}>
                        CLEAR
                    </Text>
                    <FlatList
                        contentContainerStyle={{ flexWrap: 'wrap', width: width }} horizontal
                        style={{ backgroundColor: 'white' }}
                        data={["Jacket with white mask ", "Wool pencil trousers gray", "Black Leather", "Sharpy pencil ", "Black Leather"]}
                        renderItem={(item) => {
                            return (
                                <View style={{ elevation: 8, margin: 10, backgroundColor: 'white', padding: 5, borderTopLeftRadius: 5, borderTopRightRadius: 5, borderBottomRightRadius: 5, borderBottomLeftRadius: 5, }}>
                                    <Text >
                                        {item.item}
                                    </Text>
                                </View>
                            )
                        }}
                    />


                    


                    <View>
                        <FlatList
                            horizontal
                            {...handles}
                            style={{ borderBottomLeftRadius: 30, borderBottomRightRadius: 30, width: 357, marginTop: 14 }}
                            // style={{ height : 100  }}
                            contentContainerStyle={{ flexDirection: "row", flexWrap: 'wrap' }}
                            // data ={this.state.data[0]}
                            data={this.props.unstitchedProducts}
                            renderItem={(item) => {
                                console.log('source link', item.item)
                                // const { src } = item[0]
                                console.log('asdasdas', item.item.src)
                                // item.forEach(elem => {
                                //     console.log('source:',elem.src);

                                // });

                                return (
                                    <View style={{ marginBottom: 70 }}>
                                        <Image
                                            as
                                            style={{ height: 295, width: width - 50, borderRadius: 5, marginLeft: 20 }}
                                            source={{ uri: item.item.src }}
                                        />
                                        <View

                                            style={{ marginLeft: 20, flex: 1, position: 'absolute', backgroundColor: 'black', width: 150, alignItems: 'center', opacity: 0.7 }}>
                                            <Text
                                                onPress={() => {
                                                    this.setState({ item: item.item })
                                                    this.props.showModal(true);
                                                }
                                                }
                                                style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}>
                                                {item.item.title}
                                            </Text>
                                        </View>

                                    </View>
                                )

                            }}
                        />



                    </View>

                </ScrollView>
            </View>
        )
    }
}
const MapStateToProps = ({ shop, auth }) => {

    const { products, toggleModal, unstitchedProducts } = shop;

    console.log('shopping', shop, products);



    return {

        shop,
        products,
        auth,
        toggleModal,
        unstitchedProducts

    };

};




export default connect(MapStateToProps, { fetchProducts, showModal, fetchProductsUnStitched })(Explore);