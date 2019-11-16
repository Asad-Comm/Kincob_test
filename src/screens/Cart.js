import React from 'react';
import { View, Text, FlatList, Image, Picker , TouchableHighlight } from 'react-native';
// import ProductList from './ProductList';
import { connect } from 'react-redux';
import { updateCart, delItem , addToTotal , clearCart } from '../Redux/Actions';
// import { Card } from './Card';
import { CardItem } from '../Common/CardItem';
import { Button } from '../Common/Button';
import DeleteButton from '../Common/DeleteButton';





class Cart extends React.Component {

    componentDidMount() {
        this.props.updateCart();
    }






    render() {
        return (
            <View style={{ flex: 1 , backgroundColor:'gray' }}>

                <FlatList
                    data={this.props.items_in_cart}
                    renderItem={({ item }) => {
                        const { name, price, item_index, currentItem, source } = item;
                        console.log(`Your item ${name} will set you back $${price}`)
                        return (
                            
                                <CardItem>
                                    <View style={{ flex: 1, flexDirection: "row" }}>
                                        <View>
                                            <Image
                                                style={{ height: 100, width: 100 }}
                                                source={{ uri: source }}
                                            />
                                        </View>
                                        <View style={{ flexDirection: 'column', marginTop: 10 }}>
                                            
                                            <Text style={{ alignSelf: 'flex-end' }}>    Price:${price}</Text>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Text>Quantity</Text>
                                                <Picker

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
                                                </Picker>
                                            </View>

                                        </View>
                                        <View style={{ alignSelf: 'flex-end', marginLeft: 80, marginBottom:30 }}>
                                            <DeleteButton
                                                name="Delete"
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

                    <View style={{ elevation: 100, alignContent: 'flex-end', alignItems: 'flex-end', flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, fontWeight: '600', borderColor: 'white', padding: 10 }}>
                            Total Amount :   $
                        </Text>

                        <Text style={{ fontSize: 20, fontWeight: '600', padding: 10, borderRadius: 30 , textDecorationLine:"underline" }}>
                            {this.props.totalAmount}
                        </Text>



                    </View>
                  
                </CardItem>
                <Button 
                    onPress = {() => {
                        this.props.clearCart()
                        GotoHome()}}
                    >
                        Checkout
                    </Button>
            </View>

        )
    }
}


const MapStateToProps = (cartReducer) => {



    const { items_in_cart, currentItem, totalAmount , products } = cartReducer;

    console.log("Updating cart acc.....", items_in_cart);

    return {
        products,
        items_in_cart,
        currentItem,
        totalAmount
    }


}

export default connect(MapStateToProps, { updateCart, delItem  , addToTotal , clearCart})(Cart);