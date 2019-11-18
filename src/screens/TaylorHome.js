import React from 'react';
import { View, Text, FlatList, Image } from 'react-native'
import { CardItem } from '../Common/CardItem';
import { connect } from 'react-redux';
import {fetchProductsUnStitched} from '../Redux/Actions';

class TaylorHome extends React.Component {

    state = {
        Orders: []
    }

    constructor(props) {
        super(props);
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
    }

    render() {
        return (
            <View style={{flex:1}}>
                
                
                            <CardItem>
                                 
                            <Text style={{fontSize : 20,textAlignVertical:'center', color: 'white',fontWeight:'normal',paddingHorizontal:50,backgroundColor:'#903DFF',opacity:1,borderRadius:10 }}>
                                         INCOMING GIGS
                                    </Text>
                            </CardItem>
                                    
                         
                            
                

                <FlatList
                    style={{ marginTop: 10 }}
                    data={this.props.unstitchedProducts}
                    renderItem={({ item }) => {
                         
                        return (
                            
                            
                             <CardItem>
                                  <View style={{ flex: 1, flexDirection: "row" }}>
                                    <View>
                                        <Image
                                            style={{ marginLeft:5, height: 130, width: 150, borderRadius: 10 }}
                                            source={{ uri: item.src }}
                                        />
                                    </View>
                                    <View style={{ flexDirection: 'row', marginLeft: 5, justifyContent: 'center' }}>
                                    <Text style={{fontSize : 13,textAlignVertical:'center', color: 'white',fontWeight:'normal',paddingHorizontal:20,backgroundColor:'#ff0000',opacity:1,borderRadius:50,marginTop:50,marginBottom:50 }}>
                                        ACCEPT
                                    </Text>
                                    <Text style={{fontSize : 13,textAlignVertical:'center', color: 'white',fontWeight:'normal',paddingHorizontal:20,marginLeft:10,backgroundColor:'#449629',opacity:1,borderRadius:50 ,marginTop:50,marginBottom:50}}>
                                        REJECT
                                    </Text>

                                        <View style={{ flexDirection: 'row' }}>



                                        </View>

                                    </View>


                                </View>
                            </CardItem>

                        )
                    }}
                />
                                <CardItem>
                                 
                                 <Text style={{fontSize : 20,textAlignVertical:'center', color: 'white',fontWeight:'normal',paddingHorizontal:50,backgroundColor:'#903DFF',opacity:1,borderRadius:10 }}>
                                              ACTIVE GIGS
                                         </Text>
                                 </CardItem>

                                       <FlatList
                    style={{ marginTop: 10 }}
                    data={this.props.unstitchedProducts}
                    renderItem={({ item }) => {
                         
                        return (
                            
                            
                             <CardItem>
                                  <View style={{ flex: 1, flexDirection: "row" }}>
                                    <View>
                                        <Image
                                            style={{ marginLeft:5, height: 130, width: 150, borderRadius: 10 }}
                                            source={{ uri: item.src }}
                                        />
                                    </View>
                                    <View style={{ flexDirection: 'column', marginLeft: 5, justifyContent: 'center' }}>
                                    <Text style={{fontSize : 14,textAlignVertical:'center', color: 'white',fontWeight:'normal',paddingHorizontal:20,marginLeft:10,backgroundColor:'#449629',opacity:1,borderRadius:0,marginTop:5,marginBottom:10,marginRight:120}}>
                                        Started : 17/11/2019
                                    </Text>
                                    <Text style={{fontSize : 14,textAlignVertical:'center', color: 'white',fontWeight:'normal',paddingHorizontal:20,marginLeft:10,backgroundColor:'#ff0000',opacity:1,borderRadius:0 ,marginTop:5,marginBottom:10,marginRight:120}}>
                                        Deadline : 18/12/2019
                                    </Text>
                                    <Text style={{fontSize : 16,textAlignVertical:'center', color: 'white',fontWeight:'normal',paddingHorizontal:20,marginLeft:10,backgroundColor:'#449629',opacity:1,borderRadius:50,marginTop:3,marginBottom:10,marginRight:120}}>
                                        Status : Inprogess
                                    </Text>

                                        <View style={{ flexDirection: 'row' }}>



                                        </View>

                                    </View>


                                </View>
                            </CardItem>

                        )
                    }}
                />  


            </View>
        )
    }
}


const MapStateToProps = ({ shop }) => {
    console.log("tailor", shop);
    const { unstitchedProducts } = shop;
    return {
        shop,
        unstitchedProducts
    }
}


export default connect(MapStateToProps,{fetchProductsUnStitched})(TaylorHome);