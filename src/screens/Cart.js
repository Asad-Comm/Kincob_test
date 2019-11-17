import React from 'react';
import { View, Text, FlatList, Image, Picker, TouchableHighlight ,StatusBar ,UIManager, LayoutAnimation, Platform,  } from 'react-native';
// import ProductList from './ProductList';
import { connect } from 'react-redux';
import { updateCart, delItem, addToTotal, clearCart } from '../Redux/Actions';
// import { Card } from './Card';
import { CardItem } from '../Common/CardItem';
import { Button } from '../Common/Button';
import DeleteButton from '../Common/DeleteButton';

var CustomLayoutSpring = {
    duration: 1800,
    create: {
        type: LayoutAnimation.Types.spring,
        property: LayoutAnimation.Properties.scaleXY,
        springDamping: 0.7,
    },
    update: {
        type: LayoutAnimation.Types.easeInEaseOut,
        property: LayoutAnimation.Properties.scaleX,
        springDamping: 0.7,
    },
    delete: {
        type: LayoutAnimation.Types.spring,
        property: LayoutAnimation.Properties.scaleXY,
        springDamping: 0.7
    }
};



class Cart extends React.Component {

    componentDidMount() {
        console.log('Got cart :', this.props.shop)

        this.props.updateCart();
    }






    render() {
        LayoutAnimation.configureNext(CustomLayoutSpring);
        return (
            <View style={{ flex: 1 }}>
<StatusBar backgroundColor ="transparent" translucent barStyle = 'dark-content' />
                <FlatList
                style ={{marginTop:50}}
                    data={this.props.items_in_cart}
                    renderItem={({ item }) => {
                        const { name, price, item_index, currentItem, source } = item;
                        console.log(`Your item ${name} will set you back $${price}`)
                        return (

                            <CardItem>
                                <View style={{ flex: 1, flexDirection: "row" }}>
                                    <View>
                                        <Image
                                            style={{marginLeft:10, height: 130, width: 100 ,borderRadius:9 }}
                                            source={{ uri: source }}
                                        />
                                    </View>
                                    <View style={{ flexDirection: 'column', marginTop: 6 , justifyContent:'center' }}>
                                        <Text style={{ fontSize: 18 , marginLeft:15, marginBottom:10 }}> {name}</Text>
                                        <Text style={{  fontWeight: 'bold', fontSize: 20 }}>    ${price}</Text>

                                        <View style={{ flexDirection: 'row' }}>


                                            {/* <Picker

                                                    style={{ height: 30, width: 30 }}
                                                    onValueChange={(itemValue, itemIndex) => {
                                                        //  this.props.products.forEach(e => {
                                                        //      if(e.title === name){
                                                                 
                                                        //      }
                                                        //  })
                                                        let tl = price * itemValue
                                                        

                                                        this.props.addToTotal({tl})
                                                        console.log(itemIndex, ":", itemValue)
                                                    
                                                    }


                                                    }>
                                                    <Picker.Item label="1" value={1} />
                                                    <Picker.Item label="2" value={2} />
                                                </Picker> */}
                                        </View>

                                    </View>
                                    <View style={{ alignSelf: 'flex-end', marginLeft: 80, marginBottom: 30 }}>
                                        <DeleteButton

                                            onPress={() => this.props.delItem({ item_index, price })
                                            }
                                        />
                                    </View>

                                </View>
                            </CardItem>

                        )
                    }}
                />

                <CardItem>

                    <View style={{ elevation: 100,  flexDirection: 'row',width:350,flexWrap:'wrap' }}>
                        <Text style={{ fontSize: 17, fontWeight: '600', borderColor: 'white', padding: 25 ,color:'gray',opacity:0.7}}>
                            Total Amount :   $
                        </Text>

                        <Text style={{ fontSize: 25, fontWeight: 'bold', padding: 10, borderRadius: 30, color:'#888888' , marginLeft:10}}>
                            {this.props.totalAmount.toFixed(2)}
                        </Text>



                    </View>

                </CardItem>
                <TouchableHighlight
                underlayColor = '#c872ea'
                style ={{elevation:10,height:50,width:150,backgroundColor:'#9258ef',borderRadius:20,justifyContent:'center',alignItems:'center',alignSelf:'center',marginBottom:15}}
                    onPress={() => {
                        this.props.clearCart()
                    }}
                >
                    <Text  style ={{color :'white' , fontSize : 22 , fontWeight:'500'}}>Checkout</Text>
                </TouchableHighlight>
            </View>

        )
    }
}


const MapStateToProps = ({ shop }) => {



    const { items_in_cart, currentItem, totalAmount, products } = shop;

    console.log("Updating cart accasa.....", shop);

    return {
        products,
        items_in_cart,
        currentItem,
        totalAmount,
        shop
    }


}

export default connect(MapStateToProps, { updateCart, delItem, addToTotal, clearCart })(Cart);